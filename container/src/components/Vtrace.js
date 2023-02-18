import {mount} from "vtrace/VtraceApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from 'react-router-dom';
const Vtrace= () => {
  const ref = useRef(null);
  const history = useHistory();
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({pathname:nextPathname}) => {
        console.log(nextPathname);
        history.push(nextPathname);
      },
    });
    history.listen(onParentNavigate);
  }, []);
  return <div ref={ref}></div>;
};
export default Vtrace;
