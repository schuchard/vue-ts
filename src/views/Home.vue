<template>
  <div class="home flex flex-col items-center">
    <img alt="Vue logo" src="../assets/logo.png" class="w-40" />
    <AddRemove />
    <EvenOdd />
    <List />
  </div>
</template>

<script lang="ts">
import EvenOdd from "@/components/EvenOdd.vue";
import List from "@/components/List.vue"; // @ is an alias to /src
import AddRemove from "@/components/AddRemove.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    List,
    EvenOdd,
    AddRemove,
  },
});
</script>
