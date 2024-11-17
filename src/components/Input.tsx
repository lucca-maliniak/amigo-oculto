import { InputProps, TextField, TextFieldVariants } from "@mui/material";
import { ChangeEvent } from "react";

interface IPropsInput extends InputProps { 
    titulo: string;
    variante: TextFieldVariants;
    onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

export default function Input({titulo, variante, onChange}: IPropsInput) {
    return (  
        <TextField label={titulo} variant={variante} margin="dense" onChange={onChange}/>
    )
}