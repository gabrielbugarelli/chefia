import logo from '../../assets/images/logo.svg';

import {
  Container,
  Content
} from './styles';

export const Header = () => {
  return (
    <Container>
      <Content>
        <section className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </section>
        <img src={logo} alt="CHEFIA APP" />
      </Content>
    </Container>
  )
}
