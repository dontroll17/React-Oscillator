import React from 'react';

function Osc( { change, settings, changeType }: any ) {
    //let [ type, frequency, detune ] = settings;

    return (
        <div className='control'>
            
            <div className='freq-control'>
                
                <h2>Frequency control</h2>
                <input 
                    type="range" 
                    id="frequency"
                    max="5000"
                    value={ settings.frequency }
                    onChange={ change } 
                />
            </div>
            


            <div className='detune-control'>
                
                <h2>Detune control</h2>
                <input 
                    type="range" 
                    id='detune'
                    value={ settings.detune }
                    onChange={ change }
                />
            </div>

            <div className="wave-control">
                
                <h2>Wave Type</h2>
                <button 
                    id='sine' 
                    onClick={ changeType }
                    className={`${settings.type === 'sine' && 'active'}`}
                >
                    Sine
                </button>
                <button 
                    id='triangle' 
                    onClick={ changeType }
                    className={`${settings.type === 'triangle' && 'active'}`}
                >
                    Triangle
                </button>
                <button 
                    id='square' 
                    onClick={ changeType }
                    className={`${settings.type === 'square' && 'active'}`}
                >
                    Square
                </button>
                <button 
                    id='sawtooth' 
                    onClick={ changeType }
                    className={`${settings.type === 'sawtooth' && 'active'}`}
                >
                    Sawtooth
                </button>
            </div>
        </div>
    )
}

export default Osc;