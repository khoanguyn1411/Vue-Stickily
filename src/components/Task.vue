<template>
  <div
    class="flex mb-2 bg-gray-100 p-2 items-center rounded-sm justify-between"
  >
    <h1>{{ task.name }}</h1>
    <div class="flex space-x-3">
      <Button classNames="bg-red-400 px-0 py-0 w-8 h-8 flex justify-center">
        <icon :icon="iconTask.firstButton" />
      </Button>
      <Button classNames="bg-red-400 px-0 py-0 w-8 h-8 flex justify-center">
        <icon :icon="iconTask.secondButton" />
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Todo } from "@/store/todo";
import { TaskStatus } from "@/types";
import Vue from "vue";
import Button from "./Button.vue";

interface IconButton {
  firstButton?: ButtonAction;
  secondButton?: ButtonAction;
}

enum ButtonAction {
  Delete = "fas fa-trash",
  Complete = "fas fa-check",
}

export default Vue.extend({
  name: "TaskView",
  props: {
    task: Object as () => Todo,
  },
  components: { Button },
  computed: {
    iconTask(): IconButton {
      if (this.task.status === TaskStatus.Todo) {
        return {
          firstButton: ButtonAction.Delete,
          secondButton: ButtonAction.Complete,
        };
      }
      return {
        firstButton: ButtonAction.Delete,
        secondButton: ButtonAction.Complete,
      };
    },
  },
});
</script>

<style scoped></style>
