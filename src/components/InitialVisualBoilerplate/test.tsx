import { render, screen } from '@testing-library/react'

import InitialVisualBoilerplate from '.'

describe('<InitialVisualBoilerplate />', () => {
  it('should render the heading', () => {
    const { container } = render(<InitialVisualBoilerplate />)

    expect(
      screen.getByRole('heading', {
        name: /Welcome to my Boilerplate made in NextJs/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
