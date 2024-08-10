// import { useState } from 'react'
// import data from './data'


// export default function Accordion()
// {

//     const [selected,setSelected]=useState(null)
//     const [enableMultiSelection,setEnableMulti]=useState(false)
//     const [multiList,setMultiList]=useState([])
//     function handleSingleClick(currentId)
//     {
//         setSelected(currentId===selected?null:currentId)
//     }
//     function handleMulitpleClick(currentId)
//     {
//         let copyMultiple=[...multiList]
//         const currentIndex=copyMultiple.indexOf(currentId)

//         if(currentIndex=== -1)
//         {
//             copyMultiple.push(currentId)
//         }
//         else{
//             copyMultiple.splice(currentIndex,1)
//         }
//         console.log(copyMultiple)
//         setMultiList(copyMultiple)
//     }
//     return <div className="wrapper">
//         <h1>Accordion</h1>
//         <button onClick={()=>setEnableMulti(!enableMultiSelection)}>Enable Multi Selection</button>
//         <div className="items">
//             {data && data.length>0? 
//                 data.map(dataItems=>
//                     <div onClick={enableMultiSelection?()=>handleMulitpleClick(dataItems.id):()=>handleSingleClick(dataItems.id)}>
//                         <h3>{dataItems.question}</h3>
//                         <div>{enableMultiSelection?
//                         multiList.indexOf(dataItems.id)!== -1 && dataItems.answer
//                         :selected===dataItems.id && dataItems.answer}</div>
//                     </div>

//                 )


            
//             : <div>No data found</div>}
//         </div>
//     </div>
// }


import data from './data'
import { useState } from 'react'


export default function Accordion()
{

    const [selected,setSelected]=useState(null)
    const [enableMultiSelection,setEnableMulti]=useState(false)
    const [multiList,setMultiList]=useState([])

    function handleSingleClick(currentId)
    {
        setSelected(currentId===selected?null:currentId)
    }

    function handleMulitpleClick(currentId)
    {
        let copyMultiple=[...multiList]
        const currentIndex=copyMultiple.indexOf(currentId)

        if (currentIndex===-1) {copyMultiple.push(currentId)}
        else {copyMultiple.splice(currentIndex,1)}

        // console.log(copyMultiple)
        setMultiList(copyMultiple)

    }
    return <div className="wrapper">
        <h1>Accordion</h1>
        <button onClick={()=>setEnableMulti(!enableMultiSelection)}>Toggle Selection</button>
        <div className="item">
            {
                data && data.length>0?
                data.map(dataItem=>
                    <div onClick={enableMultiSelection?()=>handleMulitpleClick(dataItem.id):()=>handleSingleClick(dataItem.id)}>   
                        <h3>{dataItem.question}</h3>
                        {/* <div>{selected===dataItem.id && dataItem.answer}</div> */}
                        {
                            enableMultiSelection?
                            multiList.indexOf(dataItem.id)!==-1 && <div>{dataItem.answer}</div>
                            :<div>{selected===dataItem.id && dataItem.answer}</div>
                        }
                    
                    </div>
                 
                )
                :
                <div>No Data Found..</div>
            }
        </div>
    </div>
}