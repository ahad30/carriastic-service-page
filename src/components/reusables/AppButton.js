import React, { Children } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

function AppButton({
    children,
    width = "100px",
    height = "40px",
    bgColor = "#47338a",
    onClick = () => alert("clinked"),
    sx
}) {

    // const ColorButton = (({ theme }) => ({
    //     color: theme.palette.getContrastText("#47338a"),
    //     backgroundColor: "#47338a",
    //     '&:hover': {
    //         backgroundColor: "#47338a",
    //     },
    // }));
    // return (
    //     <ColorButton variant="contained">Custom CSS</ColorButton>
    // )
    return (
        <button style={{
            backgroundColor: bgColor,
            padding: "10px 20px",
            color: "white",
            border: 0,
            cursor: "pointer",
            borderRadius: "2.5px",
            boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.3)",
            ...sx
        }}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default AppButton