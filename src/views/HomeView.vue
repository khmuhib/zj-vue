<script>
import VueLoadImage from 'vue-load-image'

export default {
  components: {
    'vue-load-image': VueLoadImage
  }
};
</script>

<template>
  <div class="pb-5">
    <div class="container m-auto px-5">
      <div class="w-full">
        <v-lazy-image class="md:block hidden w-full" src="/assets/images/home.jpg" alt="Logo"></v-lazy-image>
        <v-lazy-image class="md:hidden block w-full" src="/assets/images/home_mob.png" alt="Logo"></v-lazy-image>
      </div>
      <vue-load-image>
        <template v-slot:image>
          <img src="@/assets/images/home.jpg" />
        </template>
        <template v-slot:preloader>
          <img src="@/assets/images/image-loader.gif" />
        </template>
        <template v-slot:error>Image load fails</template>
      </vue-load-image>
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
