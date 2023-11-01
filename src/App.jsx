import './App.css'
import Blogs from './componentes/Blogs/Blogs'
import BookMarks from './componentes/BookMarks/BookMarks'
import Header from './componentes/Header/Header'

function App() {

  return (
    <div>
      <Header></Header>
      <div className='md:flex '>
        <Blogs></Blogs>
        <BookMarks></BookMarks>
      </div>
    </div>
  )
}

export default App
