<template>
  <input
    class="border border-gray-400 outline-none w-full p-2 rounded-sm"
    :value="inputValue"
    @input="setInputValue"
  />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "InputView",
  props: {
    inputValue: String,
  },
  methods: {
    setInputValue(event: Event) {
      const value = (event.target as HTMLInputElement).value;
      this.$emit("input", value);
    },
  },
});
</script>
