import { useEffect, useState } from 'react';
import { allInsights } from './Action/getInsights';
import './App.css';
import Input from './components/Input';
import Table from './components/Table';

function App() {
    const [insights,setInsights]= useState([])
  useEffect(() => {
    allInsights().then((res)=>{
      setInsights(res)
    })
  }, [])

  return (
    <div>
      <Input />
      <Table insights={insights} setInsights={setInsights} />
    </div>
  );
}

export default App;
