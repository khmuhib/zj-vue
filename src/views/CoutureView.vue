<template>
    <div class="pb-5">
        <div class="container m-auto min-h-[55vh]">
            <div class="lg:w-[80%] m-auto">
                <div class="flex flex-col gap-5">
                    <vue-load-image>
                        <template v-slot:image>
                            <img class="px-5 w-full lg:min-h-[800px]" src="@/assets/images/couture01.jpg" alt="">
                        </template>
                        <template v-slot:preloader>
                            <img class="m-auto" src="@/assets/images/image-loader.gif" />
                        </template>
                        <template v-slot:error>Image load fails</template>
                    </vue-load-image>

                    <vue-load-image>
                        <template v-slot:image>
                            <img class="px-5 w-full lg:min-h-[800px]" src="@/assets/images/couture02.jpg" alt="">
                        </template>
                        <template v-slot:preloader>
                            <img class="m-auto" src="@/assets/images/image-loader.gif" />
                        </template>
                        <template v-slot:error>Image load fails</template>
                    </vue-load-image>

                    <vue-load-image>
                        <template v-slot:image>
                            <img class="px-5 w-full lg:min-h-[800px]" src="@/assets/images/couture03.jpg" alt="">
                        </template>
                        <template v-slot:preloader>
                            <img class="m-auto" src="@/assets/images/image-loader.gif" />
                        </template>
                        <template v-slot:error>Image load fails</template>
                    </vue-load-image>

                    <vue-load-image>
                        <template v-slot:image>
                            <img class="px-5 w-full lg:min-h-[800px]" src="@/assets/images/couture05.jpg" alt="">
                        </template>
                        <template v-slot:preloader>
                            <img class="m-auto" src="@/assets/images/image-loader.gif" />
                        </template>
                        <template v-slot:error>Image load fails</template>
                    </vue-load-image>

                    <vue-load-image>
                        <template v-slot:image>
                            <img class="px-5 w-full lg:min-h-[800px]" src="@/assets/images/couture06.jpg" alt="">
                        </template>
                        <template v-slot:preloader>
                            <img class="m-auto" src="@/assets/images/image-loader.gif" />
                        </template>
                        <template v-slot:error>Image load fails</template>
                    </vue-load-image>

                    <vue-load-image>
                        <template v-slot:image>
                            <img class="px-5 w-full lg:min-h-[800px]" src="@/assets/images/couture07.jpg" alt="">
                        </template>
                        <template v-slot:preloader>
                            <img class="m-auto" src="@/assets/images/image-loader.gif" />
                        </template>
                        <template v-slot:error>Image load fails</template>
                    </vue-load-image>

                    <vue-load-image>
                        <template v-slot:image>
                            <img class="px-5 w-full lg:min-h-[800px]" src="@/assets/images/couture08.jpg" alt="">
                        </template>
                        <template v-slot:preloader>
                            <img class="m-auto" src="@/assets/images/image-loader.gif" />
                        </template>
                        <template v-slot:error>Image load fails</template>
                    </vue-load-image>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import VueLoadImage from 'vue-load-image'
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'
export default {
    components: {
        'vue-load-image': VueLoadImage
    },
    data() {
        return {
            imgList: [
                {
                    id: 1,
                    img: 'couture01.jpg'
                },
                {
                    id: 2,
                    img: 'couture02.jpg'
                },
                {
                    id: 3,
                    img: 'couture03.jpg'
                },
                {
                    id: 4,
                    img: 'couture04.jpg'
                },
                {
                    id: 5,
                    img: 'couture05.jpg'
                },
                {
                    id: 6,
                    img: 'couture06.jpg'
                },
                {
                    id: 7,
                    img: 'couture07.jpg'
                },
                {
                    id: 8,
                    img: 'couture08.jpg'
                },
            ]
        }
    },
    setup() {
        const siteData = reactive({
            title: `Zaeem Jamal | Couture`,
            description: `My beautiful website`,
        })

        useHead({
            // Can be static or computed
            title: computed(() => siteData.title),
            meta: [
                {
                    name: `description`,
                    content: computed(() => siteData.description),
                },
            ],
        })
    },
}


</script>



<style></style>
  