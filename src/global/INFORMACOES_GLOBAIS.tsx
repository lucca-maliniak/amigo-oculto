import { useState } from "react";
import { Usuario } from "../model/Usuario";

export const INFORMACOES_GLOBAIS = () => {
    const [usuariosAtuais_GLOBAL, setUsuariosAtuais_GLOBAL] = useState<Usuario[]>([]);
    return {
        usuariosAtuais_GLOBAL,
        setUsuariosAtuais_GLOBAL,
    }
}
