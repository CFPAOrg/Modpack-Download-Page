<template>
  <div>
    <div class="bg-white border-t-4 border-theme-light border-solid py-4 px-4 md:px-6 lg:px-8">
      <p class="md:text-2xl text-xl font-bold">文件下载</p>
      <div class="flex flex-wrap">
        <div class="w-full mt-4 order-1 lg:order-1 md:w-1/2 lg:w-1/3">
          <div class="font-bold">版本</div>
          <div>{{ data.files[0].version }}</div>
        </div>
        <div class="w-full mt-4 order-2 lg:order-4 md:w-1/2 lg:w-1/3">
          <div class="font-bold">更新时间</div>
          <div>{{ formatTime(data.files[0].time) }}</div>
        </div>
        <div class="w-full mt-4 order-3 lg:order-2 md:w-1/2 lg:w-1/3">
          <div class="font-bold">Windows下载地址</div>
          <div>
            <a
              :href="data.files[0].windows.url"
              class="link"
            >{{ data.id }}-{{ data.files[0].version }}-windows.zip</a>
          </div>
        </div>
        <div class="w-full mt-4 order-4 lg:order-5 md:w-1/2 lg:w-1/3">
          <div class="font-bold">Windows MD5</div>
          <div class="break-all">{{ data.files[0].windows.md5 }}</div>
        </div>
        <div class="w-full mt-4 order-5 lg:order-3 md:w-1/2 lg:w-1/3">
          <div class="font-bold">Linux下载地址</div>
          <div>
            <a
              :href="data.files[0].linux.url"
              class="link"
            >{{ data.id }}-{{ data.files[0].version }}-linux.zip</a>
          </div>
        </div>
        <div class="w-full mt-4 order-6 lg:order-6 md:w-1/2 lg:w-1/3">
          <div class="font-bold">Linux MD5</div>
          <div class="break-all">{{ data.files[0].linux.md5 }}</div>
        </div>
      </div>
      <div class="flex flex-wrap" v-if="false">
        <div class="w-full mt-4 md:w-1/2 lg:w-1/6">
          <div class="font-bold">版本</div>
          <div>{{ data.files[0].version }}</div>
        </div>
        <div class="w-full mt-4 md:w-1/2 lg:w-1/6">
          <div class="font-bold">更新时间</div>
          <div>{{ formatTime(data.files[0].time) }}</div>
        </div>
        <div class="w-full mt-4 md:w-1/2 lg:w-1/3">
          <div class="font-bold">下载地址</div>
          <div>
            <a
              :href="data.files[0].windows.url"
              class="link"
            >{{ data.id }}-{{ data.files[0].version }}-windows.zip</a>
          </div>
        </div>
        <div class="w-full mt-4 md:w-1/2 lg:w-1/3">
          <div class="font-bold">MD5</div>
          <div class="break-all">{{ data.files[0].windows.md5 }}</div>
        </div>
      </div>
    </div>
    <collapse-version :data="data.files[0]" />
  </div>
</template>

<script>
import CollapseVersion from '@/components/CollapseVersion';
import {formatTime} from '@/utils';

export default {
  name: 'Files',
  props: ['data'],
  components: {CollapseVersion},
  methods: {
    formatTime
  }
};
</script>

<style>
</style>