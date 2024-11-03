<template>
  <div class="flex gap-8 flex-col lg:flex-row">
    <CommonSearch placeholder="Developer ..." search size="xl" class="grow" />
    <div class="flex gap-8 flex-wrap justify-center">
      <USelect
        v-model="teamOption"
        :options="teamOptions"
        size="xl"
        class="rounded-md min-w-[132px]"
      />
      <USelect
        v-model="genOption"
        :options="genOptions"
        size="xl"
        class="rounded-md min-w-[132px]"
      />
      <USelect
        v-model="levelOption"
        :options="levelOptions"
        size="xl"
        class="rounded-md min-w-[132px]"
      />
      <USelect
        v-model="sortOption"
        :options="sortOptions"
        size="xl"
        class="rounded-md min-w-[132px]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const teamOptions = ref(['All Teams'])
const genOptions = ref(['All Gens'])
const levelOptions = ref(['All Levels'])
const sortOptions = ref(['Sort By'])

const teamOption = ref(teamOptions.value[0])
const genOption = ref(genOptions.value[0])
const levelOption = ref(levelOptions.value[0])
const sortOption = ref(sortOptions.value[0])
</script>
