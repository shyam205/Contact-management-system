import './App.css';
import { Routes, Route } from "react-router-dom"
import Contact from './pages/Contact';
import ChartMapWrapper from './pages/Chart-map';
import Createcontact from './pages/create-contact';
import Edit from './pages/Edit';
import Alldatacovid from './components/Alldatacovid';
import Chart from './pages/Chart'
import Graph from './pages/Graph'
function App() {

  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={ <Contact/> } />
        <Route path="create-contact" element={ <Createcontact/> } />
        <Route path="edit/:id" element={ <Edit /> } />
        <Route path="chart-map" element={ <ChartMapWrapper /> } />
        <Route path="chart" element={ <Chart /> } />
        <Route path="graph" element={ <Graph /> } />
      </Routes>
    
    </div>
  );
}

export default App;
