"use client";
import { setState } from "@/store/feature/todo/AutoDeleteTodoListSlice";
import { RootState } from "@/store/store";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
    id?: string;
    position: number;
    type?: string;
    className?: string;
};

export default function DropArea({id, position, type, className}: Props) {
    const dispatch = useDispatch();
    const [showDropArea, setShowDropArea] = useState(false);

    const { onDragActiveCard, listDatas } = useSelector(
        (state: RootState) => state.autoDeleteTodoListSlice
    );

    const handleOnDrop = () => {
        setShowDropArea(false);
        console.log(id,type);
        // if (onDragActiveCard === null || onDragActiveCard === undefined) {
        //     return;
        // }
        // const taskToMove = listDatas[onDragActiveCard];
        // const updateTasks = listDatas.filter(
        //     (_, index: number) => index !== onDragActiveCard
        // );

        // updateTasks.splice(position, 0, {
        //     ...taskToMove,
        //     status: status,
        // });

        // setTimeout(() => {
        //     dispatch(setState({ value: updateTasks, keyValue: "tasksData" }));
        // }, 150);
    };

    return (
        <section
            className={`opacity-50 duration-300 border border-dashed border-darkgray_primary rounded-sm p-1 text-[10px] ${
                showDropArea ? "display-block" : "opacity-0 duration-300 text-[0px]"
            } ${className}`}
            onDragEnter={() => setShowDropArea(true)}
            onDragLeave={() => setShowDropArea(false)}
            onDrop={() => handleOnDrop()}
            onDragOver={(event) => event.preventDefault()}
        >
            Drop here
        </section>
    );
}
