<template>
  <NumberCounterLayout :count="items">
    <button class="btn-blue m-1" @click="shuffle">Shuffle</button>
    <button class="btn-blue m-1" @click="add(1)">Add 1</button>
    <button class="btn-blue m-1" @click="add(50)">Add 50</button>
    <button class="btn-blue m-1" @click="remove(1)">Remove 1</button>
    <button class="btn-blue m-1" @click="remove(50)">Remove 50</button>
  </NumberCounterLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { shuffle } from "lodash";
import NumberCounterLayout from "@/components/NumberCounterLayout.vue";

export default defineComponent({
  components: { NumberCounterLayout },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
    };
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.items.length);
    },
    add(num: number) {
      Array.from(new Array(num || 1)).forEach(() => {
        this.items.splice(this.randomIndex(), 0, this.nextNum++);
      });
    },
    remove(num: number) {
      Array.from(new Array(num || 1)).forEach(() => {
        this.items.splice(this.randomIndex(), 1);
      });
    },
    shuffle() {
      this.items = shuffle(this.items);
    },
  },
});
</script>

<style lang="scss" scoped>
.list-complete-item {
  transition: all 0.8s ease;
  display: inline-block;
  margin-right: 10px;
}

.list-complete-enter-from,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-complete-leave-active {
  position: absolute;
}
</style>
