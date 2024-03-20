import React from 'react'

function Ratings() {
    var arr =  [{movie:"Start Wars:A new hope",Released:"1 August,2011",Rating:"9/10"},
                {movie:"Start Wars:A new hope",Released:"1 August,2011",Rating:"9/10"},
                {movie:"Start Wars:A new hope",Released:"1 August,2011",Rating:"9/10"},
                {movie:"Start Wars:A new hope",Released:"1 August,2011",Rating:"9/10"},
                {movie:"Start Wars:A new hope",Released:"1 August,2011",Rating:"9/10"},
                {movie:"Start Wars:A new hope",Released:"1 August,2011",Rating:"9/10"}];
  return (
    <div className='conatiner datarating'>
    {arr.map((item,id)=>(<div className='data'><p className='dataInside'>{item.movie}</p><br/><p className='dataInside'><i>{item.Released}</i></p><br/><p className='dataInside'><b>{item.Rating}</b></p></div>))}
    </div>
  )
}

export default Ratings