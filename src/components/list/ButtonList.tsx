interface ButtonListProps {
    selected?: boolean
    className?: boolean
    children: any
    onClick: (ev: any) => void
}

export default function ButtonList(props: ButtonListProps){
    const border = props.selected 
        ? 'border-b-4 border-purple-400' : ''
    return (
        <button onClick={props.onClick} className={`
            text-gray-500 font-semibold hover:text-black
            focus:outline-none 
            ${border}
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}