import React, {useState} from 'react';
import './App.css';
import {SuperBatton} from "./Components/SuperBatton";





function App() {
    return (
        <div>
            <SuperBatton callback={()=>{}} color={"red"}>red button</SuperBatton>
            <SuperBatton callback={()=>{}}>default button </SuperBatton>
            <SuperBatton callback={()=>{}} disabled>disable button</SuperBatton>
            <SuperBatton callback={()=>{}} color={"secondary"}>just button</SuperBatton>
        </div>
    );
}



export default App;
