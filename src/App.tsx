import './App.css'
import Osc from './components/Osc';
import { useState } from 'react';

const audioCtx = new AudioContext();
const outLine = audioCtx.destination;
const osc: any = audioCtx.createOscillator();
const gain = audioCtx.createGain();

osc.connect(gain);
gain.connect(outLine);

function App() {

  const [ oscSettings, setOscSettings] = useState({
    frequency: osc.frequency.value,
    detune: osc.detune.value
  });

  const changeOsc = (e: any) => {
    const { value, id } = e.target;
    setOscSettings({ ...oscSettings, [id]: value})
    osc[id].value = value;
  }

  return (
    <div className="App">
      <button onClick={() => osc.start()}>Start</button>
      <button onClick={() => osc.stop()}>Stop</button>
      <Osc 
        change={ changeOsc }
        settings={ oscSettings }
      />
    </div>
  )
}

export default App
