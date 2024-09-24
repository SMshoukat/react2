import logo from './logo.svg';
import './App.css';
import Card from './components/Card.jsx';
import Input from './components/Input.jsx';
import Button from '@mui/material/Button';
import BCard from  './components/MUIcard.jsx'

function App() {

  const getData = (a) => {
    console.log(a)
  }
  var arr = ["one","two","three"]
  return (
    <div className="App">
      <BCard v="shoukat" />
      <Input onChange={(e) => console.log(e.target.value)} />
      <Button variant="contained">Contained</Button>
      {arr.map((v,i) => <Card key={i} v={v} getData={getData} /> )}

    </div>
  );
}

export default App;
