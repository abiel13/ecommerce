import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {SessionContextProvider} from '@supabase/auth-helpers-react';
import {createClient} from "@supabase/supabase-js"

// let ant = import.meta(VITE_REACT_API_KEY)

const supabase = createClient("" , '');


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <SessionContextProvider supabaseClient={supabase}> */}
       <App />
    {/* </SessionContextProvider> */}
   
  </React.StrictMode>,
)
