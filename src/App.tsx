import './App.css'
import Osc from './components/Osc';
import { useState } from 'react';

//create context, output, oscillator and give it gain
const audioCtx = new AudioContext();
const output = audioCtx.destination;
const osc: any = audioCtx.createOscillator();
const gain = audioCtx.createGain();

osc.connect(gain).connect(output);

function App() {

  const [ oscSettings, setOscSettings] = useState({
    frequency: osc.frequency.value,
    detune: osc.detune.value,
    type: osc.type
  });

  const changeOsc = (e: any) => {
    const { value, id } = e.target;
    setOscSettings({ ...oscSettings, [id]: value});
    osc[id].value = value;
  }

  const changeOscType = (e: any) => {
    const { id } = e.target;
    setOscSettings({ ...oscSettings, type: id })
    osc.type = id;
  }

  return (
    <div className="App">
      <Osc 
        change={ changeOsc }
        settings={ oscSettings }
        changeType={ changeOscType }
      />

      <button onClick={ () => osc.start() }>Start</button>
      <button onClick={ () => osc.stop() }>Stop</button>

    </div>
  )
}

export default App
