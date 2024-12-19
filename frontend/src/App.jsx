import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Jobs from './pages/Jobs';
import Browse from './pages/Browse';
import Profile from './pages/Profile';
import JobDescription from './pages/JobDescription';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<Home />,
  },
  {
    path: '/login',
    element: (<><Navbar /><Login /></>),
  },
  {
    path: '/signup',
    element: (<><Navbar /><Signup /></>),
  },
  {
    path:"/jobs",
    element:(<><Navbar /><Jobs /></>),
  },
  {
    path:"/browse",
    element:(<><Navbar /><Browse /></>),
  },
  {
    path:"/profile",
    element:(<><Navbar /><Profile /></>),
  },
  {
    path:"/description/:id",
    element:(<><Navbar /><JobDescription /></>),
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
