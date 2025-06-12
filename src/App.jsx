import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServers } from './redux/serverSlice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from './routers/routers';
import ClientLayout from '@/layouts/ClientLayout';

function App() {
  const dispatch = useDispatch();
  const { selectedServer, status } = useSelector((state) => state.server);

  useEffect(() => {
    dispatch(fetchServers());
  }, [dispatch]);

  if (status === 'loading') return <p>Đang tải dữ liệu...</p>;
  if (status === 'error') return <p>Lỗi khi tải danh sách server!</p>;

  return (
    <BrowserRouter>
      <Routes>
        {routers.map((item, index) => {
          const PageComponent = item.component;
          return (
            <Route
              key={index}
              path={item.path}
              element={
                <ClientLayout>
                  <PageComponent selectedServer={selectedServer}/>
                </ClientLayout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;