<template>
  <div class="flex items-center min-h-[320px] px-3 justify-center h-screen">
    <div
      class="h-4/5 rounded-md px-3 py-2 overflow-auto min-h-[300px] shadow-lg border w-[450px]"
    >
      <h1 class="text-xl text-primary font-bold uppercase">{{ APP_NAME }}</h1>
      <div class="mt-3 flex space-x-1">
        <Input
          placeholder="Add your new todo"
          v-model="todoValue"
          :inputValue="todoValue"
        />
        <Button class="rounded-sm" @click="handleAddNewTodo">
          <icon icon="fas fa-plus" />
        </Button>
      </div>
      <div class="flex my-3">
        <button
          class="flex-1 p-2"
          v-for="(status, index) in APP_TASK_STATUS"
          :key="index"
          :class="{
            ['bg-primary text-white font-semibold']: status === activeStatus,
          }"
          @click="handleChangeActiveStatus(status)"
        >
          {{ status }}
        </button>
      </div>
      <div>
        <Task v-for="(item, index) in todoList" :key="index" :task="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import { APP_NAME, APP_TASK_STATUS } from "@/constants";
import { TaskStatus } from "@/types";
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import Task from "../components/Task.vue";

export default Vue.extend({
  data() {
    return {
      APP_NAME,
      APP_TASK_STATUS,
      todoValue: "",
      activeStatus: TaskStatus.All,
    };
  },
  name: "TodoView",
  components: { Input, Button, Task },
  computed: {
    ...mapGetters({ todoList: "todoListFiltered" }),
  },
  methods: {
    ...mapActions({
      addNewTodo: "addNewTodo",
      filterTodoListBy: "filterTodoListBy",
    }),
    handleChangeActiveStatus(status: TaskStatus) {
      this.activeStatus = status;
      this.filterTodoListBy(status);
    },
    handleAddNewTodo() {
      if (!this.todoValue.trim()) {
        return;
      }
      this.addNewTodo({ name: this.todoValue, status: TaskStatus.Todo });
    },
    clearInputValue() {
      this.todoValue = "";
    },
  },
  watch: {
    todoList() {
      this.clearInputValue();
    },
  },
});
</script>
