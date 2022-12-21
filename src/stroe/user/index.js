import { getUser, register } from "../../api/auth";

export const user = {
  state() {
    return {
      user: getUser() || {},
    };
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async registerUser({ commit }, { email, username, password }) {
      const user = await register(email, username, password);
      commit("setUser", user);
    },
    async loginrUser({ commit }, { email, password }) {
      const user = await loginr(email, password);
      commit("setUser", user);
    },
  },
};
