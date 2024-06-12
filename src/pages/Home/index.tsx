import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'

import coffees from '../../../coffees-list.json'
import homeBackground from '../../assets/background.png'
import homeCoffee from '../../assets/coffee.png'
import { Card } from '../../components/Card'
import { Items } from '../../components/Items'
import { CoffeeList, HomeContainer, HomePresentation } from './styles'

export function Home() {
  const theme = useTheme()

  return (
    <HomeContainer>
      <img id="home-bg" src={homeBackground} alt="" />
      <HomePresentation>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h3>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h3>

          <div>
            <Items
              color={theme['yellow-dark']}
              icon={<ShoppingCart weight="fill" />}
            >
              <span>Compra simples e segura</span>
            </Items>
            <Items color={theme['base-text']} icon={<Package weight="fill" />}>
              Embalagem mantém o café intacto
            </Items>
            <Items color={theme.yellow} icon={<Timer weight="fill" />}>
              <span>Entrega rápida e rastreada</span>
            </Items>
            <Items color={theme.purple} icon={<Coffee weight="fill" />}>
              O café chega fresquinho até você
            </Items>
          </div>
        </div>
        <img src={homeCoffee} alt="" />
      </HomePresentation>

      <CoffeeList>
        <h1>Nossos cafés</h1>

        <div>
          {coffees.map((coffee) => {
            return <Card key={coffee.id} {...coffee} />
          })}
        </div>
      </CoffeeList>
    </HomeContainer>
  )
}
