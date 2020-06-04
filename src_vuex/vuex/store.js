import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const state = {
    isFirst: true,
    isLoading: false,
    errmsg: "",
    users: []
}
const mutations = {
    requesting(state) {
        state.isFirst = false;
        state.isLoading = true;
    },
    request_success(state, person) {
        state.users = person;
        state.isLoading = false;
    },
    request_defeat(state, msg) {
        state.errmsg = msg
        state.isLoading = false
    }
}
const actions = {
    search({
        commit
    }, searchName) {
        commit('requesting')
        axios({
                url: "https://api.github.com/search/users",
                methods: "GET",
                params: {
                    q: searchName
                }
            })
            .then(response => {
                response.data.items.forEach(item => {
                    let person = []
                    let user_name = item.login;
                    let user_img = item.avatar_url;
                    let user_url = item.url;
                    let obj = {
                        user_name,
                        user_img,
                        user_url
                    };
                    person.push(obj)
                    commit('request_success', person)
                });
            })
            .catch(error => {
                commit('request_defeat', error.message)
            });
    }
}
const getters = {
    isFirst(state) {
        return state.isFirst
    },
    isLoading(state) {
        return state.isLoading
    },
    errmsg(state) {
        return state.errmsg
    },
    users(state) {
        return state.users
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})