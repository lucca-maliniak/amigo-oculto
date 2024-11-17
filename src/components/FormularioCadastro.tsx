import { Box, Grid2 } from "@mui/material";
import BotaoConfirmar from "./BotaoConfirmar";
import Input from "./Input";
import { useState } from "react";
import { Usuario } from "../model/Usuario";

interface IFormularioCadastro {
    setUsuariosGlobal: React.Dispatch<React.SetStateAction<Usuario[]>>
}

export default function FormularioCadastro({setUsuariosGlobal}: IFormularioCadastro) {
    const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

    function handleConfirmar() {
        setUsuariosGlobal(prev => [...prev, usuario])
        setUsuario({nome: '', telefone: '', ideiasPresente: ''} as Usuario)
    }

    return (
        <Grid2 container display={'flex'} flexDirection={'column'} width={'50vw'}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Input 
                    id="nome"
                    titulo="Nome" 
                    variante='outlined'
                    required
                    value={usuario.nome}
                    onChange={(e) => setUsuario({...usuario, nome: e.target.value})}
                />
                <Input 
                    id="telefone"
                    titulo="Telefone" 
                    variante='outlined'
                    value={usuario.telefone}
                    required
                    onChange={(e) => setUsuario({...usuario, telefone: e.target.value})}
                />
            </Box>
            <>
                <Input 
                    id="presente"
                    titulo="Ideias de Presente" 
                    variante='outlined'
                    required
                    fullWidth

                    value={usuario.ideiasPresente}
                    onChange={(e) => setUsuario({...usuario, ideiasPresente: e.target.value})}
                />
            </>
            <Box sx={{ margin: '1rem 0' }}>
                <BotaoConfirmar salvarCadastro={handleConfirmar}/>
            </Box>
        </Grid2>
    )
}