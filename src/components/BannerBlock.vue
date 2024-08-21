<script setup></script>

<template>
  <!-- ipad/pc -->
  <section
    class="relative hidden md:block"
    v-in="'duration-1000 animate-in slide-in-from-top-full'"
  >
    <img src="../assets/banner.jpg" class="h-auto w-full" alt="banner" />
    <div
      class="absolute left-0 top-0 flex h-full w-full items-center justify-around overflow-hidden"
    >
      <slot />
      <img
        src="../assets/banner-img.png"
        class="hidden w-[35%] shrink-0 md:block"
        alt="banner-img"
        v-in="'duration-1000 animate-in slide-in-from-top-full'"
      />
    </div>
  </section>
  <!-- mobile -->
  <section class="bg-[url('../assets/banner.jpg')] bg-cover bg-no-repeat py-20 md:hidden">
    <slot />
  </section>
</template>
