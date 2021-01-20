<template>
  <NumberCounterLayout :count="count">
    <button class="btn-blue m-1" @click="addCount(1)">Add 1</button>
    <button class="btn-blue m-1" @click="addCount(50)">Add 50</button>
    <button class="btn-blue m-1" @click="removeCount(1)">Remove 1</button>
    <button class="btn-blue m-1" @click="removeCount(50)">Remove 50</button>
  </NumberCounterLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";
import NumberCounterLayout from "@/components/NumberCounterLayout.vue";

export default defineComponent({
  components: {
    NumberCounterLayout,
  },
  computed: mapState(["count"]),
  methods: mapActions(["addCount", "removeCount"]),
});
</script>
