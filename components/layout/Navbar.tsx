import React from "react";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

export type tNavbarDatas = {
    id: string;
    title: string;
    path: string;
};

type Props = {};

export default function Navbar({}: Props) {
    const navbarDatas: tNavbarDatas[] = [
        { id: "001", title: "Auto Delete Todo List v1", path: "/auto-delete-todo-list-v1" },
        { id: "002", title: "Auto Delete Todo List v2", path: "/auto-delete-todo-list-v2" },
        { id: "003", title: "Create data from API", path: "/create-data-from-api" },
    ];

    return (
        <div className="fixed w-full text-COLOR_PRIMARY bg-white dark:bg-DARK_BLACK dark:text-DARK_WHITE p-2 duration-300 z-[98] shadow-2xl">
            <div className="hidden md:flex justify-center items-center gap-8">
                {navbarDatas.map((item, index) => {
                    return (
                        <Link
                            key={`${item.id}-${item.title}-${index}`}
                            className="hover:cursor-pointer hover:opacity-40 duration-150 active:scale-90"
                            href={item.path}
                        >
                            {item.title}
                        </Link>
                    );
                })}
            </div>
            <MobileNavbar navbarDatas={navbarDatas}/>
        </div>
    );
}
