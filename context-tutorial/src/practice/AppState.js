import ColorComponent from "./ColorComponent";
 
import ColorModel from "./ColorModel";

function AppState() {
  const { state, setColor, setSubject } = ColorModel();
  const actions = { setColor, setSubject };

  return (
    <div>
      <ColorComponent state={state} actions={actions} />
    </div>
  );
}

export default AppState;
