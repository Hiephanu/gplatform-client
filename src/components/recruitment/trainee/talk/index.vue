<template>
  <div class="mb-16 hidden md:block">
    <UContainer class="mb-16">
      <div class="leading-10">
        <div class="text-center">
          <CommonBrandText
            label="Trainee_Alumni"
            suffix="talk"
            class="text-2xl font-bold md:text-6xl"
          ></CommonBrandText>
        </div>
      </div>
    </UContainer>
    <UContainer>
      <div class="flex flex-row items-center justify-center gap-16 rounded-lg">
        <div class="relative">
          <div class="absolute bottom-0 z-0 h-44 w-full bg-red-400"></div>
          <div class="relative z-10 h-72 w-72">
            <NuxtImg
              src="/trainee.png"
              alt="/trainee.png"
              class="h-full w-full object-contain"
            ></NuxtImg>
          </div>
        </div>
        <div class="flex basis-96 flex-col gap-4">
          <div>
            <p class="leading-6">
              Becoming a part of GDSC HANU as a trainee is an over-the-moon experience! Here, I've
              gained valuable knowledge and technical skills which are crucial to be ready for
              real-world projects thanks to the dedicated guidance of passionate mentors. Apart from
              professional expertise, this is a place where you can express your own opinion, and
              personality with the respect of other member
            </p>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-red-400">Dang Van Phong</h1>
            <p>Backend Developer</p>
            <p>Technical Trainee Alumni 23’ 24’</p>
          </div>
        </div>
      </div>
    </UContainer>
  </div>
</template>
