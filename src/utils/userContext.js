import { createContext } from "react";

const userContext = createContext({
    username: "",
    email: "",
    phone: "",
    password: "",
});

export default userContext;
