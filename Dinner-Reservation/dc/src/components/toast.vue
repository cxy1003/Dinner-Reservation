<!--客服评分-->
<template>
	<transition name='fade'>
		<div v-if="showToast" @click="toggle">
			<div class="xw-toast-content">
				<div class='xw-toast-text'>
					<slot></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>


export default{
	props:{
		showToast:{
			type:Boolean,
			default:true
		}
	},
	data(){
		return{

		}
	},
	methods:{
		toggle(){

		}
	}
}
</script>


