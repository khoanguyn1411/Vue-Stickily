<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <h1 class="font-bold text-[80px] uppercase text-primary">
      {{ APP_NAME }}
    </h1>
    <p class="text-2xl mt-[-10px]">A website for taking notes</p>
    <Button postFixIcon="fas fa-arrow-right" class="mt-5" @click="handleStart"
      >Get started</Button
    >
  </div>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import { APP_NAME } from "@/constants";
import router from "@/router";
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      inputValue: "",
      APP_NAME,
    };
  },
  name: "HomeView",
  components: { Button },
  methods: {
    handleStart() {
      router.push({ path: "/todo" });
    },
  },
});
</script>
