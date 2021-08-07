import Vue from "vue";
import Vuex from "vuex";
import {Emoji} from "../libs/emoji";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    emojiList:[]
  },
  mutations: {
    initEmoji(state){
      let newList = {}, newArr = []
      for (let i in Emoji) {
        newArr.push(Emoji[i])
      }
      newArr.forEach(item => {
        if (!newList[item.category]) {
          newList[item.category] = []
        }
        newList[item.category].push(item)
      })
      state.emojiList = newList
    }
  },
  actions: {},
  modules: {},
});
