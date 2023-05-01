import { useEffect, useLayoutEffect, useState } from "react";
import { login as loginService } from "../services/auth"

}
export function useAuth() {
   
    async function login(credentials) {
        try {
            const userInfo = await loginService(credentials);
            setUser(userInfo);
        } catch (error) {
            throw error.data.message || "Error"
        }

    }

    function logout() {
        setUser(initialAuth);
    }

    return {
        user,
        login,
        logout
    }

}