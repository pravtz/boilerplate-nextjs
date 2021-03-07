import icons from './IconsSocial'
import links from './SocialIconsLink'
import Link from 'next/link'
import { Container, Wrapper } from './styled'

const SocialIcons = () => {
  return (
    <Container>
      <Wrapper>
        {links.map((link, i) => {
          const Icon = icons[link.label]
          if (Icon) {
            return (
              <li key={i}>
                <Link href={link.url}>
                  <span>
                    <Icon />
                  </span>
                </Link>
              </li>
            )
          }
        })}
      </Wrapper>
    </Container>
  )
}

export default SocialIcons
