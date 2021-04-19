import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";
import VuexORM from "@vuex-orm/core";
import { database } from "./vuex-orm";

export interface AppState {
  count: number;
}

export default createStore<AppState>({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    addCount(state, count) {
      state.count = state.count + count;
    },
    removeCount(state, count) {
      const newCount = state.count - count;
      state.count = newCount < 0 ? 0 : newCount;
    },
  },
  actions: {
    addCount({ commit }, count: number) {
      commit("addCount", count);
    },
    removeCount({ commit }, count: number) {
      commit("removeCount", count);
    },
  },
  plugins: [VuexORM.install(database)],
});

const key: InjectionKey<Store<AppState>> = Symbol();

export function useStore(): Store<AppState> {
  return baseUseStore(key);
}
