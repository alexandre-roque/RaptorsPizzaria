import React, { ChangeEventHandler, FocusEventHandler } from "react";
import { StyledInput } from "./styles";

export type InputComponentProps = {
    type: React.HTMLInputTypeAttribute,
    value: string,
    placeholder: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    onBlur?: FocusEventHandler<HTMLInputElement>,
    width?: string,
    padding?: string
}

export default function Input({ type, placeholder, onChange, onBlur, value, width, padding }: InputComponentProps) {
    return <StyledInput width={width} onChange={onChange} onBlur={onBlur} value={value} type={type} placeholder={placeholder} />;
}
