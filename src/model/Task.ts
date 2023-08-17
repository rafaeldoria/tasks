export default class Task {
    #id: number
    #description: string
    #completed: boolean

    constructor(
        id: number, 
        description: string,
        completed = false
    ){
        this.#id = id
        this.#description = description
        this.#completed = completed
    }

    static createActived(id: number, description: string) {
        return new Task(id, description)
    }

    static createCompleted(id: number, description: string) {
        return new Task(id, description, true)
    }

    get id() {
        return this.#id
    }

    get description() {
        return this.#description
    }

    get completed() {
        return this.#completed
    }

    get actived() {
        return !this.completed
    }

    changeStatus() {
        return this.completed ? this.active() : this.complete()
    }

    complete() {
        return Task.createCompleted(this.id, this.description)
    }

    active() {
        return Task.createActived(this.id, this.description)
    }
}