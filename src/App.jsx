import React, { useRef, useState } from 'react'
import './App.css'
import screenshot from 'html2canvas'

function App() {
  const[tcolor,setTcolor] = useState('000')
  const[bgcol,setBgcol] = useState('000')
  const image = useRef()
  const textColor = (colorName) =>{
    image.current.style.color=colorName
  }
  const bgColor = (colorName) =>{
    image.current.style.backgroundColor=colorName
  }
  const fontFamily = (fontName) => {
   image.current.style.fontFamily=fontName
  }

  const downloadImage = () => {
    screenshot(image.current).then(canvas => {
    const imageData = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.href=imageData
    link.download = 'RGB.png'
    link.click()
});


  }

  return (
    <>
      <div className='heading'>
       <h1 id='heading'>🚀RGB ROCKET🚀</h1>
      </div> 
       <div className='parent'>
         <div id='child1'>
          <h1  ref={image} contentEditable='true' id='text'>Write your text........</h1>
          <button id="download-btn" onClick={downloadImage}>Download</button>
         </div>
         <div id='child2'>
          <div id='text-color'>
            <h1 id='sub-heading'>Choose your text color</h1>
            <div id='text-color-names'>
              <button id="red"onClick={()=>{textColor('red')}}></button>
              <button id="green" onClick={()=>{textColor('green')}}></button>
              <button id="blue"onClick={()=>{textColor('blue')}}></button>
              <button id="yellow"onClick={()=>{textColor('yellow')}}></button>
              <button id="purple"onClick={()=>{textColor('purple')}}></button>
              <button id="white" onClick={()=>{textColor('white')}}></button>
              <input id='all' type='color' value={tcolor} 
              onChange={(e)=>{
                setTcolor(e.target.value)
                textColor(e.target.value)
              }}
              />
            </div>
          </div>
          <div id='bg-color'>
             <h1 id='sub-heading'>Choose your background color</h1>
              <div id='text-color-names'>
               <button id="red" onClick={()=>{bgColor('red')}}></button>
               <button id="green" onClick={()=>{bgColor('green')}}></button>
               <button id="blue" onClick={()=>{bgColor('blue')}}></button>
               <button id="yellow" onClick={()=>{bgColor('yellow')}}></button>
               <button id="purple" onClick={()=>{bgColor('purple')}}></button>
               <button id="white" onClick={()=>{bgColor('white')}}></button>
               <input  id='all'type='color' value={bgcol} 
              onChange={(e)=>{
                setBgcol(e.target.value)
                bgColor(e.target.value)
              }}
              />
              </div>
          </div>
          <div id='fonts'>
              <h1 id='times-new' onClick={()=>{fontFamily('times-new')}}>Hello</h1>
              <h1 id='cursive'onClick={()=>{fontFamily('cursive')}}>Hello</h1>
              <h1 id='verdana'onClick={()=>{fontFamily('verdana')}}>Hello</h1>
              <h1 id='arial'onClick={()=>{fontFamily('arial')}}>Hello</h1>
              <h1 id='impact'onClick={()=>{fontFamily('impact')}}>Hello</h1>
             

          </div>
         </div>
       </div>
       
    </>
  )
}

export default App