import { createRouter, createWebHistory} from 'vue-router'
const router = createRouter({
  // 웹브라우저 주소에서 #아이디 이동하는 흔적을
  // 남기지 않는다.
  history: createWebHistory(),
  // 컴포넌트 연결 정보
  // routes : [ {path:'/글자', name: 'path의 별칭', component: 연결시켜줄 컴퍼넌트} ]
  // 예: routes : [ {path:'/good', name: 'Good', component: GoodView} ]
  // 가능하면, router 에 사용하는 컴포넌트는 src/view 폴더를 생성하고
  // 여러 컴포넌트를 포함하는 vue 파일을 생성한다.
  // 가능하면, 페이지이름View. 라고 생성 추천합니다.
  routes: []
});
// router 라는 변수를 다른 파일에서 사용하기 위해
// router 변수를 내보낼 겁니다.
// 여기서는 1개만 내보낼겁니다.
export default router;