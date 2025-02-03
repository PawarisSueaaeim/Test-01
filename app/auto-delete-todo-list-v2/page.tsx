import PragmaticDragAndDropComponent from "@/components/pragmatic/PragmaticDragAndDropComponent";
import React from "react";

type Props = {};

export const baseUrl = process.env.NEXT_PUBLIC_API;

export default async function AutoDeleteTodoListV2({}: Props) {
    const response = await fetch(`${baseUrl}/todo-list`);
    const listDatas = await response.json();
    console.log(listDatas.data);
    return <div><PragmaticDragAndDropComponent Datas={listDatas.data}/></div>;
}
