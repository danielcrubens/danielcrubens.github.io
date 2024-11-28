<template>
  <div class="mt-8 flex justify-center space-x-4">
    <button
      v-for="category in categories"
      :key="category"
      @click="selectCategory(category)"
      :class="{
        'bg-zinc-900 border border-solid border-[#42b883]': selected === category,
        'bg-transparent text-white': selected !== category,
      }"
      class="py-1 px-4 tracking-widest shadow-2xl rounded-sm"
    >
      <h2 class="text-white text-lg font-medium">{{ category.toLowerCase() }}</h2>
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  categories: {
    type: Array,
    required: true,
    default: () => [],
  },
  selected: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['update:selected']);

const selectCategory = (category) => {
  emit('update:selected', category);
};
</script>

<style scoped>
/* Adicione estilos customizados, se necessário */
</style>
