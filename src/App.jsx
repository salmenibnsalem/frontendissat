import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Listarticle from '../components/admin/articles/Listarticle'
import Editarticle from '../components/admin/articles/Editarticle'
import Insertarticle from '../components/admin/articles/Insertarticle'

import Listcategories from '../components/admin/categories/Listcategories'
import Insertcategorie from '../components/admin/categories/Insertcategorie'
import Editcategorie from '../components/admin/categories/Editcategorie'
import Listscategories from '../components/admin/scategories/Listscategories'
import Editscategorie from '../components/admin/scategories/Editscategorie'
import Insertscategorie from '../components/admin/scategories/Insertscategorie'

import Menu from '../components/admin/Menu'
import Home from '../components/admin/Home'

const App = () => {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path='/articles' element={<Listarticle/>}/>
        <Route path='/articles/add' element={<Insertarticle/>}/>
        <Route path='/articles/edit/:id' element={<Editarticle/>}/>

        <Route path='/categories' element={<Listcategories/>}/>
        <Route path='/categories/add' element={<Insertcategorie/>}/>
        <Route path='/categories/edit/:id' element={<Editcategorie/>}/>

        <Route path='/scategories' element={<Listscategories/>}/>
        <Route path='/scategories/add' element={<Insertscategorie/>}/>
        <Route path='/scategories/edit/:id' element={<Editscategorie/>}/>

        <Route path="/home" element={<Home/>}/>
      </Routes>
   
    </Router>
  )
}

export default App
