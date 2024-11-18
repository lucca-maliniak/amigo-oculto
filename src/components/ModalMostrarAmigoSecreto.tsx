import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { Usuario } from "../model/Usuario";

interface IModalMostrarAmigoSecreto {
    usuarioSelecionado: Usuario;
    aberto: boolean;
    fechar: () => void;
}

export default function ModalMostrarAmigoSecreto({...props}: IModalMostrarAmigoSecreto) { 
    if (!props.usuarioSelecionado || !props.usuarioSelecionado.amigoOcultoSorteado) {
        return null;
    }

    const gerarMensagemWpp = (amigoOcultoSorteado: Usuario) => {
        return `Seu amigo secreto é: ${amigoOcultoSorteado.nome}, e os presentes pedidos foram: ${amigoOcultoSorteado.ideiasPresente}`
    }

    const handleIrParaMensagemWpp = (amigoOcultoSorteado: Usuario) => {
        const url = `https://wa.me/${amigoOcultoSorteado.telefone}/?text=${gerarMensagemWpp(amigoOcultoSorteado)}`
        window.open(url, '_blank') 
    }

    return props.usuarioSelecionado && (
        <Dialog onClose={props.fechar} open={props.aberto}>
            <DialogTitle fontWeight={600}>Sorteio Amigo Secreto - R$70</DialogTitle>
            <DialogContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '10vh' }}>
                <div>
                    Seu amigo secreto é: <b>{props.usuarioSelecionado.amigoOcultoSorteado.nome}</b>
                </div>
                <div>
                    Os presentes pedidos foram: <b>{props.usuarioSelecionado.amigoOcultoSorteado.ideiasPresente}</b>
                </div>
                <Button variant="outlined" onClick={() => handleIrParaMensagemWpp(props.usuarioSelecionado.amigoOcultoSorteado)}>Enviar Mensagem</Button>
            </DialogContent>
        </Dialog>
    )
}