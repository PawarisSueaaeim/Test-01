'use client'
import { Fragment } from "react/jsx-runtime";
import CardTask, { IMenu } from "./CardTask";
import { FaRegFilePdf } from "react-icons/fa";
import DropArea from "./DropArea";
import { useDispatch } from "react-redux";
import { handleSetTasksData, ITodoList } from "@/store/feature/todo/AutoDeleteTodoListSlice";

export type IListData = {
    id: string;
    name: string;
    type: string;
}

type Props = {
    title: string;
    listDatas: IListData[];
    type: "Fruit" | "Vegetable" | "None";
};

export default function Column({ title, listDatas, type }: Props) {
    const dispatch = useDispatch();
    const menuOptions: IMenu[] = [
        {
            id: "01",
            title: `move to ${type === 'Fruit' ? "Vegetable" : "Fruit"}`,
            onClick: (id: string) => handleOnClickEdit(id, type === 'Fruit' ? "Vegetable" : "Fruit"),
        },
        {
            id: "02",
            title: "Delete",
            onClick: (id: string) => handleOnClickDelete(id, "delete"),
        },
    ];

    const handleOnClickEdit = (id: string, value: string) => {
        dispatch(handleSetTasksData({value: value, id: id}));
    };

    const handleOnClickDelete = (id: string, value: string) => {
        console.log(id, value);
    };

    return (
        <div className="flex flex-col bg-white p-2 rounded-lg shadow-md">
            <div className="font-medium text-md m-2">{title}</div>
            <DropArea className={`${listDatas?.length < 1 ? "h-[200px]" : ""}`} type={type} position={0}/>
            {listDatas?.map((item, index) =>
                item.type === type && (
                    <Fragment key={index}>
                        <CardTask id={item.id} icon={<FaRegFilePdf />} name={item.name} index={index} menu={menuOptions}/>
                        <DropArea type={type} position={index+1}/>
                    </Fragment>
                )
            )}
        </div>
    );
}
