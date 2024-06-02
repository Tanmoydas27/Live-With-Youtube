import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Loader from './Components/Loader';
import {useSelector} from 'react-redux';
import ProtectedRoute from './Components/ProtectedRoute';
import Login from './Pages/Login';

function App() {
  const {loading} = useSelector(state => state.loaders);
  return (
    <div>
      {loading && <Loader/>}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoute><Login/></ProtectedRoute>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
