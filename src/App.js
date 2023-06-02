
import './App.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';


function App() {
  return (
    <div className="App">
     <div className="max-w-screen-xl mx-auto">
     <RouterProvider router={router}></RouterProvider>
     {/* <Toaster></Toaster> */}
    </div>
    </div>
  );
}

export default App;
