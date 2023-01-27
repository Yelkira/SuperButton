import React, {useState} from 'react';
import './App.css';
import {SuperBatton} from "./Components/SuperBatton";
import {SuperTodolist} from "./Components/SuperTodolist";





function App() {
    const tasks = [
        {id:1,title:"HTML&CSS", isDone: true},
        {id:2,title:"JS", isDone: true},
        {id:3,title:"ReactJS", isDone: false}
    ]
    return (
        <div>
            <SuperBatton callback={()=>{}} color={"red"}>red button</SuperBatton>
            <SuperBatton callback={()=>{}}>default button </SuperBatton>
            <SuperBatton callback={()=>{}} disabled>disable button</SuperBatton>
            <SuperBatton callback={()=>{}} color={"secondary"}>just button</SuperBatton>
            <div>...........................................</div>
            <SuperTodolist tasks={tasks}>
                <div>
                <SuperBatton callback={()=>{}} color={"red"}>red button</SuperBatton>
                <SuperBatton callback={()=>{}}>default button </SuperBatton>
                <SuperBatton callback={()=>{}} disabled>disable button</SuperBatton>
                <SuperBatton callback={()=>{}} color={"secondary"}>just button</SuperBatton>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
            </div>
                </SuperTodolist>
            <div>...........................................</div>
            <SuperTodolist tasks={tasks}>
                <div>SOME TEXT</div>
                <div>SOME TEXT</div>
                <div>SOME TEXT</div>
                <div>SOME TEXT</div>
                <div>SOME TEXT</div>
                <div>SOME TEXT</div>
                <div>SOME TEXT</div>
                <div>SOME TEXT</div>
            </SuperTodolist>
            <div>...........................................</div>

            <SuperTodolist tasks={tasks}>
                <div>SOME TEXT</div>
                <div>SOME TEXT</div>
                <div>SOME TEXT</div>
                <div>SOME TEXT</div>
                <SuperBatton callback={()=>{}} color={"red"}>red button</SuperBatton>
                <SuperBatton callback={()=>{}}>default button </SuperBatton>
                <SuperBatton callback={()=>{}} disabled>disable button</SuperBatton>
                <SuperBatton callback={()=>{}} color={"secondary"}>just button</SuperBatton>
                <div>SOME TEXT</div>
                <div>SOME TEXT</div>
                <div>SOME TEXT</div>
                <div>SOME TEXT</div>
            </SuperTodolist>
        </div>
    );
}



export default App;
