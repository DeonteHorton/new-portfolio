<template>
  <div class="container py-16 space-y-16">
    <!-- Header -->
    <div class="max-w-3xl mx-auto text-center space-y-4">
      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        About
        <span class="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Me
        </span>
      </h1>
      <p class="text-xl text-muted-foreground">
        Web Developer with a passion for creating innovative solutions
      </p>
    </div>

    <!-- Main Content -->
    <!-- <div class="flex gap-12 grid-cols-2"> -->
    <div class="grid md:grid-cols-2 gap-12 items-stretch">
      <!-- Profile Section -->
      <Card class="flex-1 overflow-hidden inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
        <CardHeader>
          <CardTitle class="text-xl">Background</CardTitle>
          <CardDescription>My journey in software development</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <p>
            I am a Web Developer currently working at Vectorworks, where I contribute to developing new features and enhancements for oue web site.
            My journey in tech began at Mississippi Coding Academy, where I built a strong foundation in web development principles
            and modern web technologies. Based in Greater Jackson area of Mississippi, I've been coding for 4+ years with a focus on full-stack web development.
          </p>
          <p>
            With my experience over the years, I've developed expertise in full-stack development,
            focusing on creating efficient, scalable applications using technologies like Laravel PHP and Vue.js. I'm passionate about writing clean code and
            implementing best practices in web development. Outside of coding, I enjoy soccer, video games, and spending time with family and friends.
          </p>
        </CardContent>
      </Card>

      <!-- Experience Timeline -->
      <Card class="flex-1 overflow-hidden inset-0 bg-gradient-to-l from-blue-500/5 to-purple-500/5">
        <CardHeader>
          <CardTitle class="text-xl">Experience</CardTitle>
          <CardDescription>Professional journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-6">
            <div v-for="(experience, index) in experiences" :key="index" class="relative pl-6 pb-6 border-l">
              <div class="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-blue-500"></div>
              <h3 class="font-medium text-base">{{ experience.role }}</h3>
              <p class="text-sm font-light text-muted-foreground mb-2">
                {{ experience.company }} • {{ experience.period }}
              </p>
              <p class="text-muted-foreground">{{ experience.description }}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <!-- Education -->
      <Card class="flex-1 overflow-hidden inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5">
        <CardHeader>
          <CardTitle class="text-xl">Education</CardTitle>
          <CardDescription>Academic background</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div v-for="(edu, index) in education" :key="index">
            <h3 class="font-medium text-base">{{ edu.degree }}</h3>
            <p class="text-sm text-muted-foreground">{{ edu.school }} • {{ edu.year }}</p>
          </div>
        </CardContent>
      </Card>

      <!-- Technical Skills -->
      <Card class="flex-1 overflow-hidden inset-0 bg-gradient-to-l from-blue-500/5 to-purple-500/5">
        <CardHeader>
          <CardTitle class="text-xl">Technical Skills</CardTitle>
          <CardDescription>Core competencies</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-4">
            <div v-for="(category, index) in technicalSkills" :key="index">
              <h3 class="font-medium text-base mb-2">{{ category.name }}</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="skill in category.skills"
                  :key="skill"
                  class="px-2 py-1 text-sm rounded-full bg-gray-300/20"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- Call to Action -->
    <div class="text-center">
      <p class="text-muted-foreground mb-4">Interested in working together?</p>
      <NuxtLink to="/contact">
        <Button class="rounded-full px-8">Get in Touch</Button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const experiences = [
  {
    role: 'Software Developer',
    company: 'Vectorworks',
    period: '2024 - Present',
    description: 'Developing and maintaining CAD and BIM software solutions at a global design software leader serving 650,000+ professionals in the architecture, landscape, and entertainment industries. Working with a collaborative team to build innovative tools that help designers realize their visions.'
  },
  {
    role: 'Software Developer',
    company: 'Netlink Voice',
    period: '2023',
    description: 'Developed and maintained web applications using Laravel PHP and Vue.js, implemented new features, and worked on improving user experience. Participated in agile development cycles and collaborated with cross-functional teams.'
  },
  {
    role: 'Full Stack Developer',
    company: 'Freelance',
    period: '2022 - 2023',
    description: 'Worked on multiple client projects using Laravel, Vue.js, and other modern web technologies. Built responsive websites and web applications with a focus on performance and user experience.'
  },
  {
    role: 'Student Developer',
    company: 'Mississippi Coding Academy',
    period: '2022',
    description: 'Completed intensive full-stack development training, working on various projects using modern web technologies. Gained hands-on experience with JavaScript, React, PHP, and database design.'
  }
]

const education = [
  {
    degree: 'Full Stack Development Certificate',
    school: 'Mississippi Coding Academy',
    year: '2019 - 2020'
  },
  {
    degree: 'High School Diploma',
    school: 'Wingfield High School',
    year: '2015 - 2019'
  }
]

const technicalSkills = [
  {
    name: 'Frontend Development',
    skills: ['Vue', 'NuxtJS', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Inertia.js']
  },
  {
    name: 'Backend Development',
    skills: ['PHP', 'Laravel', 'NodeJS', 'MySQL', 'RESTful APIs']
  },
  {
    name: 'DevOps',
    skills: ['Docker', 'Git', 'CI/CD (Buddy.works)', 'Linux']
  },
  {
    name: 'Tools',
    skills: ['Docker', 'GitHub', 'Zed/VS Code', 'MacOS/Windows/Linux (Ubuntu/Fedora)']
  },
  {
    name: 'Other',
    skills: ['Agile Methodologies', 'Team Collaboration', 'Problem Solving', 'Technical Documentation']
  }
]
</script>
