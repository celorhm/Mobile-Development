import { useContext } from "react";
import { userContext } from "../contexts/UserContext";


export const useUserContextHook = () => {
    const context = useContext(userContext)
    if (!context) {
        return new Error("Use within a Usercontext Provider Component")
    }
    return context
}