<template>
  <section class="flex items-center justify-center h-screen">
    <Transition name="fade-blur-up" mode="out-in">
    <div v-if="!isOpen" class="md:w-10/12 w-11/12">
      <Navigation :categories="['api', 'vue', 'wordpress']" :selected="selectedContent"
        @update:selected="(newCategory) => (selectedContent = newCategory)" />
        <Transition name="zoom" mode="out-in">
        <Grid :key="selectedContent" :selected-content="selectedContent" />
      </Transition>
      </div>
    </Transition>
  </section>
</template>


<style scoped>
.zoom-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.zoom-enter-to {
  opacity: 1;
  transform: scale(1);
}

.zoom-enter-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.zoom-leave-from {
  opacity: 1;
  transform: scale(1);
}

.zoom-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.zoom-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
</style>



<script setup>
import { ref } from 'vue'
import Navigation from "@/components/Projects/Navigation.vue";
import Grid from "@/components/Projects/Grid.vue";

const selectedContent = ref('api');
</script>
