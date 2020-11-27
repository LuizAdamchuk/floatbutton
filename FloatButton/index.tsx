import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type FloatButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type FloatButtonProps = {
  align?: 'left' | 'right'
  size?: 'small' | 'medium' | 'large'
  //dessa maneira deixa mais permissivo ainda
  icon?: JSX.Element
  as?: React.ElementType
} & FloatButtonTypes

const FloatButton = ({
  align = 'right',
  size = 'medium',
  icon,
  children,
  ...props
}: FloatButtonProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <S.Wrapper
      align={align}
      size={size}
      icon={!!icon}
      {...props}
      onClick={scrollToTop}
    >
      {!!icon && icon}
      {}
    </S.Wrapper>
  )
}

export default FloatButton
