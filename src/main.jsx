import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider } from 'react-router-dom'
import router from './routes/Index.jsx'
import axios from 'axios'
import {Provider} from 'react-redux'
import { store } from './store/store.js'
/**setup axios */
axios.defaults.baseURL ='https://api.themoviedb.org/3'
axios.defaults.headers.common['Authorization'] = `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`;
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
)
