
<template>
    <div class="about">
        <div class="pb-5 mt-10">
            <div class="container m-auto">
                <div class="flex flex-col gap-5 px-5">
                    <div class="text-center">
                        <h1 class="text-[22px] font-bold font-[futura]">ATELIER</h1>
                        <h3 class="italic font-[futura]  text-[20px]">Les metiers d'Art</h3>
                    </div>
                    <div class="text-center mt-5 mb-10">
                        <p class="italic font-[gill] pb-10 text-[20px]">Together under one house, our metiers exquisitely
                            craft each piece
                            to
                            it's highest
                            potential, the
                            ultimate journey of beauty. Our team's expert craftsmen cut, drape, sew, draw, sketch, pin,
                            measure, tape, embroider generations of the finest expertise, weaving it togther with life, love
                            and play, ready for you enrobe yourself in the creation and feel it all.</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="pb-5" v-for="data in dataSet" :key="data.id">
            <div class="container m-auto">
                <div class="flex flex-col gap-3">
                    <div class="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-3">
                        <div class=""></div>
                        <div class="flex md:justify-end justify-center">
                            <div class="flex flex-col justify-center items-center gap-5">
                                <div class="text-center">
                                    <h2 class="font-gill text-[20px]">{{ data.quete }}</h2>
                                </div>
                                <div class="text-center">
                                    <h2 class="uppercase text-[20px] font-bold">{{ data.title }}</h2>
                                    <p class="uppercase">- {{ data.writer }} -</p>
                                </div>
                                <div class="text-center">
                                    <p class="font-gill text-[18px]">{{ data.tagLine }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <img class="m-auto w-[350px]" :src="`@/assets/images/${data.img}`" alt="">
                        </div>
                        <div class=""></div>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="pb-5">
            <div class="container m-auto">
                <div class="flex flex-col gap-3">
                    <div class="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-3">
                        <div class=""></div>
                        <div class="flex md:justify-end justify-center">
                            <div class="flex flex-col justify-center items-center gap-5">
                                <div class="text-center">
                                    <h2 class="uppercase text-[20px] font-bold font-[futura]">Design</h2>
                                    <p class="uppercase font-[futura]">- Metier Du Design -</p>
                                </div>
                                <div class="text-center">
                                    <h2 class="font-[gill] text-[20px] italic">Where the ideas flow...</h2>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <vue-load-image>
                                <template v-slot:image>
                                    <img class="m-auto w-[350px]" src="@/assets/images/atelier01.jpg" alt="">
                                </template>
                                <template v-slot:preloader>
                                    <img class="m-auto" src="@/assets/images/image-loader.gif" />
                                </template>
                                <template v-slot:error>Image load fails</template>
                            </vue-load-image>
                        </div>
                        <div class=""></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pb-5">
            <div class="container m-auto">
                <div class="flex flex-col gap-3">
                    <div class="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-3">
                        <div class=""></div>
                        <div class="flex md:justify-end justify-center">
                            <div class="flex flex-col justify-center items-center gap-5">
                                <div class="text-center">
                                    <h2 class="uppercase text-[20px] font-bold font-[futura]">PATTERNS</h2>
                                    <p class="uppercase font-[futura]">- METIER DE PATRONNAGE -</p>
                                </div>
                                <div class="text-center">
                                    <h2 class="font-[gill] text-[20px] italic">Where style gets laid...</h2>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <vue-load-image>
                                <template v-slot:image>
                                    <img class="m-auto w-[350px]" src="@/assets/images/atelier02.jpg" alt="">
                                </template>
                                <template v-slot:preloader>
                                    <img class="m-auto" src="@/assets/images/image-loader.gif" />
                                </template>
                                <template v-slot:error>Image load fails</template>
                            </vue-load-image>
                        </div>
                        <div class=""></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pb-5">
            <div class="container m-auto">
                <div class="flex flex-col gap-3">
                    <div class="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-3">
                        <div class=""></div>
                        <div class="flex md:justify-end justify-center">
                            <div class="flex flex-col justify-center items-center gap-5">
                                <div class="text-center">
                                    <h2 class="uppercase text-[20px] font-bold font-[futura]">TAILORING</h2>
                                    <p class="uppercase font-[futura]">- METIER DE TAILEUR -</p>
                                </div>
                                <div class="text-center">
                                    <h2 class="font-[gill] text-[20px] italic">Where the formless takes form...</h2>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <vue-load-image>
                                <template v-slot:image>
                                    <img class="m-auto w-[350px]" src="@/assets/images/atelier03.jpg" alt="">
                                </template>
                                <template v-slot:preloader>
                                    <img class="m-auto" src="@/assets/images/image-loader.gif" />
                                </template>
                                <template v-slot:error>Image load fails</template>
                            </vue-load-image>
                        </div>
                        <div class=""></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pb-5">
            <div class="container m-auto">
                <div class="flex flex-col gap-3">
                    <div class="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-3">
                        <div class=""></div>
                        <div class="flex md:justify-end justify-center">
                            <div class="flex flex-col justify-center items-center gap-5">
                                <div class="text-center">
                                    <h2 class="uppercase text-[20px] font-bold font-[futura]">EMBROIDERY</h2>
                                    <p class="uppercase font-[futura]">- METIER A BRODER -</p>
                                </div>
                                <div class="text-center">
                                    <h2 class="font-[gill] text-[20px] italic">Where the threads come alive...</h2>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <vue-load-image>
                                <template v-slot:image>
                                    <img class="m-auto w-[350px]" src="@/assets/images/atelier04.jpg" alt="">
                                </template>
                                <template v-slot:preloader>
                                    <img class="m-auto" src="@/assets/images/image-loader.gif" />
                                </template>
                                <template v-slot:error>Image load fails</template>
                            </vue-load-image>
                        </div>
                        <div class=""></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pb-5">
            <div class="container m-auto">
                <div class="flex flex-col gap-3">
                    <div class="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-3">
                        <div class=""></div>
                        <div class="flex md:justify-end justify-center">
                            <div class="flex flex-col justify-center items-center gap-5">
                                <div class="text-center">
                                    <h2 class="uppercase text-[20px] font-bold font-[futura]">FINISHING</h2>
                                    <p class="uppercase font-[futura]">- METIER DE FINITION -</p>
                                </div>
                                <div class="text-center">
                                    <h2 class="font-[gill] text-[20px] italic">Where it all comes together...</h2>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <vue-load-image>
                                <template v-slot:image>
                                    <img class="m-auto w-[350px]" src="@/assets/images/atelier05.jpg" alt="">
                                </template>
                                <template v-slot:preloader>
                                    <img class="m-auto" src="@/assets/images/image-loader.gif" />
                                </template>
                                <template v-slot:error>Image load fails</template>
                            </vue-load-image>
                        </div>
                        <div class=""></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pb-5">
            <div class="container m-auto">
                <div class="flex flex-col gap-3">
                    <div class="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-3">
                        <div class=""></div>
                        <div class="flex md:justify-end justify-center">
                            <div class="flex flex-col justify-center items-center gap-5">
                                <div class="text-center">
                                    <h2 class="uppercase text-[20px] font-bold font-[futura]">PERFECTION</h2>
                                    <p class="uppercase font-[futura]">- METIER D'EXPERTISE -</p>
                                </div>
                                <div class="text-center">
                                    <h2 class="font-[gill] text-[20px] italic">When the wow sets in...</h2>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <vue-load-image>
                                <template v-slot:image>
                                    <img class="m-auto w-[350px]" src="@/assets/images/atelier06.jpg" alt="">
                                </template>
                                <template v-slot:preloader>
                                    <img class="m-auto" src="@/assets/images/image-loader.gif" />
                                </template>
                                <template v-slot:error>Image load fails</template>
                            </vue-load-image>
                        </div>
                        <div class=""></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-20">
            <div class="container m-auto">
                <div class="text-center">
                    <h2 class="text-[22px] font-bol font-[futura]">L'ATELIER LONDON</h2>
                </div>
            </div>
        </div>
        <div class="pb-5">
            <div class="container m-auto">
                <div class="flex flex-col gap-3">
                    <div class="grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-3 px-5">
                        <div class=""></div>
                        <div class="flex md:justify-end justify-center">
                            <div class="flex flex-col justify-center items-center gap-5">
                                <div class="text-center">
                                    <p class="font-[gill] text-[18px]">Our Atelier in Chelsea Creek is a secret place, the
                                        perfect
                                        inspiring space to come
                                        and explore, play, and create art together.</p>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <vue-load-image>
                                <template v-slot:image>
                                    <img class="m-auto w-[350px]" src="@/assets/images/atelier07.jpg" alt="">
                                </template>
                                <template v-slot:preloader>
                                    <img class="m-auto" src="@/assets/images/image-loader.gif" />
                                </template>
                                <template v-slot:error>Image load fails</template>
                            </vue-load-image>
                        </div>
                        <div class=""></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueLoadImage from 'vue-load-image'
export default {
    components: {
        'vue-load-image': VueLoadImage
    },
    data() {
        return {
            dataSet: [
                {
                    id: 1,
                    quete: 'Where the idea flow...',
                    title: 'Design',
                    writer: 'Metier Du Design',
                    tagLine: 'From dream to paper..via pen!',
                    img: 'atelier01.jpg'
                },
                {
                    id: 2,
                    quete: 'Where style gets laid...',
                    title: 'PATTERNS',
                    writer: 'METIER DE PATRONNAGE',
                    tagLine: 'Rock, paper, scissors!',
                    img: 'atelier02.jpg'
                },
                {
                    id: 3,
                    quete: 'Where the formless becomes form...',
                    title: 'TAILORING',
                    writer: 'METIER DE TAILEUR',
                    tagLine: 'Itching to stitch!',
                    img: 'atelier03.jpg'
                },
                {
                    id: 4,
                    quete: 'Where the thread comes alive...',
                    title: 'EMBROIDERY',
                    writer: 'METIER A BRODER',
                    tagLine: 'Exquisite embrace!',
                    img: 'atelier04.jpg'
                },
                {
                    id: 5,
                    quete: 'Where it all comes together...',
                    title: 'FINISHING',
                    writer: 'METIER DE FINITION',
                    tagLine: 'Altention to detail!',
                    img: 'atelier05.jpg'
                },
                {
                    id: 6,
                    quete: 'When the wow sets in...',
                    title: 'PERFECTION',
                    writer: `'METIER D'EXPERTISE'`,
                    tagLine: 'The final touch!',
                    img: 'atelier06.jpg'
                },
            ]
        }
    }
}



</script>
  