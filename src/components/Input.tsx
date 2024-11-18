import { InputProps, TextField, TextFieldVariants } from "@mui/material";
import { ChangeEvent } from "react";

interface IPropsInput extends InputProps { 
    dadosUsuario: string | undefined;
    titulo: string;
    variante: TextFieldVariants;
    placeholder: string;
    onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

export default function Input({...props}: IPropsInput) {
    return (  
        <TextField placeholder={props.placeholder} value={props.dadosUsuario} label={props.titulo} variant={props.variante} margin="dense" onChange={props.onChange}/>
    )
}