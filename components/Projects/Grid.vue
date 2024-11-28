<template>
  <section class="flex justify-center items-between pt-12 xl:pt-auto xl:py-24">
    <div class="text-center w-full">
      <Swiper :modules="[SwiperPagination, SwiperNavigation, SwiperAutoplay]" 
        :pagination="{ clickable: true }" 
        :space-between="80" 
        :loop="false" 
        :breakpoints="{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024:{slidesPerView:2},
            1280: { slidesPerView: 3 },
          }" @swiper="onSwiper" @slideChange="onSlideChange">
        <SwiperSlide v-for="project in currentProjects" :key="project.title">
          <Card :project="project" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Card from "@/components/Projects/Card.vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const props = defineProps({
  selectedContent: {
    type: String,
    required: true,
  },
});
// Swiper methods
const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

const onSlideChange = () => {
  if (swiperInstance.value) {
    console.log("Slide changed:", swiperInstance.value.realIndex);
  }
};

// Expose Swiper modules
const SwiperPagination = Pagination;
const SwiperNavigation = Navigation;
const SwiperAutoplay = Autoplay;
const apiProjects = [
  {
    title: 'Restcountries',
    description: 'Obtendo dados do país via API Restcountries e imagem correspondente via API Unsplash',
    link: 'https://danielcrubens.github.io/country-api/'
  },
  {
    title: 'Devfinder',
    description: 'Consumindo a API de usuários do GitHub para extrair dados do perfil e exibi-los',
    link: 'https://gituser-api.vercel.app/'
  },
  {
    title: 'FipeVue',
    description: 'Acesso a visualização das informações de veículos da tabela FIPE através de sua API',
    link: 'https://fipe-vue.netlify.app/'
  }
];

const vueProjects = [
  {
    title: 'Planner',
    description: 'Aplicação voltada para montar planos de viagem com amigos',
    link: 'https://planner-vue.vercel.app/'
  },
  {
    title: 'Nuxt.Q',
    description: 'Plataforma para perguntas anônimas, com sala gerenciada por senha',
    link: 'https://nuxtq.netlify.app/'
  },
  {
    title: 'In.Orbit',
    description: 'Gerenciador de metas pessoais',
    link: 'https://in-orbit-vue.vercel.app/'
  }
];

const wordpressProjects = [
  {
    title: 'BeeforPlay',
    description: 'Site institucional, especializado em oferecer soluções para gestão de pessoas e equipes',
    link: 'https://play.beefor.io/'
  },
  {
    title: 'Cadmus',
    description: 'Site Institucional, soluções em TI, apoiando na consolidação da Cultura Digital',
    link: 'https://cadmus.com.br/'
  },
  {
    title: 'CadmusPlay',
    description: 'Site institucional, especializado em facilitar contratações e gestão de profissionais de TI',
    link: 'https://cadmusplay.com/'
  }
];

const projectsMapping = {
  api: apiProjects,
  vue: vueProjects,
  wordpress: wordpressProjects,
};

const currentProjects = computed(() => projectsMapping[props.selectedContent] || apiProjects);


</script>

<style scoped lang="scss">
:deep(.swiper-pagination-bullet) {
  @apply bg-[#42b883] opacity-50 ;
}
:deep(.swiper-pagination-bullet-active) {
  @apply bg-white opacity-100;
}
:deep(.swiper-pagination) {
  @apply relative mt-11; 
}
</style>