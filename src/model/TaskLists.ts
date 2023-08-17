import FilterType from "./FilterType";
import Task from './Task';

export default class TaskLists {
    #all: Task[]
    #filter: FilterType

    constructor(
        all: Task[],
        filter = FilterType.NONE
    ){
        this.#all = all
        this.#filter = filter ?? FilterType.NONE
    }

    get items() {
        return this.#filterAplly(this.#all)
    }

    get total() {
        return this.items.length
    }

    get filter() {
        return this.#filter
    }

    addTask(newTask: Task): TaskLists {
        const all = [...this.#all]
        all.push(newTask)
        return new TaskLists(all, this.filter)
    }

    updateTask(updateTask: Task): TaskLists {
        const all = this.#all.map(task => {
            return task.id === updateTask.id ? updateTask : task
        })
        return new TaskLists(all, this.filter)
    }

    removeCompleted() {
        const activedOnly = this.#all.filter(task => task.actived)
        return new TaskLists(activedOnly, FilterType.NONE)
    }

    filterActived(): TaskLists {
        if(!this.showActive()){
            return new TaskLists(this.#all, FilterType.ACTIVED)
        }else {
            return this
        }
    }

    filterCompleted(): TaskLists {
        if(!this.showComplete()){
            return new TaskLists(this.#all, FilterType.COMPLETED)
        }else {
            return this
        }
    }

    removeFilter(): TaskLists {
        if(!this.showAll()){
            return new TaskLists(this.#all, FilterType.NONE)
        }else {
            return this
        }
    }

    showAll(): boolean {
        return this.#filter === FilterType.NONE
    }

    showActive(): boolean {
        return this.#filter === FilterType.ACTIVED
    }

    showComplete(): boolean {
        return this.#filter === FilterType.COMPLETED
    }

    #filterAplly(tasks: Task[]): Task[]{
        if(this.showActive()) {
            return this.#filterApllyActived(tasks)
        } else if(this.showComplete()) {
            return this.#filterApllyCompleted(tasks)
        }
        return [...tasks]
    }

    #filterApllyActived(tasks: Task[]): Task[]{
        return tasks.filter(task => task.actived)
    }

    #filterApllyCompleted(tasks: Task[]): Task[]{
        return tasks.filter(task => task.completed)
    }
}