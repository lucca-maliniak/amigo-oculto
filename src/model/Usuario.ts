export interface Usuario {
    id: number;
    nome: string;
    telefone: string;
    ideiasPresente?: string;
    amigoOcultoSorteado: Usuario;
    jaFoiSorteado: boolean;
}