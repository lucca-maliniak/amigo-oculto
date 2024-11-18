import { InputProps, TextField, TextFieldVariants } from "@mui/material";
import { ChangeEvent } from "react";

export interface IErrorValidator {
    possuiErro: boolean;
    message: string;
}

interface IPropsInput extends InputProps { 
    erros?: IErrorValidator
    dadosUsuario: string | undefined;
    titulo: string;
    variante: TextFieldVariants;
    placeholder: string;
    onBlur?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

export default function Input({...props}: IPropsInput) {
    return (  
        <TextField fullWidth placeholder={props.placeholder} error={props.erros?.possuiErro} helperText={props.erros ? props.erros.message : ''} value={props.dadosUsuario} label={props.titulo} variant={props.variante} margin="dense" onBlur={props.onBlur} onChange={props.onChange}/>
    )
}