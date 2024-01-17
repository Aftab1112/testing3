import React,{useState}from 'react'



 
export default function TextForm(props) {
    const [text,setText] = useState('')
    const  handleUpClick=()=>{
        console.log("clicked")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase!","success")
       
    }
    const handleClearClick=()=>{
      let blankText = ""
      setText(blankText)
      props.showAlert("Text Cleared ","success")
    }
    const  handleLoClick=()=>{
        console.log("clicked")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase!","success")
       
    }
    const handleCopy=()=>{
      var text = document.getElementById("myBox")
      text.select()
      navigator.clipboard.writeText(text.value)
      props.showAlert("Copied To Clipboard","success")
    }


    const handleOnChange=(event)=>{
        console.log("Onchange")
        setText(event.target.value)
    }


  return (
    <>
    <div className='container ' style={{color:props.mode==="dark"?"white":"#042743"}}>
<div className="mb-3" style={{backgroundColor:props.mode==="dark"?"#042743":"white"}}>
  <h1>{props.heading}</h1>

  <textarea className="form-control" placeholder = "Enter you text here" value={text}id="myBox" onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}}rows="8"></textarea>

</div>
<button className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to uppercase</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleLoClick} >Convert to lowercase</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleClearClick} >Clear Text</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleCopy} >Copy Text</button>
    </div>
    <div className="container my-4"style={{color:props.mode==="dark"?"white":"#042743"}} >
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read it</p>
    </div>
    <hr />
    <h2 className='mx-2' style={{color:props.mode==="dark"?"white":"black"}}>Preview</h2 >
    <p className='mx-2' style={{color:props.mode==="dark"?"white":"black"}}>{text.length>0?text:"Write Something in textbox to preview it here. "}</p>
    </>
  )
}
