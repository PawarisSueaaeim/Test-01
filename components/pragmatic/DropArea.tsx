"use client";
import { useState } from "react";
import { setStatus } from "@/store/feature/todo/AutoDeleteTodoListSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

type Props = {
    id?: string;
    position?: number;
    name?: string;
    type?: string;
    className?: string;
};

export default function DropArea({ type, className }: Props) {
    const dispatch = useDispatch();
    const [showDropArea, setShowDropArea] = useState(false);

    const { onDragActiveCard, onDragActiveType } = useSelector(
        (state: RootState) => state.autoDeleteTodoListSlice
    );

    const handleOnDrop = () => {
        setShowDropArea(false);
        console.log(onDragActiveCard, type, onDragActiveType);

        if (type === onDragActiveType) {
            dispatch(setStatus({ id: onDragActiveCard, value: type }));
        } else if (type !== onDragActiveType) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: `Type is not ${type}`,
                timer: 1500,
                confirmButtonText: "OK",
            });
        } else {
            return;
        }
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
