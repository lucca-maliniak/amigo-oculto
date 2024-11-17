import FormularioCadastro from "./components/FormularioCadastro"
import ListaParticipantes from "./components/ListaParticipantes"
import BotaoSortear from "./components/BotaoSortear"
import { INFORMACOES_GLOBAIS } from "./global/INFORMACOES_GLOBAIS"
import { Usuario } from "./model/Usuario"

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
    const listaVinculada: Usuario[] = usuariosAtuais_GLOBAL.map((u, id) => {
      return {
        ...u,
        amigoOcultoSorteado: listaSorteada[id].nome
      }
    })

    // TODO: REFLETIR OS AMIGOS SORTEADOS PARA GERAL
  }

  const gerarAleatoriedade = (listaId: number[]) => {
    return listaId.sort(() => Math.random() - 0.5)
  }   

  // TODO: CONEXAO COM A API DO WPP PRA MANDAR MENSAGEM AUTOMATICA

  return (
    <div>
      <FormularioCadastro setUsuariosGlobal={setUsuariosAtuais_GLOBAL} />
      <ListaParticipantes usuarios={usuariosAtuais_GLOBAL ?? []}/>
      <BotaoSortear handleSortear={handleSortear} />
    </div>
  )
}

export default App
