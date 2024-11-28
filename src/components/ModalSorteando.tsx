import { Box, Dialog, DialogContent, DialogTitle, Paper } from "@mui/material"
import { useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Usuario } from "../model/Usuario";

interface IModalSorteando {
    aberto: boolean;
    fechar: () => void;
    setFoiSorteado: (x: boolean) => void;
    usuariosGlobal: Usuario[];
}

function ModalSorteando({...props}: IModalSorteando) {
    const matches = useMediaQuery('(min-width:1440px)')
    useEffect(() => {
        if (props.aberto) {
            fecharModal()
            setTimeout(() => {
                props.setFoiSorteado(true)
                enviarMensagem()
            }, 4000)
        }
    }, [props.aberto])

    const fecharModal = () => {
        setTimeout(() => {
            props.fechar()
        }, 4000)
    }

    const enviarMensagem = () => {
        props.usuariosGlobal.forEach(async (usuario) => {
            const response = await fetch('http://localhost:8083/message/sendText/Lucca', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "apikey": "zYzP7ocstxhSDDSWQZX3SJ23D4FZTCu4ehnM8v4hu",
                },
                body: JSON.stringify({
                    "number": `5531${usuario.telefone}`,
                    "textMessage": {
                        "text": `*SORTEIO AMIGO OCULTO - R$ 70*\nOlá, *${usuario.nome}*\nO seu amigo oculto é *${usuario.amigoOcultoSorteado.nome}*\nAs ideias de presente são: *${usuario.amigoOcultoSorteado.ideiasPresente}*`
                    }
                })
            })
            return response.status
        })
    }

    return props.aberto && (
        <Dialog open={props.aberto}>
            <Box display={'flex'} width={matches ? '30vw' : '30vw'} height={matches ? '30vw' : '50vh'} flexDirection={'column'} alignItems={'center'}>
                <DialogTitle>
                    <main>
                        🎉 SORTEANDO...
                    </main>
                </DialogTitle>
                <DialogContent>
                    <Paper variant="outlined">
                        <img style={{width: '300px', height: '300px'}} src="https://global.discourse-cdn.com/nubank/original/3X/6/7/67ec99cf9f018ba6e350e6e1dc196a564cd8f5b5.gif" />
                    </Paper>
                </DialogContent>
            </Box>
        </Dialog>
    )
}

export default ModalSorteando