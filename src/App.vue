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
    <div class="py-10 hidden lg:block font-[futura]">
      <div class="container m-auto">
        <div class="w-[80%] m-auto">
          <div class="grid grid-cols-12 items-center justify-center px-5">
            <div class=" lg:col-span-4 md:col-span-3">
              <ul class="flex lg:gap-20">
                <li>
                  <RouterLink to="./couture" class="uppercase text-[10px] sm:text-[14px]  text-[#A88E6A]">
                    Couture
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="./alchemy" class="uppercase text-[10px] sm:text-[14px]  text-[#A88E6A]">
                    Alchemy
                  </RouterLink>
                </li>
              </ul>
            </div>
            <div class=" lg:col-span-4 md:col-span-6 main-logo text-center">
              <RouterLink to="/">ZAEEM JAMAL <br> <span>Atelier</span></RouterLink>
            </div>
            <div class=" lg:col-span-4 md:col-span-3">
              <ul class="flex lg:gap-20 justify-end">
                <li>
                  <RouterLink to="./atelier" class="uppercase text-[10px] sm:text-[14px]  text-[#A88E6A]">
                    Atelier</RouterLink>
                </li>
                <li>
                  <RouterLink to="./appointment" class="uppercase text-[10px] sm:text-[14px]  text-[#A88E6A]">
                    Appointment
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-5 block lg:hidden">
      <div class="container m-auto">
        <div class="grid grid-cols-12 items-center justify-center sm:px-10 px-5">
          <div class="col-span-2">
            <img class="w-[30px]" style="width: 30px;height: 25px;" src="@/assets/images/mobile/bar.webp" alt=""
              @click="MenuOpen()">
          </div>
          <div class="main-logo text-center col-span-8">
            <RouterLink to="/">ZAEEM JAMAL <br> <span>Atelier</span></RouterLink>
          </div>
          <div class="col-span-2">
            <a href="https://wa.me/+447737007777" target="_blank"><font-awesome-icon icon="fa-brands fa-whatsapp"
                class="text-[30px] float-right text-[#967C57]" /></a>
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
              <p class="text-[#967C57] font-[futura] uppercase text-right">Couture</p>
            </div>
            <div class="col-span-6">
              <img class="w-[100px] h-[100px]" src="@/assets/images/mobile/couture.webp" alt="Couture">
            </div>
          </div>
        </router-link>
        <router-link to="/alchemy" @click="MenuOpen()">
          <div class="grid grid-cols-12 items-center gap-5">
            <div class="col-span-6">
              <p class="text-[#967C57] font-[futura] uppercase text-right">Alchemy</p>
            </div>
            <div class="col-span-6">
              <img class="w-[100px] h-[100px]" src="@/assets/images/mobile/alchemy.webp" alt="Alchemy">
            </div>
          </div>
        </router-link>
        <router-link to="/atelier" @click="MenuOpen()">
          <div class="grid grid-cols-12 items-center gap-5">
            <div class="col-span-6">
              <p class="text-[#967C57] font-[futura] uppercase text-right">Atelier</p>
            </div>
            <div class="col-span-6">
              <img class="w-[100px] h-[100px]" src="@/assets/images/mobile/atelier.webp" alt="Atelier">
            </div>
          </div>
        </router-link>
        <router-link to="/appointment" @click="MenuOpen()">
          <div class="grid grid-cols-12 items-center gap-5">
            <div class="col-span-6">
              <p class="text-[#967C57] font-[futura] uppercase text-right">Appointment</p>
            </div>
            <div class="col-span-6">
              <img class="w-[100px] h-[100px]" src="@/assets/images/mobile/appointment.webp" alt="Appointment">
            </div>
          </div>
        </router-link>

      </div>
    </div>
    <!-- For Mobile Menu End-->

    <RouterView />
    <div class="font-[futura] bg-[#1B1E3F]">
      <div class="container m-auto px-5">
        <div class="lg:w-[80%] m-auto bg-[#1B1E3F] pt-5">
          <div class="grid sm:grid-cols-2 lg:grid-cols-6 grid-cols-1 text-white gap-5">
            <div class="text-center lg:col-span-2">
              <h4 class="uppercase font-bold">PRIVATE APPOINTMENTS</h4>
              <a href="https://wa.me/+447737007777" class="font-gill" target="_blank"
                aria-label="Connect with whatsapp">Whats App +44 7737 00 7777</a>
              <p class="font-gill">Email: <a href="mailto:vip@zaeemjamal.com"
                  aria-label="Direct mail to us">VIP@zaeemjamal.com</a></p>
            </div>
            <div class="text-center lg:col-span-2">
              <a href="https://goo.gl/maps/PQcYGi3fEmBxCPQz5" target="_blank" aria-label="Direct Location">
                <h4 class="uppercase font-bold">ZAEEM JAMAL ATELIER</h4>
                <p class="font-gill">Park Street, Chelsea Creek</p>
                <p class="font-gill">London. SW6 2FS</p>
              </a>

            </div>
            <div class="text-center">
              <a href="https://www.instagram.com/zaeemjamal/" target="_blank">
                <!-- <img class="m-auto" height="40px" width="40px" src="@/assets/images/insta.webp" alt="Instagram"> -->
                <img class="m-auto" srcset="@/assets/images/insta.webp 480w,
                @/assets/images/insta.webp 768w,
                @/assets/images/insta.webp 1200w" sizes="(max-width: 480px) 100vw,
            (max-width: 768px) 50vw,
            1200px" src="@/assets/images/insta.webp" alt="Instagram" height="40" width="40">
              </a>
            </div>
            <div class="text-center">
              <h4 class="uppercase font-bold text-[#967C57]"><a href="./legal">LEGAL</a></h4>
            </div>
          </div>
          <div class="text-center py-5">
            <a href="/">
              <img class="m-auto" height="80px" width="62px" src="@/assets/images/logo.webp" alt="Logo">
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
.main-logo a {
  font-family: 'Cinzel', serif;
  font-weight: 500;
  font-style: normal;
  font-size: 27px;
  line-height: .75em;
  text-transform: uppercase;
  color: #967C57;
}

.main-logo span {
  font-family: 'Cinzel', serif;
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  letter-spacing: .1em;
  line-height: 1.5em;
  text-transform: uppercase;
  color: #967C57;
}
</style>
