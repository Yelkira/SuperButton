import React from 'react';

type PropsType={
    id:number
    title:string
    isDone:boolean
}
type GeneralType={
    tasks:PropsType[]
    children:React.ReactNode
}

export const SuperTodolist = (props:GeneralType) => {
    return (
        <ul>
            {props.tasks.map(m=>{
                return(
                    <li><span>{m.id}</span>
                        <span>{m.title}</span>
                        <input type={"checkbox"}  checked={m.isDone}/>
                    </li>
                )
            })}
            {props.children}
        </ul>
    );
};
