<template>
  <div class="container py-16 space-y-16">
    <!-- Header -->
    <div class="max-w-3xl mx-auto text-center space-y-4">
      <h1 class="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        About
        <span class="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
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
      <Card class="flex-1 overflow-hidden inset-0 bg-linear-to-r from-blue-500/5 to-purple-500/5">
        <CardHeader>
          <CardTitle class="text-xl">Background</CardTitle>
          <CardDescription>My journey in web development</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <p>
            I am a Web Developer currently working at Vectorworks, where I contribute to developing new features and enhancements for our web site.
            My journey in tech began at Mississippi Coding Academy located in Jackson, Mississippi, where I built a strong foundation in web development principles
            and modern web technologies. Based in Greater Jackson area of Mississippi, I've been coding for 4+ years with a focus on full-stack web development.
          </p>
          <p>
            With my experience over the years, I've developed an extensive amount of knowledge in full-stack web development,
            focusing on creating efficient, scalable applications using technologies like Laravel/PHP and Nuxt/Vue.js. I'm love writing clean code and
            invoking best practices in web development, with the goal of delivering high-quality, maintainable and modular code while shipping to production in a timely manner.
          </p>
          <h1 class="text-xl font-medium">More About me</h1>
          <p>
            Outside of coding, I enjoy soccer, video games, and spending time with family and friends. I'm currently learning new technologies and frameworks to stay up-to-date with the latest trends in web development. I'm currently deepening my skills in web development and software engineering principles and one of the technologies I'm learning is Golang.
          </p>
        </CardContent>
      </Card>

      <!-- Experience Timeline -->
      <Card class="flex-1 overflow-hidden inset-0 bg-linear-to-l from-blue-500/5 to-purple-500/5">
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
              <div class="flex flex-wrap gap-2 mt-3">
                   <span
                     v-for="tech in experience.technologies"
                     :key="tech"
                     class="px-2 py-1 text-sm rounded-full bg-muted pill"
                   >
                     {{ tech }}
                   </span>
                 </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <!-- Education -->
      <Card class="flex-1 overflow-hidden inset-0 bg-linear-to-r from-blue-500/5 to-purple-500/5">
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
      <Card class="flex-1 overflow-hidden inset-0 bg-linear-to-l from-blue-500/5 to-purple-500/5">
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
                  class="px-2 py-1 text-sm rounded-full bg-muted pill"
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
      <p class="text-muted-foreground mb-4">Want to get in touch?</p>
      <NuxtLink to="/contact">
        <Button class="group relative overflow-hidden rounded-full px-6 h-12 transition-transform hover:scale-105">
          <span class="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-600"></span>
          <span class="relative flex items-center justify-center gap-2">
            Contact Me
          </span>
        </Button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">

useSeoMeta({
  title: "Deonte | About me",
  ogTitle: "Deonte | About me",
  description: "Learn more about me, my experiences, and my journey.",
  ogDescription: "Learn more about me, my experiences, and my journey.",
  ogImage: "/pfp.jpg",
  twitterCard: "summary",
})

const experiences = [
  {
    role: 'Web Developer',
    company: 'Vectorworks',
    period: 'July 2023 - Present',
    description: '',
    technologies: ['Laravel', 'PHP', 'VueJS', 'NuxtJS', 'JavaScript', 'Ant-Design vue', 'HTML5', 'CSS3', 'Buddy.works ( CI/CD )', 'Bitbucket', 'Github']
  },
  {
    role: 'Full Stack Web Developer',
    company: 'Netlink Voice',
    period: 'July 2022 - June 2023',
    description: 'Took ownership of multiple Laravel projects, working closely with cross-functional teams to understand what the business actually needed and consistently delivered solutions that went beyond expectations, while continuously learning emerging web development technologies to stay sharp and improve my technical skills.',
    technologies: ['Laravel', 'PHP', 'VueJS', 'JavaScript', 'Tailwind CSS', 'PrimeVue', 'HTML5', 'Redis', 'Vultr', 'DigitalOcean', 'Gitlab']
  },
  {
    role: 'Junior Full Stack Web Developer',
    company: 'Netlink Voice',
    period: 'August 2020 - July 2022',
    description: 'Enhanced application performance and user experience through strategic API integrations that reduced documentation workflow time by 65%, conducted comprehensive project assessments to identify optimization opportunities, and expanded UI functionality within the OpenSips Open Source framework to support enhanced networking capabilities.',
    technologies: ['Laravel', 'PHP', 'VueJS', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vultr', 'Gitlab']
  },
  {
    role: 'Student Web Developer',
    company: 'Mississippi Coding Academy',
    period: 'June 2019 - May 2020',
    description: 'Completed intensive full-stack development training, working on various projects using modern web technologies. Gained hands-on experience with HTML, CSS, Bootstrap, 960-Grid,  JavaScript, ReactJS, and MySQL.',
    technologies: ['HTML', 'CSS', 'Bootstrap', '960-Grid', 'JavaScript', 'ReactJS', 'MySQL', 'Github', 'Codepen']
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
