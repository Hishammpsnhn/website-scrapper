import { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { allInsights } from './Action/getInsights';
import './App.css';
import Input from './components/Input';
import Table from './components/Table';
import { UrlContext } from './store/context';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const {  setInsights} = useContext(UrlContext)
  useEffect(() => {
    allInsights().then((res)=>{
      setInsights(res)
    })
  }, [])

  return (
    <div>
      <ToastContainer/>
      <Input />
      <Table />
    </div>
  );
}

export default App;
