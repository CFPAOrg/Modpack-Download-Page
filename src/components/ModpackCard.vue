<template>
  <div class="mt-4 py-4 border-b-4 md:border-l-4 md:border-b-0 border-theme-light bg-white">
    <img
      :src="data.logo"
      alt="logo"
      class="text-center block mx-auto w-20 h-20 md:inline-block md:w-16 md:h-16 md:mx-4"
    />
    <div class="block md:inline-block align-top">
      <div class="mt-1">
        <div class="block md:inline text-center mt-2 md:mt-0">
          <router-link :to="'/download/' + data.id" class="link" v-if="link">{{ data.name }}</router-link>
          <span v-else>{{ data.name }}</span>
        </div>
        <span
          class="block md:inline mt-2 md:mt-0 text-center align-bottom md:ml-4 text-xs"
          v-if="link"
        >
          由
          <span :key="index" v-for="(author, index) in data.author">
            <a
              :href="'http://github.com/' + author.username"
              class="link"
              target="_blank"
            >{{ author.name }}</a>
            {{ data.author.length - 1 > index ? '/' : '' }}
          </span>
          翻译
        </span>
      </div>

      <div class="mt-2 text-center md:text-left">
        最新版本 {{ data.latest }} 更新于
        <span
          :title="formatTime(data.time)"
          class="border-b border-dotted border-gray-800"
        >{{ relativeTime(data.time) }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {formatTime, relativeTime} from '@/utils';

export default {
  name: 'ModpackCard',
  props: {
    data: {
      type: Object
    },
    link: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    relativeTime,
    formatTime
  }
};
</script>