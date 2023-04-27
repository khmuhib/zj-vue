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
        <div class="container m-auto">
            <div class="flex flex-col gap-5">
                <div class="">
                    <vue-load-image>
                        <template v-slot:image>
                            <img class="px-5 w-full hidden md:block" src="@/assets/images/appointment.png"
                                alt="appointment">
                            <img class="px-5 w-full block md:hidden" src="@/assets/images/appointment_mob.png"
                                alt="appointment">
                        </template>
                        <template v-slot:preloader>
                            <img class="m-auto" src="@/assets/images/image-loader.gif" />
                        </template>
                        <template v-slot:error>Image load fails</template>
                    </vue-load-image>
                </div>
                <div class="text-center px-5">
                    <p class="italic md:w-[60%] m-auto font-[georgia] text-[20px]">Whether you would like to visit our London
                        Atelier at
                        Imperial
                        Wharf in
                        London, or
                        to arrange an
                        appointment at our estate or on board your vessel / craft, please contact our VIP Client
                        Director:</p>
                </div>
                <div class="text-center font-[futura]">
                    <a href="https://wa.me/+447970817777" class="font-bold" target="_blank">Whats App +447970817777</a>
                    <p class="font-bold">Email: <a href="mailto:vip@zaeemjamal.com" target="_blank">VIP@zaeemjamal.com</a>
                    </p>
                </div>
                <div class="text-center font-[futura]">
                    <a href="https://goo.gl/maps/PQcYGi3fEmBxCPQz5" target="_blank">
                        <h4 class="uppercase font-bold">Atelier JAMAL ATELIER</h4>
                        <p class="font-bold">Park Street, Chelsea Creek</p>
                        <p class="font-bold">London SW6 2FS</p>
                    </a>

                </div>
                <div class="text-center font-[futura]">
                    <p class="font-bold">Landline: +44 203 637 8277</p>
                </div>

            </div>
        </div>
    </div>
</template>
  
<style></style>
  