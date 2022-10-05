<template>
  <div
    :class="{
      'flex mb-2.5 p-3 items-center rounded-sm justify-between': true,
      'bg-gray-100': task.status !== statusTask.Done,
      'bg-green-50': task.status === statusTask.Done,
    }"
  >
    <h1 :class="{ 'line-through': task.status === statusTask.Done }">
      {{ task.name }}
    </h1>
    <div class="flex space-x-3">
      <Button
        v-if="!(task.status === statusTask.Cancel)"
        @click="handleFirstAction(iconTask.firstButton)"
        classNames="bg-yellow-400 hover:bg-yellow-500 px-0 py-0 w-8 h-8 flex justify-center"
      >
        <icon :icon="iconTask.firstButton" />
      </Button>
      <Button
        v-if="
          !(
            task.status === statusTask.Done || task.status === statusTask.Cancel
          )
        "
        @click="handleSecondAction(iconTask.secondButton)"
        classNames="bg-primary px-0 py-0 w-8 h-8 flex justify-center"
      >
        <icon :icon="iconTask.secondButton" />
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { TaskStatus, Todo, getObjectTaskStatus } from "@/types";
import Vue from "vue";
import { mapActions } from "vuex";
import Button from "./Button.vue";

interface IconButton {
  firstButton?: ButtonType;
  secondButton?: ButtonType;
}

enum ButtonType {
  Delete = "fas fa-trash",
  Complete = "fas fa-check",
}

export default Vue.extend({
  name: "TaskView",
  props: {
    task: Object as () => Todo,
  },
  data() {
    return {
      statusTask: getObjectTaskStatus(),
    };
  },
  components: { Button },
  computed: {
    iconTask(): IconButton {
      if (this.task.status === TaskStatus.Todo) {
        return {
          firstButton: ButtonType.Delete,
          secondButton: ButtonType.Complete,
        };
      }
      return {
        firstButton: ButtonType.Delete,
        secondButton: ButtonType.Complete,
      };
    },
  },
  methods: {
    ...mapActions({ changeTaskStatusTo: "changeTaskStatusTo" }),
    handleSecondAction(buttonType: ButtonType | undefined) {
      if (!buttonType) {
        return;
      }
      if (buttonType === ButtonType.Complete) {
        this.changeTaskStatusTo({ status: TaskStatus.Done, task: this.task });
        return;
      }
    },
    handleFirstAction(buttonType: ButtonType | undefined) {
      if (buttonType === ButtonType.Delete) {
        this.changeTaskStatusTo({ status: TaskStatus.Cancel, task: this.task });
        return;
      }
    },
  },
});
</script>

<style scoped></style>
