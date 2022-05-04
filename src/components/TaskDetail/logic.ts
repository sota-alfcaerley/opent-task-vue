import { Task } from "@/helper/type/Task";

export default {
  name: "TaskDetail",
  props: {
    taskItem: Object,
  },
  setup(props: { taskItem: any }) {
    const taskItem = props.taskItem;
    return {
      taskItem,
    };
  },
};
