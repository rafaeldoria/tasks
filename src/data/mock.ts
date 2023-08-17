import FilterType from "@/model/FilterType";
import Task from "@/model/Task";
import TaskLists from "@/model/TaskLists";

const initialTasks: Task[] = [
    Task.createActived(1, 'Example 1'),
    Task.createCompleted(2, 'Example 2'),
    Task.createActived(3, 'Example 3'),
]

// eslint-disable-next-line import/no-anonymous-default-export
export default new TaskLists(initialTasks, FilterType.NONE)