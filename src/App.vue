<template>
  <div id="app">
    <nav class="nav pt-5 pb-3 border-b text-left bg-gray-100">
      <div class="container mx-auto px-4 md:px-none">
        <img
          alt="logo"
          class="inline"
          src="https://i.loli.net/2018/07/01/5b37ad8817cb2.png"
          style="margin-top: -8px"
        />
        <span class="text-lg">整合包汉化下载</span>
        <button
          :class="[
            'menu-btn float-right w-8 -mt-2 focus:outline-none md:hidden',
            {
              'menu-active': toggleMenu
            }
          ]"
          @click="toggleMenu"
        >
          <div
            :class="[
              'transform origin-center',
              {
                '-rotate-45': showMenu,
                'translate-y-menu': showMenu
              }
            ]"
          ></div>
          <div :class="{
              'opacity-0': showMenu
            }"></div>
          <div
            :class="[
              'transform origin-center',
              {
                'rotate-45':showMenu,
                '-translate-y-menu': showMenu
              }
            ]"
          ></div>
        </button>
        <div
          :class="[
            'md:float-right md:mt-0 clearfix block overflow-hidden h-0 md:h-auto transition-height duration-300 ease-out',
            {
              'h-10': showMenu
            }
          ]"
        >
          <router-link class="nav-link mr-8 md:ml-4 md:mr-0 mt-3 md:mt-0 ml-2" exact to="/">主页</router-link>
          <router-link class="nav-link mr-8 md:ml-4 md:mr-0 mt-3 md:mt-0" to="/download">下载</router-link>
          <router-link class="nav-link mr-8 md:ml-4 md:mr-0 mt-3 md:mt-0" to="/about">关于</router-link>
        </div>
      </div>
    </nav>
    <div class="container mx-auto">
      <div class="mt-4 px-4 md:px-none">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style>
.menu-btn div {
  height: 2px;
  @apply bg-theme-light mt-2 transition-all duration-300 ease-out;
}
</style>
