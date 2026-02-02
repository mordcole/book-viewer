import { useEffect, useState } from "react"
import axios from 'axios'
import Header from './components/Header';
import Toc from './components/Toc';
import Chapter from './components/Chapter';

const getChapter = async (chapter:string) => {
  const formattedChapter = chapter.replace(/ /g, "-").toLowerCase();
  const response = await axios.get(`/api/${formattedChapter}`);
  return response.data;
}

const getToc = async () => {
  const response = await axios.get('/api/toc');
  return response.data;
}

const App = () => {
  const [toc, setToc] = useState(null)
  const [selectedChapter, setSelectedChapter] = useState(null)

  useEffect(() => {
    getToc().then(data => {
      setToc(data)
    })
  }, [])

  if (!toc) {
    return null;
  }

  const handleSelect = (chapter:string) => {
    getChapter(chapter).then(data => {
      setSelectedChapter(data)
    })
  }

  return (
    <>
    <div>
      {selectedChapter ? (
        <div>
        <Header onBack={() => setSelectedChapter(null)} />
        <Chapter chapter={selectedChapter}/>
        </div>
      ) :
      (<Toc
        toc={toc}
        onSelect={(chapter) => handleSelect(chapter)}
        />
      )}
    </div>
  </>
  )
}

export default App
