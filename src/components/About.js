import React from 'react'

export default function About(props) {


    let myStyle ={
      color : props.mode === "dark"?"white":"black",
      backgroundColor : props.mode === "dark"?"rgb(36 74 104)":"white"
    }
    

  return (
    <>
    <div className="container"  >
        <h2 className='my-4' style = {{color : props.mode === "dark"?"white":"black"}}>About Us </h2>
    <div className="accordion" id="accordionExample" style = {myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style = {myStyle}data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze Your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style = {myStyle}>
      Text analysis delivers qualitative results and text analytics delivers quantitative results. If a machine performs text analysis, it identifies important information within the text itself, but if it performs text analytics, it reveals patterns across thousands of texts, resulting in graphs, reports, tables etc.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style = {myStyle}data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free To Use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style = {myStyle}>
      Businesses are inundated with information and customer comments can appear anywhere on the web these days, but it can be difficult to keep an eye on it all. Text analysis is a game-changer when it comes to detecting urgent matters, wherever they may appear, 24/7 and in real time.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style = {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style = {myStyle}>
      Humans make errors. Fact. And the more tedious and time-consuming a task is, the more errors they make. By training text analysis models to your needs and criteria, algorithms are able to analyze, understand, and sort through data much more accurately than humans ever could.
      </div>
    </div>
  </div>
</div>

</div>
    </>
  )
}
