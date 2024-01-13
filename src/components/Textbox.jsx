import React from "react";
import { useState } from "react";
const Textbox = () => {
  const [content,setContent]=useState('');
  function uppr(){
    setContent(content.toUpperCase());
  }
  function change(event)
  {
    
    setContent(event.target.value);
  }
  function lwr()
  {
    setContent(content.toLowerCase());
  }
  function clr()
  {
    setContent("");
  }
  const copytxt=()=>{
    navigator.clipboard.writeText(content)
  }
  
  // function copy() {
  //   <CopyToClipboard onCopy={content}></CopyToClipboard>
  // }
  return (
    <>
      <div className="container my-4">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h2 className="txt">--Write Your Content~~</h2>
          </label>
          <textarea
            className="form-control size"
            id="exampleFormControlTextarea1"
            rows="7" value={content} onChange={change} placeholder="Enter Your Text --"
          ></textarea>
        </div>
        <div className="mx-3">
          <button type="button" className="btn btn-primary mx-2" onClick={uppr}>
            Change into Uppercase
          </button>
          <button type="button" className="btn btn-primary mx-1" onClick={lwr}>
            Change into Lowercase
          </button>
          <button type="button" className="btn btn-primary mx-1" onClick={clr}>
            Clear Text
          </button>
        </div>
        <div className="my-5">
          <p>{content.split(' ').length} Words ,{content.length} Charecters..</p>
        </div>
        <div className="my-2">
          <p className="para">{content.length>0?content:'Nothing To Preview..'}</p>
        </div>
        <div className="">
          <button type="button" class="btn btn-outline-dark extra" onClick={copytxt}>Copy Text</button>
        </div>
      </div>
    </>
  );
};
export default Textbox;
