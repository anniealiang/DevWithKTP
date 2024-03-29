import '../styles/global.css'
import { useState } from "react";

function Checklist() {
    const [checkListState, setCheckList] = useState(["hat", "sunglasses", "water"]);
    const [toAdd, setToAdd] = useState("");

    // Exercise 1:
    // Add your name where it says "[Insert Name] Packing List"
    const createCheckList = () => {
        const name = 'sreya';
        return <div>
            <h1 className="list-header">{name} Packing List</h1>
            <ul >
                {checkListState.map((item) => (
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
                onClick={() => setCheckList(checkListState.concat(toAdd))}
            >
                Add item
            </button>
        </div>;
    }


    return (
        <div className="checklist-card">
            {/* Exercise 2: 
                    Make sure the checkList is apart of the state. Hint: use the useState hook */}
            {createCheckList(checkListState)}
            {checkListButtons(toAdd, setToAdd, setCheckList, checkListState)}
        </div>
    );
}


export default Checklist;