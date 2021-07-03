import Header from "./components/Header";
import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
function App() {
  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=375fafe5e6f14aa49fee3fbe436c70a5`;

      const respuesta = await fetch(url);
      const noticia = await respuesta.json();
      setNoticias(noticia.articles);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="Buscador de noticias" />
      <div className="container white">
        <Formulario setCategoria={setCategoria} />
        <ListadoNoticias noticias={noticias} />
      </div>
    </Fragment>
  );
}

export default App;
