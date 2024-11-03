<template>
    <UCard>
        <div class="flex flex-row items-center gap-4 mb-4">
            <UIcon :name="props.icon" class="w-9 h-9" :class="color" ></UIcon>
            <h1 class="font-bold text-3xl">{{ props.title }}</h1>
        </div>
        <div>
            <p class="leading-6">{{ props.content }}</p>
        </div>
    </UCard>
</template>

<script setup lang="ts">
import type { ProductDescription } from '~/types/recruitment/box';

const props = withDefaults(defineProps<ProductDescription>(), {
    color: 'primary',
});

const color = computed(() => {
    return `text-${props.color}`
})

</script>