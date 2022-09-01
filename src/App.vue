<template>
  <div>
    <!-- 모바일 메뉴 -->
    <MbDiv />
    <!-- 배너 -->
    <BannerView />
    <!-- 내용 -->
    <div class="wrap">
      <!-- 상단 -->
      <header class="header">
        <div class="inner">

          <button class="mb-bt"></button>

          <a href="#" class="logo"></a>
          <div class="gnb">

            <ul class="menu clearfix">
              <li>
                <a href="">SHOP</a>
                <ul class="submenu">
                  <li><a href="">ALL PRODUCT</a></li>
                  <li><a href="">NEWBORN</a></li>
                  <li><a href="">BABY</a></li>
                  <li><a href="">FAMILY</a></li>
                  <li><a href="">BATH GOODS</a></li>
                  <li><a href="">PRESENTS</a></li>
                </ul>
              </li>
              <li>
                <a href="">ABOUT</a>
                <ul class="submenu">
                  <li><a href="">BRAND STORY</a></li>
                  <li><a href="">WHO WE ARE</a></li>
                  <li><a href="">MAKE A WISH</a></li>
                  <li><a href="">PRESS</a></li>
                </ul>
              </li>
              <li>
                <a href="">TRUST</a>
                <ul class="submenu">
                  <li><a href="">FOOD GRADE</a></li>
                  <li><a href="">PENTACERA™</a></li>
                  <li><a href="">BABY SKINCARE</a></li>
                  <li><a href="">CERTIFICATIONS</a></li>
                  <li><a href="">INGREDIENT</a></li>
                </ul>
              </li>
              <li>
                <a href="">STOCKISTS</a>
              </li>
              <li>
                <a href="">REVIEW</a>
              </li>
              <li>
                <a href="">BENEFITS</a>
                <ul class="submenu">
                  <li><a href="">EVENTS</a></li>
                  <li><a href="">MEMBERS</a></li>
                </ul>
              </li>
            </ul>

          </div>
          <div class="member">
            <ul class="member-list clearfix">
              <li>
                <a href="#" class="member-cart">
                  <i class="tooltip">장바구니</i>
                </a>
              </li>
              <li>
                <a href="#" class="member-mypage">
                  <i class="tooltip">마이페이지</i>
                </a>
              </li>
              <li>
                <a href="#" class="member-login">
                  <i class="tooltip">로그인</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <!-- 비주얼 -->
      <VisualView />
      <!-- 제품 카테고리 -->
      <CategoryView />
      <!-- 사이트 맵 -->
      <SiteMap />
      <!-- 하단 -->
      <footer class="footer">
        <div class="footer-top">
          <div class="inner">
            <ul class="siteinfo-list">
              <li>
                <span><em>상호</em> 주식회사 세손</span>
                <span><em>대표자명</em> 임정아</span>
                <span><em>대표전화번호</em> 1600-6274</span>
                <span><em>개인정보관련책임자</em> <a href="#">임지은(help@seisson.com)</a></span>
              </li>
              <li>
                <span><em>사업장소재지</em> 04378 서울특별시 용산구 한강대로 95 (한강로2가) 제에이동 15층 1515</span>
              </li>
              <li>
                <span><em>사업자등록번호</em> 183-86-01860</span>
                <span><em>통신판매업</em> 신고번호제2021-서울용산-0634호</span>
              </li>
            </ul>
            <a href="#" class="insta-link"></a>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="inner clearfix">
            <span class="copy">Copyright © <strong>Seisson Inc</strong>. All rights reserved</span>
            <ul class="service-list">
              <li><a href="#">CS Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Condition</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>
<script>
  import {
    onMounted
  } from 'vue';

  import $ from 'jquery';

  import MbDiv from '@/components/MbDiv.vue';
  import BannerView from '@/components/BannerView.vue';
  import VisualView from '@/components/VisualView.vue';
  import CategoryView from '@/components/CategoryView.vue';
  import SiteMap from '@/components/SiteMap.vue';

  export default {
    name: 'App',
    components: {
      MbDiv,
      BannerView,
      VisualView,
      CategoryView,
      SiteMap
    },
    setup() {
      onMounted(() => {
        // 스크롤시 header 고정
        let header = $('.header');
        let wrap = $('.wrap');
        let fixY = $('.banner').height();

        $(window).scroll(function () {
          // 스크롤바의 세로상단 px 값
          let temp = $(window).scrollTop();
          // 50 은 banner 의 높이값 px
          if (temp > fixY) {
            header.addClass('header-fix');
            wrap.addClass('wrap-fix');
          } else {
            header.removeClass('header-fix');
            wrap.removeClass('wrap-fix');
          }
        });

      });

      return {

      }
    }
  }
</script>

<style>
  @charset "UTF-8";
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  img {
    vertical-align: middle;
    border: 0;
  }

  a {
    color: #777;
    text-decoration: none;
  }

  html {
    font-size: 10px;
    overflow-x: hidden;
  }

  body {
    font-family: "Montserrat", "Noto Sans KR", "Malgun Gothic", "Dotum", "AppleGothic", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.45px;
    font-style: normal;
    overflow-x: hidden;
  }

  ::-moz-selection {
    background: #1ABC9C;
    color: #fff;
  }

  ::selection {
    background: #1ABC9C;
    color: #fff;
  }

  ::-moz-selection {
    background: #1ABC9C;
    color: #fff;
  }

  ::-webkit-selection {
    background: #1ABC9C;
    color: #fff;
  }

  #app {}


  /* 공통클래스 */
  .clearfix::after {
    content: "";
    position: relative;
    display: block;
    width: 100%;
    clear: both;
  }

  .inner {
    position: relative;
    display: block;
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
  }


  /* 레이아웃 */
  .wrap {
    position: relative;
    display: block;
  }

  /* 상단 */
  .header {
    position: relative;
    display: block;
    height: 80px;
    background-color: #fff;
    border-bottom: 1px solid #dcdcdc;
    z-index: 9999;
  }

  .header .inner {
    display: flex;
    height: 100%;
  }

  .header .inner .logo {
    position: relative;
    display: block;
    width: 111px;
    height: 42px;
    background: url("@/assets/images/logo_new.png") no-repeat center;
    background-size: cover;
    margin-top: 20px;
    margin-right: 65px;
  }

  .header .inner .gnb {
    position: relative;
    display: block;
  }

  .header .inner .gnb .menu {
    position: relative;
    display: block;
  }

  .header .inner .gnb .menu>li {
    position: relative;
    display: block;
    float: left;
  }

  .header .inner .gnb .menu>li>a {
    position: relative;
    display: block;
    line-height: 80px;
    text-align: center;
    font-size: 14px;
    color: #777;
    font-style: normal;
    z-index: 3;
    padding: 0 28px;
  }

  .header .inner .gnb .menu>li>a:hover {
    color: #f9d14d;
  }

  .header .inner .gnb .menu>li:hover>a {
    color: #f9d14d;
  }

  .header .inner .gnb .menu>li:hover .submenu {
    visibility: visible;
  }

  .header .inner .gnb .menu>li .submenu {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    display: block;
    visibility: hidden;
    padding-top: 80px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 40px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  }

  .header .inner .gnb .menu>li .submenu li {
    padding: 17px 0;
  }

  .header .inner .gnb .menu>li .submenu li a {
    font-size: 13px;
    white-space: nowrap;
  }

  .header .inner .gnb .menu>li .submenu li a:hover {
    color: #f9d14d;
  }

  .header .inner .member {
    position: relative;
    display: block;
    margin-left: auto;
    margin-top: 25px;
  }

  .header .inner .member .member-list {
    position: relative;
    display: block;
  }

  .header .inner .member .member-list li {
    position: relative;
    display: block;
    float: left;
    margin-left: 42px;
  }

  .header .inner .member .member-list li:first-child {
    margin-left: 0;
  }

  .header .inner .member .member-list li a {
    position: relative;
    display: block;
    width: 23px;
    height: 23px;
  }

  .header .inner .member .member-list li a:hover .tooltip {
    visibility: visible;
  }

  .header .inner .member .member-list li a .tooltip {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 30px;
    display: inline-block;
    visibility: hidden;
    color: #fff;
    background-color: #000;
    white-space: nowrap;
    padding: 4px 8px;
    border-radius: 3px;
    font-size: 11px;
  }

  .header .inner .member .member-list li a .tooltip::before {
    content: "";
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    top: -3px;
    display: block;
    background-color: #000;
    width: 6px;
    height: 6px;
  }

  .header .inner .member .member-list li .member-cart {
    background: url("@/assets/images/ico-cart.png") no-repeat center;
  }

  .header .inner .member .member-list li .member-mypage {
    background: url("@/assets/images/ico-user.png") no-repeat center;
  }

  .header .inner .member .member-list li .member-login {
    background: url("@/assets/images/ico-login.png") no-repeat center;
  }

  .header-fix {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
  }

  .wrap-fix {
    padding-top: 80px;
  }

  .mb-bt {
    position: absolute;
    left: 28px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    width: 30px;
    height: 23px;
    background: url("@/assets/images/btn-menu-line.png") no-repeat center;
    border: 0;
    cursor: pointer;
  }

  /* 상단 반응형 */
  @media all and (max-width: 1080px) {
    .menu>li>a {
      padding: 0 18px !important;
    }

    .member-list>li {
      margin-left: 22px !important;
    }
  }

  @media all and (max-width: 880px) {
    .menu>li>a {
      padding: 0 10px !important;
    }
  }

  @media all and (max-width: 800px) {
    .logo {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      margin-top: 0 !important;
      margin-right: 0 !important;
    }

    .gnb {
      display: none !important;
    }

    .member-list li:last-child a {
      display: none !important;
    }

    .mb-bt {
      display: block;
    }
  }


  /* 하단 */
  .footer {
    position: relative;
    display: block;
  }

  .footer .inner {
    width: 777px;
  }

  .footer-top {
    position: relative;
    display: block;
    border-top: 1px solid #dcdcdc;
    background-color: #f3f3f3;
    padding: 35px 0;
  }

  .siteinfo-list {
    position: relative;
    display: block;
  }

  .siteinfo-list li {
    position: relative;
    display: block;
    white-space: nowrap;
  }

  .siteinfo-list li:last-child {
    margin-bottom: 0;
  }

  .siteinfo-list li span {
    position: relative;
    display: inline-block;
    margin-right: 40px;
    font-size: 12px;
    color: #777;
  }

  .siteinfo-list li span em {
    position: relative;
    display: inline-block;
    margin-right: 20px;
    font-size: 12px;
    color: #7e868c;
  }

  .insta-link {
    position: absolute;
    right: 0;
    bottom: 0;
    display: block;
    width: 155px;
    height: 30px;
    background: url("@/assets/images/ico_insta.png") no-repeat center;
  }

  .footer-bottom {
    position: relative;
    display: block;
    border-top: 1px solid #dcdcdc;
    background-color: #e5e5e5;
    padding: 25px 0;
  }

  .copy {
    position: relative;
    display: block;
    float: left;
    font-size: 12px;
    color: #777;
  }

  .copy strong {
    font-weight: 600;
  }

  .service-list {
    position: relative;
    display: block;
    float: right;
  }

  .service-list li {
    position: relative;
    display: inline-block;
    margin-left: 20px;
  }

  .service-list li a {
    position: relative;
    display: block;
    font-size: 12px;
  }

  @media all and (max-width: 800px) {
    .footer .inner {
      width: 100%;
    }

    .footer-top .inner {
      padding-bottom: 35px;
    }

    .siteinfo-list {
      padding: 0 20px;
    }

    .siteinfo-list li span {
      display: block;
      margin-bottom: 10px;
    }

    .siteinfo-list li span em {
      width: 120px;
    }

    .copy {
      width: 100%;
      text-align: center;
      margin-bottom: 15px;
    }

    .service-list {
      width: 100%;
      text-align: center;
    }
  }

  /*# sourceMappingURL=main.css.map */
</style>