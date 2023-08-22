
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Task from "@/model/Task"
import { useState } from "react"

interface FormProps {
    newTask: (task: Task) => void
}

export default function Form(props: FormProps) {
    const [description, setDescription] = useState('')

    function createNewTask() {
        if(description?.trim().length > 5) {
            const newTask = Task.createActived(Math.random(), description)
            props.newTask(newTask)
            setDescription('')
        }
    }
    return (
        <div className="flex flex-1 justify-center">
            <input className={
                `text-gray-700 text-2xl
                w-1/2
                py-2 px-3 rounded-lg border-2
                border-purple-300 focus:outline-none
                focus:ring-2 focus:ring-purple-600
            `}
                placeholder="Type your new task"
                type="text" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                onKeyDown={e => e.key === 'Enter' ? createNewTask(): false}
            />
            <button onClick={createNewTask} className={`
                ml-3 px-5 py-4 rounded-lg
                focus:outline-none
                bg-purple-800 text-xl
            `}>
                <FontAwesomeIcon size="xl" icon={faPlus}></FontAwesomeIcon>
            </button>
        </div>
    )
}