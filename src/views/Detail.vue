<template>
  <div>
    <div class="lds-hourglass mt-8" v-if="!data"></div>
    <div v-else>
      <modpack-card :border="false" :data="data" :link="false" />

      <div class="mt-4">
        <router-link
          :to="`/download/${$route.params.id}/`"
          class="nav-link mr-4"
          exact
        >详情</router-link>
        <router-link
          :to="`/download/${$route.params.id}/files`"
          class="nav-link mr-4"
        >文件</router-link>
      </div>
      <div class="clearfix"></div>
      <div class="mt-4">
        <router-view :data="data"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import {formatTime, relativeTime} from '@/utils';
import ModpackCard from '@/components/ModpackCard';

export default {
  name: 'Detail',
  components: {ModpackCard},
  data() {
    return {
      data: null
    };
  },
  methods: {
    formatTime,
    relativeTime
  },
  async mounted() {
    const {data} = await this.$axios.get('/' + this.$route.params.id + '.json');
    this.data = data;
  }
};
</script>
