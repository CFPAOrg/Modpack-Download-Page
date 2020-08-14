<template>
  <div id="app">
    <nav class="nav pt-5 pb-3 border-b text-left">
      <div class="container mx-auto">
        <img
          alt="logo"
          class="inline"
          src="https://i.loli.net/2018/07/01/5b37ad8817cb2.png"
          style="margin-top: -8px"
        />
        <span class="text-lg">整合包汉化下载页面</span>
        <div class="float-right hidden md:block">
          <router-link class="nav-link float-left mx-4" to="/">主页</router-link>
          <router-link class="nav-link float-left mx-4" to="/download">下载</router-link>
          <router-link class="nav-link float-left mx-4" to="/about">关于</router-link>
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

<style>
.nav {
  background-color: var(--body-color);
}

.nav-link {
  transition: all 0.3s ease-out;
}

.nav-link::after,
.nav-link.router-link-exact-active::after {
  content: '';
  border-bottom: 2px solid var(--theme-color);
  display: block;
  width: 0;
  transition: width 0.3s ease-out;
}

.nav-link.router-link-exact-active {
  color: var(--theme-color);
  font-weight: bold;
}

.nav-link.router-link-exact-active::after {
  width: 100%;
}

.nav-link:hover::after {
  width: 100%;
  transition: width 0.3s ease-out;
}
</style>
