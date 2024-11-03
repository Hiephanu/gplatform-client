<template>
  <UContainer
    class="my-16 grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2"
    :ui="{ constrained: 'lg:max-w-7xl sm:max-w-xl max-w-sm' }"
  >
    <div class="flex flex-col items-center justify-center lg:items-start lg:justify-start">
      <CommonBrandText
        prefix="Using various"
        label="technology"
        suffix="to build good product"
        class="text-center text-2xl font-bold sm:text-4xl lg:text-start"
      ></CommonBrandText>
      <p class="my-4 text-center text-sm sm:text-2xl lg:text-start">
        Harnessing the power of diverse technologies to create exceptional products that solve
        problems and delight users.
      </p>
      <UButton
        label="Join with us"
        icon="i-heroicons-arrow-right-16-solid"
        :trailing="true"
        variant="solid"
        size="xl"
        class="rounded-full"
        @click="$router.push('/recruitment')"
      ></UButton>
    </div>
    <div class="grid grid-cols-5 gap-4 sm:gap-5">
      <div v-for="techstack in techstackList" :key="techstack.id">
        <div >
          <NuxtLink target="_blank" :to="techstack.url">
            <UIcon class="w-10 h-10 lg:w-20 lg:h-20" :name="techstack.logo"></UIcon>
          </NuxtLink>
        </div>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const techstackList = ref([
  {
    id: '1',
    logo: 'i-logos-html-5',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    id: '2',
    logo: 'i-logos-css-3',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    id: '3',
    logo: 'i-logos-tailwindcss-icon',
    url: 'https://tailwindcss.com/',
  },
  {
    id: '4',
    logo: 'i-logos-javascript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    id: '5',
    logo: 'i-logos-typescript-icon',
    url: 'https://www.typescriptlang.org/',
  },
  {
    id: '6',
    logo: 'i-logos-vue',
    url: 'https://vuejs.org/',
  },
  {
    id: '7',
    logo: 'i-logos-nuxt-icon',
    url: 'https://nuxt.com/',
  },
  {
    id: '8',
    logo: 'i-logos-react',
    url: 'https://react.dev/',
  },
  {
    id: '9',
    logo: 'i-logos-nextjs-icon',
    url: 'https://nextjs.org/',
  },
  {
    id: '10',
    logo: 'i-logos-pinia',
    url: 'https://pinia.vuejs.org/',
  },
  {
    id: '11',
    logo: 'i-logos-supabase-icon',
    url: 'https://supabase.com/',
  },
  {
    id: '12',
    logo: 'i-logos-nodejs-icon',
    url: 'https://nodejs.org',
  },
  {
    id: '13',
    logo: 'i-logos-java',
    url: 'https://www.java.com/',
  },
  {
    id: '14',
    logo: 'i-logos-spring-icon',
    url: 'https://spring.io/',
  },
  {
    id: '15',
    logo: 'i-logos-mysql-icon',
    url: 'https://www.mysql.com/',
  },
  {
    id: '16',
    logo: 'i-logos-mongodb-icon',
    url: 'https://www.mongodb.com/',
  },
  {
    id: '17',
    logo: 'i-logos-flutter',
    url: 'https://flutter.dev/',
  },
  {
    id: '18',
    logo: 'i-logos-android-icon',
    url: 'https://www.android.com/',
  },
  {
    id: '19',
    logo: 'i-logos-yarn',
    url: 'https://classic.yarnpkg.com/',
  },
  {
    id: '20',
    logo: 'i-logos-github-icon',
    url: 'https://github.com/',
  },
]);
</script>
