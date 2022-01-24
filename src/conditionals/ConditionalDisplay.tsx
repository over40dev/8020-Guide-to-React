import ConditionalList from './ConditionalList';
import { ConditionalRender, ConditionalRender2 } from './ConditionalRender';
import { Falsy, FalsyCounter } from './Falsy';

function ConditionalDisplay() {
  return (
    <div className="container">
      <ConditionalList></ConditionalList>
      <ConditionalRender2></ConditionalRender2>
      <ConditionalRender></ConditionalRender>
      <FalsyCounter></FalsyCounter>
      <Falsy></Falsy>
    </div>
  );
}

export default ConditionalDisplay;
