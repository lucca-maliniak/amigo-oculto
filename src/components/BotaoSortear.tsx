import { Fab } from "@mui/material";
import { Dices } from "lucide-react";
import { Usuario } from "../model/Usuario";

interface IBotaoSortear {
    usuarios: Usuario[];
    handleSortear: () => void;
}

export default function BotaoSortear({ handleSortear, usuarios }: IBotaoSortear){
    const handleValidarSorteio = () => {
        if (usuarios.length > 1) {
            handleSortear()
        }
    }
    return (
        <Fab color="primary"> 
            <Dices onClick={handleValidarSorteio}/>
        </Fab>
    )
}