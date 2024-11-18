import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
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
                handleExcluirParticipante(u)
                break
        }
    }

    const handleExcluirParticipante = (u: Usuario) => {
        setUsuariosGlobal(prevUsuarios => (prevUsuarios.filter((usuario) => usuario.id !== u.id)));
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
                <Box width={'50vw'}>
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
                </Box>
                )}
            </List>
            <ModalMostrarAmigoSecreto aberto={modalRevelarAberto} fechar={() => setModalRevelarAberto(false)} usuarioSelecionado={usuarioSelecionado}/>
        </>
    )
}