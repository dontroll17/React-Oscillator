import React from 'react'

function Osc({ change, settings }: any) {
  return (
    <div className='control'>
        
        <div className='freq-control'>
            
            <h2>Frequency control</h2>
            <input 
                onChange={ change } 
                type="range" 
                id="frequency"
                max="5000"
                value={ settings.frequency }
            />
        </div>
        


        <div className='detune-control'>
            
            <h2>Detune control</h2>
            <input 
                onChange={ change }
                type="range" 
                id='detune'
                value={ settings.detune }
            />
        </div>
    </div>
  )
}

export default Osc