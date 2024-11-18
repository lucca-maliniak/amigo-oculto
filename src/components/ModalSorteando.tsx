import { Box, Dialog, DialogContent, DialogTitle, Paper } from "@mui/material"
import { useEffect } from "react";

interface IModalSorteando {
    aberto: boolean;
    fechar: () => void;
    setFoiSorteado: (x: boolean) => void;
}

function ModalSorteando({...props}: IModalSorteando) {
    useEffect(() => {
        if (props.aberto) {
            fecharModal()
            setTimeout(() => {
                props.setFoiSorteado(true)
            }, 4000)
        }
    }, [props.aberto])

    const fecharModal = () => {
        setTimeout(() => {
            props.fechar()
        }, 4000)
    }

    return props.aberto && (
        <Dialog open={props.aberto}>
            <Box display={'flex'} width={'20vw'} height={'50vh'} flexDirection={'column'} alignItems={'center'}>
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