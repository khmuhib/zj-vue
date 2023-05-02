<script>
import VueLoadImage from 'vue-load-image'
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

export default {
  components: {
    'vue-load-image': VueLoadImage,

  },
  setup() {
    const siteData = reactive({
      title: `Zaeem Jamal`,
      description: `My beautiful website`,
      keywords: `your,keywords,here`,
      robots: `index,follow`,
      author: `Your Name`,
      date: `2023-05-03`,
      image: `https://example.com/image.jpg`,
      url: `https://example.com/page`,
      type: `website`,
    })

    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
        {
          name: `keywords`,
          content: computed(() => siteData.keywords),
        },
        {
          name: `robots`,
          content: computed(() => siteData.robots),
        },
        {
          name: `author`,
          content: computed(() => siteData.author),
        },
        {
          name: `date`,
          content: computed(() => siteData.date),
        },
        {
          property: `og:image`,
          content: computed(() => siteData.image),
        },
        {
          property: `og:url`,
          content: computed(() => siteData.url),
        },
        {
          property: `og:type`,
          content: computed(() => siteData.type),
        },
        {
          property: `og:title`,
          content: computed(() => siteData.title),
        },
        {
          property: `og:description`,
          content: computed(() => siteData.description),
        },
      ],
      structuredData: {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        'name': 'Zaeem Jamal',
        'url': 'https://fonts.bglobal.com',
        'logo': 'https://fonts.bglobal.com/assets/home-dfe25751.jpg',
      },
    })
  },
}

</script>

<template>
  <div class="pb-5">
    <div class="container m-auto px-5 min-h-[55vh]">
      <div class="lg:w-[80%] m-auto">
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
