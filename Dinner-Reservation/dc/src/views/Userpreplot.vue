<template>
    <div class="u_preplot bg">
        <!-- 餐厅预订订单页面 -->
        <div class="u_preplot_yu">
            <!-- 导航部分 -->
            <img src="../../public/img/details/return.png" alt="">
            <span class="font_family">餐厅详情</span>
        </div>
        <div class="mt">
            <div>
                <span>人数</span>
                <span>4人</span>
            </div>
            <span>时间</span>
            <span>请选择就餐时间</span>
        </div>
        <!-- 预订包房 -->
        <div>
            <span>我要预订包房</span>
            <!-- 开关 -->
            <mt-switch type="" size="small"></mt-switch>
        </div>
        <!-- 用户信息 -->
        <div>
            <!-- <mt-radio value="男士"></mt-radio> -->
            <!-- <mt-input></mt-input> -->
            <span>电话</span>
        </div>
        <div>
            <input type="text" placeholder="如有附加需求，请填写，餐厅将尽量安排">
        </div>
        <div>
            <span>替他人订餐</span>
        </div>
        <mt-button type="danger" size="small">确定提交</mt-button>
    </div>
</template>
<script>
    export default {
        
    };
</script>
<style>

</style>
