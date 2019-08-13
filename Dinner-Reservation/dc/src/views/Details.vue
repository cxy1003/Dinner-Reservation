<template>
    <div class="bg">
        <!-- 导航部分 -->
        <div class="d_bar">
            <div class="d_img">
                <img src="../../public/img/details/return.png" alt="">
            </div>
            <div class="d_size">餐厅详情</div>
            <div>
                <img class="d_img_two" src="../../public/img/details/share.png" alt="">
                <img src="../../public/img/details/start.png" alt="">
            </div>
        </div>
        <!-- 详情页 -->
        <div class="details font_family">
            <!-- 详情页图片部分 -->
            <div class="details_img">
                <img src="../../public/img/details/d11.jpg" alt="">
            </div>
            <!-- 店家详情 -->
            <div class="d_title">
                <p class="d_title_store">粤珍轩 土门商厦店</p>
                <div>
                    <div id="d1">
                        <img src="../../public/img/details/ss1.png" alt="">
                        <img src="../../public/img/details/ss1.png" alt="">
                        <img src="../../public/img/details/ss1.png" alt="">
                        <img src="../../public/img/details/ss1.png" alt="">
                        <img src="../../public/img/details/ss1.png" alt="">
                        <span class="font_span">¥60-100</span>
                    </div>
                    <div>
                        <span  class="font_span d-mp">粤菜馆</span>
                    </div>
                </div>
                <p class="font_span mb mt">口味 3.6 环境 3.6 服务 3.6</p>
            </div>
            <!-- 地址部分 -->
            <div class="adress">
                <img src="../../public/img/details/ad.png" alt="">
                <span class="font_span mr">丰镐东路509号 (土门十字东北角国美电器旁3楼)</span>
                <img src="../../public/img/details/phone.png" alt="">
            </div>
            <!-- 提示信息 -->
            <div class="d_info mb">
                <img src="../../public/img/details/info.png" alt="">
                <span class="font_span">餐厅分为中餐和火锅，预定时请告知</span>
            </div>
            <!-- 优惠活动 -->
            <div class="d_actity">
                <div class="t_b_padding">
                    <span class="font_price ">|</span><span class="font_span"> 优惠信息</span>
                </div>
                <div>
                    <img src="../../public/img/details/ji.png" alt="">
                    <span class="font_span l_r_padding">吃一元，积一分</span>
                </div>
            </div>
            <!-- 推荐菜 -->
            <div class="tui bt mt">
                <div class="t_b_padding bb">
                    <span class="font_price ">|</span>
                    <span class="font_span">  推荐菜</span>
                </div>
                <div class="d_more_img">
                    <img src="../../public/img/details/11.jpg" alt="" class="mr_s">
                    <img src="../../public/img/details/22.jpg" alt="">
                    <img src="../../public/img/details/33.jpg" alt="" class="mr_s">
                    <img src="../../public/img/details/44.jpg" alt="">
                </div>
            </div>
            <!-- 餐厅基本信息 -->
            <div class="d_can">
                <div class="t_b_padding">
                    <span class="font_price ">|</span>
                    <span class="font_span">  餐厅基本信息</span>
                </div>
                <!-- 地图部分预留 -->
                <div class="d_map t_b_padding">地图
                    <img src="" alt="">
                </div>
                <div class="t_b_padding bb">
                    <span class="font_price font_span">详情介绍:</span>
                    <span class="l_r_padding font_span">
                        粤珍轩，一家主打粤菜的餐厅。餐厅装修的很现代化。进入宽敞的大厅，首先进入眼帘的是整齐的桌椅。大厅可以提供200位客人同时就餐。进入包房,包房以暖色调为主，给人一种温暖的感觉。餐厅的台湾卤肉、榴莲酥、香酥肉饼、豆豉蒸排骨、酿三宝都很不错，值得一试。营业时间：10:00-22:00
                    </span>
                </div>
                <div class="t_b_padding">
                    <span class="font_price font_span">电话：</span>
                    <span class="font_span">02157575777</span>
                </div>
            </div>
            <!-- 拍照和点评的功能模块 -->
            <div class="d_other t_b_padding">
                <ul>
                    <li>
                        <img src="../../public/img/details/gga.png" alt="">
                        <p class="p_style">&nbsp;拍照</p>
                    </li>
                    <li>
                        <img src="../../public/img/details/ggb.png" alt="">
                        <p class="p_style">&nbsp;点评</p>
                    </li>
                    <li>
                        <img src="../../public/img/details/ggc.png" alt="">
                        <p class="p_style">&nbsp;推荐</p>
                    </li>
                    <li>
                        <img src="../../public/img/details/ggd.png" alt="">
                        <p class="p_style">&nbsp;报错</p>
                    </li>
                </ul>
            </div>
            <!-- 推荐 -->
            <div class="d_recommed">
                <div class="bt bb t_b_padding">
                    <span class="font_price">|</span>
                    <span class="font_span"> 小伙伴们还喜欢</span>
                </div>
            </div>
        </div>
        <!-- 立即预定 -->
        <div class="d_ding">
            <mt-button type="danger" size="large">立即预定</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
   @import url(../assets/css/details.css); 
</style>