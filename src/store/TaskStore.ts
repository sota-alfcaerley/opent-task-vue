import Vuex from "vuex";
import { Task } from "@/helper/type/Task";
import taskItems from "../assets/Json/tasks.json";

export default new Vuex.Store({
  strict: true,
  state: {
    tasks: taskItems.tasks,
  },
  getters: {
    getTaskItems(state) {
      return state.tasks;
    },
    getTotalTaskCount(state): number {
      return state.tasks.length;
    },
    getFinishedCount(state): number {
      return state.tasks.filter((taskItems) => taskItems.isFinished).length;
    },
    getNotFinishedCount(state): number {
      return state.tasks.filter((taskItems) => !taskItems.isFinished).length;
    },
  },
});
