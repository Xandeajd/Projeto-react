import Perfil from "./components/Perfil/index.jsx";
// import Formulario from "./components/Formulario/index.jsx";
import { useState } from "react";
import ReposList from "./components/Reposlist/Reposlist.jsx";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />
      
      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  )
}
export default App
