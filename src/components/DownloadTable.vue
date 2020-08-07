<template>
	<div>
		<div class="container is-fluid table-container">
			<table class="table is-fullwidth download-table is-hoverable">
				<thead>
				<tr>
					<th></th>
					<th>版本</th>
					<th>上传时间</th>
					<th>下载</th>
				</tr>
				</thead>
				<tbody>
				<tr v-for="(item, i) in sortedData" :key="i">
					<th><span class="icon" v-if="item.time === max(data.contents.map(v => v.time))"><i
						class="iconfont icon-new"></i></span></th>
					<td>{{ item.version }}</td>
					<td>{{ formatTime(item.time) }}</td>
					<td>
						<a href="javascript:void(0);" @click="download(i)">点击下载</a>
					</td>
				</tr>
				</tbody>
			</table>
		</div>
		<download-detail v-if="downloadData" :show.sync="showDetail" :data="downloadData"/>
	</div>

</template>
<style>
	.download-table {
		background-color: transparent !important;
	}
</style>
<script>
	import dayjs from 'dayjs';
	import arrayMax from 'lodash._arraymax';
	import DownloadDetail from './DownloadDetail';

	export default {
		props: ['data'],
		components: { DownloadDetail },
		data () {
			return {
				showDetail: false,
				downloadData: null
			}
		},
		methods: {
			download (index) {
				this.downloadData = this.data.contents[index];
				this.showDetail = true;
			},
			formatTime (time) {
				return dayjs(time * 1000).format('YYYY/MM/DD HH:mm:ss')
			},
			max (arr) {
				return arrayMax(arr);
			}
		},
		computed: {
			sortedData () {
				return this.data.contents;
			}
		}
	}
</script>
