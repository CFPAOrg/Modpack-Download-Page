<template>
	<div id="app">
		<h1 class="is-size-2 has-text-centered title">整合包汉化补丁下载</h1>
		<ul class="aside has-text-grey-dark" v-bind:class="{'aside-show':showAside}">
			<li v-for="(item, index) in data" @click="showDownloads(index)"
			    v-bind:class="{'aside-active': index === modpackIndex}">
				{{ item.name }}
			</li>
		</ul>
		<buttons-menu @toggle="showAside = !showAside" @comment="showCommentModal = true"/>
		<div class="app">
			<div class="app-container container">
				<div class="loading">
					<loading v-if="loading"/>
				</div>
				<div class="notice md" ref="notice" v-show="showNotice"></div>
				<download-table :data="data[modpackIndex]" v-if="modpackIndex !== -1"/>
			</div>
		</div>
		<comment :show.sync="showCommentModal"/>
	</div>
</template>

<script>
	import Loading from "./components/Loading";
	import DownloadTable from './components/DownloadTable';
	import ButtonsMenu from './components/ButtonsMenu';
	import Comment from './components/Comment';
	import pMinDelay from 'p-min-delay';
	import marked from 'marked';

	export default {
		name: "App",
		components: {
			Loading,
			DownloadTable,
			ButtonsMenu,
			Comment
		},
		data () {
			return {
				loading: true,
				data: null,
				notice: '',
				showNotice: true,
				modpackIndex: -1,
				showAside: false,
				showCommentModal: false
			}
		},
		beforeCreate () {
			// const IMAGE_LENGTH = 1;
			// let random = Math.ceil(Math.random() * IMAGE_LENGTH);
			// let direction = window.innerWidth > window.innerHeight ? 'h' : 'v';
			// let { body } = document;
			// body.style.background = `url('static/bg/${random}_${direction}.jpg') no-repeat`;
			// body.style.backgroundSize = 'cover';
			// body.style.backgroundPosition = 'center';
		},
		mounted () {
			let delay = 800;
			let data = this.$http.get('static/data.json?t=' + new Date().getTime());
			let notice = this.$http.get('static/notice.md');

			pMinDelay(Promise.all([data, notice]), delay).then((value) => {
				this.loading = false;
				this.data = value[0].data;
				this.notice = value[1].data;
				this.$refs.notice.innerHTML = this.parseMd(this.notice);
			});
		},
		methods: {
			showDownloads (index) {
				this.modpackIndex = index;
				let md = `## ${this.data[index].name}整合包汉化下载`;
				this.$refs.notice.innerHTML = this.parseMd(md);
			},
			parseMd (data) {
				let renderer = new marked.Renderer();
				renderer.link = (href, title, text) => `<a target="_blank" href="${href}" title="${title}">${text}</a>`;
				return marked(data, { renderer });
			}
		},
		computed: {
			isMobile () {
				return window.innerWidth <= 768;
			}
		}
	};
</script>

<style lang="scss">
	$aside-width: 320px;
	$primary: #00D1B2;
	#app {
		width: 100%;
		height: 100%;
		/*background-color: rgba(0, 0, 0, .6);*/

		.aside {
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
			flex-direction: column;
			width: $aside-width;
			background-color: rgba(255, 255, 255, .6);
			z-index: 1;
			overflow-x: hidden;
			overflow-y: auto;
			transition: all .3s ease-out;
			border-right: 3px solid $primary;
		}

		.aside li {
			cursor: pointer;
			line-height: 40px;
			border-right: 3px solid $primary;
			width: $aside-width;
			padding: 0 2rem;
			transition: border-right-width .3s ease-out;
			user-select: none;
		}

		.aside li:hover {
			border-right-width: 23px;
		}

		.aside li.aside-active {
			border-right-width: 23px;
		}

		.title {
			position: absolute;
			left: $aside-width;
			right: 0;
			top: 13%;
			top: calc(20% - 4rem);
		}

		.app {
			width: 80%;
			width: calc(100% - #{$aside-width});
			position: absolute;
			right: 0;
			height: 100%;
		}

		.app-container {
			height: 70%;
			margin: auto;
			position: relative;
			top: 20%;
			max-width: 90%;
			border: 3px solid $primary;
			-webkit-border-radius: 16px;
			-moz-border-radius: 16px;
			border-radius: 16px;
			padding: 16px;
			overflow-y: auto;
		}

		.app-container h1 {
			margin-top: -4.5rem;
		}

		.pack-name {
			margin-top: 16px;
		}
	}

	@media screen and (max-width: 1087px) {
		#app {
			.app-container {
				margin: auto 8px;
				max-width: 100%;
			}

			.app {
				width: 100%;
			}

			.aside {
				transform: translateX(-$aside-width);
				background-color: #FFFFFF;
			}

			.aside-show {
				transform: translateX(0);
			}

			.title {
				left: 0;
			}
		}
	}
</style>
