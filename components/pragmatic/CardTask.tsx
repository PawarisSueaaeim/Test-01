"use client";
import React from "react";
import { setState, setStatus } from "@/store/feature/todo/AutoDeleteTodoListSlice";
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

export default function CardTask({ id, name, type }: Props) {
    const dispatch = useDispatch();

    const handleSetActiveCard = () => {
        dispatch(setState({ value: id, keyValue: "onDragActiveCard" }));
        dispatch(setState({ value: type, keyValue: "onDragActiveType" }));
    };

    const handleUnsetActiveCard = () => {
        dispatch(setState({ value: "", keyValue: "onDragActiveCard" }));
        dispatch(setState({ value: "", keyValue: "onDragActiveType" }));
    };

    const handleOnClickCard = () => {
        dispatch(setStatus({id: id, value: type}))
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
