import TaskLists from "@/model/TaskLists"
import ButtonList from "./ButtonList"

interface FooterListProps {
    tasks: TaskLists
    changed: (tasks: TaskLists) => void
}

export default function FooterList(props: FooterListProps){
    const {tasks, changed} = props

    function renderTotalItems(){
        return (
            <>
                <span className={`text-gray-400 hidden lg:inline`}>
                    {tasks.total}
                    {tasks.total === 0
                        ? ' Task not found' 
                        : tasks.total === 1
                            ? ' Task found' 
                            : ' Tasks founds'
                    }
                </span>
                <span className="flex-1  hidden lg:inline"></span>
            </>
        )
    }

    function renderFilterButtons(){
        return (
            <>
                <ButtonList 
                    selected={tasks.showAll()}
                    onClick={() => changed(tasks.removeFilter())}
                    className="hidden md:inline"
                >
                    All
                </ButtonList>

                <ButtonList 
                    selected={tasks.showActive()}
                    onClick={() => changed(tasks.filterActived())}
                    className="mx-4"
                >
                    Actived
                </ButtonList>

                <ButtonList 
                    selected={tasks.showComplete()}
                    onClick={() => changed(tasks.filterCompleted())}
                >
                    Completed
                </ButtonList>
            </>
        )
    }

    function renderDelete(){
        return (
            <>
                <span className="flex-grow"></span>
                <ButtonList 
                    onClick={() => changed(tasks.removeCompleted())}
                >
                    Delete <span className="hidden md:inline">completed</span>
                </ButtonList>
            </>
        )
    }
    
    return (
        <li className={`flex p-5`}>
            {renderTotalItems()}
            {renderFilterButtons()}
            {renderDelete()}
        </li>
    )
}