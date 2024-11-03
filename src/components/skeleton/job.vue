<template>
  <UCard class="flex flex-col p-4">
    <div class="flex h-6 items-center gap-2">
      <USkeleton class="h-4 grow rounded-full" />
      <USkeleton class="h-6 w-10 rounded-md" />
    </div>
    <div class="mt-4 w-full">
      <USkeleton class="h-5 w-full rounded-full py-2" />
      <div class="mt-4">
        <USkeleton class="h-4 w-full rounded-full" />
        <USkeleton class="mt-2 h-4 w-2/3 rounded-full" />
      </div>
    </div>
  </UCard>
</template>
