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
            title: `Zaeem Jamal | Appointment`,
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
                <div class="flex flex-col gap-5">
                    <div class="">
                        <vue-load-image>
                            <template v-slot:image>
                                <img class="px-5 w-full hidden md:block" src="@/assets/images/appointment.webp"
                                    alt="appointment">
                                <img class="px-5 w-full block md:hidden" src="@/assets/images/appointment_mob.webp"
                                    alt="appointment">
                            </template>
                            <template v-slot:preloader>
                                <img class="m-auto" src="@/assets/images/image-loader.gif" />
                            </template>
                            <template v-slot:error>Image load fails</template>
                        </vue-load-image>
                    </div>
                    <div class="text-center px-5">
                        <p class="italic md:w-[60%] m-auto font-[georgia] text-[16px]">Whether you would like to visit our
                            London
                            Atelier at
                            Imperial
                            Wharf in
                            London, or
                            to arrange an
                            appointment at our estate or on board your vessel / craft, please contact our VIP Client
                            Director:</p>
                    </div>
                    <div class="text-center font-[futura]">
                        <a href="https://wa.me/+447737007777" class="font-bold" target="_blank">Whats App
                            <span>+447737007777</span></a>
                        <p class="font-bold">Email: <a href="mailto:vip@zaeemjamal.com"
                                target="_blank"><span>VIP@zaeemjamal.com</span></a>
                        </p>
                    </div>
                    <div class="text-center font-[futura]">
                        <h4 class="uppercase font-bold">ZAEEM JAMAL ATELIER</h4>
                        <a class="inline-block" href="https://goo.gl/maps/PQcYGi3fEmBxCPQz5" target="_blank">
                            <p class="">Park Street, Chelsea Creek</p>
                            <p class="">London SW6 2FS</p>
                        </a>

                    </div>
                    <div class="text-center font-[futura]">
                        <p class="font-bold">Landline: <span class="font-normal">+44 203 637 8277</span></p>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="py-5"></div>
</template>
  
<style></style>
  