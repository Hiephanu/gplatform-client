<template>
  <div class="max-h-full">
    <div class="flex flex-col text-center w-full p-8">
      <div class="flex justify-center items-center w-full h-full">
        <video autoplay loop muted class="w-[700px] sm:h-[400px] h-[200px] object-contain">
          <source :src="videoURL" type="video/mp4" />
        </video>
      </div>
      <span class="sm:text-xl text-xs my-6">
        The page you're looking for doesn't seem to exist
      </span>
      <UButton
        icon="i-heroicons-arrow-right-solid"
        size="sm"
        class="rounded-2xl px-4 py-3 max-w-[170px] mx-auto"
        color="primary"
        variant="solid"
        label="Go to Homepage"
        trailing
        @click="$router.push('/')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const videoURL = '/404.mp4';
</script>
