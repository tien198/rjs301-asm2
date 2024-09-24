import { createContext, useState } from "react";

export const OriginalListContext = createContext({
    list: [],
    setList() { }
})

export function OriginalListProvider({ children }) {
    const [list, setList] = useState([])

    const contextVals = {
        list, setList
    }
    return (
        <OriginalListContext.Provider value={contextVals}>
            {children}
        </OriginalListContext.Provider>
    )
}