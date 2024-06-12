import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import { useContext } from 'react'
import { useTheme } from 'styled-components'

import ilustracaoSvg from '../../assets/ilustracao.svg'
import { Items } from '../../components/Items'
import { CartContext } from '../../contexts/CartContext'
import { Container, Order } from './styles'

export function Success() {
  const theme = useTheme()
  const { order } = useContext(CartContext)

  return (
    <Container>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <Order>
          <Items color={theme.purple} icon={<MapPin weight="fill" />}>
            <span>
              Entrega em{' '}
              <strong>{`${order.address.street}, ${order.address.number}`}</strong>{' '}
              {`${order.address.neighborhood} ${order.address.city} ${order.address.state}`}
            </span>
          </Items>
          <Items color={theme.yellow} icon={<Timer weight="fill" />}>
            <span>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </span>
          </Items>
          <Items
            color={theme['yellow-dark']}
            icon={<CurrencyDollar weight="fill" />}
          >
            <span>
              Pagamento na entrega
              <br />
              <strong>
                {order.paymentMethod === 'credit' && 'Cartão de Crédito'}
                {order.paymentMethod === 'debit' && 'Cartão de Débito'}
                {order.paymentMethod === 'cash' && 'Dinheiro'}
              </strong>
            </span>
          </Items>
        </Order>
        <img src={ilustracaoSvg} alt="" />
      </div>
    </Container>
  )
}
