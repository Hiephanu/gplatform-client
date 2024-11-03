<template>
  <main class="flex min-h-screen flex-col items-center justify-center">
    <Header />
    <section class="mt-[72px] w-full flex-auto">
      <slot />
    </section>
    <Footer />
  </main>
</template>
