'use client'
// eslint-disable-next-line no-redeclare
import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { themes } from '@repo/tokens'
import * as S from './button.styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  appName: string
  as: 'neogeness'
}

export const Button = ({ children, className, as, ...rest }: ButtonProps) => {
  const theme = themes[as]
  return (
    <S.StyledButton theme={theme} className={className} {...rest}>
      {children}
    </S.StyledButton>
  )
}
