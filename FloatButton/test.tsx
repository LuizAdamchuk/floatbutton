import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import FloatButton from '.'

describe('<FloatButton />', () => {
  it('should render the heading', () => {
    renderWithTheme(<FloatButton />)

    expect(
      screen.getByRole('heading', { name: /FloatButton/i })
    ).toBeInTheDocument()
  })
})
