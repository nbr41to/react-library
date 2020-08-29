import React, { FC } from 'react';

interface ButtonProps {
    label: string,
    size?: "small" | "medium" | "large",
    onClick?: () => void
}

export const Button: FC<ButtonProps> = ({ label, size = "medium", onClick }) => {
    return (
        <button
            className={size}
            onClick={onClick}
        >
            {label}
        </button>
    )
}