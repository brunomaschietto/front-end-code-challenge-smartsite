import { GlobalContext } from "./contexts/GlobalContext";
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import axios from "axios";
import { useEffect, useState } from 'react'
import { BASE_URL } from "./constants/url";
import { academiaProp } from "./interfaces/types";
function App() {
  const ITEMS_PER_PAGE = 6;

  const [academias, setAcademias] = useState<academiaProp[]>([])
  const [sum, setSum] = useState<number | undefined>();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(academias.length / ITEMS_PER_PAGE);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = academias.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    fetchAcademias()
  }, [currentPage]);

  const fetchAcademias = () => {
    axios.get(BASE_URL)
    .then((resp) => {
      setAcademias(resp.data.locations);
    })
    .catch((error) => {
      console.log("Erro ao buscar informações sobre as academias");
      console.log(error.response);
    });
  }
  const context = {
    academias,
    sum,
    setSum,
    currentPage, 
    setCurrentPage,
    totalPages,
    currentItems
  }

  return (
    <GlobalContext.Provider value={context}>
      <Header />
      <Main />
      <Footer />
    </GlobalContext.Provider>
  )
}

export default App
