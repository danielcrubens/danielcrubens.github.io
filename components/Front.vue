<template>
  <div class="flex items-center justify-center h-screen flex-col">
    <Transition name="fade-blur-up" mode="out-in">
      <h1 v-if="!isOpen && showFirstText" key="firstText" class="text-2xl md:text-4xl xl:text-5xl text-center font-bold text-white">
        Entusiasta por tecnologias front-end
      </h1>
    </Transition>
    <Transition name="fade-blur-up" mode="out-in">
      <h2 v-if="!isOpen && showSecondText" key="secondText" class="text-2xl md:text-4xl xl:text-5xl text-center font-bold text-white">
        Curioso em ux/ui
      </h2>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const showFirstText = ref(false)
const showSecondText = ref(false)

const startAnimations = () => {
  showFirstText.value = false
  showSecondText.value = false

  setTimeout(() => {
    showFirstText.value = true
  }, 130)

  setTimeout(() => {
    showSecondText.value = true
  }, 230)
}

onMounted(startAnimations)

watch(() => props.isOpen, (newIsOpen) => {
  if (!newIsOpen) {
    startAnimations()
  }
})
</script>

<style>
.fade-blur-up-enter-from {
  opacity: 0;
  transform: translateY(50px);
  filter: blur(20px);
}

.fade-blur-up-enter-to {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

.fade-blur-up-enter-active {
  transition: opacity 0.7s ease, transform 0.7s ease, filter 0.7s ease;
}

.fade-blur-up-leave-from {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

.fade-blur-up-leave-to {
  opacity: 0;
  transform: translateY(50px);
  filter: blur(20px);
}

.fade-blur-up-leave-active {
  transition: opacity 0.7s ease, transform 0.7s ease, filter 0.7s ease;
}
</style>