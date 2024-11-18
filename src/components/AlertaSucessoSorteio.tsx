import { Alert, Grow, Snackbar } from "@mui/material";

interface IAlertaSucessoSorteio {
    fecharAlerta: () => void
    foiSorteado: boolean;
}

export default function AlertaSucessoSorteio({...props}: IAlertaSucessoSorteio) {
    return props.foiSorteado && (
        <Grow in={props.foiSorteado}>
            <Snackbar open={props.foiSorteado} autoHideDuration={2500} onClose={props.fecharAlerta} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert severity="success" variant="filled">Sorteio realizado com sucesso!</Alert>
            </Snackbar>
        </Grow>
    )
}