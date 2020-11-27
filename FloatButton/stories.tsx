import { Story, Meta } from '@storybook/react/types-6-0'
import FloatButton, { FloatButtonProps } from '.'
import { ArrowUp } from '@styled-icons/evaicons-solid/ArrowUp'
//ideia de ao ter algo no carrinho isso muda para o icone de carrinho pra pessoa ir direto
// import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

export default {
  title: 'Details/FloatButton',
  component: FloatButton,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<FloatButtonProps> = (args) => (
  <FloatButton {...args} />
)
Default.args = {
  icon: <ArrowUp />
}
