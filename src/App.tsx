import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout';
import Home from './routes/home';
import Profile from './routes/profile';
import Login from './routes/login';
import CreateAccount from './routes/join';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import LoadingScreen from './components/lodaing-screen';
import { auth } from './firebase';
import ProtectedRoute from './components/protected-route';

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute>
      <Layout />
    </ProtectedRoute>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "profile",
        element: <Profile />
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/join",
    element: <CreateAccount />
  },
]);

const Wrapper = styled.div`
  min-height : 100vh;
  display: flex;
  justify-content: center;
`;

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
  const init = async function () {
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
    <Wrapper>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </Wrapper>
  );
}

export default App;
