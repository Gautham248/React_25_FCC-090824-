// import { useState } from 'react'
// import style from './Random_Color.module.css'

import { useState } from "react"

// export default function RandomColor()
// {
//     const [typeOfColor,setTypeOfColor]=useState('hex')
//     const [color,setColor]=useState('#000000')

//     function randomColorUtility(length)
//     {
//         return Math.floor(Math.random()*length)
//     }

//     function handleCreateRandomHEXColor()
//     {
//         const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//         let hexColor = "#";
//         for(let i=0;i<6;i++)
//         {
//             hexColor+=hex[randomColorUtility(hex.length)]
//         }
//         console.log(hexColor)
//         setColor(hexColor)
//     }
//     function handleCreateRandomRGBColor()
//     {
//         const r = randomColorUtility(256);
//         const g = randomColorUtility(256);
//         const b = randomColorUtility(256);
        
//         setColor(`rgb(${r},${g}, ${b})`);
//         console.log(color)
//     }
//     return<>
//     <div style={{width:'100vw',height:'100vh',background:color,padding:'0px'}}>
//     <button onClick={typeOfColor==='hex'?handleCreateRandomHEXColor: handleCreateRandomRGBColor}>Generate Random Color</button>
//     <button onClick={()=>setTypeOfColor('hex')}>Create HEX Color</button>
//     <button onClick={()=>setTypeOfColor('rgb')}>Create RGB Color</button>
//     </div>
    
//     </>
// }


export default function RandomColor()
{
    const [typeOfColor,setTypeOfColor]=useState('hex')
    const [color,setColor]=useState('#000000')
    function createRandomNumber(length)
    {
        return Math.floor(Math.random()*length)
    }
    function randomHEXColor()
    {
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor="#"
        for(let i=0;i<6;i++)
        {
            hexColor+=hex[createRandomNumber(hex.length)]
        }
        console.log(hexColor)
        setColor(hexColor)
    }
    function randomRGBColor()
    {
        let r=createRandomNumber(256)
        let g=createRandomNumber(256)
        let b=createRandomNumber(256)
        setColor(`rgb(${r},${g},${b})`)
        console.log(color)
    }


    return <>
    <div style={{width:'100vw',height:'100vh',background:color}}>
    <button onClick={()=>setTypeOfColor('hex')}>Generate Random HEX Color</button>
    <button onClick={()=>setTypeOfColor('rgb')}>Generate Random RGB Color</button>
    <button onClick={typeOfColor==='hex'?randomHEXColor:randomRGBColor}>Generate Random Color</button>
    </div>
    
    </>
}