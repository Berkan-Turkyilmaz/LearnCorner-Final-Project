import { useState } from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, NavLink, Outlet} from 'react-router-dom'
import './App.css'
import Profilepage from './Components/Profilepage/Profilepage'
import Shoppingpage from './Components/Shoppingpage/Shoppingpage';
import Shoppingbasket from './Components/Shoppingbasket/Shoppingbasket';
import Signup from './Components/Signup/Signup';
import HomePage from './Components/HomePage/HomePage';
import PageLayout from './Components/PageLayout/PageLayout';
import GrammarPostList from './Components/GrammarPostList/GrammarPostList';

import Login from './Components/Login/Login';
import ExercisesDetail from './Components/ExercisesDetail/ExercisesDetail';
import Memberships from './Components/Memberships/Memberships';
import { AuthProvider } from './Components/AuthProvider';
import Postdetail from './Components/Postdetail/PostDetail';
import Exercises from './Components/Exercises/Exercises';

function App() {
  

  const router =createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<PageLayout/>}>
        <Route index element={<HomePage/>}/>  
        <Route path="/login" element={<Login/>}/> 
        <Route path="/signup" element={<Signup/>}/> 
        <Route path="/exercises" element={<Exercises/>}/> 
        <Route path="/exercises/:id" element={<ExercisesDetail/>}/> 
        <Route path="/posts/:id" element={<Postdetail/>}/> 
        <Route path="/grammarpostlist" element={<GrammarPostList/>}/> 
        <Route path="/profile/:id" element={<Profilepage/>}/> 
        <Route path="/shoppingpage" element={<Shoppingpage/>}/> 
        <Route path="/shopbasket/:id" element={<Shoppingbasket/>}/> 
        <Route path="/memberships" element={<Memberships/>}/> 

      </Route>  
    )
  ); 
  
  return (
    <>
      <AuthProvider>
      <RouterProvider router={router} ></RouterProvider>
      </AuthProvider>
    </>
  )
}

export default App;
