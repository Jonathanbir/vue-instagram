import { createPost, loadPosts } from "../../api/post";

export const post = {
  state() {
    return {
      list: [],
    };
  },
  mutations: {
    initializePosts(state, posts) {
      state.list = posts;
    },
  },
  actions: {
    async uploadPost({ commit, dispatch }, { image, description }) {
      await createPost(image, description);
      dispatch("loadAllPosts");
      // 關閉對話框並清空上傳圖片
      commit("changeShowPostUpload", false);
    },

    async loadAllPosts({ commit }) {
      const posts = await loadPosts();
      commit("initializePosts", posts);
    },
  },
};
