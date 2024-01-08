import { createContext } from "react";
import { academiaProp } from "../interfaces/types";

interface GlobalContextProps {
    academias: academiaProp[];
    sum: number;
    setSum: (value: number) => void;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    totalPages: number;
}

export const GlobalContext = createContext<GlobalContextProps>({
    academias: [],
    sum: 0,
    setSum: () => {},
    currentPage: 1,
    setCurrentPage: () => {},
    totalPages: 1,
});