import React from 'react';
import './styledButton.module.scss';
import {useNavigate} from "react-router-dom";

interface ButtonProps {
    props?: string;
    navigateItem: string;
}

const StyledButton: React.FC<ButtonProps> = ({props, navigateItem}) => {
    const navigate = useNavigate()
    return (
        <button onClick={() => navigate(navigateItem)}>
            {props}
        </button>
    );
};

export default StyledButton;