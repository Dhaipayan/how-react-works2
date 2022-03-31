import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Swatch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
        console.log(steps);
    }

    useEffect(() => {
        console.log(steps)
    }, [steps])

    return (
        <div style={{ border: '2px solid purple', margin: '20px' }}>
            <h2>this is my smart watch</h2>
            <h3>my Current steps: {steps}</h3>
            <button onClick={increaseSteps}>De dour</button>
            <Display name="garmin" steps={steps}></Display>
        </div>
    );
};

export default Swatch;