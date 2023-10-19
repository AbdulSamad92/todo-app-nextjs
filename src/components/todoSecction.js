"use client"
import React from "react";
import { Collapse } from 'antd';


export const TodoSection = () => {
    const onChange = (key) => {
        console.log(key);
    };
    return (
        <div className="bg-blue-400 flex flex-col justify-center w-full rounded-xl m-2 p-5">
            <p className='flex justify-center text-[30px] m-2'>My Todos</p>
            <Collapse items={items} onChange={onChange} />
        </div>
    )
}