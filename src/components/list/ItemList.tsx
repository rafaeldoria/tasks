import Select from "./Select"

interface ItemListProps {
    value: string
    completed: boolean
    changeStatus: () => void
}

export default function ItemList(props: ItemListProps) {
    const textStyle = props.completed 
        ? 'line-through text-gray-300' 
        : 'text-gray-600'

    return (
        <li onClick={props.changeStatus} className={`
            text-black 
            flex items-center p-5 text-xl
            border-b border-gray-400 cursor-pointer
        `}>
            <Select value={props.completed}/>
            <span className={`font-light ml-5 ${textStyle}`}>
                {props.value}
            </span>
        </li>
    )
}