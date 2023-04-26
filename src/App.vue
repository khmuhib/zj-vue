<script setup>

</script>

<template>
  <div class="">
    <div class="py-2">
      <div class="container m-auto">
        <div class="grid grid-cols-12 items-center justify-center sm:px-10 px-5">
          <div class="col-span-5">
            <ul class="flex gap-3">
              <li>
                <RouterLink to="./couture" class="uppercase text-[10px] sm:text-[16px] font-semibold">Couture</RouterLink>
              </li>
              <li>
                <RouterLink to="./alchemy" class="uppercase text-[10px] sm:text-[16px] font-semibold">Alchemy</RouterLink>
              </li>
            </ul>
          </div>
          <div class="col-span-2">
            <RouterLink to="/"><img class="w-[80px] m-auto" src="@/assets/images/logo.png" alt="logo"></RouterLink>
          </div>
          <div class="col-span-5">
            <ul class="flex gap-3 justify-end">
              <li>
                <RouterLink to="./atelier" class="uppercase text-[10px] sm:text-[16px] font-semibold">Atelier</RouterLink>
              </li>
              <li>
                <RouterLink to="./appointment" class="uppercase text-[10px] sm:text-[16px] font-semibold">Appointment
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <RouterView />
    <div class="bg-[#010425] py-10">
      <div class="container m-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 text-white gap-5">
          <div class="text-center">
            <h4 class="uppercase font-bold">Private Clinets</h4>
            <p class="font-gill">Whats App +447970817777</p>
            <p class="font-gill">Email: <a href="mailto:vip@zaeemjamal.com">VIP@zaeemjamal.com</a></p>
          </div>
          <div class="text-center">
            <h4 class="uppercase font-bold">ZAEEM JAMAL ATELIER</h4>
            <p class="font-gill">Park Street, Chelsea Creek</p>
            <p class="font-gill">London. SW6 2FS</p>
          </div>
          <div class="text-center">
            <h4 class="uppercase font-bold"><a href="./legal">LEGAL</a></h4>
          </div>
          <div class="text-center">
            <a href="https://www.instagram.com/zaeemjamal/" target="_blank">
              <img class="m-auto" src="@/assets/images/insta.png" alt="Instagram">
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
