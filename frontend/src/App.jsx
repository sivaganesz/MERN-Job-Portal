import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './components/shared/Navbar';
import Home from './pages/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Jobs from './pages/Jobs';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<Home />,
  },
  {
    path: '/login',
    element: (<>
        <Navbar />
        <Login />
    </>),
  },
  {
    path: '/signup',
    element: (<>
      <Navbar />
      <Signup />
      </>),
  },
  {
    path:"/jobs",
    element:(<>
      <Navbar />
      <Jobs />
      </>),
  }
]);


function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
