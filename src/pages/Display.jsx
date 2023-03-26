import React from 'react'
import styled from 'styled-components'

function Display() {
  return (

<Border>
{/* <div className="card"> </div> */}


<Color></Color>


<Layer1>
<img src="https://cdn.shopify.com/s/files/1/0471/3332/7519/files/get-fit.jpg" alt="" />
<img src="https://cdn.shopify.com/s/files/1/0471/3332/7519/files/nutrition.jpg" alt="" />

</Layer1>

<Layer2>
<img src="https://cdn.shopify.com/s/files/1/0471/3332/7519/files/gain-strength.jpg" alt="" />
<img src="https://cdn.shopify.com/s/files/1/0471/3332/7519/files/weight-loss.jpg" alt="" />

</Layer2>

</Border>

  )
}

export default Display; 

const Color = styled.div`
height: 100%; 
width: 100%; 
position: absolute; 
z-index: 0; 
background: rgb(3,252,248);
background: linear-gradient(196deg, rgba(3,252,248,1) 0%, rgba(22,160,161,0.3760869565217392) 20%, rgba(23,147,157,0.29130434782608694) 36%, rgba(25,129,152,0.14347826086956517) 58%, rgba(54,48,196,1) 98%);
`

const Border = styled.div`
margin: 0; 
border; 0; 
height: 100%; 
width: 100%; 
position: absolute; 
z-index: -1; 
display: flex; 
// justify-content: center; 
// align-items: center;


img{
   height: 100%; 
   width: 100%; 
}

`; 

const Layer1 = styled.div`
height: 50%; 
width: 100%; 
`
const Layer2= styled.div`
height: 50%; 
width: 100%; 
@media (max-width: 450px) {
    display: none; 
  }




`