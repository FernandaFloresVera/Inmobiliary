import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CreateAnnoun from './screens/CreateAnnoun';
import Cards from './screens/Cards';
import Sidebar from './components/Sidebar';
import { LoginPage } from './screens/LoginPage';
import { RegisterPage } from './screens/RegisterPage';
import { DashboardPage } from './screens/DashboardPage';
import { HomePage } from './screens/HomePage';
import { Navbar } from './Navbar';
import Cards2 from './screens/Cards2';
import { WebsocketProvider } from './contexts/websocket/websocketProvider';
import { useWebsocket } from './hook/useWebsocket';

function App() {
  //ESTADO MANDANDO PARA COMPONENTES HERMANOS (POR ESO ESTA EN COMPONENTE PADRE)
  const [searchText, setSearchText] = useState('');
  const {websocket} = useWebsocket();
  const navigate = useNavigate();

  useEffect(()=> {
    websocket.on('disconnect', () => {
      navigate('/');
    });

  }, []);

  return (
    <WebsocketProvider>
      <Router>
        <Routes>
          <Route
            exact
            path='/constructora'
            element={
              <Cards searchText={searchText} setSearchText={setSearchText} />
            }
          />
          <Route path='/' element={<Navbar />} />
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route exact path='/create' element={<CreateAnnoun />} />
          <Route
            exact
            path='/cards'
            element={
              <Cards2 searchText={searchText} setSearchText={setSearchText} />
            }
          />
        </Routes>
      </Router>
    </WebsocketProvider>
  );
}
export default App;
