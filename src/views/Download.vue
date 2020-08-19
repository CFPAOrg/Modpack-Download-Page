<template>
  <div>
    <p class="text-2xl my-4">
      整合包列表
      <button
        :class="[
          'rounded-full float-right h-8 mt-1 focus:outline-none transition-all duration-300 ease-out text-left overflow-hidden relative',
          { 
            'bg-theme-light': !isShowSearch,
            'hover:bg-theme-dark': !isShowSearch,
            'text-white': !isShowSearch,
            'w-8': !isShowSearch,
            'isShowSearch-button-focus': isShowSearch,
            'bg-gray-300': isShowSearch,
            'cursor-default': isShowSearch,
            'text-black': isShowSearch
          }
        ]"
        :disabled="isShowSearch"
        @click="showSearch"
        style="line-height: 32px;"
      >
        <div class="absolute top-0 left-0" style="width: 220px;">
          <i
            :class="[
              'transition-margin duration-300 ease-out iconfont icon-search text-base align-text-bottom',
              {
                'ml-2': !isShowSearch,
                'ml-3': isShowSearch
              }
            ]"
            class
          ></i>
          <input
            @blur="onSearchBlur"
            @keydown.esc="onSearchEsc"
            class="outline-none inline-block bg-transparent h-6 ml-2 text-base relative"
            placeholder="按“/”可快捷打开搜索"
            ref="searchInput"
            style="width: 180px; top: -3px"
            type="text"
            v-model="searchText"
            v-show="isShowSearch"
          />
          <button
            @click="onClearClick"
            class="w-3 h-3 absolute cursor-pointer focus:outline-none"
            style="right: 8px; top: 10px"
          >
            <i class="h-3 icon-close iconfont relative text-xs" style="top: -14px"></i>
          </button>
        </div>
      </button>
    </p>
    <div class="lds-hourglass" v-if="!list"></div>
    <div class="mb-8" v-else>
      <modpack-card :data="item" :key="item.id" v-for="item in list" />
    </div>
  </div>
</template>

<script>
import Fuse from 'fuse.js';
import ModpackCard from '@/components/ModpackCard';

let fuse;

export default {
  name: 'Download',
  components: {ModpackCard},
  data() {
    return {
      list: null,
      rawList: null,
      isShowSearch: false,
      searchText: ''
    };
  },
  watch: {
    searchText() {
      this.filterList();
    }
  },
  methods: {
    onKeyPress(event) {
      if (event.code === 'Slash') {
        this.showSearch();
      }
    },
    onSearchEsc() {
      this.$refs.searchInput.blur();
    },
    showSearch() {
      this.isShowSearch = true;
      setTimeout(() => {
        this.$refs.searchInput.focus();
      });
    },
    onClearClick() {
      this.searchText = '';
      this.$refs.searchInput.focus();
    },
    onSearchBlur() {
      setTimeout(() => {
        if (document.activeElement !== this.$refs.searchInput) {
          this.isShowSearch = !!this.searchText;
        }
      }, 200);
    },
    filterList() {
      if (!this.searchText) this.list = this.rawList;
      else {
        this.list = fuse.search(this.searchText).map((v) => v.item);
      }
    }
  },
  async mounted() {
    const {data} = await this.$axios.get('/index.json');
    this.rawList = data;
    fuse = new Fuse(this.rawList, {
      keys: ['name']
    });
    this.filterList();
    document.addEventListener('keypress', this.onKeyPress);
  },
  beforeDestroy() {
    document.removeEventListener('keypress', this.onKeyPress);
  }
};
</script>

<style>
.isShowSearch-button-focus {
  width: 220px;
}
</style>