<template>
    <div class="bg">
        <!-- 我的里的设置页面 -->
        <!-- 页头设置 -->
        <div class="setting">
            <img src="../img/indexs/jian.png" alt="">
            <span>设置</span>
        </div>
        <!-- 会员积分说明 -->
        <p class="font_family">会员&积分说明
            <img src="../img/indexs/jian1.png" alt="">
        </p>
        <p class="font_family">在微信关注我们
            <img src="../img/indexs/jian1.png" alt="">
        </p>
        <p @click="sharing" class="font_family">分享APP
            <img src="../img/indexs/jian1.png" alt="">
        </p>
        <div class="weour">
            <span class="font_family">意见反馈</span>
            <span class="font_family" style="font-size:10px;">让我们变得更好
            </span>
        </div>     
        <p class="font_family">关于我们
            <img src="../img/indexs/jian1.png" alt="">
        </p>
    </div>
</template>
<script>
export default {
    data(){},
    methods:{
        sharing(){
           this.$messagebox("公众号'专属小秘'已复制，您可直接分享")
        }
    }
}
</script>
<style scoped>
    @import url("../assets/css/comm.css");
    @import url("../assets/css/install.css");
</style>
