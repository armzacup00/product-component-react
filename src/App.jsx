import styled from "styled-components"
import perfumeDT from './assets/image-product-desktop.jpg'
import perfumeMB from './assets/image-product-mobile.jpg'
import IconCart from './assets/icon-cart.svg'
import { useMediaQuery } from "react-responsive"

function App() {
  
  const IsDesktop = useMediaQuery({ query:'(min-width: 1440px)'})

  return (
    <Main>
      <ImageZone>
        <img src={IsDesktop ? perfumeDT : perfumeMB} alt="product" />
      </ImageZone>
      <TextZone>
        <small>PERFUME</small>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation
          composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <PriceZone>
          <h2>$149.99</h2>
          <p>$169.99</p>
        </PriceZone>
        <ButtonZone><img src={IconCart} alt="cart" /> Add to Cart</ButtonZone>
      </TextZone>
    </Main>
  )
}

const Main = styled.main `
  max-width: 321px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  background-color:  hsl(0, 0%, 100%);
  @media (min-width: 1440px) {
   display :flex ;
   max-width: 800px;
  }
`
const ImageZone = styled.div `
img{
  width: 100%;
  height: 100%;
}
  
`
const TextZone = styled.div `
margin: 1rem;
small{
  color: hsl(228, 12%, 48%);
  letter-spacing: 5px;
  font-family: monospace;
}
h1{
  padding: 1rem 0 1rem 0;
  line-height: 30px;
  font-size: 30px;
  font-family: 'Fraunces', serif;
}
p{
  color: hsl(228, 12%, 48%);
}
@media (min-width: 1440px) {
  width: 450px;
  margin: 2.5rem;
  small{
    font-size: 18px;
  }
  h1{
    line-height: 3.7rem;
    font-size: 42px;
  }
  p{
    line-height: 29px;
    margin: 1rem 0 1rem 0;
    font-size: 18px;
  }
}
`
const PriceZone = styled.div `
display: flex;
align-items: center;
margin-top: 0.5rem;
h2{
  color: hsl(158, 36%, 37%);
  font-family: 'Fraunces', serif;
  margin-right: 1rem;
  font-size: 25px;
}p{
  text-decoration: line-through;
}
@media (min-width: 1440px) {
  margin: 2rem 0 2rem 0;
  h2{
    font-size: 42px;
  }
}

`
const ButtonZone = styled.button `
img{
  margin-right: 0.5rem;
}
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
color: hsl(0, 0%, 100%);
border: none;
background-color: hsl(158, 36%, 37%);
width: 100%;
padding: 1rem 0 1rem 0;
margin: 1rem 0 0.5rem 0;
&:hover{
  background-color: hsl(212, 21%, 14%);
}
@media (min-width:1440px) {
  img{
    width: 8%;
  }
  margin-top: 5rem;
  padding: 1.5rem 0 1.5rem 0;
  font-size: 24px;
}
`

export default App
