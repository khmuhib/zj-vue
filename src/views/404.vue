<script>
import VueLoadImage from 'vue-load-image'

export default {
    components: {
        'vue-load-image': VueLoadImage
    }
};
</script>

<template>
    <div class="py-5">
        <vue-load-image>
            <template v-slot:image>
                <img class="h-[400px] md:h-[100vh] m-auto" src="@/assets/images/404.png" alt="404 Page">
            </template>
            <template v-slot:preloader>
                <img class="m-auto" src="@/assets/images/image-loader.gif" />
            </template>
            <template v-slot:error>Image load fails</template>
        </vue-load-image>
    </div>
</template>

<style></style>