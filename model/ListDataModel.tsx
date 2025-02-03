import { IListData } from "@/components/pragmatic/Column";

export const processListDataModel = (data: IListData[]) => {
    return data.map((item,index) => ({
        ...item,
        id: `${index+1}-${item.name}`,
        status: "None" as "Fruit" | "Vegetable" | "None",
    }));
};