import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import Layout from './components/common/Layout';
import Home from './components/Home';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter } from 'react-router-dom';
import PostList from './components/PostList';
import { fetchUsers } from './features/users/usersSlice';

store.dispatch(fetchUsers());

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<PostList />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
