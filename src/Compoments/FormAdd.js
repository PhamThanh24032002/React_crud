import { useState } from "react"
function FormAdd({ addDataInput }) {

    const [ValueInput, SetValueInput] = useState('')

    function handleChane(event) {
        SetValueInput(event.target.value);
    }
    
    function handleAdd() {
        //truyền data lên thằng cha để rendered
        
        addDataInput(ValueInput)
        SetValueInput("")
    }

    return (
        <div id="myDIV" className="header">
            <h2 >My To Do List</h2>
            <input
                onChange={handleChane}
                value={ValueInput}
                type="text"
                id="myInput"
                placeholder="Title..."
            />
            <span className="addBtn" onClick={handleAdd} >Add</span>
        </div>
    )
}
export default FormAdd