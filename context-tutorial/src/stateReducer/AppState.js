import ColorComponent from "./ColorComponent";

import ColorModel from "./ColorModel";

function AppState() {
  const { state, setColor, setSubject } = ColorModel();
  console.log(state);
  const actions = { setColor, setSubject };
  console.log(actions);
  return (
    <div>
      <ColorComponent state={state} actions={actions} />
    </div>
  );
}

export default AppState;
