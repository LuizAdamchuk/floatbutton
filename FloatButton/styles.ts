import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'
import { FloatButtonProps } from '.'

type WrapperProps = { icon: boolean } & Pick<FloatButtonProps, 'size' | 'align'>

const wrapperModifiers = {
  left: (theme: DefaultTheme) => css`
    bottom: ${theme.spacings.medium};
    left: ${theme.spacings.medium};
  `,
  right: (theme: DefaultTheme) => css`
    bottom: ${theme.spacings.medium};
    right: ${theme.spacings.medium};
  `,
  small: () => css`
    height: 4rem;
    width: 4rem;
  `,
  medium: () => css`
    height: 4.8rem;
    width: 4.8rem;
  `,
  large: () => css`
    height: 5.6rem;
    width: 5.6rem;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, align }) => css`
    position: fixed;
    z-index:${theme.layers.menu};

    bottom:${theme.spacings.medium};
    right:${theme.spacings.medium};

    height: 4.8rem;
    width: 4.8rem;

    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border: 0;
    cursor: pointer;
    border-radius: 50%;
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    outline: none;

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 50%)};
    }
    &:before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background: ${theme.colors.primary};
      transition: opacity ${theme.transition.fast};
      opacity: 0;
      position: absolute;
    }
    &:focus {
      box-shadow: 0 0 1.6rem ${theme.colors.secondary};
    }
    ${media.greaterThan('medium')`
      display: none;
    `}

    ${!!size && wrapperModifiers[size]()}
    ${!!align && wrapperModifiers[align](theme)}

  `}
`
