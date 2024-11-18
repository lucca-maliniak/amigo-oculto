import { Box, Grid2 } from "@mui/material";
import BotaoConfirmar from "./BotaoConfirmar";
import Input from "./Input";
import { useEffect, useRef, useState } from "react";
import { Usuario } from "../model/Usuario";

interface IFormularioCadastro {
    setUsuariosGlobal: React.Dispatch<React.SetStateAction<Usuario[]>>
}

export default function FormularioCadastro({setUsuariosGlobal}: IFormularioCadastro) {
    const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
    const [id, setId] = useState<number>(0);

    function handleConfirmar() {
        setUsuario({...usuario, id: id + 1})
        setUsuariosGlobal(prev => [...prev, usuario])

        setId(id + 1)
        setUsuario({nome: '', telefone: '', ideiasPresente: '', id: 0} as Usuario)
    }

    return (
        <Grid2 container display={'flex'} flexDirection={'column'} width={'30rem'}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Input
                    id="nome"
                    dadosUsuario={usuario.nome}
                    titulo="Nome"
                    placeholder="Nome"
                    variante='outlined'
                    required
                    onChange={(e) => setUsuario({...usuario, nome: e.target.value})}
                />
                <Input
                    id="telefone"
                    dadosUsuario={usuario.telefone}
                    titulo="Telefone"
                    placeholder="(31) 99999-9999"
                    variante='outlined'
                    required
                    fullWidth
                    onChange={(e) => setUsuario({...usuario, telefone: e.target.value})}
                />
            </Box>
            <>
                <Input
                    id="presente"
                    dadosUsuario={usuario.ideiasPresente}
                    titulo="Ideias de Presente"
                    placeholder="Presentes"
                    variante='outlined'
                    required
                    fullWidth
                    onChange={(e) => setUsuario({...usuario, ideiasPresente: e.target.value})}
                />
            </>
            <Box sx={{ margin: '1rem 0' }}>
                <BotaoConfirmar salvarCadastro={handleConfirmar}/>
            </Box>
        </Grid2>
    )
}