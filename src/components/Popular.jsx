import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=34773bf69ba4400ca1a7519df1cee892&number=20`
      );
      const data = await response.json();
      setPopular(data.recipes);

      console.log(data);
      console.log(`these are the recipies`, popular);
    } catch (err) {
      console.log(`there is an error `, err);
    }
  };

  return (
    <Wrapper className="paelodiv">
      <h1 className="h1paeloe"> Paleo recipies</h1>
      <Splide
        className="paeloesplide"
        options={{
          perPage: 2,
          arrows: true,
          pagination: true,
          drag: "free",
        }}
      >
        {popular.map((recipie) => {
          return (
            <SplideSlide className="splidediv">
              <Card className="popularcard">
                <div>
                  <h4 className="paragraphpaelos">{recipie.title}</h4>
                  <img src={recipie.image} alt={recipie.title}></img>
                </div>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0px;
  padding: 5%;
  position: relative;
  left: 60px;
`;

const Card = styled.div`
border: transparent; 
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  min-height: 15rem;
  max-height: 30rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  margin: 1rem;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1; 
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 4.0rem;
    display-flex;
    justify-content: center;
    align-items: end;
    text-shadow: 10px 10px 25px rgb(81,67,21),
    -10px 10px 25px rgb(81,67,21),
    -10px -10px 25px rgb(81,67,21),
    10px -10px 25px rgb(81,67,21);
    
  }

  h4{
    position: absolute; 
    z-index: 15; 
    color: white;
    width: 100%;
    text-align: center;
    font-size: 2rem; 
    text-shadow: 10px 10px 25px rgb(81,67,21),
    -10px 10px 25px rgb(81,67,21),
    -10px -10px 25px rgb(81,67,21),
    10px -10px 25px rgb(81,67,21);

  }

  h1{
    text-shadow: 0 2px 1px #79a06d, 
    -1px 3px 1px #82ad75, 
    -2px 5px 1px #8ebf80;
    text-shadow: 10px 10px 25px rgb(81,67,21),
    -10px 10px 25px rgb(81,67,21),
    -10px -10px 25px rgb(81,67,21),
    10px -10px 25px rgb(81,67,21);
  }

`;

export default Popular;
