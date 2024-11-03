<template>
  <UInput
    v-model="searchData"
    icon="i-heroicons-magnifying-glass"
    :size="props.size ? props.size : undefined"
    class="rounded-full"
    :disabled="loading"
    :trailing="false"
    :placeholder="props.placeholder"
    :ui="{ rounded: 'rounded-full', icon: { trailing: { pointer: '' } } }"
    @keyup.enter="handleSearch"
  >
    <template #trailing>
      <div class="flex gap-2">
        <USelect
          v-if="props.filterOption"
          v-model="filterOption"
          :options="props.filterOption"
          :disabled="loading"
          variant="none"
          size="2xs"
          option-attribute="name"
        />
        <UButton
          v-if="props.search"
          :disabled="!!!searchData"
          :loading="loading"
          size="2xs"
          label="Search"
          class="cursor-pointer rounded-full"
          @click="handleSearch"
        />
      </div>
    </template>
  </UInput>
</template>

<script setup lang="ts">
import type { CommonSearch } from '~/types/component/search';

const emit = defineEmits<{
  (e: 'search', searchData: string | undefined, filterOption?: string): void;
}>();

const props = withDefaults(defineProps<CommonSearch>(), {
  search: false,
  placeholder: 'Search',
  size: 'xl',
  loading: false,
});
const filterOption = ref('');

const searchData = ref();

onMounted(() => {
  if (props.filterOption) {
    filterOption.value = props.filterOption[0];
  }
});

const loading = computed(() => props.loading);

const handleSearch = () => {
  if (searchData.value && filterOption.value) {
    emit('search', searchData.value, filterOption.value);
    return;
  }
  emit('search', searchData.value);
};
</script>
