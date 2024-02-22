import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout';
import Home from './routes/home';
import Profile from './routes/profile';
import Login from './routes/login';
import CreateAccount from './routes/join';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import LoadingScreen from './components/lodaing-screen';
import { auth } from './firebase';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "",
        element : <Home />
      },
      {
        path : "profile",
        element : <Profile />
      },
    ]
  },
  {
    path : "/login",
    element : <Login />
  },
  {
    path : "/join",
    element : <CreateAccount />
  },
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  *{
    box-sizing: border-box;
  }
  body {
    background-color: black;
    color: white;
    family-font: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, ubuntu, Cantarell, 'Open Sans', 'Helvelica Neue';
  }
`;

function App() {
  // authentication loading (firebase)
  const [isLoading, setLoading] = useState(true);
  const init = async function() {
    // wait for firebase 
    await auth.authStateReady();
    setLoading(false);

    // test 
    // setTimeout(() => setIsLoading(false), 500);
  }
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <GlobalStyles />
      {isLoading? <LoadingScreen /> : <RouterProvider router={router} />}
    </>
  );
}

export default App;
