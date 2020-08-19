<template>
  <div class="bg-white border-t-4 border-theme-light border-solid py-4 px-4 my-4 md:px-6 lg:px-8">
    <p @click="show = !show" class="md:text-2xl text-xl font-bold cursor-pointer relative select-none">
      <i
        :class="[
            'iconfont icon-enter inline-block transform transition-transform duration-300 ease-out',
            {
              'rotate-90': show
            }
          ]"
      ></i>
      <span
        :class="[
            'inline-block transform absolute transition-all duration-300 ease-out pl-2',
            {
              '-translate-y-8': !show,
              'opacity-0': !show,
              'invisible': !show
            }
          ]"
        style="transform-origin: -14px 15px; left: 24px"
      >历史版本下载</span>
      <span
        :class="[
            'inline-block transform absolute transition-all duration-300 ease-out pl-1',
            {
              'translate-y-8': show,
              'opacity-0': show,
              'invisible': show
            }
          ]"
        style="transform-origin: -14px 15px; left: 24px"
      >{{ data.version }}</span>
    </p>
    <div class="overflow-hidden transition-height duration-300 ease-out" :style="{ height: show ? getHeight() : 0 }">
      <div class="flex flex-wrap" ref="content">
        <div class="w-full mt-4 order-1 lg:order-1 md:w-1/2 lg:w-1/3">
          <div class="font-bold">版本</div>
          <div>{{ data.version }}</div>
        </div>
        <div class="w-full mt-4 order-2 lg:order-4 md:w-1/2 lg:w-1/3">
          <div class="font-bold">更新时间</div>
          <div>{{ formatTime(data.time) }}</div>
        </div>
        <div class="w-full mt-4 order-3 lg:order-2 md:w-1/2 lg:w-1/3">
          <div class="font-bold">Windows下载地址</div>
          <div>
            <a :href="data.windows.url" class="link">{{ data.id }}-{{ data.version }}-windows.zip</a>
          </div>
        </div>
        <div class="w-full mt-4 order-4 lg:order-5 md:w-1/2 lg:w-1/3">
          <div class="font-bold">Windows MD5</div>
          <div class="break-all">{{ data.windows.md5 }}</div>
        </div>
        <div class="w-full mt-4 order-5 lg:order-3 md:w-1/2 lg:w-1/3">
          <div class="font-bold">Linux下载地址</div>
          <div>
            <a :href="data.linux.url" class="link">{{ data.id }}-{{ data.version }}-linux.zip</a>
          </div>
        </div>
        <div class="w-full mt-4 order-6 lg:order-6 md:w-1/2 lg:w-1/3">
          <div class="font-bold">Linux MD5</div>
          <div class="break-all">{{ data.linux.md5 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formatTime} from '@/utils';

export default {
  name: 'CollapseVersion',
  props: ['data'],
  data() {
    return {
      show: false
    };
  },
  methods: {
    formatTime,
    getHeight() {
      const {height} = this.$refs.content.getBoundingClientRect();
      return height + 'px';
    }
  }
};
</script>