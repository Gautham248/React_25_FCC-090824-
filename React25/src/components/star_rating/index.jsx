// import { useState } from 'react'
// import style from './star.module.css'
// import {FaStar} from 'react-icons/fa'

// export default function StarRating({noOfStars=5})
// {

//     const [rating,setRating]=useState(0)
//     const [hover,setHover]=useState(0)

//     function handleClick(currentIndex)
//     {
//         setRating(currentIndex)
//     }
//     function handleMouseEnter(currentIndex){
//         setHover(currentIndex)
//     }
//     function handleMouseLeave()
//     {
//         setHover(rating)
//     }

//     return <div>
//         <h1 className={style.heading}>Star Rating</h1>
//         <div className="stars">
//            {
//              [...Array(noOfStars)].map((_,index)=>{
//                 index+=1
//                 return <FaStar
//                 key={index}
//                 className={index<=(hover||rating)?style.active:style.inactive}
//                 onClick={()=>handleClick(index)}
//                 onMouseEnter={()=>handleMouseEnter(index)}
//                 onMouseLeave={()=>handleMouseLeave()}
//                 size={40}
//                 />
//              })
//            }
//         </div>
//     </div>
// }

import {FaStar} from 'react-icons/fa'
import style from './star.module.css'
import { useState } from 'react'

export default function StarRating({noOfStars=5})
{
    const [rating,setRating]=useState(0)
    const [hover,setHover]=useState(0)

    function handleClick(currentIndex)
    {
        setRating(currentIndex)
    }
    function onMouseEnter(currentIndex)
    {
        setHover(currentIndex)
    }
    function onMouseLeave()
    {
        setHover(rating)
    }

    return <div>
        <h1>Star Rating</h1>
        {
            [...Array(noOfStars)].map((_,index)=>{
                index+=1
                return <FaStar
                key={index}
                className={index<=(hover||rating)?style.active:style.inactive}
                onClick={()=>handleClick(index)}
                onMouseEnter={()=>onMouseEnter(index)}
                onMouseLeave={()=>onMouseLeave()}
                size={40}
                />
            })
        }
    </div>
}