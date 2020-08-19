<template>
  <div data-id="city" data-uid="MTAyMC8yOTcxNS82Mjgz" id="lv-container"></div>
</template>
<script>
export default {
  name: 'Comment',
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