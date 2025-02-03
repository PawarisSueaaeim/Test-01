'use client'
import { setState } from "@/store/feature/todo/AutoDeleteTodoListSlice";
import React, { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { useDispatch } from "react-redux";

export type IMenu = {
    id: string;
    title: string;
    onClick: (id:string) => void;
};

type Props = {
    id: string;
    icon?: React.ReactNode;
    name: string;
    index: number;
    menu: IMenu[];
};

export default function CardTask({ id, name, icon, index, menu }: Props) {
    const dispatch = useDispatch();

    const [showMenu, setShowMenu] = useState(false);

    const handleSetActiveCard = () => {
        dispatch(setState({value: index, keyValue: "onDragActiveCard"}))    
    };

    const handleUnsetActiveCard = () => {
        dispatch(setState({value: null, keyValue: "onDragActiveCard"}))
    };

    return (
        <article 
            id={id}
            className="relative flex justify-between items-center min-h-[50px] border-solid shadow-md duration-300 hover:bg-white_primary hover:duration-300 rounded p-2 m-2"
            draggable
            onDragStart={() => handleSetActiveCard()}
            onDragEnd={() => handleUnsetActiveCard()}
            onTouchStart={() => handleSetActiveCard()}
            onTouchEnd={() => handleUnsetActiveCard()}
        >
            <div className="flex justify-center items-center gap-2">
                <span>{icon}</span>
                <p className="text-xs md:text-sm">{name}</p>
            </div>
            <div className="bg-white_primary p-2 rounded-sm">
                <FaEllipsisH className="text-xs md:text-sm" onClick={() => setShowMenu(!showMenu)}/>
                <div className={`absolute right-0 top-8 bg-white_primary shadow-md p-2 rounded-sm ${showMenu ? "block" : "hidden"} z-[10]`}>
                    {menu?.map((item, index) => (
                        <div key={`${item.id}-${index}`} className="hover:bg-gray-200 p-2 rounded-sm text-xs" onClick={() => item.onClick(id)}>
                            {item.title}
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
}
