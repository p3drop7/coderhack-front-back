import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import AccessContainer from './Components/Access/AccessContainer';
import MakeSenseAppContainer from './Components/MakeSenseApp/MakeSenseAppContainer';
import MakeSense_Main from './Components/MakeSenseApp/MakeSense_Main/MakeSense_Main';
import MakeSense_CreateProyect from './Components/MakeSenseApp/MakeSense_CreateProyect/MakeSense_CreateProyect';

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>

            <Route path="/" exact element={<Landing/>} />
            <Route path="/access" exact element={<AccessContainer/>} />
            <Route path="/app" exact element={<MakeSenseAppContainer/>} >
                <Route path="create" exact element={<MakeSense_CreateProyect/>} />
                <Route path="main" exact element={<MakeSense_Main />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
