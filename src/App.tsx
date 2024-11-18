import FormularioCadastro from "./components/FormularioCadastro"
import ListaParticipantes from "./components/ListaParticipantes"
import BotaoSortear from "./components/BotaoSortear"
import { INFORMACOES_GLOBAIS } from "./global/INFORMACOES_GLOBAIS"
import { Usuario } from "./model/Usuario"
import './style/App.css'

function App() {
  const { usuariosAtuais_GLOBAL, setUsuariosAtuais_GLOBAL } = INFORMACOES_GLOBAIS()

  const handleSortear = () => {
    let listaIdAleatoria: number[] = []

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

  // TODO: CONEXAO COM A API DO WPP PRA MANDAR MENSAGEM AUTOMATICA
  // MELHORAR O READ.ME DO GIT
  return (
    <div>
      <FormularioCadastro setUsuariosGlobal={setUsuariosAtuais_GLOBAL} />
      <ListaParticipantes usuarios={usuariosAtuais_GLOBAL ?? []} setUsuariosGlobal={setUsuariosAtuais_GLOBAL}/>
      <BotaoSortear handleSortear={handleSortear} />
    </div>
  )
}

export default App
