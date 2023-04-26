<script setup>

</script>

<template>
  <div class="">
    <div class="py-5 hidden md:block">
      <div class="container m-auto">
        <div class="grid grid-cols-12 items-center justify-center sm:px-10 px-5">
          <div class=" lg:col-span-4 md:col-span-3">
            <ul class="flex gap-3">
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
            <ul class="flex gap-3 justify-end">
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
        <div class="grid grid-cols-3 items-center justify-center sm:px-10 px-5">
          <div class="col-span-5">
            logo
          </div>
          <div class="main-logo text-center">
            <RouterLink to="/">ZAEEM JAMAL <br> <span class="">Atelier</span></RouterLink>
          </div>
          <div class="">
            logo
          </div>
        </div>
      </div>
    </div>
    <RouterView />
    <div class="bg-[#1B1E3F] py-10">
      <div class="container m-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 text-white gap-5">
          <div class="text-center">
            <h4 class="uppercase font-bold">RIVATE APPOINTMENTS</h4>
            <p class="font-gill">Whats App +447970817777</p>
            <p class="font-gill">Email: <a href="mailto:vip@zaeemjamal.com">VIP@zaeemjamal.com</a></p>
          </div>
          <div class="text-center">
            <h4 class="uppercase font-bold">ZAEEM JAMAL ATELIER</h4>
            <p class="font-gill">Park Street, Chelsea Creek</p>
            <p class="font-gill">London. SW6 2FS</p>
          </div>
          <div class="text-center">
            <a href="https://www.instagram.com/zaeemjamal/" target="_blank">
              <img class="m-auto" src="@/assets/images/insta.png" alt="Instagram">
            </a>
          </div>
          <div class="text-center">
            <h4 class="uppercase font-bold"><a href="./legal">LEGAL</a></h4>
          </div>
          <div class="text-center block sm:hidden">
            <a href="https://www.instagram.com/zaeemjamal/" target="_blank">
              <img class="m-auto h-[80px]" src="@/assets/images/logo.png" alt="Instagram">
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
  font-weight: 400;
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
