import { createStore } from 'vuex'
import * as noeloStore from './moudules/noeloStore'
export default createStore({
  modules: {
    noeloStore
  }
  // 데이터 저장 객체가 됩니다.
  // state: {},

  // Request 호출 : 외부 서버(http주소) 및 파일(json, xml...) 호출
  // Response 를 통해서 결과 및 데이터를 받는다. 
  // Response 가  결과 (Error) 라면 catch 처리를 mutations 에 위탁
  // Response 가  결과 (Success) 라면 then 처리를 mustions 에 위탁
  // actions: {},
  
  // actions 로 부터 전달 받은 상황을 실제 처리
  // 처리란? : state 를 업데이트 합니다.
  // mutations: {},

  // state 즉 데이터를 컴포넌트 (View 영역) 넣어서 화면갱신한다.
  // 통상 getters 는 컴포넌트에서 computed 로 받는 경우가 많다.
  // computed 는 컴퍼넌트에 내용 갱신시 캐쉬에 대기중이다.
  // getters: {}
})