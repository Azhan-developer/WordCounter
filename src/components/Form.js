import React from 'react'
import { useState } from 'react'

export default function Form(props) {

    const [MyText, setMyText] = useState("")

    let TextChange = (myValue) => {
        setMyText(myValue.target.value)
    }
    let handleUpper = () => {
        setMyText(MyText.toUpperCase())
    }
    let handleLower = () => {
        setMyText(MyText.toLowerCase())
    }
    let handleCamel = () => {
        const ToCapital = MyText
        let modifiedText = '';
        const slice = ToCapital.split(' ')
        for(let i=0; i < slice.length; i++){
            const capitalized = slice[i];
            const final = capitalized.charAt(0).toUpperCase() + capitalized.slice(1) 
            modifiedText += final + ' ';
        }
        setMyText(modifiedText);

       
    }

    let handleClear = () => {
        if(MyText===""){
        props.handleAlerts("There is no text to clear", "danger") 
        }
        else{
         setMyText("")
        props.handleAlerts("Text cleared", "warning") 
        }  
    }
    let handleCopy = () => {
        if(MyText===""){
            props.handleAlerts("There is no text to copy", "danger")
        }
        else{
        navigator.clipboard.writeText(MyText);
        props.handleAlerts("Text copied to clipboard", "success")
        }
    }
    let handleSpace = () => {
        let removeSpaces = MyText.replace(/\s+/g, ' ')
        setMyText(removeSpaces)
        if(removeSpaces.includes(" ")){
        props.handleAlerts("All Spaces are cleared", "success")
        }
        else{
        props.handleAlerts("There is no space to clear", "danger")

        }
    }



    // const names = "Azhan zaiyan   "
    // let darrar = names.split(' ')
    // let removed = darrar.filter(Boolean)
    // console.log(removed)

    // const azhan = "Azhan"
    // const changed = azhan.replace("Azhan", "Zaiyan")
    // console.log(changed)          // important // important // important // important // important // important // important

// for (let i = 0; i < b.length; i++) {
//   const word = b[i];
//   const cased = word.charAt(0).toUpperCase()+word.slice(1)
//   console.log(cased);
// }




    // let a = "Azhan zaiyan kamran  "
    // console.log( a.split(' ').filter(Boolean))boolean take only true values and empty strings are removed by false





    return (
        <div className="container my-5">
            <div className="mb-3 mx-3">
                <h2 style={{ color: props.Modes === 'light' ? 'black' : 'white' }}>Enter something in the Box</h2>
            </div>
            <div className="container py-3">
                <div className="btn">
                <button className="btn btn-primary" onClick={handleUpper}>Convert to Uppercase</button>
                </div>
                <div className="btn">
                <button className="btn btn-success" onClick={handleLower}>Convert to lowercase</button>
                </div>
                <div className="btn">
                <button className="btn btn-warning" onClick={handleCamel}>Capitalize</button>
                </div>
                <div className="btn">
                <button className="btn btn-danger" onClick={handleClear}>Clear text</button>
                </div>
                <div className="btn">
                <button className="btn btn-info" onClick={handleCopy}>Copy text</button>
                </div>
                <div className="btn">
                <button className="btn btn-secondary" onClick={handleSpace}>Remove spaces</button>
                </div>
            </div>
            <div className="mb-3 my-4 mx-3">
                <textarea id="data" className="form-control p-3" value={MyText} onChange={TextChange}  rows="12" style={{ backgroundColor: props.Modes === 'dark' ? 'black' : 'white', color: props.Modes === 'dark' ? 'white' : 'black' }}></textarea>
            </div>
            <div className="container my-3">
            <h1 className='bg-primary py-4 px-4' style={{ color: props.Modes === 'light' ? 'white' : 'white' }}>{MyText.split(' ').filter(Boolean).length} Words {MyText.replace(/\s+/g, '').length} Letters</h1>
            </div>
        </div>
    )
}
