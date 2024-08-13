import { SetStateAction } from "react";

export const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>, setState: React.Dispatch<SetStateAction<string>>) => {
    const value = event.target.value;
    setState(value);
};