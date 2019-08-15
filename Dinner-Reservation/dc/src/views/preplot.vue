<template>

<div>

<!-- 模糊查询功能暂未实现 -->

<div class="page-serch">

<mt-search v-model="value" :result="filterSerch" placeholder="输入船舶名"></mt-search>

</div>

<div>

<mt-index-list>

<mt-index-section v-for="(item,index) in ashipList" :key="index" :index="item.title">

<mt-cell v-for="(value,key) in item.ashipMsg" :key="key">

<p></p >

<!-- <p>< img :src="value.imgUrl" alt></p > -->

<p>{{value.name}}</p >

<p>
<span>{{value.mmsi}}</span>
</p >
<p>
载重:
<span>{{value.loder}}</span>
</p >
</mt-cell>
</mt-index-section>
</mt-index-list>
</div>
</div>
</template>
<script>
export default {
name: "page-serch",
data() {
return {
value: "",
result:[],
ashipList: [
{
title: "A",
ashipMsg: [
{imgUrl: "/static/img/mao.jpg",
name: "啊屏风",
mmsi: "393282711",
loder: "74228.67"
},{
imgUrl: "/static/img/mao.jpg",
name: "啊屏风",
mmsi: "393282711",
loder: "74228.67"
},{
imgUrl: "/static/img/mao.jpg",
name: "啊屏风",
mmsi: "393282711",
loder: "74228.67"
}
]},
{
title: "B",
ashipMsg: [
{
imgUrl: "/static/img/mao.jpg",
name: "吧屏风",
mmsi: "393282711",
loder: "74228.67"
},{
imgUrl: "/static/img/mao.jpg",
name: "吧屏风",
mmsi: "393282711",
loder: "74228.67"
},{
imgUrl: "/static/img/mao.jpg",
name: "吧屏风",
mmsi: "393282711",
loder: "74228.67"
}
]
},{

title: "C",

ashipMsg: [

{

imgUrl: "/static/img/mao.jpg",

name: "从屏风",

mmsi: "393282711",

loder: "74228.67"

},

{

imgUrl: "/static/img/mao.jpg",

name: "从屏风",

mmsi: "393282711",

loder: "74228.67"

},
{
imgUrl: "/static/img/mao.jpg",
name: "从屏风",
mmsi: "393282711",
loder: "74228.67"
}
]
},{
title: "D",
ashipMsg: [
{
imgUrl: "/static/img/mao.jpg",
name: "的屏风",
mmsi: "393282711",
loder: "74228.67"
},{
imgUrl: "/static/img/mao.jpg",
name: "的屏风",
mmsi: "393282711",
loder: "74228.67"
},{
imgUrl: "/static/img/mao.jpg",
name: "的屏风",
mmsi: "393282711",
loder: "74228.67"
}
]},
{
title: "E",
ashipMsg: [
{
imgUrl: "/static/img/mao.jpg",
name: "额屏风",
mmsi: "393282711",
loder: "74228.67"
},{

imgUrl: "/static/img/mao.jpg",

name: "额 屏风",

mmsi: "393282711",

loder: "74228.67"

},

{

imgUrl: "/static/img/mao.jpg",

name: "额屏风",

mmsi: "393282711",

loder: "74228.67"

}

]
},
{
title: "F",
ashipMsg: [
{
imgUrl: "/static/img/mao.jpg",
name: "发屏风",
mmsi: "393282711",
loder: "74228.67"
},{
imgUrl: "/static/img/mao.jpg",
name: "发屏风",
mmsi: "393282711",
loder: "74228.67"
},{
imgUrl: "/static/img/mao.jpg",
name: "发屏风",
mmsi: "393282711",
loder: "74228.67"
}
]},
{
title: "G",
ashipMsg: [
{
imgUrl: "/static/img/mao.jpg",
name: "给屏风",
mmsi: "393282711",
loder: "74228.67"
},{
imgUrl: "/static/img/mao.jpg",
name: "给屏风",
mmsi: "393282711",
loder: "74228.67"
},{
imgUrl: "/static/img/mao.jpg",
name: "给屏风",
mmsi: "393282711",
loder: "74228.67"
}
]
}
]
};
},
computed: {

//模糊查询方法

filterSerch() {

for(let k in this.ashipList){

//console.log(this.ashipList[k])

return this.result.filter(value=>new RegExp(this.value,'i').test(value))

}
// return
// this.ashipList.ashipMsg.filter(value =>
// new RegExp(this.value, "i").test(value)
// );
}
}
};
</script>
<style scoped>
.mint-search {
height: 1rem;
}
.mint-searchbar {
background: white;
}.mint-searchbar-inner {
border: solid 1px #fde6c9;
border-radius: 1rem;
padding: 0;
height: 0.48rem;
align-items: center;
}.mint-searchbar-core {

width: 80%;

padding: 0 0 0 0.2rem;

font-size: 0.24rem;

}

.mintui-search {

margin-left: 0.2rem;

margin-top: 0.1rem;

}.mint-cell-title {
flex: 0;
}
.mint-cell-value {
width: 100%;
font-size: 0.26rem;
}
.mint-cell-value p {

text-align: center;

}

.mint-cell-value p:first-of-type {

width: 10%;

}

.mint-cell-value p:first-of-type img {

width: 70%;

}
.mint-cell-value p:nth-of-type(2) {
color: black;
font-size: 0.28rem;
font-weight: 550;
}
.mint-cell-value p:nth-of-type(3),
.mint-cell-value p:nth-of-type(4) {
margin-left: 0.36rem;
}
.mint-cell-value p:nth-of-type(3) span,
.mint-cell-value p:nth-of-type(4) span {
display: inline-block;
margin-left: 0.1rem;
}
.mint-indexlist-nav {
border-left: none;
color: #0962b4;
background: rgba(253, 253, 255, 0.1);
}
.mint-indexlist-content {
margin-right: 0px !important;
}
.mint-indexsection-index {
background: #eff4fb;
padding: 0.04rem 0.4rem;
}
.mint-indexlist-navlist {
height: 100%;
justify-content: flex-start;
padding: 0.4rem 0;
}
</style>