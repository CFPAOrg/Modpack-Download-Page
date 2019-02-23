<template>
	<keep-alive>
		<div class="modal" ref="modal">
			<div class="modal-background"></div>
			<div class="modal-content">
				<loading v-if="loading"/>
				<div id="lv-container" data-id="city" data-uid="MTAyMC8yOTcxNS82Mjgz"></div>
			</div>
			<button class="modal-close is-large" aria-label="close" @click="close"></button>
		</div>
	</keep-alive>
</template>
<script>
	import Loading from './Loading';

	export default {
		name: 'comment',
		props: ['show'],
		components: { Loading },
		data () {
			return {
				loading: true,
			}
		},
		methods: {
			loadComment () {
				var j, e = document.getElementsByTagName('script')[0];
				if (typeof LivereTower === 'function') {
					return;
				}
				j = document.createElement('script');
				j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
				j.async = true;
				j.onload = () => {
					this.loading = false;
				};
				e.parentNode.insertBefore(j, e);
			},
			open () {
				this.$refs.modal.className = 'modal is-active';
				this.$emit('update:show', true);
			},
			close () {
				this.$refs.modal.className = 'modal';
				this.$emit('update:show', false);
			}
		},
		watch: {
			show (val) {
				if (val) this.open();
				else this.close();
			}
		},
		mounted () {
			this.loadComment();
		}
	}
</script>
