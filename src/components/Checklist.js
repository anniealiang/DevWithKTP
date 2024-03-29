import '../styles/global.css'
import { useState } from "react";

function Checklist() {
    const checkList = ["rocketship", "computer", "astronaut suit"];
    const [toAdd, setToAdd] = useState("");

    // Exercise 1:
    // Add your name where it says "[Insert Name] Packing List"

    // Exercise 2: 
    // Make sure the checkList is apart of the state. Hint: use the useState hook 
    const createCheckList = () => {
        return <div>
            <h1 className="list-header">[Insert Name] Packing List</h1>
            <ul >
                {checkList.map((item) => (
                    <div>
                        <input value={item} type="checkbox" />
                        <span className="list-item">{item}</span>
                    </div>
                ))}
            </ul>
        </div>
    }

    // Exercise 3: 
    // Enable the Add Item button to add items to the checkList
    const checkListButtons = () => {
        return <div className="buttons-panel">
            <input className="inputs" value={toAdd} onChange={(e) => setToAdd(e.target.value)} />
            <button
                className="inputs"
                // onClick={}
            >
                Add item
            </button>
        </div>;
    }


    return (
        <div className="checklist-card">
            {createCheckList()}
            {checkListButtons()}
        </div>
    );
}


export default Checklist;