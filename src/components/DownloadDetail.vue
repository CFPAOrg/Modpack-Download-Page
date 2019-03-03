<template>
	<b-modal :active.sync="active" @close="onClose">
		<div class="detail-container">
			<div v-if="!showHash">
				<p class="has-text-grey-dark">请选择平台</p>
				<a class="button is-primary" :href="data.windows.url" @click="download('windows')">
					<span class="icon"><i class="iconfont icon-windows"></i></span>
					<span>Windows</span>
				</a>
				<a class="button is-primary" :href="data.linux.url" @click="download('linux')">
					<span class="icon"><i class="iconfont icon-linux"></i></span>
					<span>Linux</span>
				</a>
			</div>
			<div class="detail has-text-grey-dark" v-if="showHash">
				<p>下载中，如下载未开始请 <a class="link" :href="data[platform].url">点击此处</a></p>
				<ul class="detail-list">
					<li>
						<dl>
							<dt>MD5</dt>
							<dd><code>{{ data.windows.md5 }}</code></dd>
						</dl>
					</li>
					<li>
						<dl>
							<dt>SHA-1</dt>
							<dd><code>{{ data.windows.sha1 }}</code></dd>
						</dl>
					</li>
					<li>
						<dl>
							<dt>上传时间</dt>
							<dd>{{ formatTime(data.time) }}</dd>
						</dl>
					</li>
					<li>
						<dl>
							<dt>翻译者</dt>
							<dd>
								<p v-for="author in data.author"><a class="link" :href="'https://github.com/'+author"
								                                    target="_blank">{{author}}</a></p>
							</dd>
						</dl>
					</li>
				</ul>
			</div>
		</div>
	</b-modal>
</template>
<script>
	import dayjs from 'dayjs';

	export default {
		name: 'download-detail',
		props: ['show', 'data'],
		data () {
			return {
				showHash: false,
				platform: ''
			}
		},
		methods: {
			download (platform) {
				this.platform = platform;
				this.showHash = true;
			},
			onClose () {
				this.platform = '';
				this.showHash = false;
			},
			formatTime (time) {
				return dayjs(time * 1000).format('YYYY/MM/DD HH:mm:ss')
			}
		},
		computed: {
			active: {
				get () {
					return this.show;
				},
				set (val) {
					this.$emit('update:show', val);
				}
			}
		}
	}
</script>
<style lang="scss">
	a.link:hover {
		color: hsl(0, 0%, 29%) !important;
	}

	.detail-container {
		margin: 0 16px;
	}

	.detail-list {
		margin-top: 16px;
		li {
			margin-top: 16px;
		}
		dl {
			dt {
				font-weight: bold;
			}
		}
	}
</style>
