<template>
  <div
    class="flex w-[132px] flex-col items-center justify-between gap-3 rounded-xl border border-gray-300 p-4 sm:w-[264px] sm:gap-5 sm:p-8"
  >
    <USkeleton class="h-[100px] w-full rounded-full sm:h-[200px]" />
    <div class="flex w-full flex-col items-center gap-3 sm:gap-4">
      <USkeleton class="h-3 w-full rounded-full sm:h-5" />
      <USkeleton class="h-2 w-3/5 rounded-full sm:h-3" />
    </div>
    <USkeleton class="h-6 w-3/5 rounded-md sm:h-8" />
  </div>
</template>
