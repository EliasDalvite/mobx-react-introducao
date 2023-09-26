import './App.css';
import Form from "./Form"
import Lista from "./Lista"
import NotFound from "./NotFound"
import { createBrowserRouter, RouterProvider  } from "react-router-dom";

const router = createBrowserRouter([
  {
    children: [
      {
        index : true,
        element: <Form />
      },
      {
        path : "avancaRota" ,
        element : <Lista/>,
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
])

function App() {  
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
