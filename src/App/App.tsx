import { useState } from 'react'
import { BrowserRouter} from 'react-router-dom'
import { SideBar } from '../components/SideBar/SideBar'
import { Router } from '../Router'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      
      <SideBar/>
      <Router/>
      
    </BrowserRouter>
  )
}

export default App
