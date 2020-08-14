<template>
  <div>
    <p class="text-2xl text-center my-4">整合包汉化补丁下载须知</p>
    <ol class="list-decimal list-inside leading-8 mb-4">
      <li>下载前请注意整合名称和版本！</li>
      <li>Linux 版本为使用 Linux 或者面板服开服人员设计。如果你是单机玩家，或者在用家用机开服，请选择 Windows 版本！</li>
      <li>无论如何，最好在打汉化补丁前备份客户端或者服务端，避免发生不必要的损失！</li>
      <li>
        汉化补丁现在为 zip 的压缩文件，只需要将压缩包放置到游戏主目录（一般为
        <code
          class="bg-red-100 text-red-700 px-1 rounded"
        >.minecraft</code> 文件夹，即你放置模组的那个文件夹）下，而后选择解压到当前文件夹即可。如果出现合并文件夹/覆盖文件提示，点击全部合并/全部覆盖即可
      </li>
      <li>“链接和显示都成了代码/不能进行相应的跳转/下载不了”等等问题：请检查你是否用的是谷歌或者火狐浏览器，IE 以及部分国产浏览器太过差劲，我实在不想提供兼容。</li>
      <li>
        这个页面提供的是整合汉化，如果想要同时将整合内模组进行汉化，需要配合
        <a
          class="link"
          href="http://www.mcbbs.net/thread-805273-1-1.html"
          target="_blank"
        >自动汉化更新模组</a> 使用。这是由于模组加载机理导致的，并非我们主动做出两个部分。
      </li>
      <li>你如果在服务器游玩中发现汉化补丁失效，请向服主询问服务端是否也打上了汉化补丁。</li>
    </ol>
    <div class="text-center mt-8 mb-6">
      <a
        class="inline-block bg-theme-light hover:bg-theme-dark text-white font-bold py-2 px-4 rounded mx-2 inline-flex items-center"
        href="https://github.com/CFPAOrg/Modpack-GuideBook-i18n"
        target="_blank"
      >Github</a>
      <router-link
        class="inline-block bg-theme-light hover:bg-theme-dark text-white font-bold py-2 px-4 rounded mx-2 inline-flex items-center"
        to="/download"
      >去下载</router-link>
    </div>
    <div data-id="city" data-uid="MTAyMC8yOTcxNS82Mjgz" id="lv-container"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    const j = document.createElement('script');
    const e = document.getElementsByTagName('script')[0];
    if (typeof LivereTower === 'function') return;
    j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
    j.async = true;
    j.onload = () => {};
    e.parentNode.insertBefore(j, e);
  }
};
</script>

<style>
</style>