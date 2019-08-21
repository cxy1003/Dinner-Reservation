<template>
  <div class="fond_bg">
    <!-- 顶部导航 -->
     <mt-header title="发现好消息">
           <mt-button  icon="back" slot="left">返回</mt-button>
    </mt-header> 
    <!-- 内容 -->
     <ul class="fond_container">
       <li>
          <p class="font_family">看了这一篇文章，我不得不去多买点水果放在家里了</p>
          <p class="font_intr">2019-08-09    09：17</p>
          <img class="fond_food" src="../img/mine/banner5.jpg" alt="">
          <p class="font_intr">水果与人体健康息息相关，随着人们的生活水平提高，人们也都愈发重视水果，水果已然成为了我们日常生活中不可或缺的食品，不仅可以调剂人们的口味，香甜可口，营养价值还很高。</p>
          <mt-cell title="阅读全文" is-link>
               <span style="color: grey"></span>
          </mt-cell>
       </li>
       <li>
          <p class="font_family">与烧肉滚，只有散养的鸡鸭鱼才Hold得住崇明古法。</p>
          <p class="font_intr">2019-08-09    09：17</p>
          <img class="fond_food" src="../img/mine/banner4.jpg" alt="">
          <p class="font_intr">肥嫩的肉质被烤得焦黄脆嫩，浓香的汁液包裹在周围，在灯光下泛出点点的油光，扑鼻的香味阵阵袭来。</p>
          <mt-cell title="阅读全文"  is-link>
               <span style="color: grey"></span>
          </mt-cell>
       </li>
       <li>
          <p class="font_family">《汉书·郦食其传》：“王者以民为天，而民以食为天。”</p>
          <p class="font_intr">2019-08-09    09：17</p>
          <img class="fond_food" src="../img/mine/banner3.jpg" alt="">
          <p class="font_intr">烧卖里碧绿的颜色，透出蒸熟后薄如纸的面皮，犹如翡翠一般。轻轻地咬上一口，皮一点便破，吃到里面由虾仁、韭菜和鸡蛋制成菜茸，爽口清润。吃下去后嘴里还充满虾仁的香味，真可谓齿颊留香。</p>
          <mt-cell title="阅读全文"  is-link>
               <span style="color: grey"></span>
          </mt-cell>
       </li>
       <li>
          <p class="font_family">人之养老之道，虽有水陆百品珍锤，每食忌于杂，杂则五味相扰。</p>
          <p class="font_intr">2019-08-09    09：17</p>
          <img class="fond_food" src="../img/mine/banner2.jpg" alt="">
          <p class="font_intr">近看，白白嫩嫩的小笼汤包饱满，润泽，嗯，看起来就很好吃。瞧，那皮儿是多么的娇嫩呀，娇嫩得就好像胖娃娃肥嘟嘟的小脸蛋儿，轻轻一捏就破碎了。透过外皮儿，你能清清楚楚地看到里面那纯美的汤汁儿。</p>
          <mt-cell title="阅读全文"  is-link>
               <span style="color: grey"></span>
          </mt-cell>
       </li>
       <li>
          <p class="font_family">人的饮食要从五谷杂粮中吸收多方面的营养，也要从多种蔬菜中吸收营养，不能偏食。</p>
          <p class="font_intr">2019-08-09    09：17</p>
          <img class="fond_food" src="../img/mine/banner6.jpg" alt="">
          <p class="font_intr">焦脆而不糊、细嫩而不腻、初闻臭气扑鼻，细嗅浓香诱人，具有白豆腐的新鲜爽口，油炸豆腐的芳香松脆。</p>
          <mt-cell title="阅读全文"  is-link>
               <span style="color: grey"></span>
          </mt-cell>
       </li>
       <li>
          <p class="font_family">已饥方食，未饱先止；散步逍遥，务令腹空。</p>
          <p class="font_intr">2019-08-09    09：17</p>
          <img class="fond_food" src="../img/mine/banner7.jpg" alt="">
          <p class="font_intr">盐水鸭皮白柔嫩、肥而不腻、香鲜味美，具有香、酥、嫩的特点。</p>
          <mt-cell title="阅读全文" is-link>
               <span style="color: grey"></span>
          </mt-cell>
       </li>
   </ul>
   <buttombar></buttombar>
     
  </div>
</template>

<script>
import Buttombar from "../views/Buttombar"
export default {
  components:{
        "buttombar":Buttombar
    },
}
</script>

<style scoped>
 .fond_bg{
    background-color:#ddd;

 }
  .fond_container{
    width:90%;
    margin: 0px 19px;
  }
  .fond_container li{
     background-color:#fff;
     padding: 15px 11px 0px 11px;
     margin-bottom: 12px;
     border:1px solid pink;
     border-radius: 3%;
  }
  .fond_food{
    width: 312px;
    height: 197px;
  }
  .font_intr{
    color: #717170b6;
    font-size:14px;
    margin-top:10px;
    margin-bottom: 5px;
  }

</style>