import TaskLists from "@/model/TaskLists"
import ItemList from "./ItemList"
import ButtonList from "./ButtonList"

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
            flex w-3/5
        `}>
            <ul className={`
                w-full list-none
                bg-white shadow-lg rounded-lg
            `}>
                {renderTasks()}
                <li className="p-5">
                    <ButtonList selected={true} onClick={() => {}}>
                    Todas
                    </ButtonList>
                </li>
            </ul>
        </div>
    )
}