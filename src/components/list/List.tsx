import TaskLists from "@/model/TaskLists"
import ItemList from "./ItemList"
import FooterList from "./FooterList"

interface ListProps {
    tasks: TaskLists
    changed: (tasks: TaskLists) => void
}

export default function List(props: ListProps) {
    const {tasks} = props

    function renderTasks() {
        return tasks.items.map(task => {
            return (
                <ItemList 
                    key={task.id}
                    value={task.description}
                    completed={task.completed}
                    changeStatus={() => {
                        const changedTask = task.changeStatus()
                        const newList = tasks.updateTask(changedTask)
                        props.changed(newList)
                    }}
                />
            )
        })
    }
    return (
        <div className={`
            flex w-3/5 items-start relative
        `}>
            <ul className={`
                absolute -top-12
                w-full list-none
                bg-white shadow-lg rounded-lg
            `}>
                {renderTasks()}

                <FooterList 
                    tasks={props.tasks}
                    changed={props.changed}
                />
            </ul>
        </div>
    )
}