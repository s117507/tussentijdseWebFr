import { Route, Routes } from 'react-router'
import './App.css'
import MainLayout from './layout/MainLayout'
import Home from './components/Home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Cmd from './pages/Cmd'

function App() {

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="oefening1" element={<Page1 />}></Route>
        <Route path="oefening2" element={<Page2 />}></Route>
        <Route path="oefening3" element={<Page3 />}></Route>
        <Route path="oefening2/:cmd" element={<Cmd />}></Route>
      </Route>
    </Routes>
  )
}

export default App
