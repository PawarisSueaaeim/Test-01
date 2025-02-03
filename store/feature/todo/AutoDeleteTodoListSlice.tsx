import { processListDataModel } from "@/model/ListDataModel";
import { RootState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit";

export type ITodoList = {
    listDatas: {
        id: string;
        name: string;
        type: "Fruit" | "Vegetable" | "None";
        status: "Fruit" | "Vegetable" | "None";
    }[];
    queueDatas: string[];
    onDragActiveCard: string | number | null;
};

const initialState: ITodoList =  {
    listDatas: [],
    queueDatas: [],
    onDragActiveCard: null,
};

const autoDeleteTodoListSlice = createSlice({
    name: "autoDeleteTodoListSlice",
    initialState: initialState,
    reducers: {
        setState: (state, action) => {
            const { value, keyValue } = action.payload;

            switch (keyValue) {
                case "onDragActiveCard": {
                    state.onDragActiveCard = value;
                    break;
                }
                case "listDatas": {
                    state.listDatas = processListDataModel(value);
                    console.log(processListDataModel(value));
                    break;
                }
            }
        },
        setStatus: (state, action) => {
            const { id, value } = action.payload;
            state.listDatas.find((item) => item.id === id)!.status = value;
        },
    },
});

export const { setState, setStatus } = autoDeleteTodoListSlice.actions;
export default autoDeleteTodoListSlice.reducer;
export const autoDeleteTodoListSelector = (state: RootState) => state.autoDeleteTodoListSlice;
