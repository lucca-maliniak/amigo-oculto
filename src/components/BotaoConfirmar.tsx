import { Button } from "@mui/material";

interface IBotaoConfirmar {
    salvarCadastro: () => void;
}

export default function BotaoConfirmar({salvarCadastro}: IBotaoConfirmar) {
    return (
        <div>
            <Button fullWidth id="botaoConfirmar" variant="contained" onClick={salvarCadastro}>Confirmar</Button>
        </div>
    )
}