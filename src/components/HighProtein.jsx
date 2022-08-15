import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { NavLink } from "react-router-dom";
import "@splidejs/react-splide/css";

function HighProtein() {
  const [protein, setProtein] = useState([]);

  useEffect(() => {
    getProtein();
  }, []);

  const getProtein = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByNutrients?&minProtein=30&maxProtein=100&number=9&apiKey=34773bf69ba4400ca1a7519df1cee892`
      );
      const data = await response.json();
      setProtein(data);

      console.log(data);
      console.log(`these are the recipies`, protein);
    } catch (err) {
      console.log(`there is an error `, err);
    }
  };

  return (
    <Wrapper className="highProtein">
      <h2 className="h1protein"> High Protein Recipies</h2>
      <Splide
        className="splide"
        options={{
          perPage: 2,
          arrows: true,
          pagination: true,
          drag: "free",
        }}
      >
        {protein.map((recipie) => {
          return (
            <SplideSlide className="proteindiv">
              <Card key={recipie.id} className="card">
                <NavLink to={"/recipie/" + recipie.id}>
                  <div>
                    <p className="paragraphprotein">{recipie.title}</p>
                    <h4>
                      Cals: {recipie.calories} Protein: {recipie.protein}
                    </h4>
                    <img src={recipie.image} alt={recipie.title}></img>
                  </div>
                </NavLink>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0%;
  padding: 2%;

  // height: 500px;
  text-align: center;
`;

const Card = styled.div`
border: transparent; 
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  min-height: 15rem;
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
    font-size: 200.0%;
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
    text-shadow: 10px 10px 25px rgb(81,67,21),
    -10px 10px 25px rgb(81,67,21),
    -10px -10px 25px rgb(81,67,21),
    10px -10px 25px rgb(81,67,21);

  }

`;

export default HighProtein;
