"use client";
import { setState } from "@/store/feature/todo/AutoDeleteTodoListSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export type IMenu = {
    id: string;
    title: string;
    onClick: (id: string) => void;
};

type Props = {
    id: string;
    name: string;
    index: number;
    type: "Fruit" | "Vegetable" | "None";
};

export default function CardTask({ id, name, index, type }: Props) {
    const dispatch = useDispatch();

    const handleSetActiveCard = () => {
        // dispatch(setState({ value: index, keyValue: "onDragActiveCard" }));
        console.log(id, name, type);
    };

    const handleUnsetActiveCard = () => {
        // dispatch(setState({ value: null, keyValue: "onDragActiveCard" }));
        console.log(id, name, type);
    };

    const handleOnClickCard = () => {
        console.log(id, name, type);
    }

    return (
        <article
            id={id}
            className="relative flex justify-between items-center min-h-[50px] border-solid shadow-md duration-300 hover:bg-white_primary hover:duration-300 rounded p-2 m-2"
            draggable
            onDragStart={() => handleSetActiveCard()}
            onDragEnd={() => handleUnsetActiveCard()}
            onTouchStart={() => handleSetActiveCard()}
            onTouchEnd={() => handleUnsetActiveCard()}
            onClick={() => handleOnClickCard()}
        >
            <p className="text-xs md:text-sm">{name}</p>
        </article>
    );
}
