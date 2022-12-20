import { useContext, useEffect, useState } from 'react';
import { allInsights } from './Action/getInsights';
import './App.css';
import Input from './components/Input';
import Table from './components/Table';
import { UrlContext } from './store/context';

function App() {
  const {  setInsights} = useContext(UrlContext)
  useEffect(() => {
    allInsights().then((res)=>{
      setInsights(res)
    })
  }, [])

  return (
    <div>
      <Input />
      <Table />
    </div>
  );
}

export default App;
