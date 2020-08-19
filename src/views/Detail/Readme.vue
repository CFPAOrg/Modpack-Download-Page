<template>
  <div>
    <div class="grid grid-cols-12 gap-4 mb-4">
      <div class="col-span-12 md:col-span-8 lg:col-span-9">
        <div
          class="markdown py-4 px-4 md:px-6 lg:px-8 bg-white border-t-4 border-theme-light border-solid"
          v-html="markdown(data.readme)"
        ></div>
      </div>
      <div class="col-span-12 md:col-span-4 lg:col-span-3">
        <div class="bg-white border-t-4 border-theme-light border-solid py-4 px-4">
          <p class="text-2xl font-bold">整合包详情</p>
          <div class="mt-4">
            <p class="font-bold">整合包地址：</p>
            <div class="break-all">
              <a :href="data.url" :title="data.url" class="link" target="_blank">{{ data.url }}</a>
            </div>
          </div>
          <div class="mt-4">
            <p class="font-bold">译者：</p>
            <ul>
              <li :key="index" v-for="(author, index) in data.author">
                <a
                  :href="`https://github.com/${author.username}`"
                  class="link"
                  target="_blank"
                >{{ author.name }}</a>
              </li>
            </ul>
          </div>
          <div class="mt-4">
            <p class="font-bold">上次更新时间：</p>
            <div>{{ formatTime(data.time) }}</div>
          </div>
          <div class="mt-4">
            <p class="font-bold">版本：</p>
            <ul>
              <li :key="index" v-for="(file, index) in data.files">{{ file.version }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <comment />
  </div>
</template>

<script>
import showdown from 'showdown';
import Comment from '@/components/Comment';
import {formatTime} from '@/utils';


showdown.setOption('openLinksInNewWindow', true);
const converter = new showdown.Converter();

export default {
  name: 'Readme',
  components: {
    Comment
  },
  props: ['data'],
  methods: {
    markdown(text) {
      return converter.makeHtml(text);
    },
    formatTime
  }
};
</script>