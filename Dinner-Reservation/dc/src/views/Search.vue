<template>
<div id="Search">
    <mt-header title="选择城市">
        <router-link to="/" slot="left">
            <mt-button icon="back">back</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-index-list>
        <mt-index-section index="热门城市">
            <mt-cell title="上海"></mt-cell>
            <mt-cell title="北京"></mt-cell>
            <mt-cell title="西安"></mt-cell>
        </mt-index-section>
        <mt-index-section index="A">
            <mt-cell title="安康"></mt-cell>
            <mt-cell title="阿里"></mt-cell>
            <mt-cell title="安顺"></mt-cell>
        </mt-index-section>
        <mt-index-section index="B">
            <mt-cell title="北京"></mt-cell>
            <mt-cell title="宝鸡"></mt-cell>
        </mt-index-section>
        <mt-index-section index="S">
            <mt-cell title="上海"></mt-cell>
            <mt-cell title="深圳"></mt-cell>
        </mt-index-section>
    </mt-index-list>
</div>
</template>
<script>
export default {
    data(){
        return{}
    },
};
</script>
<style>
</style>
