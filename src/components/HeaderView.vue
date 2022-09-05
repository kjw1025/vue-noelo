<template>
    <header class="header">
        <div class="inner">
            <button class="mb-bt"></button>

            <a href="#" class="logo"></a>
            <div class="gnb">

                <ul class="menu clearfix">
                    <li v-for="(item, index) in mbMenuData" :key="index">
                        <a :href="item.mainLink">{{item.mainText}}</a>

                        <ul class="submenu" v-if="item.menuType == 'S' ">
                            <li v-for="(subitem, subindex) in item.subArr" :key="subindex">
                                <a :href="subitem.link">{{subitem.title}}</a>
                            </li>
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
</template>

<script>
    import {
        computed,
        onUpdated
    } from 'vue';

    import $ from 'jquery';
    import {
        useStore
    } from 'vuex';


    export default {
        setup() {
            const store = useStore();
            const mbMenuData = computed(() => store.getters.getMbMenuData);



            onUpdated(() => {
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
                mbMenuData
            }

        }

    }
</script>

<style>

</style>