<script>
import VLazyImage from "v-lazy-image";

export default {
  components: {
    VLazyImage
  }
};
</script>

<template>
  <div class="pb-5">
    <div class="container m-auto px-5">
      <div class="w-full">
        <v-lazy-image class="md:block hidden w-full" src="./src/assets/images/home.jpg" alt="Logo"></v-lazy-image>
        <v-lazy-image class="md:hidden block w-full" src="./src/assets/images/home_mob.png" alt="Logo"></v-lazy-image>
      </div>
    </div>
  </div>
</template>

<style>
.v-lazy-image {
  filter: blur(5px);
  transition: filter 1.6s;
  will-change: filter;
}

.v-lazy-image-loaded {
  filter: blur(0);
}
</style>
