import { Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Usuario } from "../model/Usuario";
import { CircleUser } from "lucide-react";

interface IListaParticipantes {
    usuarios: Usuario[];
}

export default function ListaParticipantes({usuarios}: IListaParticipantes) {
    return (
        <List>
            {usuarios && usuarios.map((u, id) => 
            <>
                <ListItem key={id}>
                    <ListItemIcon>
                        <CircleUser size={45}/>
                    </ListItemIcon>
                    <ListItemText 
                        primary={u.nome}
                        secondary={u.ideiasPresente}
                    />
                </ListItem>
                <Divider component="li"/>
            </>
            )}
        </List>
    )
}