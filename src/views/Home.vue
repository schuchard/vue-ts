<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <EvenOdd />
    <List />
  </div>
</template>

<script lang="ts">
import EvenOdd from "@/components/EvenOdd.vue";
import List from "@/components/List.vue"; // @ is an alias to /src
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    List,
    EvenOdd,
  },
});
</script>
