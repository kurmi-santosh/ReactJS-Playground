import "./App.css";
import { TabComponent } from "./Components/TabComponent";

function App() {
  return (
    <div className="App">
      <TabComponent>
        <div title="Tab 1">Tab 1 Content</div>
        <div title="Tab 2">Tab 2 Content</div>
      </TabComponent>
    </div>
  );
}

export default App;
