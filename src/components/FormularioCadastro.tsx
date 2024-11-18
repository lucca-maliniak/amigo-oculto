import { Box, Grid2 } from "@mui/material";
import BotaoConfirmar from "./BotaoConfirmar";
import Input, { IErrorValidator } from "./Input";
import { useState } from "react";
import { Usuario } from "../model/Usuario";
import { z } from 'zod'

interface IFormularioCadastro {
    setUsuariosGlobal: React.Dispatch<React.SetStateAction<Usuario[]>>
}

export default function FormularioCadastro({setUsuariosGlobal}: IFormularioCadastro) {
    const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
    const [error, setError] = useState<IErrorValidator>({} as IErrorValidator);
    const [id, setId] = useState<number>(0);
    
    const telefoneSchema = z.coerce.number({
        required_error: 'O campo telefone é obrigatório',
        invalid_type_error: 'Digite apenas números'
    }).min(10000000, 'Telefone Inválido').max(99999999999, 'Telefone Inválido')

    const handleConfirmar = () => {
        const telefoneValidado = validarTelefone(usuario.telefone)
        if (telefoneValidado) {
            setUsuario({...usuario, id: id + 1})
            setUsuariosGlobal(prev => [...prev, usuario])
            setId(id + 1)
            setUsuario({nome: '', telefone: '', ideiasPresente: '', id: 0} as Usuario)
        }
    }

    const validarTelefone = (valor: string) => {
        if (!valor) {
            setError({ possuiErro: false, message: '' })
            return true
        } 

        const { success, error } = telefoneSchema.safeParse(valor)

        if (!success) {
            setError({
                possuiErro: true,
                message: error.issues[0]?.message || 'Erro desconhecido',
            })
            return false
        }
        setError({ possuiErro: false, message: '' })
        return true 
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
                    erros={error}
                    fullWidth
                    onChange={(e) => setUsuario({...usuario, telefone: e.target.value})}
                    onBlur={(e) => validarTelefone(e.target.value)}
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