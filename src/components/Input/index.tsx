import React, { ChangeEventHandler } from "react";
import { StyledInput } from "./styles";

export type InputComponentProps = {
    type: React.HTMLInputTypeAttribute,
    value: string,
    placeholder: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}

export default function Input({ type, placeholder, onChange, value }: InputComponentProps) {
    return <StyledInput onChange={onChange} value={value} type={type} placeholder={placeholder} />;
}
