<template>
  <ClientOnly>
    <div class="border-card" @mouseenter="isFlipped = true" @mouseleave="isFlipped = false">
      <BorderBeam :size="405" :duration="20" :delay="10" :border-width="1" />
      <div class="card">
        <div class="card-wrapper">
          <div class="card-flip" :class="{ 'rotate-y-180': isFlipped }">
            <div class="front-card">
              <div>
                <Computer />
                <h2>{{ project.title }}</h2>
              </div>
            </div>
            <div class="back-card">
              <div class="card-wrapper">
                <p>{{ project.description }}</p>
                <NuxtLink :href="project.link" target="_blank" class="link group">
                  <span
                    class="translate-x-1.5 translate-y-1.5 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span>
                    <p>Ver projeto</p>
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup>
import { ref } from 'vue'
import BorderBeam from '@/components/InspiraUi/BorderBeam.vue'
import Computer from '@/components/Skills/Computer.vue'
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const isFlipped = ref(false)
</script>

<style scoped lang="scss">
.border-card {
  @apply relative md:shadow-2xl flex h-full w-full overflow-hidden bg-gradient-to-r from-[#9c40ff] from-10% to-[#42b883] dark:from-[#9c40ff] dark:to-[#42b883] perspective-1000 min-h-72;

  .card {
    @apply w-full rounded-lg p-px;

    .card-wrapper {
      @apply h-full dark:bg-zinc-900;

      .card-flip {
        @apply relative w-full h-full transition-transform duration-700 transform-style-3d;
      }
    }

    .front-card {
      @apply absolute w-full h-full backface-hidden flex items-center justify-center;

      div {
        @apply flex flex-col items-center gap-4 justify-center;
      }

      h2 {
        @apply text-xl xl:text-2xl text-white font-medium;
      }
    }

    .back-card {
      @apply absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center;

      .card-wrapper {
        @apply flex flex-col items-center gap-y-10 justify-center p-6;

        p:first-child {
          @apply text-white text-center md:text-lg;
        }
        p:last-child {
          @apply text-white font-medium text-center md:text-base;
        }
      }
      }

      .link {
        @apply outline-none relative inline-block;

        span:first-child {
          @apply absolute inset-0 bg-[#9c40ff];
        }

        span:last-child {
          @apply relative inline-block border-2 border-current px-8 py-3 tracking-widest text-wrap;
        }
      }
    }

  }


.perspective-1000 {
  perspective: 1000px;
}

.transform-style-3d {
  transform-style: preserve-3d;
}

.backface-hidden {
  backface-visibility: hidden;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}
</style>