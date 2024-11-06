import logo from './logo.svg';
import './App.css';

//components
import Navbar from './components/Navbar';
import Sahildeveloper from './components/Sahildeveloper';
import Alluser from './components/Alluser';
import Adduser from './components/Adduser';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditUser from './components/EditUser';

function App() {
  return (
    <div className="App">
      <Sahildeveloper />
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route exact path='/' element={<Sahildeveloper />} /> */}
          <Route path="/allusers" element={<Alluser />} />
          <Route path="/addUser/*" element={<Adduser />} />
          <Route path="/edit/:_id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
