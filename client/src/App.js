import { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { allInsights } from './Action/getInsights';
import Input from './components/Input';
import Table from './components/Table';
import { UrlContext } from './store/context';
import Loading from './components/Loading'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { setInsights } = useContext(UrlContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    allInsights().then((res) => {
      setInsights(res);
      setLoading(false);
    })
  }, []);

  return (
    <div>
      <h1 className='text-6xl font-poppins text-center py-10 font-medium text-cyan-700 '>WEBPAGE SCRAPER</h1>
      <ToastContainer />
      <Input />
      {loading ? <Loading /> : <Table />}

    </div>
  );
}

export default App;
