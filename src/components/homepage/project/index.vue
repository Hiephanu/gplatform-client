<template>
  <div class="my-16 hidden lg:block">
    <UContainer class="mb-8">
      <div class="leading-10">
        <div class="text-center">
          <CommonBrandText
            prefix="What"
            label="we do"
            class="text-2xl font-bold md:text-6xl"
          ></CommonBrandText>
        </div>
      </div>
    </UContainer>
    <UContainer class="grid grid-cols-2 gap-8">
      <div v-for="project in projectDescriptionList" :key="project.id">
        <HomepageProjectItem
          :icon="project.icon"
          :title="project.title"
          :content="project.content"
          :color="project.color"
        ></HomepageProjectItem>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const projectDescriptionList = ref([
  {
    id: 1,
    icon: 'i-heroicons-code-bracket',
    title: 'In House Product',
    content:
      'We work together to build an in-house product. We build website, app, and other type of software product. We learn about the entire product development process, from ideation to launch. We gain experience through working with a team to achieve a common goal.',
    color: 'red-500',
  },
  {
    id: 2,
    icon: 'i-heroicons-rectangle-group-16-solid',
    title: 'Technical Event',
    content:
      "Creating an event is a great way to contribute to your GDSC community and help your peers learn and grow. It's also a good opportunity to develop your leadership and organizational skills, and to network with other GDSC members and industry professionals.",
    color: 'green-500',
  },
  {
    id: 3,
    icon: 'i-simple-icons-google',
    title: 'Google Solution Challenge',
    content:
      'Build a solution to a local problem using Google technologies, in accordance with one or more of the United Nations 17 Sustainable Development Goals. Solution Challenge is open to members of Google Developer Student Clubs.',
    color: 'blue-500',
  },
  {
    id: 4,
    icon: 'i-heroicons-light-bulb',
    title: 'Startup Product',
    content:
      'We work together to build an in-house product. We build website, app, and other type of software product. We learn about the entire product development process, from ideation to launch. We gain experience through working with a team to achieve a common goal.',
    color: 'yellow-500',
  },
]);
</script>
