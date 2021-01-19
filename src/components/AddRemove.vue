<template>
  <div class="flex flex-col">
    <div class="m-2">
      <div>{{ count }}</div>
      <button @click="addCount(1)">Add 1</button>
      <button @click="addCount(50)">Add 50</button>
      <button @click="removeCount(1)">Remove 1</button>
      <button @click="removeCount(50)">Remove 50</button>
    </div>
    <div>
      <transition-group name="list-complete">
        <span v-for="item in count" :key="item" class="list-complete-item">{{
          item
        }}</span>
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  computed: mapState(["count"]),
  methods: mapActions(["addCount", "removeCount"]),
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
