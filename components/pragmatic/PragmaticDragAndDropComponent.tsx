"use client";
import { Fragment } from "react/jsx-runtime";
import Column, { IListData } from "./Column";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setState } from "@/store/feature/todo/AutoDeleteTodoListSlice";
import { RootState } from "@/store/store";

type Props = {
    Datas: IListData[];
};

export default function PragmaticDragAndDropComponent({ Datas }: Props) {
    const dispatch = useDispatch();
    const { listDatas } = useSelector((state: RootState) => state.autoDeleteTodoListSlice);

    useEffect(() => {
        dispatch(setState({ value: Datas, keyValue: "listDatas" }));
    }, [Datas]);

    return (
        <Fragment>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Column title="List Data" listDatas={listDatas} type="None" />
                <Column title="Fruit" listDatas={listDatas} type="Fruit" />
                <Column title="Vegetable" listDatas={listDatas} type="Vegetable" />
            </div>
        </Fragment>
    );
}
