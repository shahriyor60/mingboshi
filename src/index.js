import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App';
import GalaryPage from './pages/GalaryPage';
import Home from './pages/Home';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './moduls/18n/18n'
const firebaseConfig = {
  apiKey: "AIzaSyC7EWgH4R_bDRqpbS351065wZYjmxtRQw4",
  authDomain: "mingboshi-44da8.firebaseapp.com",
  projectId: "mingboshi-44da8",
  storageBucket: "mingboshi-44da8.appspot.com",
  messagingSenderId: "8744439423",
  appId: "1:8744439423:web:698d1c63765c1b18e2394a",
  measurementId: "G-KC7FW7MW9B"
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/galary",
    element: <GalaryPage/>,
  },
]);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
      <App />
    </Suspense>
  </React.StrictMode>
);

