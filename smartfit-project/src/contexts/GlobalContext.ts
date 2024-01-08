import { createContext } from "react";
import { academiaProp } from "../interfaces/types";

interface GlobalContextProps {
    academias: academiaProp[];
}

export const GlobalContext = createContext<GlobalContextProps>({academias: []});