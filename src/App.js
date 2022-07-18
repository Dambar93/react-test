import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/RickAndMorty/Home';
import List from './components/RickAndMorty/List';



const routes = [
  { path: '/', element: <Home/> },
  { path: '/list', element: <List/>},
]

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
          
          { routes.map(route =>{
            return(
              <Route
              path={route.path}
              element={<Layout>{route.element}</Layout>}
              />
            )
          })

          }

          
          
      </Routes>
    </BrowserRouter>

  );
}

export default App;
