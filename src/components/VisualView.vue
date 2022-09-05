<template>
  <section class="visual">

    <Swiper v-bind:modules="modules" v-bind:autoplay="{
          delay: 2000,
          disableOnIteraction: false,
        }" v-bind:loop="true" v-on:swiper="onSwiper" v-on:slideChange="onSlideChange" class="sw-visual" :pagination="{
            el: '.sw-visual-pg'
          }">

      <swiper-slide class="swiper-slide" v-for="(item, index) in slideData" v-bind:key="index">
        <VisualList v-bind:vimg="item.vimg" v-bind:vtitle="item.vtitle" v-bind:vtxt="item.vtxt" :vbt="item.vbt"
          :vlink="item.vlink" />
      </swiper-slide>

      <!-- 슬라이드 콘트롤 -->
      <div class="sw-visual-control">
        <div class="sw-visual-pg"></div>
      </div>

    </Swiper>

  </section>
</template>

<script>
  import {
    ref
  } from "vue";

  import {
    Autoplay,
    Pagination
  } from 'swiper';
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';

  import VisualList from '@/components/VisualList.vue';
  export default {

    components: {
      VisualList,
      Swiper,
      SwiperSlide
    },

    setup() {
      const slideData = ref([]);
      slideData.value = [{
          vimg: 'PC_minimal_new.png',
          vtitle: "밀크 에센스 로션",
          vtxt: "국내 최초 100% <br />식품 그레이드 성분",
          vbt: "SHOP",
          vlink: "#"
        },
        {
          vimg: 'PC1_newborn.png',
          vtitle: "밀크 에센스 로션",
          vtxt: "국내 최초 100% <br />식품 그레이드 성분",
          vbt: "SHOP",
          vlink: "#"
        },
        {
          vimg: 'PC2_BabyEssence.png',
          vtitle: "제품3",
          vtxt: "국내 최초 100% <br />식품 그레이드 성분",
          vbt: "SHOP",
          vlink: "#"
        },
        {
          vimg: 'PC3_Branding.png',
          vtitle: "제품4",
          vtxt: "국내 최초 100% <br />식품 그레이드 성분",
          vbt: "SHOP",
          vlink: "#"
        }
      ];

      const onSwiper = () => {
        // console.log(swiper)
      };
      const onSlideChange = () => {
        // console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Autoplay, Pagination],
        slideData
      }
    }

  }
</script>

<style>
  /* 비주얼 */
  .visual {
    position: relative;
    display: block;
  }

  .visual .sw-visual {
    width: 100%;
    height: 100%;
  }

  .visual .sw-visual .swiper-slide a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  .visual .sw-visual .visual-img {
    position: relative;
    display: block;
    width: 100%;
    height: 600px;
  }

  .visual .sw-visual .visual-1 {
    background: url("@/assets/images/PC_minimal_new.png") no-repeat center;
    background-size: cover;
  }

  .visual .sw-visual .visual-2 {
    background: url("@/assets/images/PC1_newborn.png") no-repeat center;
    background-size: cover;
  }

  .visual .sw-visual .visual-3 {
    background: url("@/assets/images/PC2_BabyEssence.png") no-repeat center;
    background-size: cover;
  }

  .visual .sw-visual .visual-4 {
    background: url("@/assets/images/PC3_Branding.png") no-repeat center;
    background-size: cover;
  }

  .visual .sw-visual .sw-visual-control {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 550px;
    display: block;
    z-index: 9;
  }

  .visual .sw-visual .sw-visual-control .sw-visual-pg .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: #fff;
    opacity: 1;
    margin: 0 4px;
  }

  .visual .sw-visual .sw-visual-control .sw-visual-pg .swiper-pagination-bullet-active {
    background-color: #ffcf42;
  }

  .visual .sw-visual .visual-txt {
    position: relative;
    display: block;
    text-align: center;
    padding: 50px 0;
  }

  .visual .sw-visual .visual-title {
    position: relative;
    display: block;
    font-size: 30px;
    color: #777;
    margin-bottom: 35px;
    font-weight: 500;
  }

  .visual .sw-visual .visual-desc {
    position: relative;
    display: block;
    font-size: 20px;
    color: #777;
    margin-bottom: 20px;
  }

  .visual .sw-visual .visual-bt {
    position: relative;
    display: inline-block;
    font-size: 20px;
    color: #fff;
    background-color: #ffcc00;
    padding: 10px 20px;
  }

  /* 비주얼 반응형 */
  @media all and (max-width: 1320px) {
    .visual-img {
      height: 45vw !important;
    }

    .sw-visual-control {
      top: 41.66vw !important;
    }

    .visual-txt {
      padding: 3.78vw 0 !important;
    }
  }

  @media all and (max-width: 800px) {
    .visual-img {
      height: 125vw !important;
    }

    .visual-1 {
      background: url("@/assets/images/M_minimal_new.png") no-repeat center !important;
    }

    .visual-2 {
      background: url("@/assets/images/M1_newborn.png") no-repeat center !important;
    }

    .visual-3 {
      background: url("@/assets/images/M2_BabyEssence.png") no-repeat center !important;
    }

    .visual-4 {
      background: url("@/assets/images/M3_Branding.png") no-repeat center !important;
    }

    .sw-visual-control {
      top: 120vw !important;
    }
  }

  @media all and (max-width: 480px) {
    .visual-img {
      height: 124.375vw !important;
    }

    .visual-1 {
      background: url("@/assets/images/v_480_1.png") no-repeat center !important;
    }

    .visual-2 {
      background: url("@/assets/images/v_480_2.png") no-repeat center !important;
    }

    .visual-3 {
      background: url("@/assets/images/v_480_3.png") no-repeat center !important;
    }

    .visual-4 {
      background: url("@/assets/images/v_480_4.png") no-repeat center !important;
    }

    .sw-visual-control {
      top: 115vw !important;
    }
  }
</style>