<template>
  <div class="m-2">
    <button
      @click="clicked"
      class="flex px-4 py-1 items-center justify-center rounded-md bg-black text-white"
    >
      add
    </button>
    <div v-for="n of sets" :key="n" class="flex">
      even
      <div v-for="numbers of even(n)" :key="numbers">{{ numbers }}</div>
      odd
      <div v-for="numbers of odd(n)" :key="numbers">{{ numbers }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
      ],
    };
  },
  methods: {
    clicked() {
      this.sets.forEach((s) => s.push(++s.slice(-1)[0]));
    },
    even(n: number[]) {
      console.log("calc even");
      return n.filter((number) => number % 2 === 0);
    },
    odd(n: number[]) {
      console.log("calc odd");
      return n.filter((number) => number % 2 !== 0);
    },
  },
});
</script>
