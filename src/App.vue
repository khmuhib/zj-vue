<script>
import { ref } from 'vue'


export default {
  setup() {
    const open = ref(false)

    const MenuOpen = () => {
      open.value = !open.value
    }

    return { open, MenuOpen }

  }
}


</script>

<template>
  <div class="">
    <div class="py-10 hidden md:block">
      <div class="container m-auto">
        <div class="grid grid-cols-12 items-center justify-center sm:px-10 px-5">
          <div class=" lg:col-span-4 md:col-span-3">
            <ul class="flex lg:gap-10 md:gap-3">
              <li>
                <RouterLink to="./couture" class="uppercase text-[10px] sm:text-[16px] font-semibold text-[#A88E6A]">
                  Couture
                </RouterLink>
              </li>
              <li>
                <RouterLink to="./alchemy" class="uppercase text-[10px] sm:text-[16px] font-semibold text-[#A88E6A]">
                  Alchemy
                </RouterLink>
              </li>
            </ul>
          </div>
          <div class=" lg:col-span-4 md:col-span-6 main-logo text-center">
            <RouterLink to="/">ZAEEM JAMAL <br> <span class="">Atelier</span></RouterLink>
          </div>
          <div class=" lg:col-span-4 md:col-span-3">
            <ul class="flex lg:gap-10 md:gap-3 justify-end">
              <li>
                <RouterLink to="./atelier" class="uppercase text-[10px] sm:text-[16px] font-semibold text-[#A88E6A]">
                  Atelier</RouterLink>
              </li>
              <li>
                <RouterLink to="./appointment" class="uppercase text-[10px] sm:text-[16px] font-semibold text-[#A88E6A]">
                  Appointment
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="py-5 block md:hidden">
      <div class="container m-auto">
        <div class="grid grid-cols-12 items-center justify-center sm:px-10 px-5">
          <div class="col-span-2">
            <font-awesome-icon icon="fa-solid fa-bars" class="text-[30px] text-[#b89356]" @click="MenuOpen()" />
          </div>
          <div class="main-logo text-center col-span-8">
            <RouterLink to="/">ZAEEM JAMAL <br> <span class="">Atelier</span></RouterLink>
          </div>
          <div class="col-span-2">
            <a href="https://wa.me/+447970817777" target="_blank"><font-awesome-icon icon="fa-brands fa-whatsapp"
                class="text-[30px] float-right text-[#b89356]" /></a>
          </div>
        </div>
      </div>
    </div>

    <!-- For Mobile Menu Start-->
    <div class="bg-white shadow absolute z-10 w-full duration-500 ease-in" :class="[open ? 'left-0' : 'left-[-100%]']">
      <div class="flex flex-col gap-3 w-[70%] m-auto py-5">
        <router-link to="/couture" @click="MenuOpen()">
          <div class="grid grid-cols-12 items-center gap-5">
            <div class="col-span-6">
              <p class="text-[#b89356] font-[futura] uppercase text-right">Couture</p>
            </div>
            <div class="col-span-6">
              <img class="w-[100px] h-[100px]" src="@/assets/images/mobile/couture.png" alt="Couture">
            </div>
          </div>
        </router-link>
        <router-link to="/alchemy" @click="MenuOpen()">
          <div class="grid grid-cols-12 items-center gap-5">
            <div class="col-span-6">
              <p class="text-[#b89356] font-[futura] uppercase text-right">Alchemy</p>
            </div>
            <div class="col-span-6">
              <img class="w-[100px] h-[100px]" src="@/assets/images/mobile/alchemy.png" alt="Alchemy">
            </div>
          </div>
        </router-link>
        <router-link to="/atelier" @click="MenuOpen()">
          <div class="grid grid-cols-12 items-center gap-5">
            <div class="col-span-6">
              <p class="text-[#b89356] font-[futura] uppercase text-right">Atelier</p>
            </div>
            <div class="col-span-6">
              <img class="w-[100px] h-[100px]" src="@/assets/images/mobile/atelier.png" alt="Atelier">
            </div>
          </div>
        </router-link>
        <router-link to="/appointment" @click="MenuOpen()">
          <div class="grid grid-cols-12 items-center gap-5">
            <div class="col-span-6">
              <p class="text-[#b89356] font-[futura] uppercase text-right">Appointment</p>
            </div>
            <div class="col-span-6">
              <img class="w-[100px] h-[100px]" src="@/assets/images/mobile/appointment.png" alt="Appointment">
            </div>
          </div>
        </router-link>

      </div>
    </div>
    <!-- For Mobile Menu End-->

    <RouterView />
    <div class="bg-[#1B1E3F] py-10">
      <div class="container m-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 text-white gap-5">
          <div class="text-center">
            <h4 class="uppercase font-bold">PRIVATE APPOINTMENTS</h4>
            <a href="https://wa.me/+447970817777" class="font-gill" target="_blank">Whats App +447970817777</a>
            <p class="font-gill">Email: <a href="mailto:vip@zaeemjamal.com">VIP@zaeemjamal.com</a></p>
          </div>
          <div class="text-center">
            <a href="https://goo.gl/maps/PQcYGi3fEmBxCPQz5" target="_blank">
              <h4 class="uppercase font-bold">ZAEEM JAMAL ATELIER</h4>
              <p class="font-gill">Park Street, Chelsea Creek</p>
              <p class="font-gill">London. SW6 2FS</p>
            </a>

          </div>
          <div class="text-center">
            <a href="https://www.instagram.com/zaeemjamal/" target="_blank">
              <img class="m-auto" src="@/assets/images/insta.png" alt="Instagram">
            </a>
          </div>
          <div class="text-center">
            <h4 class="uppercase font-bold"><a href="./legal">LEGAL</a></h4>
          </div>
          <!-- <div class="text-center block sm:hidden">
            <a href="https://www.instagram.com/zaeemjamal/" target="_blank">
              <img class="m-auto h-[80px]" src="@/assets/images/logo.png" alt="Instagram">
            </a>
          </div> -->
        </div>
        <div class="text-center py-5">
          <a href="/">
            <img class="m-auto h-[120px]" src="@/assets/images/logo.png" alt="Instagram">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-logo a {
  font-family: 'Cinzel', serif;
  font-weight: 600;
  font-style: normal;
  font-size: 27px;
  letter-spacing: .1em;
  line-height: .75em;
  text-transform: uppercase;
  color: #b89356;
}

.main-logo span {
  font-family: 'Cinzel', serif;
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  letter-spacing: .1em;
  line-height: 1.5em;
  text-transform: uppercase;
  color: #b89356;
}
</style>
