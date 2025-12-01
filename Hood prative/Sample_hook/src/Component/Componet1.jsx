import { useState } from "react";   
import { useEffect } from "react";

function Componet1() {
    const [user, setUser] = useState("linus");
    return(
        <UserContext.Provider value={user}>
            <h1>{`Hello ${user}`}</h1>
        </UserContext.Provider>
    )
}

export default Componet1;