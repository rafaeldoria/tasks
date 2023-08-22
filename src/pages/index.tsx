import List from "@/components/list/List";
import initialTasks from '../data/mock'
import { useState } from "react";
import Header from "@/components/template/Header";
import Content from "@/components/template/Content";
import Form from "@/components/form/Form";
import Task from "@/model/Task";
import TaskLists from "@/model/TaskLists";

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks)

  function changed(newTasks: TaskLists){
    setTasks(newTasks)
  }

  function newTask(newTask: Task){
    setTasks(tasks.addTask(newTask))
  }

  return (
    <div className={`
      flex flex-col h-screen bg-gray-300
    `}>
        <Header >
          <Form newTask={newTask}></Form>
        </Header>
        <Content>
          <List tasks={tasks} changed={changed}/>
        </Content>
    </div>
  )
}
