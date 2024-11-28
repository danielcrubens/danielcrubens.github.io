<template>
  <nav :class="{ 'hidden': !isOpen }" class="h-screen">
    <Transition name="fade-blur-up" mode="out-in">
      <ul v-if="isOpen" class="flex flex-col md:flex-row mx-auto items-center justify-center space-y-4 md:space-y-0 md:space-x-9 h-screen">
        <li v-for="(section, index) in sections" :key="index"
          class="text-white hover:text-opacity-85 transition duration-300 ease-in-out text-2xl md:text-3xl xl:text-4xl font-bold cursor-pointer"
          @click="selectSection(index)">
          {{ section }}
          <span class="hover-line"></span>
        </li>
      </ul>
    </Transition>
  </nav>
</template>


<style scoped lang="scss">
li {
  position: relative;
  text-align: center;

  .hover-line {
    content: "";
    position: absolute;
    width: 100%;
    height: .15rem;
    bottom: -0.43rem;
    left: 0;
    background: linear-gradient(270deg, #42b883 0%, #17161d 100%);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.5s cubic-bezier(0.86, 0, 0.07, 1);
  }

  &:hover {
    .hover-line {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
}

</style>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['select']);

const sections = ['Front-end', 'Skills', 'Projetos', 'Contatos'];

function selectSection(index) {
  emit('select', index);
}
</script>