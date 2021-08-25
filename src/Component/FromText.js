import React, { useState } from 'react'

export default function FromText(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert("converted to Upper case", "success")
    }
    const handleLoClick = () => {
        setText(text.toLowerCase())
        props.showAlert("converted to Lower case", "success")

    }
    const handleClearClick = () => {
        setText('')
    }


    const handleOnChange = (event) => {
        setText(event.target.value)
    }


    const [text, setText] = useState("")

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label for="myBox" class="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            



        </div>
        <div className="container">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} and {text.length} charecters</p>
            <p>{0.008 * text.split(" ").length} mintutes to read this</p> 
             <h2>Preview</h2>
             {/* agar text lenth zero sn greater hn to Text dekhaw : angar nhi hn to ye dekha */}
             <p>{text.length>0?text:"Enter text above to preview"}</p>
             {/* average time to read a word is 0.008 */}
        </div>
        </>
    )
}
