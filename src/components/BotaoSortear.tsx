import { Fab } from "@mui/material";
import { Dices } from "lucide-react";

interface IBotaoSortear {
    handleSortear: () => void;
}

export default function BotaoSortear({ handleSortear }: IBotaoSortear){
    return (
        <Fab color="primary"> 
            <Dices onClick={handleSortear}/>
        </Fab>
    )
}