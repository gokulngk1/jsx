import { useEffect } from "react";
import { useState } from "react";

function Useeffect() {
    useEffect(() => {
        console.log("useEffect called");
    }, []);

    return <h1>Hello</h1>;
}

export default Useeffect;