import FormularioCadastro from "./components/FormularioCadastro"
import ListaParticipantes from "./components/ListaParticipantes"
import BotaoSortear from "./components/BotaoSortear"
import { INFORMACOES_GLOBAIS } from "./global/INFORMACOES_GLOBAIS"
import { Usuario } from "./model/Usuario"
import { useState } from "react"
import ModalSorteando from "./components/ModalSorteando"
import AlertaSucessoSorteio from "./components/AlertaSucessoSorteio"
import './style/App.css'

function App() {
  const [modalSorteandoAberto, setModalSorteandoAberto] = useState<boolean>(false);
  const [foiSorteado, setFoiSorteado] = useState<boolean>(false);
  const { usuariosAtuais_GLOBAL, setUsuariosAtuais_GLOBAL } = INFORMACOES_GLOBAIS()

  const handleSortear = () => {
    let listaIdAleatoria: number[] = []

    setModalSorteandoAberto(true)

    do {
      listaIdAleatoria = gerarAleatoriedade(usuariosAtuais_GLOBAL.map((_, id) => id));
    } while (listaIdAleatoria.some((idAleatorio, index) => idAleatorio === index));

    const listaSorteada = listaIdAleatoria.map((idAleatorio: number) => {
      return usuariosAtuais_GLOBAL[idAleatorio];
    })

    vincularAmigosSecretos(listaSorteada)
  }

  const vincularAmigosSecretos = (listaSorteada: Usuario[]) => {
    const listaVinculada = usuariosAtuais_GLOBAL.map((u, id) => ({
      ...u,
      amigoOcultoSorteado: listaSorteada[id],  
    }));

    setUsuariosAtuais_GLOBAL(listaVinculada)
  }

  const gerarAleatoriedade = (listaId: number[]) => {
    return listaId.sort(() => Math.random() - 0.5)
  }

  return (
    <div>
      <FormularioCadastro setUsuariosGlobal={setUsuariosAtuais_GLOBAL} />
      <ListaParticipantes usuarios={usuariosAtuais_GLOBAL ?? []} setUsuariosGlobal={setUsuariosAtuais_GLOBAL}/>
      <BotaoSortear handleSortear={handleSortear} />
      <ModalSorteando aberto={modalSorteandoAberto} fechar={() => setModalSorteandoAberto(false)} setFoiSorteado={setFoiSorteado}/>
      <AlertaSucessoSorteio foiSorteado={foiSorteado} fecharAlerta={() => setFoiSorteado(false)} />
    </div>
  )
}

export default App
