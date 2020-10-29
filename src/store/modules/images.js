import { router } from "../../main";
import api from "../../apis/imgur";

const state = {
  images: [],
};
const getters = {
  allImages: (state) => state.images,
};
const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit("setImages", response.data.data);
  },
  async uploadImages({ rootState }, images) {
    //GET ACCESS TOKEN
    const { token } = rootState.auth;
    //Call Image Upload
    await api.uploadImages(images, token);
    //Redirect User
    router.push("/");

    // console.log(images);
    // console.log(commit);
  },
};
const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
