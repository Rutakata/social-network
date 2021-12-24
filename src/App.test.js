import FullAppComponent from "./App";
import ReactDOM from "react-dom";


test('renders without crashing', () => {
  let div = document.createElement('div')
  ReactDOM.render(<FullAppComponent />, div)
  ReactDOM.unmountComponentAtNode(div)
})
