import { processListDataModel } from "@/model/ListDataModel";
import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";

const setSessionStorage = (state: any) => sessionStorage.setItem('pragmaticDragAndDropStateValue', JSON.stringify(state));
const storedState = sessionStorage.getItem('pragmaticDragAndDropStateValue');

export type ITodoList = {
    listDatas: {
        id: string;
        name: string;
        type: "Fruit" | "Vegetable" | "None";
        status: "Fruit" | "Vegetable" | "None";
    }[];
    onDragActiveCard: string | number | null;
}

const initialState: ITodoList = storedState ? JSON.parse(storedState) : {
    listData: [],
    onDragActiveCard: null,
};

const autoDeleteTodoListSlice = createSlice({
    name: "autoDeleteTodoListSlice",
    initialState: initialState,
    reducers: {
        setState: (state, action) => {
            const {value, keyValue} = action.payload;

            switch (keyValue) {
                case 'onDragActiveCard': {
                    state.onDragActiveCard = value;
                    break;
                }
                case 'listDatas': {
                    state.listDatas = processListDataModel(value);
                    console.log(processListDataModel(value));
                    break;
                }
            }

            setSessionStorage(state);
        },
        handleOnClickData: (state, action) => {
            const {value, id} = action.payload;
            console.log(value, id);
            state.listDatas.find((item) => item.id === id)!.status = value;
        }
    },
})

export const {
    setState,
    handleOnClickData,
} = autoDeleteTodoListSlice.actions;
export default autoDeleteTodoListSlice.reducer;
export const autoDeleteTodoListSelector = (state: RootState) => state.autoDeleteTodoListSlice;