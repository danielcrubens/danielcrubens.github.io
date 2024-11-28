<template>
  <div class="w-full h-full flex flex-col justify-center items-center  bg-zinc-900" >
   <h1 class="font-bold text-6xl text-white">
      {{ props.title }}
    </h1>
    <p class="text-white font-medium text-center text-4xl mt-3">
      {{ props.description }}
    </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string
  description: string
}>()
</script>