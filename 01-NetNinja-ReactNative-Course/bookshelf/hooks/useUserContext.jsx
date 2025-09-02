import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

// UserHook
export const useUserContext = () => {
    const context = useContext(UserContext)
    if (!context) {
        return new Error("Use within a Usercontext Provider Component")
    }
    return context
}