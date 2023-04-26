<template>
    <div class="pb-5">
        <div class="container m-auto">
            <div class="flex flex-col gap-5">
                <img v-for="list in imgList" :key="list.id" class="px-5" :src="`@/assets/images/${list.img}`" alt="couture">
            </div>
        </div>
    </div>
</template>

<script>

export default {
    // data() {
    //     return {
    //         imgList: [
    //             {
    //                 id: 1,
    //                 img: 'couture01.jpg'
    //             },
    //             {
    //                 id: 2,
    //                 img: 'couture02.jpg'
    //             },
    //             {
    //                 id: 3,
    //                 img: 'couture03.jpg'
    //             },
    //             {
    //                 id: 4,
    //                 img: 'couture04.jpg'
    //             },
    //             {
    //                 id: 5,
    //                 img: 'couture05.jpg'
    //             },
    //             {
    //                 id: 6,
    //                 img: 'couture06.jpg'
    //             },
    //             {
    //                 id: 7,
    //                 img: 'couture07.jpg'
    //             },
    //             {
    //                 id: 8,
    //                 img: 'couture08.jpg'
    //             },
    //         ]
    //     }
    // }
}


</script>



<style></style>
  