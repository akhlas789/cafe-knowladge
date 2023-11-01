import { useState } from 'react'
import './App.css'
import Blogs from './componentes/Blogs/Blogs'
import BookMarks from './componentes/BookMarks/BookMarks'
import Header from './componentes/Header/Header'

function App() {

  const [bookmarks, setBookMarks] = useState([])

  const handaleAddToBookmark = (blog) =>{
    setBookMarks([...bookmarks,blog])
  }

  return (
    <div>
      <Header></Header>
      <div className='md:flex '>
        <Blogs handaleAddToBookmark = {handaleAddToBookmark}></Blogs>
        <BookMarks bookmarks={bookmarks}></BookMarks>
      </div>
    </div>
  )
}

export default App
