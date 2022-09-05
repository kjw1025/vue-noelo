import axios from "axios"

const state = {
  mbMenuData: []
}

// 외부 백엔드연동 또는 .json 호출
const actions = {
  // ./data/menu.json 호출
  fetchMenu({commit}){  
    axios.get('./data/menu.json')
    .then(response => {
      // console.log(response.data)
      commit('UPDATE_MENU', response.data);
    })
    .catch(err => console.log(err));
  }

}
const mutations = {
  UPDATE_MENU(state, payload) {
    state.mbMenuData = payload
  }
}
const getters = {
  getMbMenuData(state){
    // 여러가지 데이터를 원하는 값으로 정렬하는 과정 필요
    // console.log(state.mbMenuData);
    return state.mbMenuData
  }
}
export {state, actions, mutations, getters}