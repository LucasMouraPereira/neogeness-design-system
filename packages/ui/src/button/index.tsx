'use client'
// eslint-disable-next-line no-redeclare
import React, { ReactNode } from 'react'
import * as S from './button.styles'

interface ButtonProps {
  children: ReactNode
  className?: string
  appName: string
}

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <S.Button className={className} onClick={() => {}}>
      {children}
    </S.Button>
  )
}
