import { router } from "../../main";
import api from "../../apis/imgur";
import qs from "qs";

const state = {
  token: window.localStorage.getItem("imgur_token"),
};
const getters = {
  isLoggedIn: (state) => !!state.token,
};
const actions = {
  logout: ({ commit }) => {
    commit("setToken", null);
    window.localStorage.removeItem("imgur_token");
  },
  login: () => {
    api.login();
  },
  finalizeLogin: ({ commit }, hash) => {
    const params = qs.parse(hash.replace("#", ""));
    commit("setToken", params.access_token);
    window.localStorage.setItem("imgur_token", params.access_token);
    router.push("/");
  },
};
const mutations = {
  setToken: (state, token) => {
    state.token = token;
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
