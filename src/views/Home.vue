<template>
  <div class="home flex flex-col items-center">
    <img alt="Vue logo" src="../assets/logo.png" class="w-40" />
    <AddRemove />
    <EvenOdd />
    <List />
    <button @click="toggleLazyComponent" class="btn-blue m-1">
      Toggle Lazy Component
    </button>
    <LazyComponent v-if="loadLazyComponent" />
  </div>
</template>

<script lang="ts">
import EvenOdd from "@/components/EvenOdd.vue";
import List from "@/components/List.vue"; // @ is an alias to /src
import AddRemove from "@/components/AddRemove.vue";
import { defineAsyncComponent, defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      loadLazyComponent: false,
    };
  },
  components: {
    List,
    EvenOdd,
    AddRemove,
    LazyComponent: defineAsyncComponent(
      () => import("@/components/LazyComponent.vue")
    ),
  },
  methods: {
    toggleLazyComponent() {
      this.loadLazyComponent = !this.loadLazyComponent;
    },
  },
});
</script>
