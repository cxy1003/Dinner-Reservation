<template>
    <div class="u_preplot bg l_r_padding">
        <!-- 餐厅预订订单页面 -->
        <div class="u_preplot_yu">
            <!-- 导航部分 -->
            <img src="../../public/img/details/return.png" alt="">
            <span class="font_family">餐厅详情</span>
        </div>
        <div class="mt u_info bb">
            <div class="bb t_b_padding">
                <span class="font_family u_bg_margin">人数</span>
                <span class="font_family">4人&gt;</span>
            </div>
            <div class="t_b_padding ">
                <span class="font_family u_b_margin">时间</span>
                <span class="font_family ">请选择就餐时间&gt;</span>
            </div>
        </div>
        <!-- 预订包房 -->
        <div class="u_switch bt bb t_b_padding">
            <span>我要预订包房</span>
            <!-- 开关 -->
            <mt-switch  size="small"></mt-switch>
        </div>
        <!-- 用户信息 -->
        <div class="">
            <div class="u_radio mb">
                <input type="radio"  name="sex" class="mint-radio-core">男
                <input type="radio" name="sex" class="mint-radio-core">女
            </div>
            <div class=" bt bb t_b_padding">
                <span>18720569325</span>
            </div>
        </div>
        <!-- 需求安排 -->
        <div class="u_anpai bb">
            <input type="text" placeholder="如有附加需求，请填写，餐厅将尽量安排">
        </div>
        <div class="u_switch bt bb t_b_padding">
            <span>替他人订餐</span>
            <!-- 开关 -->
            <mt-switch  size="small"></mt-switch>
        </div>

        <div class="u_end  bb">
            <mt-button type="danger" size="small" align="center">确定提交</mt-button>
        </div>
    </div>
    
</template>
<script>
    export default {
        
    };
</script>
<style>
    @import url("../assets/css/userpreplot.css");
</style>
