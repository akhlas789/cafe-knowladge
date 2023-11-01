import { useState } from 'react'
import './App.css'
import Blogs from './componentes/Blogs/Blogs'
import BookMarks from './componentes/BookMarks/BookMarks'
import Header from './componentes/Header/Header'

function App() {

  const [bookmarks, setBookMarks] = useState([])
  const [readingTime, setRedigTime] = useState(0)

  const handaleAddToBookmark = (blog) => {
    setBookMarks([...bookmarks, blog])
  }

  const handaleMarkAsRead = (time) => {
    setRedigTime([readingTime + time])
  }

  return (
    <div>
      <Header></Header>
      <div className='md:flex '>
        <Blogs handaleMarkAsRead={handaleMarkAsRead} handaleAddToBookmark={handaleAddToBookmark}></Blogs>
        <BookMarks bookmarks={bookmarks} readingTime = {readingTime}></BookMarks>
      </div>
    </div>
  )
}

export default App
