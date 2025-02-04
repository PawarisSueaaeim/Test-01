"use client";
import { Fragment } from "react/jsx-runtime";
import CardTask from "./CardTask";
import DropArea from "./DropArea";

export type IListData = {
    id: string;
    name: string;
    type: "Fruit" | "Vegetable" | "None";
    status: "Fruit" | "Vegetable" | "None";
};

type Props = {
    title: string;
    listDatas: IListData[];
    type?: "Fruit" | "Vegetable" | "None";
};

export default function Column({ title, listDatas, type }: Props) {
    return (
        <div className="flex flex-col bg-white p-2 rounded-lg shadow-md">
            <div className="font-medium text-md m-2">{title}</div>
            <DropArea
                className={`${listDatas?.length < 1 ? "h-[200px]" : ""}`}
                type={type}
            />
            {listDatas?.map((item: IListData, index) => {
                if (type === "None" && item.status === "None") {
                    return (
                        <Fragment key={index}>
                            <CardTask
                                id={item.id}
                                name={item.name}
                                index={index}
                                type={item.type}
                            />
                        </Fragment>
                    );
                }else if (type === "Fruit" && item.status === "Fruit") {
                    return (
                        <Fragment key={index}>
                            <CardTask
                                id={item.id}
                                name={item.name}
                                index={index}
                                type={item.type}
                            />
                        </Fragment>
                    );
                }else if (type === "Vegetable" && item.status === "Vegetable") {
                    return (
                        <Fragment key={index}>
                            <CardTask
                                id={item.id}
                                name={item.name}
                                index={index}
                                type={item.type}
                            />
                        </Fragment>
                    );
                }
            })}
        </div>
    );
}
