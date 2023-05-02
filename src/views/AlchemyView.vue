<script>
import VueLoadImage from 'vue-load-image'
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

export default {
    components: {
        'vue-load-image': VueLoadImage
    },
    setup() {
        const siteData = reactive({
            title: `Zaeem Jamal | Alchemy`,
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
};
</script>

<template>
    <div class="pb-5">
        <div class="container m-auto min-h-[55vh]">
            <div class="lg:w-[80%] m-auto">
                <div class="flex flex-col gap-10 px-5">
                    <div class="">
                        <vue-load-image>
                            <template v-slot:image>
                                <img class="md:block hidden w-full" src="@/assets/images/Cosmic.jpg" />
                                <img class="md:hidden block w-full" src="@/assets/images/alchemy01_mob.png" />
                            </template>
                            <template v-slot:preloader>
                                <img class="m-auto" src="@/assets/images/image-loader.gif" />
                            </template>
                            <template v-slot:error>Image load fails</template>
                        </vue-load-image>
                    </div>
                    <div class="md:px-20 px-5 text-center">
                        <p class="italic text-[20px] font-[georgia]  px-10">Welcome to the magical world of Couturier
                            Zaeem
                            Jamal, heralded
                            as the 'Alchemist of design', crafting the subtle and sublime for your delight weaving dreams
                            into
                            reality.</p>
                    </div>
                    <div class="">
                        <img class="w-full" src="@/assets/images/alchemy02.png" alt="alchemy">
                    </div>
                    <div class="md:px-20 px-5 text-center">
                        <p class="italic text-[20px] font-[georgia]  px-10">Each crafted piece is an art form,
                            effortlessly
                            flowing with elegance, grace, femininity, colour and sensuality, around form, structure and
                            innovation. </p>
                    </div>
                    <div class=""></div>
                </div>
            </div>

        </div>
    </div>
</template>
  
<style></style>
  