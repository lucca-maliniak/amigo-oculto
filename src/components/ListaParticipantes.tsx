import { Divider, List, ListItem, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import { Usuario } from "../model/Usuario";
import { CircleUser, Eye, Trash } from "lucide-react";
import { ElementType, useState } from "react";
import ModalMostrarAmigoSecreto from "./ModalMostrarAmigoSecreto";

interface IListaParticipantes {
    usuarios: Usuario[];
    setUsuariosGlobal: React.Dispatch<React.SetStateAction<Usuario[]>>;
}

export default function ListaParticipantes({ usuarios, setUsuariosGlobal }: IListaParticipantes) {
    const [modalRevelarAberto, setModalRevelarAberto] = useState<boolean>(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState<Usuario>({} as Usuario);
    const textoHoverOlho = (TipoIcone: ElementType) => TipoIcone === Eye ? "Revelar Amigo Secreto" : "Excluir Participante"

    const handleCliqueIcone = (TipoIcone: ElementType, u: Usuario) => {
        setUsuarioSelecionado(u)
        switch(TipoIcone) {
            case Eye:
                handleMostrarModal()
                break
            case Trash:
                handleExcluirParticipante()
                break
        }
    }

    const handleExcluirParticipante = () => {
        const listaUsuariosFiltrados = usuarios.filter((usuario) => usuario.id !== usuarioSelecionado.id);
        setUsuariosGlobal(listaUsuariosFiltrados);
    }   

    const handleMostrarModal = () => {
        setModalRevelarAberto(true)
    }

    const handleMostrarIcone = (TipoIcone: ElementType, u: Usuario) => {
        return (
            <Tooltip title={textoHoverOlho(TipoIcone)}>
                <TipoIcone size={30} style={{ cursor: 'pointer' }} onClick={() => handleCliqueIcone(TipoIcone, u)} />
            </Tooltip>
        )
    }

    return (
        <>
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
                        <ListItemIcon>
                            {handleMostrarIcone(Eye, u)}
                        </ListItemIcon>
                        <ListItemIcon>
                            {handleMostrarIcone(Trash, u)}
                        </ListItemIcon>
                    </ListItem>
                    <Divider component="li"/>
                </>
                )}
            </List>
            <ModalMostrarAmigoSecreto aberto={modalRevelarAberto} fechar={() => setModalRevelarAberto(false)} usuarioSelecionado={usuarioSelecionado}/>
        </>
    )
}