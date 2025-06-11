import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from './routers/routers';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        {routers.map((item, index) => {
          const PageComponent = item.component;

          let element = (
            <PageComponent />
          );
          return <Route key={index} path={item.path} element={element} />;
        })}
      </Routes>

    </BrowserRouter>
  );
}

export default App
