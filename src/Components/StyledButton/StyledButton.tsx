import React from 'react';
import './styledButton.module.scss';
import {useNavigate} from "react-router-dom";

interface ButtonProps {
    props?: string;
    navigateItem: string;
    play?:()=>void;
    isDisabled:boolean;
}

const StyledButton: React.FC<ButtonProps> = ({props, navigateItem,play,isDisabled}) => {
const ButtonHandler = ()=>{
    navigate(navigateItem)
    if (play) {
        play()
    }
}
    const navigate = useNavigate()
    return (
        <button  disabled={isDisabled} onClick={ButtonHandler}>
            {props}
        </button>
    );
};

export default StyledButton;