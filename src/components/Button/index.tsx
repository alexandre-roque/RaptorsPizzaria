import { StyledButton } from "./styles";

export type ButtonComponentProps = {
    children?: HTMLCollection | string,
    onClick: (e?: React.MouseEvent) => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ onClick, children }: ButtonComponentProps ){
    return <StyledButton onClick={onClick}>{children}</StyledButton>
}