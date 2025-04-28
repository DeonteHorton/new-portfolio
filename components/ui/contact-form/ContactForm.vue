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
        />
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
        />
      </div>
    </div>

    <div class="space-y-2">
      <label for="subject" class="text-sm font-medium">Subject</label>
      <input
        id="subject"
        v-model="form.subject"
        type="text"
        required
        class="w-full px-3 py-2 rounded-md border bg-background"
        :disabled="loading"
      />
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
      ></textarea>
    </div>

    <Button type="submit" class="w-full" :disabled="loading">
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
interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface Status {
  type: 'success' | 'error'
  message: string
}

const emit = defineEmits<{
  (e: 'submit', data: FormData): void
}>()

const form = reactive<FormData>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const loading = ref(false)
const status = ref<Status | null>(null)

const handleSubmit = async () => {
  loading.value = true
  status.value = null

  try {
    // Send data to the API
    const { data, error } = await useFetch('http://localhost:8081/api/contact', {
      method: 'POST',
      body: { ...form }
    })

    // Handle errors from API
    if (error.value) {
      throw new Error(error.value?.message || 'Failed to send message')
    }

    // Emit the form data to parent component for any additional handling
    emit('submit', { ...form })

    // Reset form after successful submission
    Object.assign(form, {
      name: '',
      email: '',
      subject: '',
      message: ''
    })

    status.value = {
      type: 'success',
      message: data.value?.message || 'Message sent successfully! I\'ll get back to you soon.'
    }
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
