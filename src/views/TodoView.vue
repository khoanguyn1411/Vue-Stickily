<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="flex items-center min-h-[320px] px-3 justify-center h-screen">
    <div
      class="h-4/5 rounded-md px-3 py-2 overflow-auto min-h-[300px] shadow-lg border w-[450px]"
    >
      <h1 class="text-xl text-primary font-bold uppercase">{{ APP_NAME }}</h1>
      <div class="mt-3 flex space-x-1">
        <Input placeholder="Add your new todo" v-model="todoValue" />
        <Button class="rounded-sm" @click="handleAddNewTodo">
          <icon icon="fas fa-plus" />
        </Button>
      </div>
      <div>
        <h1 v-for="item in todoList">{{ item.name }}</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import { APP_NAME } from "@/constants";
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  data() {
    return {
      APP_NAME,
      todoValue: "",
    };
  },
  name: "TodoView",
  components: { Input, Button },
  computed: {
    ...mapGetters({ todoList: "todoList" }),
  },
  methods: {
    ...mapActions({ addNewTodo: "addNewTodo" }),
    handleAddNewTodo() {
      this.addNewTodo({ name: this.todoValue, status: "todo" });
    },
  },
});
</script>
