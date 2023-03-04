import { BrowserRouter, Routes , Route ,Link} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Details2 from './components/Details/Details2';
import Details3 from './components/Details/Details3';
import Details4 from './components/Details/Details4';
import Details5 from './components/Details/Details5';
import Details6 from './components/Details/Details6';
import Details7 from './components/Details/Details7';
function App() {
  return (
  
<BrowserRouter>
<Header/>
<Routes>

<Route path='/' element={<Home />} />
<Route path='/Details' element={<Details/>} />
<Route path='/Details2' element={<Details2/>} />
<Route path='/Details3' element={<Details3/>} />
<Route path='/Details4' element={<Details4/>} />
<Route path='/Details5' element={<Details5/>} />
<Route path='/Details6' element={<Details6/>} />
<Route path='/Details7' element={<Details7/>} />
</Routes>
</BrowserRouter>
  );
}

export default App;
