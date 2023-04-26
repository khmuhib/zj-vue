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
                            <img class="px-5 w-full" src="@/assets/images/appointment.png" alt="appointment">
                        </template>
                        <template v-slot:preloader>
                            <img class="m-auto" src="@/assets/images/image-loader.gif" />
                        </template>
                        <template v-slot:error>Image load fails</template>
                    </vue-load-image>
                </div>
                <div class="text-center px-5">
                    <p class="italic md:w-[60%] m-auto font-gill text-[20px]">Whether you would like to visit our London
                        Atelier at
                        Imperial
                        Wharf in
                        London, or
                        to arrange an
                        appointment at our estate or on board your vessel / craft, please contact our VIP Private Client
                        Director:</p>
                </div>
                <div class="text-center">
                    <p class="font-bold">Whats App +447970817777</p>
                    <p class="font-bold">Email: <a href="mailto:vip@zaeemjamal.com">VIP@zaeemjamal.com</a></p>
                </div>
                <div class="text-center">
                    <h4 class="uppercase font-bold">Atelier JAMAL ATELIER</h4>
                    <p class="font-bold">Park Street, Chelsea Creek</p>
                    <p class="font-bold">London SW6 2FS</p>
                </div>
                <div class="text-center">
                    <p class="font-gill text-[20px]">Landline: +44 203 637 8277</p>
                </div>

            </div>
        </div>
    </div>
</template>
  
<style></style>
  