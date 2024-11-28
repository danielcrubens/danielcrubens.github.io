<template>
  <div class="flex items-center justify-center h-screen">
    <div ref="containerRef" class="relative flex h-[500px] w-full bg items-center justify-center overflow-hidden">
      <div class="flex size-full h-auto md:w-10/12 w-11/12 flex-col items-stretch justify-between gap-10">
        <div class="flex flex-row items-center justify-between">
          <div ref="html" class="icon">
            <Html title="Html5" />
          </div>
          <div ref="css" class="icon">
            <Css title="Css3" />
          </div>
        </div>
        <div class="flex flex-row items-center justify-between">
          <div ref="javascript" class="icon">
            <JavaScript title="JavaScript" />
          </div>
          <div ref="sass" class="icon ">
            <Sass title="Sass" />
          </div>
        </div>
        <div class="flex flex-row items-center justify-between">
          <div ref="vue" class="icon">
            <Vue title="Vue" />
          </div>
          <div ref="code"
            class="shadow-[0_0_15px_1px_rgba(0,0,0,0.8)] shadow-[#42b883]  z-10 flex size-16 items-center justify-center rounded-full  bg-zinc-900 p-3 ">
            <Code title="Code" />
          </div>
          <div ref="nuxt" class="icon">
            <Nuxt title="Nuxt" />
          </div>
        </div>
        <div class="flex flex-row items-center justify-between">
          <div ref="tailwind" class="icon">
            <Tailwind title="Tailwind" />
          </div>
          <div ref="git" class="icon">
            <Git title="Git" />
          </div>
        </div>
        <div class="flex flex-row items-center justify-between">
          <div ref="firebase" class="icon">
            <FireBase title="Firebase" />
          </div>
          <div ref="prisma" class="icon">
            <Prisma title="Prisma" />
          </div>
        </div>
      </div>

      <AnimatedBeam :container-ref="containerRef" :from-ref="html" :to-ref="code" :curvature="-10" :end-y-offset="6" />
      <AnimatedBeam :container-ref="containerRef" :from-ref="css" :to-ref="code" :curvature="-10" :end-y-offset="10"
        :reverse="true" />
      <AnimatedBeam :container-ref="containerRef" :from-ref="javascript" :to-ref="code" :curvature="-75"
        :end-y-offset="-10" />
      <AnimatedBeam :container-ref="containerRef" :from-ref="vue" :to-ref="code" />
      <AnimatedBeam :container-ref="containerRef" :from-ref="tailwind" :to-ref="code" :curvature="75"
        :end-y-offset="10" />
      <AnimatedBeam :container-ref="containerRef" :from-ref="nuxt" :to-ref="code" :reverse="true" />
      <AnimatedBeam :container-ref="containerRef" :from-ref="git" :to-ref="code" :curvature="75" :end-y-offset="10"
        :reverse="true" />
      <AnimatedBeam :container-ref="containerRef" :from-ref="sass" :to-ref="code" :curvature="-75" :end-y-offset="-10"
        :reverse="true" />
      <AnimatedBeam :container-ref="containerRef" :from-ref="firebase" :to-ref="code" />
      <AnimatedBeam :container-ref="containerRef" :from-ref="prisma" :to-ref="code" :reverse="true" />
    </div>
  </div>
</template>

<style>
.icon {
  @apply z-10 flex size-14 items-center justify-center rounded-full border-2 border-[#7D7467] bg-zinc-900 p-3;
}
</style>

<script setup>
import AnimatedBeam from "@/components/InspiraUi/AnimatedBeam.vue";
import { ref } from "vue";
import Html from "./Skills/Html.vue";
import Css from "./Skills/Css.vue";
import JavaScript from "./Skills/JavaScript.vue";
import Sass from "./Skills/Sass.vue";
import Vue from "./Skills/Vue.vue";
import Nuxt from "./Skills/Nuxt.vue";
import Tailwind from "./Skills/Tailwind.vue";
import Git from "./Skills/Git.vue";
import FireBase from "./Skills/FireBase.vue";
import Prisma from "./Skills/Prisma.vue";
import Code from "./Skills/Code.vue";

const containerRef = ref(null);
const html = ref(null);
const css = ref(null);
const javascript = ref(null);
const vue = ref(null);
const tailwind = ref(null);
const code = ref(null);
const nuxt = ref(null);
const git = ref(null);
const sass = ref(null);
const firebase = ref(null);
const prisma = ref(null);
</script>
