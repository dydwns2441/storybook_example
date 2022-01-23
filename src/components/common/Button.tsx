import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  children: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  theme?: "primary" | "secondary" | "warning" | "cancle";
  onClick: () => boolean;
  width?:number
}

const THEMES: any = {
  primary: {
    background: "#2058aa",
    color: "#fff",
  },
  secondary: {
    background: "#4371aa",
    color: "#fff",
  },
  warning: {
    background: "#ff5050",
    color: "#fff",
  },
  cancle: {
    background: "#d1d1d1",
    color: "#8b8b8b",
  },
};

const Container = styled.button<{
  size: string;
  theme: string;
  disabled: boolean;
  width: number
}>`
  background-color: ${({ theme }) =>
    theme ? (THEMES[theme].background as string) : "none"};
  color: ${({ theme }) => (theme ? (THEMES[theme].color as string) : "none")};
  padding: ${({ size }) =>
    size === "small" ? "6px" : size === "medium" ? "10px" : "20px"};
  font-size: ${({ size }) =>
    size === "small" ? "10px" : size === "medium" ? "15px" : "20px"};
  font-weight: 700;
  border: none;
  border-radius: 10px;
  transition: all 0.3s;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  width: ${({width}) => width ? `${width}px`: 'auto'};
  
  &:hover {
    opacity: 0.7;
  }
  &:disabled {
    opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  }
`;

/**
 * Button
 * - size 가이드
 *   - 'small' : font: 10px, padding: 6px
 *   - 'medium' | 'large'
 *
 *
 * @param children
 * @param theme
 * @param size
 * @param onClick
 * @param disabled
 * @param width
 * @param props
 * @constructor
 */
const Button = ({
  children,
  theme,
  size,
  onClick,
  disabled,
    width,
  ...props
}: ButtonProps) => {
  return (
    <>
      <Container
        size={size as string}
        theme={theme}
        disabled={disabled as boolean}
        {...props}
        onClick={() => alert("asdf")}
          width={width as number}
      >
        {children}
      </Container>
    </>
  );
};

export default Button;
