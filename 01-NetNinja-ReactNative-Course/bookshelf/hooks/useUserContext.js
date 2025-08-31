import { useContext } from "react";
import { userContext } from "../contexts/userContext";


export const useUserContextHook = () => {
    const context = useContext(userContext)
    if (!context) {
        return new Error("Use within a Usercontext Provider Component")
    }
    return context
}