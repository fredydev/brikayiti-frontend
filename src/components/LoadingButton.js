import React from "react";
// import spinner from "../images/icon/reset.svg";
import styled from "styled-components"

export default function LoaderButton({
  type,
  isLoading,
  className = "", 
  disabled = false,
  ...props
}) {
  return (
    <Button
      disabled={disabled || isLoading}
      type={type}
      {...props}
    >
      {/* {isLoading && <img src={spinner} alt="refresh" className="spinning" />} */}
      {props.children}
    </Button>
  );
}
const Button = styled.button`
   border: 0;
  padding: 10px 15px 10px 15px;
  color: whitesmoke;
  margin: 5px;
  background: #3aa379;
  padding: 10px;
  color: white;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.5);
  cursor: pointer;
  img{
      animation: spin 1s infinite linear;
      @keyframes spin {
          from { transform: scale(1) rotate(0deg); }
          to { transform: scale(1) rotate(360deg); }
      }
  }
`