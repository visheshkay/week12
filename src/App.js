
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Main from './componenets/Main/Main';
import About from './componenets/About/About';
import Register from './componenets/Register/Register';
import Contact from './componenets/Contact/Contact';
import Login from './componenets/Login/Login'

function App() {
  let router = createBrowserRouter([
    {
      path:'',
      element:<Main/>,
      children:[
        {
          path:'',
          element:<About/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'register',
          element: <Register/>
        },
        {
          path:'contact',
          element:<Contact/>
        },
      ]
    }
  ])
  return (
    <div>
          <RouterProvider router={router}/>
    </div>
  );
}

export default App;
