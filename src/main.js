import { createApp } from 'vue'
import App from './App.vue'
// 라우터를 연결합니다.
// 파일의 확장자가 .js 라서 생략했어요.
import router from './router/index'
// vuex 를 연결합니다.
// 파일의 확장자가 .js 라서 생략했어요.
import store from './store/store'

createApp(App).use(router).use(store).mount('#app')

// Vue 가 실행이 될때 제일 처음 불러서 실행하는 .js 파일입니다.
// Entry Point 역할을 합니다.
// Vue 어플리케이션에서 모두 참조가 됩니다.
// router, vuex 를 기본적으로 많이 추가합니다.