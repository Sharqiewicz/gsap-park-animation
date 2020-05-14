import React, {useRef, useEffect} from 'react';
import { ReactComponent as Park} from './park.svg';

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
  })

  return (
    <div ref={wrapper} className="App">
      <Park/>
    </div>
  );
}

export default App;
