import { computed } from "vue";
import TaskDetail from "@/components/TaskDetail/TaskDetail.vue";
import AddTaskDialig from "@/components/AddTaskDialog/AddTaskDialog.vue";
import TaskStore from "@/store/TaskStore";

export default {
  name: "OpenTask",
  components: {
    "task-detail": TaskDetail,
    "add-task-dialog": AddTaskDialig,
  },
  setup() {
    const taskItem = TaskStore.getters.getFinishedCount;

    const getFinishedCount = computed(() => {
      return TaskStore.getters.getFinishedCount;
    });
    const getNotFinishedCount = computed(() => {
      return TaskStore.getters.getNotFinishedCount;
    });
    const getTaskItems = computed(() => {
      return TaskStore.getters.getTaskItems;
    });
    return {
      taskItem,
      getFinishedCount,
      getNotFinishedCount,
      getTaskItems,
    };
  },
};
