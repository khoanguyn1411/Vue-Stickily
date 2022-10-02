<template>
  <button
    class="bg-primary flex hover:bg-primary-bolder transition-all duration-200 items-center py-3 px-5 rounded-lg text-white font-bold"
    @click="onClick"
  >
    <slot />
    <icon
      v-if="postFixIcon"
      :icon="postFixIcon"
      class="ml-2 w-3 h-3 bg-white text-primary p-1 rounded-full"
    />
  </button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ButtonView",
  props: {
    postFixIcon: String,
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
});
</script>

<style scoped></style>
