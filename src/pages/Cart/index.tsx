import { zodResolver } from '@hookform/resolvers/zod'
import { Bank, CreditCard, MapPin, Money, Trash } from '@phosphor-icons/react'
import { Fragment, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useTheme } from 'styled-components'
import * as zod from 'zod'

import data from '../../../coffees-list.json'
import { QuantityInput } from '../../components/Form/QuantityInput'
import { RadioInput } from '../../components/Form/RadioInput'
import { TextInput } from '../../components/Form/TextInput'
import { Input } from '../../components/Form/TextInput/styles'
import { CartContext } from '../../contexts/CartContext'
import {
  Button,
  CartContainer,
  Coffee,
  CoffeeInfo,
  ConfirmYourOrder,
  EmptyCart,
  Form,
  Handle,
  Header,
  Price,
  Radios,
  Remove,
  SelectedCoffees,
  Separator,
  Title,
} from './styles'

const NewOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o cep'),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  fullAddress: zod.string().optional(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export function Cart() {
  const theme = useTheme()
  const navigate = useNavigate()
  const {
    items,
    totalPrice,
    removeItem,
    incrementQuantity,
    decrementQuantity,
    createOrder,
  } = useContext(CartContext)
  const { register, handleSubmit, formState } = useForm({
    resolver: zodResolver(NewOrderFormValidationSchema),
  })
  const deliveryFee = 3.5

  const coffeesInCart = items.map((item) => {
    const coffeeInfo = data.find((coffee) => coffee.id === item.id)
    if (coffeeInfo)
      return {
        ...coffeeInfo,
        quantity: item.quantity,
      }
  })

  function handleOrderSubmit(data: any) {
    const {
      cep,
      street,
      number,
      fullAddress,
      neighborhood,
      city,
      state,
      paymentMethod,
    } = data

    const order = {
      address: {
        cep,
        street,
        number,
        fullAddress: fullAddress || null,
        neighborhood,
        city,
        state,
      },
      paymentMethod,
    }
    createOrder(order)
    navigate('/cart/success')
  }

  return (
    <CartContainer>
      <ConfirmYourOrder>
        <h1>Complete seu pedido</h1>
        <form id="order" onSubmit={handleSubmit(handleOrderSubmit)}>
          <div>
            <Header>
              <MapPin size={22} color={theme['yellow-dark']} />
              <Title>
                <h3>Endereço de Entrega</h3>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </Title>
            </Header>
            <Form>
              <div>
                <TextInput
                  id="cep"
                  type="text"
                  {...register('cep')}
                  placeholder="CEP"
                />
              </div>
              <div>
                <TextInput
                  id="street"
                  type="text"
                  placeholder="Rua"
                  {...register('street')}
                />
              </div>
              <div>
                <TextInput
                  id="number"
                  type="text"
                  placeholder="Número"
                  {...register('number')}
                />
              </div>
              <div>
                <TextInput
                  id="fullAddress"
                  type="text"
                  placeholder="Complemento"
                  {...register('fullAddress')}
                />
                <span>Opcional</span>
              </div>
              <div>
                <TextInput
                  id="neighborhood"
                  type="text"
                  placeholder="Bairro"
                  {...register('neighborhood')}
                />
              </div>
              <div>
                <TextInput
                  id="city"
                  type="text"
                  placeholder="Cidade"
                  {...register('city')}
                />
              </div>
              <div>
                <TextInput
                  id="state"
                  type="text"
                  placeholder="UF"
                  {...register('state')}
                />
              </div>
            </Form>
          </div>
          <div>
            <Header>
              <MapPin size={22} color={theme.purple} />
              <Title>
                <h3>Pagamento</h3>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </Title>
            </Header>
            <Radios>
              <RadioInput
                label={'Cartão de Crédito'.toUpperCase()}
                icon={<CreditCard size={16} color={theme.purple} />}
                {...register('paymentMethod')}
                value="credit"
                id="credit"
              />
              <RadioInput
                label={'Cartão de Débito'.toUpperCase()}
                icon={<Bank size={16} color={theme.purple} />}
                {...register('paymentMethod')}
                value="debit"
                id="debit"
              />
              <RadioInput
                label={'Dinheiro'.toUpperCase()}
                icon={<Money size={16} color={theme.purple} />}
                {...register('paymentMethod')}
                value="cash"
                id="cash"
              />
            </Radios>
          </div>
        </form>
      </ConfirmYourOrder>
      <SelectedCoffees>
        <h1>Cafés selecionados</h1>
        <div>
          {coffeesInCart?.map((coffee) => {
            return (
              <Fragment key={coffee.id}>
                <Coffee>
                  <img src={coffee.image} alt="" />
                  <div>
                    <CoffeeInfo>
                      <span>{coffee.name}</span>
                      <span>R$ {coffee.price}</span>
                    </CoffeeInfo>
                    <Handle>
                      <QuantityInput
                        quantity={coffee.quantity}
                        incrementQuantity={() => incrementQuantity(coffee.id)}
                        decrementQuantity={() => decrementQuantity(coffee.id)}
                      />
                      <Remove
                        type="button"
                        onClick={() => removeItem(coffee.id)}
                      >
                        <Trash size={16} />
                        <span>REMOVER</span>
                      </Remove>
                    </Handle>
                  </div>
                </Coffee>
                <Separator />
              </Fragment>
            )
          })}

          {items.length > 0 ? (
            <Price>
              <div>
                <span>Total de itens</span>
                <span>R$ {totalPrice?.toFixed(2)}</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ {deliveryFee.toFixed(2)}</span>
              </div>
              <div>
                <span>Total</span>
                <span>
                  R$ {totalPrice && (totalPrice + deliveryFee).toFixed(2)}
                </span>
              </div>
            </Price>
          ) : (
            <EmptyCart>
              <div>
                <h3>Não há itens no seu carrinho</h3>
              </div>
              <Separator />
            </EmptyCart>
          )}
          <Button type="submit" form="order" disabled={!items.length}>
            CONFIRMAR PEDIDO
          </Button>
        </div>
      </SelectedCoffees>
    </CartContainer>
  )
}
