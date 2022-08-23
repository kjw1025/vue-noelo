<template>
  <section class="category">
      <div class="inner">
        <div class="category-img">
          <a href="#" class="category-link wb2">BABY</a>
        </div>
        <div class="category-txt">
          <p class="category-desc">
            신생아의 피부가 완성되기 위해 필요한 시간은 4년. <br>
            이때는 연약한 피부에 버팀목이 되 줄 수 있는 제품으로 피부가 건강하게 발달되도록 도와주세요.
          </p>
          <a href="#" class="category-link">BABY</a>
        </div>

        <div class="category-txt">
          <p class="category-desc">
            아이부터 어른까지, 클린 포뮬러 저자극 케어 <br>
            클린하게 온 가족의 피부건강을 지켜주는 Minimal B
          </p>
          <a href="#" class="category-link">FAMILY</a>
        </div>

        <div class="category-img">
          <a href="#" class="category-link wb2">FAMILY</a>
        </div>

        <div class="category-img">
          <a href="#" class="category-link wb2">BATH GOODS</a>
        </div>
        <div class="category-txt">
          <p class="category-desc">
            매일 저녁 찾아오는 행복한 목욕과 스킨케어 시간. <br>
            아이와 부모가 함께하는 제일 친밀한 시간이기도 하죠. <br>
            다양한 소품과 함께 이 소중한 시간을 더욱 즐겁게 보내보세요.
          </p>
          <a href="#" class="category-link">BATH GOODS</a>
        </div>
        <div class="category-txt">
          <p class="category-desc">
            베이비샤워, 출산, 돌, 생일, 명절 등 특별한 기념일에는 센스있는 선물이 좋겠죠? <br>
            현명한 제품 구성과 고급스러운 기프트 포장이 기분 좋은 경험을 만들어드립니다. <br>
            행복을 선물해보세요.
          </p>
          <a href="#" class="category-link">PRESENTS</a>
        </div>
        <div class="category-img">
          <a href="#" class="category-link wb2">PRESENTS</a>
        </div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
/* 카테고리 */
.category {
  position: relative;
  display: block;
}
.category .inner {
  display: flex;
  flex-wrap: wrap;
}
.category .inner > div {
  position: relative;
  display: flex;
  width: 50%;
  height: 620px;
  padding: 80px;
  align-content: center;
  flex-wrap: wrap;
}
.category .inner > div .category-desc {
  position: relative;
  display: block;
  width: 100%;
  font-size: 14px;
  color: #777;
  margin-bottom: 35px;
}
.category .inner > div .category-link {
  position: relative;
  display: block;
  padding: 10px 20px;
  border: 2px solid #777;
  font-size: 20px;
  font-weight: 600;
}
.category .inner > div:nth-child(1) {
  background: url("@/assets/images/main_img01_2.png") no-repeat center;
  background-size: cover;
}
.category .inner > div:nth-child(4) {
  background: url("@/assets/images/main_img02_2.png") no-repeat center;
  background-size: cover;
}
.category .inner > div:nth-child(5) {
  background: url("@/assets/images/main_img03.png") no-repeat center;
  background-size: cover;
}
.category .inner > div:nth-child(8) {
  background: url("@/assets/images/main_img04.png") no-repeat center;
  background-size: cover;
}

.wb2 {
  position: absolute !important;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
  display: none !important;
  border: 2px solid #fff !important;
  color: #fff !important;
}

@media all and (max-width: 1320px) {
  .category .inner > div {
    height: 46.96vw !important;
  }
}
@media all and (max-width: 760px) {
  .category .inner > div {
    width: 100% !important;
    height: 100vw !important;
  }

  .category-txt {
    display: none !important;
  }

  .wb2 {
    display: inline-block !important;
  }
}
</style>