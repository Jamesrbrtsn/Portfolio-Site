import React from 'react';
import './SeasonalCritters.css';
import IntroBlock from './components/intro-block'
import InputBlock from './components/input-block'

export default function SeasonalCritters() {
  return (
    <div id="seasonal-critters">
      <div>
        <IntroBlock />
        <InputBlock />
        <br></br>
      </div>
    </div>
  );
}
