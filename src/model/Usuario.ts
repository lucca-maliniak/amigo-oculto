export interface Usuario {
    id: number;
    nome: string;
    telefone: string;
    ideiasPresente?: string;
    amigoOcultoSorteado: UsuarioSorteado;
}

export interface UsuarioSorteado {
    id: number;
    nome: string;
    telefone: string;
    ideiasPresente?: string;
}