<template>
  <button :class="[classNames, classInit]" @click="onClick">
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
  data() {
    return {
      classInit:
        "bg-primary flex hover:bg-primary-bolder transition-all duration-200 items-center py-3 px-5 rounded-lg text-white font-bold",
    };
  },
  props: {
    postFixIcon: String,
    classNames: String,
  },
  methods: {
    onClick() {
      this.$emit("click");
    },
  },
});
</script>

<style scoped></style>
