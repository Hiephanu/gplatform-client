<template>
    <div>
        <p class="text-sm mb-1 text-gray-600">GDSC HANU Contribute Point</p>
        <h5 class="text-3xl mb-4 text-gray-950 font-bold">{{ memberPoint }}</h5>
        <div class="bg-gray-100 mb-8 rounded-md h-[100px] w-[700px]"></div>
        <div>
            <h5 class="text-2xl mb-4 text-gray-950">Certificate and Award</h5>
            <div class="grid gap-4 grid-cols-5">
                <MembersCert v-for="item in certificateList" :key="item.id" :cert="item"></MembersCert>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Certificate } from '~/types/members/detail/cert';

const memberPoint = ref(3000);
const certificateList = ref<Certificate[]>([
    {
        id: 1,
        title: 'Core Team 23’ 24’',
        img: '/cert.svg',
        description: 'This is the GDSC Certificate',
        date: '20.10.2024'
    },
    {
        id: 2,
        title: 'Core Team 23’ 24’',
        img: '  /empty.svg',
        description: 'This is the GDSC Certificate',
        date: '20.10.2024'
    },
]);
</script>
