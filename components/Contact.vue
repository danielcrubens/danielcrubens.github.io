<template>
  <div class="flex items-center justify-center h-screen">
    <div class="inline-flex">
      <NuxtLink href="https://github.com/danielcrubens" aria-label="Github" target="blank">
        <div class="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
            <Github />
          </span>
        </div>
      </NuxtLink>
      <NuxtLink href="https://br.linkedin.com/in/danielcrubens" aria-label="LinkedIn" target="blank">
        <div class="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
            <Linkedin />
          </span>
        </div>
      </NuxtLink>
      <NuxtLink
        href="https://wa.me/5515996561043?text=Olá Daniel.%20Eu vi o seu portifólio,%20e quero saber mais sobre seus projetos."
        aria-label="Whatsapp" target="blank">
        <div class="layer">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
            <Watsapp />
          </span>

        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$white: #fafafa;
$linkedin: #007fb1;
$whatsapp: #25d366;

a {
  margin: 0 1.4rem;
  text-decoration: none;
  color: $white;
  display: block;
  position: relative;

  .layer {
    width: 3.43rem;
    height: 3.43rem;
    transition: transform 0.3s;

    span {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      border: 1px solid $white;
      border-radius: 0.31rem;
      transition: all 0.3s;
    }

    span.fab {
      font-size: 1.87rem;
      line-height: 3.43rem;
      text-align: center;
    }
  }

  &:hover {
    .layer {
      transform: rotate(-35deg) skew(20deg);

      span {
        &:nth-child(1) {
          opacity: 0.2;
        }

        &:nth-child(2) {
          opacity: 0.4;
          transform: translate(0.31rem, -0.31rem);
        }

        &:nth-child(3) {
          opacity: 0.6;
          transform: translate(0.62rem, -0.62rem);
        }

        &:nth-child(4) {
          opacity: 0.8;
          transform: translate(0.93rem, -0.93rem);
        }

        &:nth-child(5) {
          opacity: 1;
          transform: translate(1.25rem, -1.25rem);
        }
      }
    }

    &:nth-child(1) {
      .layer {
        span {
          box-shadow: -0.06 0.06 3px $white;
        }
      }
    }

    &:nth-child(2) {
      .layer {
        span {
          box-shadow: -0.06rem 0.06rem 0.18rem $linkedin;
          color: $linkedin;
          border-color: $linkedin;
        }
      }
    }

    &:nth-child(3) {
      .layer {
        span {
          box-shadow: -0.06rem 0.06rem 0.18rem $whatsapp;
          color: $whatsapp;
          border-color: $whatsapp;
        }
      }
    }

    .text {
      bottom: -2.18rem;
      opacity: 1;
    }
  }

  &:nth-child(1) {
    .layer {
      span {
        color: $white;
        border-color: $white;
      }
    }

    .text {
      color: $white;
      border-color: $white;
    }
  }

  &:nth-child(2) {
    .layer {
      span {
        color: $white;
        border-color: $white;
      }
    }

    .text {
      color: $white;
      border-color: $white;
    }
  }

  &:nth-child(3) {
    .layer {
      span {
        color: $white;
        border-color: $white;
      }
    }

    .text {
      color: $white;
      border-color: $white;
    }
  }

  .text {
    position: absolute;
    left: 50%;
    bottom: -0.31rem;
    opacity: 0;
    transform: translateX(-50%);
    transition: bottom 0.3s ease, opacity 0.3s ease;
  }
}

span:last-child {
  @apply flex items-center justify-center;
}
</style>

<script setup >
import Github from './ContactIcon/Github.vue';
import Watsapp from './ContactIcon/Watsapp.vue';
import Linkedin from './ContactIcon/Linhedin.vue';
</script>