import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import logoSvg from '../../assets/logo.svg'
import { CartContext } from '../../contexts/CartContext'
import { Aside, HeaderContainer } from './styles'

export function Header() {
  const { amountItems } = useContext(CartContext)

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoSvg} alt="Coffee Delivery Logo" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Telêmaco Borba, PR</span>
        </div>

        <Link to="/cart">
          <ShoppingCart size={22} weight="fill" />
          {amountItems !== 0 && <span>{amountItems}</span>}
        </Link>
      </Aside>
    </HeaderContainer>
  )
}
