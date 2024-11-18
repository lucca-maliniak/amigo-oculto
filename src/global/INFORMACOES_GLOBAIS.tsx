import { useState } from "react";
import { Usuario } from "../model/Usuario";

export const INFORMACOES_GLOBAIS = () => {
    const [usuariosAtuais_GLOBAL, setUsuariosAtuais_GLOBAL] = useState<Usuario[]>([]);
    const [usuarioAtual_SELECIONADO, setUsuarioAtual_SELECIONADO] = useState<Usuario>({} as Usuario);
    return {
        usuariosAtuais_GLOBAL,
        setUsuariosAtuais_GLOBAL,
        usuarioAtual_SELECIONADO,
        setUsuarioAtual_SELECIONADO,
    }
}
