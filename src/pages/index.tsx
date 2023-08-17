import List from "@/components/list/List";
import initialTasks from '../data/mock'
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks)

  return (
    <div className={`
      flex flex-col h-screen justify-center items-center
      bg-gray-300
    `}>
        <List tasks={tasks} changed={(newTasks) => {
          setTasks(newTasks)
        }}/>
    </div>
  )
}
