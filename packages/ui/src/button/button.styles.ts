import styled, { css } from 'styled-components'

export const StyledButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.maxSoft};
    color: ${theme.colors.maxHard};
    border: 1px solid ${theme.colors.soft};
  `}
`
