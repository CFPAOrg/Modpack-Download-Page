<template>
	<div class="container is-fluid table-container">
		<table class="table is-fullwidth download-table has-text-white">
			<thead>
			<tr>
				<th></th>
				<th>版本</th>
				<th>Windows版</th>
				<th>Linux版</th>
				<th>发布时间</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="item in data.contents">
				<th><span class="icon"><i v-if="item" class="iconfont icon-new"></i></span></th>
				<td>{{ item.version }}</td>
				<td>
					<a :href="item.windows.url">点我下载</a>
					<b-tooltip label="MD5:<br>SHA1:" position="is-right" type="is-white">
						<span class="icon"><i class="iconfont icon-info"></i></span>
					</b-tooltip>
				</td>
				<td>
					<a :href="item.linux.url">点我下载</a>
					<b-tooltip label="MD5:<br>SHA1:" position="is-right" type="is-white">
						<span class="icon"><i class="iconfont icon-info"></i></span>
					</b-tooltip>
				</td>
				<td>2019.2.20 12:19:23</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>
<style>
	.download-table {
		background-color: transparent;
	}

	.download-table th {
		color: #FFFFFF !important;
	}
</style>
<script>
	export default {
		props: ['data']
	}
</script>
