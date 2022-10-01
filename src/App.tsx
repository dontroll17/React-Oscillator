import './App.css'
import Osc from './components/Osc';
import Filter from './components/Filter';
import { useState } from 'react';

//create context, output, oscillator and give it gain + biquad filter
const audioCtx = new AudioContext();
const output = audioCtx.destination;

const osc: any = audioCtx.createOscillator();
const gain = audioCtx.createGain();
const filter: any = audioCtx.createBiquadFilter();

osc.connect(gain).connect(filter).connect(output);

function App() {

  const [ oscSettings, setOscSettings] = useState({
    frequency: osc.frequency.value,
    detune: osc.detune.value,
    type: osc.type
  });

  const [ filterSettings, setFilterSettings ] = useState({
    frequency: filter.frequency.value,
    detune: filter.detune.value,
    type: filter.type,
    Q: filter.Q.value,
    gain: filter.gain.value
  });

  const changeFilter = (e: any) => {
    const { value, id } = e.target;
    setFilterSettings( { ...filterSettings, [id]: value } );
    filter[id].value = value;
  }

  const changeOsc = (e: any) => {
    const { value, id } = e.target;
    setOscSettings( { ...oscSettings, [id]: value} );
    osc[id].value = value;
  }

  const changeOscType = (e: any) => {
    const { id } = e.target;
    setOscSettings( { ...oscSettings, type: id } );
    osc.type = id;
  }

  const changeFilterType = (e: any) => {
    const { id } = e.target;
    setFilterSettings( { ...filterSettings, type: id } );
    filter.type = id;
  }

  return (
    <div className="App">
      <button onClick={ () => osc.start() }>Start</button>
      <button onClick={ () => osc.stop() }>Stop</button>
      
      <h3>Control panel</h3>
      <Osc 
        change={ changeOsc }
        settings={ oscSettings }
        changeType={ changeOscType }
      />

      <h3>Filter</h3>
      <Filter 
        change={ changeFilter }
        settings={ filterSettings }
        changeType={ changeFilterType }
      />

    </div>
  )
}

export default App
