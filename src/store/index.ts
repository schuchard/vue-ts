import { InjectionKey } from "vue";
import { createStore, Store, useStore as baseUseStore } from "vuex";

export interface AppState {
  count: number;
}

export const enum Actions {
  addCount,
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
});

const key: InjectionKey<Store<AppState>> = Symbol();

export function useStore(): Store<AppState> {
  return baseUseStore(key);
}
