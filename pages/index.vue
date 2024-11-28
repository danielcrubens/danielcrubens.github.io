<template>
  <body class="bg-zinc-900 overflow-hidden">
      <header :class="{ open: isOpen }">
        <ButtonToggle 
          :is-open="isOpen" 
          @toggle="toggleNav" 
        />
      </header>

      <NavMenu 
        :is-open="isOpen" 
        @select="showSection"
      />
      <main class="overflow-hidden ">
          <Front v-if="!isOpen && activeSection === 0" :is-open="isOpen" />

        <Transition name="fade-blur-up" mode="out-in">
          <Skill v-if="!isOpen && activeSection === 1" :is-open="isOpen" />
        </Transition>

        <Transition name="fade-blur-up" mode="out-in">
          <Project v-if="!isOpen && activeSection === 2" :is-open="isOpen" />
        </Transition>
        
        <Transition name="fade-blur-up" mode="out-in">
          <Contact v-if="!isOpen && activeSection === 3" :is-open="isOpen" />
        </Transition>
      </main>
  </body>
</template>

<script setup>
import { ref } from 'vue';
import ButtonToggle from '../components/Button/Toggle.vue';
import NavMenu from '../components/Header/NavMenu.vue';

const isOpen = ref(false);
const activeSection = ref(0);

function toggleNav() {
  isOpen.value = !isOpen.value;
}

function showSection(index) {
  activeSection.value = index;
  isOpen.value = false;
}
</script>