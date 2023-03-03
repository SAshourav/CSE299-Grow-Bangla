import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Account from './Component/Account/Account';
import Cart from './Component/Cart/Cart';
import Home from './Component/Home/Home';
import Landing from './Component/Landing/Landing';
import Login from './Component/Login/Login';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/' , element: <Main></Main> , children: [
        {path:'/', element: <Home></Home>},
        {path: '/home', element: <Home></Home>},
        {path: '/cart', element: <Cart></Cart>},
        {path: '/account', element: <Account></Account>},
      ]
    },
    {path: '/landing', element: <Landing></Landing>},
    {path: '/login', element: <Login></Login>},
    {path: '*', element: <div>This Route not found , Error 404</div>}
  ])
  return (
    <div className="App">
      
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
