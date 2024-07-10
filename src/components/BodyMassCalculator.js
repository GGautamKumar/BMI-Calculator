import React, { useState } from "react";
import './BodyMassCalculator.css'

const BodyMassCalculator = () => {
  const [h_feet, setFeet] = useState(0);
  const [h_inche, setInche] = useState(0);
  const [cal, setCal] = useState(0);
  const [weight,setWeight]=useState(0);
  const [s,setCond]=useState("");
  

  const claculateBMI = () => {
    let a = Number(h_feet*12);
    let b=Number(h_inche);
    let c=(a+b)*2.53;
    let w=Number(weight);
    let d=c/100;
    let e=d*d;
    let cal=Math.round(w/e);
    let s;
    if(cal>18&&cal<25)
        {
            s="You are healthy";
        }
        else if(cal<18)
            {
                s="You are under fit";
            }
            else if(cal>25)
                {
                    s="You are over fit";
                }
    setCal(cal);
    setCond(s);
  };
  const resetBMI =()=>
    {
        setFeet('');
        setInche('');
        setWeight('');
    }

  return (
    <div className="container">
      <div className="left">
        <div className="f1">
          Enter
          <input
            type="number"
            placeholder="height in feet"
            value={h_feet}
            onChange={(e) => setFeet(e.target.value)}
          />
        </div>
        <div className="f1">
          Enter
          <input
            type="number"
            placeholder="height in inche"
            value={h_inche}
            onChange={(e) => setInche(e.target.value)}
          />
        </div>
        <div className="f1">
          <h4>Enter</h4>
          <input type="number" placeholder="weight in kg" value={weight} onChange={e=>setWeight(e.target.value)} />
        </div>
        <dib>
          <button onClick={claculateBMI}>Calculate</button>
          <button onClick={resetBMI}>reset</button>
        </dib>
      </div>
      <div className="right">
        <div>
          <h1>Your BMI index is</h1>
        </div>
        <h1>{cal} BMI</h1>
        <h1>{s} in condtion</h1>
      </div>
    </div>
  );
};

export default BodyMassCalculator;
