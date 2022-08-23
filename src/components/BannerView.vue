<template>
  <div class="banner">
    <div class="swiper-container sw-banner">
      <!-- 슬라이드 내용 -->
      <div class="swiper-wrapper">

        <div class="swiper-slide">
          <a href="#" class="banner-1"></a>
        </div>

        <div class="swiper-slide">
          <a href="#" class="banner-2"></a>
        </div>

        <div class="swiper-slide">
          <a href="#" class="banner-3"></a>
        </div>

      </div>

      <!-- 슬라이드 콘트롤 -->
      <div class="sw-banner-control">
        <!-- 페이지네이션 -->
        <div class="sw-banner-pg"></div>
      </div>

    </div>
    <button class="banner-close"></button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import $ from 'jquery';

export default {
  setup() {
    onMounted( () => {
      // banner 의 높이값 px
      let fixY = ref(0);
      fixY.value = $('.banner').height();      

      // 상단 배너 닫기 기능
      let banner_close = $('.banner-close');
      banner_close.click(function(){
        // 배너가 보여지지 않으므로 값을 제거
        fixY.value = 0;
        $('.banner').slideUp(300);
      });

    });

    return {      
    }
  }
}
</script>

<style>


/* 배너 */
.banner {
  position: relative;
  display: block;
  height: 50px;
  background-color: #ffcc00;
}
.banner .sw-banner {
  width: 100%;
  height: 100%;
}
.banner .sw-banner .swiper-slide a {
  position: relative;
  display: block;
  height: 100%;
}
.banner .sw-banner .banner-1 {
  background: url("@/assets/images/banner_pc_1.jpg") no-repeat center;
}
.banner .sw-banner .banner-2 {
  background: url("@/assets/images/banner_pc_2.jpg") no-repeat center;
}
.banner .sw-banner .banner-3 {
  background: url("@/assets/images/banner_pc_3.jpg") no-repeat center;
}
.banner .sw-banner .sw-banner-control {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 28px;
  display: block;
  z-index: 9;
  /* pagination bullet css 수정 */
}
.banner .sw-banner .sw-banner-control .sw-banner-pg .swiper-pagination-bullet {
  width: 10px;
  height: 4px;
  border-radius: 0;
  background-color: #fff;
  opacity: 0.4;
  margin: 0 2px;
}
.banner .sw-banner .sw-banner-control .sw-banner-pg .swiper-pagination-bullet-active {
  width: 20px;
  height: 4px;
  opacity: 1;
}
.banner .banner-close {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  width: 32px;
  height: 32px;
  background: url("@/assets/images/x_icon.png") no-repeat center;
  border: 0;
  z-index: 9;
  cursor: pointer;
}
</style>