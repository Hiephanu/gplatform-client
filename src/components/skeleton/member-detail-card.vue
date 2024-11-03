<template>
  <div class="flex w-[200px] flex-col items-center justify-between gap-3 rounded-xl sm:gap-5">
    <div class="flex w-[100px] flex-col items-center justify-between gap-5 sm:w-[200px]">
      <USkeleton class="h-[100px] w-full rounded-full sm:h-[200px]" />
      <div class="flex w-full flex-col items-center gap-3 sm:gap-4">
        <USkeleton class="h-3 w-full rounded-full sm:h-5" />
        <USkeleton class="h-2 w-3/5 rounded-full sm:h-3" />
      </div>
      <USkeleton class="h-6 w-3/5 rounded-md sm:h-8" />
    </div>

    <hr class="w-full" />

    <h2 class="font-bold">Timeline Activities</h2>
    <div class="flex w-full flex-col items-center gap-2">
      <USkeleton class="h-3 w-3/5 rounded-full" />
      <USkeleton class="h-3 w-4/5 rounded-full" />
    </div>

    <hr class="w-full" />

    <div class="flex w-4/5 justify-between">
      <USkeleton v-for="n in 4" :key="n" class="h-7 w-7 rounded-full" />
    </div>
  </div>
</template>
