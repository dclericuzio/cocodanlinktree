import './App.css';
import {CustomNavBar, CustomBanner, CustomGrab, CustomGo, CustomBranch} from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <CustomNavBar/>
      <CustomBanner/>
      <CustomGrab/>
      <CustomGo/>
      <CustomBranch/>
    </div>
  );
}

export default App;
