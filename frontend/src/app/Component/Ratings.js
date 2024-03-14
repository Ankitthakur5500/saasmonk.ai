import React from 'react'

function Ratings() {
    var arr =  [{movie:"Start Wars",Released:"1 August,2011",Rating:"9/10"},
                {movie:"Start Wars",Released:"1 August,2011",Rating:"9/10"},
                {movie:"Start Wars",Released:"1 August,2011",Rating:"9/10"},
                {movie:"Start Wars",Released:"1 August,2011",Rating:"9/10"},
                {movie:"Start Wars",Released:"1 August,2011",Rating:"9/10"},
                {movie:"Start Wars",Released:"1 August,2011",Rating:"9/10"}];
  return (
    <div className='conatiner datarating'>
    {arr.map((item,id)=>(<div className='data'>{item.movie+id}</div>))}
    </div>
  )
}

export default Ratings