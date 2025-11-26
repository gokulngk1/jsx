import React,{useState} from "react";

function State() {
    const [name, setName] = useState("");
    return (
        <div>
            <h1>Hello,{name}</h1>
            <input type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
             />
        </div>
    );
}
export default State;