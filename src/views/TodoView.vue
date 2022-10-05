<template>
  <div class="flex items-center min-h-[320px] px-3 justify-center h-screen">
    <div
      class="h-4/5 rounded-md px-3 overflow-auto min-h-[300px] shadow-lg border w-[500px]"
    >
      <div class="sticky top-0 py-2 bg-white z-10">
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
            :class="{
              'flex-1 p-2 transition-all duration-150': true,
              'hover:bg-green-100': status !== activeStatus,
              'bg-primary text-white font-semibold': status === activeStatus,
            }"
            v-for="(status, index) in APP_TASK_STATUS"
            :key="index"
            @click="handleChangeActiveStatus(status)"
          >
            {{ status }}
          </button>
        </div>
      </div>
      <div>
        <h1
          class="mt-10"
          v-if="todoList.length === 0 && appStatus !== taskStatusObject.Cancel"
        >
          There is no task! <br />
          <strong
            v-if="appStatus === taskStatusObject.All"
            class="text-primary text-xl"
          >
            Add some more!</strong
          >
        </h1>
        <Task v-for="(item, index) in todoList" :key="index" :task="item" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";
import { APP_NAME, APP_TASK_STATUS } from "@/constants";
import { getObjectTaskStatus, TaskStatus } from "@/types";
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import Task from "../components/Task.vue";

export default Vue.extend({
  data() {
    return {
      APP_NAME,
      taskStatusObject: getObjectTaskStatus(),
      APP_TASK_STATUS,
      todoValue: "",
      activeStatus: TaskStatus.All,
    };
  },
  name: "TodoView",
  components: { Input, Button, Task },
  computed: {
    ...mapGetters({
      todoList: "todoListFiltered",
      appStatus: "status",
      allTasksCount: "allTasksCount",
    }),
  },
  methods: {
    ...mapActions({
      addNewTodo: "addNewTodo",
      changeStatusTo: "changeStatusTo",
    }),
    handleChangeActiveStatus(status: TaskStatus) {
      this.activeStatus = status;
      this.changeStatusTo(status);
    },
    handleAddNewTodo() {
      if (!this.todoValue.trim()) {
        return;
      }
      this.addNewTodo({
        id: Math.random(),
        name: this.todoValue,
        status: TaskStatus.Todo,
      });
    },
    clearInputValue() {
      this.todoValue = "";
    },
  },
  watch: {
    todoList() {
      console.log(this.taskStatusObject);
      this.clearInputValue();
    },
  },
});
</script>
