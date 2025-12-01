import React from "react";
import { useEffect } from "react";  
const Useeffect = () => {
    useEffect(() => {
        console.log("useEffect called");
    }, []);
}
export default Useeffect;