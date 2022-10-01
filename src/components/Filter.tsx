import React from 'react';

function Filter( { change, settings, changeType }:any ) {
    return (
        <div className='control'>
            <div>
                <h3>frequency</h3>
                <input 
                    type="range"
                    onChange={ change }
                    value={ settings.frequency }
                    id='frequency' 
                    max='10000'
                />
            </div>

            <div>
                <h3>detune</h3>
                <input 
                    type="range"
                    onChange={ change }
                    value={ settings.detune }
                    id='detune' 
                    max='100'
                />
            </div>

            <div>
                <h3>Q</h3>
                <input 
                    type="range"
                    onChange={ change }
                    value={ settings.Q }
                    id='Q' 
                    max='10'
                    step='0.1'
                />
            </div>

            <div>
                <h3>gain</h3>
                <input 
                    type="range"
                    onChange={ change }
                    value={ settings.gain }
                    id='gain' 
                    max='10'
                    step='0.1'
                />
            </div>

            <div className="filter-control">
                    
                    <h2>Filter Type</h2>
                    <button 
                        id='lowpass' 
                        onClick={ changeType }
                        className={`${settings.type === 'lowpass' && 'active'}`}
                    >
                        lowpass
                    </button>
                    <button 
                        id='highpass' 
                        onClick={ changeType }
                        className={`${settings.type === 'highpass' && 'active'}`}
                    >
                        highpass
                    </button>
                    <button 
                        id='notch' 
                        onClick={ changeType }
                        className={`${settings.type === 'notch' && 'active'}`}
                    >
                        notch
                    </button>
                    <button 
                        id='lowshelf' 
                        onClick={ changeType }
                        className={`${settings.type === 'lowshelf' && 'active'}`}
                    >
                        lowshelf
                    </button>
                    <button 
                        id='highshelf' 
                        onClick={ changeType }
                        className={`${settings.type === 'highshelf' && 'active'}`}
                    >
                        highshelf
                    </button>
                </div>
        </div>
    )
}

export default Filter;