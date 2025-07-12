<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div class="grid gap-6 sm:grid-cols-2">
      <div class="space-y-2">
        <label for="name" class="text-sm font-medium">Name</label>
        <input
          id="name"
          v-model="form.name"
          type="text"
          required
          class="w-full px-3 py-2 rounded-md border bg-background"
          :disabled="loading"
          :class="{ 'border-destructive': errors.name }"
        />
        <p v-if="errors.name" class="text-sm text-destructive">{{ errors.name }}</p>
      </div>

      <div class="space-y-2">
        <label for="email" class="text-sm font-medium">Email</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          required
          class="w-full px-3 py-2 rounded-md border bg-background"
          :disabled="loading"
          :class="{ 'border-destructive': errors.email }"
        />
        <p v-if="errors.email" class="text-sm text-destructive">{{ errors.email }}</p>
      </div>
    </div>

    <div class="space-y-2">
      <label for="message" class="text-sm font-medium">Message</label>
      <textarea
        id="message"
        v-model="form.message"
        required
        rows="5"
        class="w-full px-3 py-2 rounded-md border bg-background"
        :disabled="loading"
        :class="{ 'border-destructive': errors.message }"
      ></textarea>
      <p v-if="errors.message" class="text-sm text-destructive">{{ errors.message }}</p>
    </div>

    <!-- Honeypot field for spam protection (hidden) -->
    <input
      v-model="form.website"
      type="text"
      name="website"
      tabindex="-1"
      autocomplete="off"
      style="position: absolute; left: -9999px; opacity: 0;"
    />

    <Button type="submit" class="w-full" :disabled="loading || !isFormValid">
      <Icon v-if="loading" name="lucide:loader-2" class="h-4 w-4 mr-2 animate-spin" />
      {{ loading ? 'Sending...' : 'Send Message' }}
    </Button>

    <!-- Success/Error Messages -->
    <div v-if="status" :class="[
      'p-4 rounded-md text-sm',
      status.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-destructive/10 text-destructive'
    ]">
      {{ status.message }}
    </div>
  </form>
</template>

<script setup lang="ts">
import { contactFormSchema, type ContactFormData } from '~/types/contact'

interface Status {
  type: 'success' | 'error'
  message: string
}

const emit = defineEmits<{
  (e: 'submit', data: ContactFormData): void
}>()

const form = reactive<ContactFormData>({
  name: '',
  email: '',
  message: '',
  website: ''
})

const loading = ref(false)
const status = ref<Status | null>(null)
const errors = ref<Partial<Record<keyof ContactFormData, string>>>({})

const isFormValid = computed(() => {
  const result = contactFormSchema.safeParse(form)
  return result.success && !form.website // website field should be empty (honeypot)
})

const validateField = (field: keyof ContactFormData) => {
  // Only validate if the form is not in a successful state
  if (status.value?.type === 'success') return
  
  const result = contactFormSchema.safeParse(form)
  if (!result.success) {
    const fieldError = result.error.errors.find(err => err.path[0] === field)
    if (fieldError) {
      errors.value[field] = fieldError.message
    } else {
      delete errors.value[field]
    }
  } else {
    delete errors.value[field]
  }
}

const validateForm = () => {
  const result = contactFormSchema.safeParse(form)
  if (!result.success) {
    errors.value = {}
    result.error.errors.forEach(err => {
      const field = err.path[0] as keyof ContactFormData
      errors.value[field] = err.message
    })
    return false
  }
  errors.value = {}
  return true
}

watch(() => form.name, () => validateField('name'))
watch(() => form.email, () => validateField('email'))
watch(() => form.message, () => validateField('message'))

const handleSubmit = async () => {
  if (!validateForm()) return
  
  // Check honeypot field
  if (form.website) {
    status.value = {
      type: 'error',
      message: 'Spam detected. Please try again.'
    }
    return
  }

  loading.value = true
  status.value = null

  try {
    const { data, error } = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email,
        message: form.message
      }
    })

    if (error) {
      throw new Error(error || 'Failed to send message')
    }

    emit('submit', { ...form })

    // Reset form and clear errors after successful submission
    Object.assign(form, {
      name: '',
      email: '',
      message: '',
      website: ''
    })
    errors.value = {}

    status.value = {
      type: 'success',
      message: 'Message sent successfully! I\'ll get back to you soon.'
    }

    // Clear success message after 5 seconds
    setTimeout(() => {
      status.value = null
    }, 5000)
  } catch (error: any) {
    status.value = {
      type: 'error',
      message: error.message || 'Failed to send message. Please try again.'
    }
  } finally {
    loading.value = false
  }
}
</script>
