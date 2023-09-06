import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {store} from "@/utils/store";
import {Provider} from 'react-redux';
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {CssBaseline} from "@mui/material";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDLNN60_LPQkgPo9PhGD_vbWJm6a65G5aY",
  authDomain: "todolist-c3666.firebaseapp.com",
  projectId: "todolist-c3666",
  storageBucket: "todolist-c3666.appspot.com",
  messagingSenderId: "209673352142",
  appId: "1:209673352142:web:4c21a17f316ffa785df19f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CssBaseline/>
      <App/>
    </Provider>
  </React.StrictMode>,
)
