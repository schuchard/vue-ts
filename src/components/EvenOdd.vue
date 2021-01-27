<template>
  <div class="m-2">
    <button
      @click="clicked"
      class="flex px-4 py-1 items-center justify-center rounded-md bg-black text-white"
    >
      add
    </button>
    <div v-for="numbers in sets" :key="numbers" class="flex">
      even
      <div v-for="evenNumbers in even(numbers)" :key="evenNumbers">
        {{ evenNumbers }}
      </div>
      odd
      <div v-for="oddNumbers in odd(numbers)" :key="oddNumbers">
        {{ oddNumbers }}
      </div>
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
