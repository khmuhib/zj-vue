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
    <div class="container m-auto px-5 min-h-[60vh]">
      <div class="w-[80%] m-auto">
        <vue-load-image>
          <template v-slot:image>
            <div class="">
              <img class="md:block hidden w-full" src="@/assets/images/home.jpg" />
            </div>
            <div class=" md:hidden block">
              <img class="w-full" src="@/assets/images/home_mob.png" />
            </div>
          </template>
          <template v-slot:preloader>
            <div class=" md:hidden block">
              <img class="m-auto" src="@/assets/images/image-loader.gif" />
            </div>
          </template>
          <template v-slot:error>Image load fails</template>
        </vue-load-image>
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
