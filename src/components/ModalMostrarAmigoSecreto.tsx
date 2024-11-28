import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Usuario, UsuarioSorteado } from "../model/Usuario";
import useMediaQuery from "@mui/material/useMediaQuery";

interface IModalMostrarAmigoSecreto {
    usuarioSelecionado: Usuario;
    aberto: boolean;
    fechar: () => void;
}

export default function ModalMostrarAmigoSecreto({...props}: IModalMostrarAmigoSecreto) { 
    const matches = useMediaQuery('(min-width: 1440px)')
    if (!props.usuarioSelecionado || !props.usuarioSelecionado.amigoOcultoSorteado) {
        return null;
    }

    const gerarMensagemWpp = (amigoOcultoSorteado: UsuarioSorteado) => {
        return `*ATUALIZAÇÃO DE PRESENTES DO AMIGO OCULTO*\nPedido de presentes atualizados: ${amigoOcultoSorteado.ideiasPresente}`
    }

    const handleIrParaMensagemWpp = async (amigoOcultoSorteado: UsuarioSorteado, usuario: Usuario) => {
        const response = await fetch('http://localhost:8083/message/sendText/Lucca', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "apikey": "zYzP7ocstxhSDDSWQZX3SJ23D4FZTCu4ehnM8v4hu",
            },
            body: JSON.stringify({
                "number": `5531${usuario.telefone}`,
                "textMessage": {
                    "text": gerarMensagemWpp(amigoOcultoSorteado)
                }
            })
        })
        return response.status
    }

    return props.usuarioSelecionado && (
        <Dialog onClose={props.fechar} open={props.aberto}>
            <DialogTitle fontWeight={600}>Sorteio Amigo Secreto - R$70</DialogTitle>
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: matches ? '15vh' : '10vh' }}>
                <div>
                    Seu amigo secreto é: <b>{props.usuarioSelecionado.amigoOcultoSorteado.nome}</b>
                </div>
                <div>
                    Os presentes pedidos foram: <b>{props.usuarioSelecionado.amigoOcultoSorteado.ideiasPresente}</b>
                </div>
                <Button variant="outlined" onClick={() => handleIrParaMensagemWpp(props.usuarioSelecionado.amigoOcultoSorteado, props.usuarioSelecionado)}>Enviar Mensagem</Button>
            </DialogContent>
        </Dialog>
    )
}