import React, {useRef, useEffect} from 'react';
import { ReactComponent as Park} from './park.svg';
import gsap from 'gsap';

function App() {
  const wrapper = useRef(null);

  useEffect( () => {
    const [ elements ] = wrapper.current.children;

    const flowers1 = elements.getElementById('flowers1');
    const flowers2 = elements.getElementById('flowers2');
    const flowers3 = elements.getElementById('flowers3');
    const flowers4 = elements.getElementById('flowers4');

    const tree1__down = elements.getElementById('tree1__down');
    const tree1__up = elements.getElementById('tree1__up');
    const tree2__down = elements.getElementById('tree2__down');
    const tree2__up = elements.getElementById('tree2__up');
    const tree3__down = elements.getElementById('tree3__down');
    const tree3__up = elements.getElementById('tree3__up');
    const tree4__down = elements.getElementById('tree4__down');
    const tree4__up = elements.getElementById('tree4__up');

    const road = elements.getElementById('road');
    const human = elements.getElementById('human');
    const birds = elements.getElementById('birds');
    const bench = elements.getElementById('bench');
    const lamp = elements.getElementById('lamp');
    const rainbow = elements.getElementById('rainbow');

    const all = [ flowers1, flowers2, flowers3, flowers4, tree1__down, tree1__up, tree2__down, tree2__up, tree3__down, tree3__up, tree4__down, tree4__up, bench, human, road, birds, lamp, rainbow];

  })

  return (
    <div ref={wrapper} className="App">
      <Park/>
    </div>
  );
}

export default App;
