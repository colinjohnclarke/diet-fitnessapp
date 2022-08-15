import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { NavLink } from "react-router-dom";
import "@splidejs/react-splide/css";

function HealthFatsandProtein() {
  const [fat, setFat] = useState([]);

  useEffect(() => {
    getFat();
  }, []);

  const getFat = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByNutrients?&minProtein=30&minFat=30&maxFat=100&number=9&apiKey=34773bf69ba4400ca1a7519df1cee892`
      );
      const data = await response.json();
      setFat(data);

      console.log(data);
      console.log(`these are the recipies`, fat);
    } catch (err) {
      console.log(`there is an error `, err);
    }
  };

  return (
    <Wrapper className="highProtein">
      <h2 className="h1protein"> Healthy Fat and high Protein Recipies</h2>
      <Splide
        className="splide"
        options={{
          perPage: 2,
          arrows: true,
          pagination: true,
          drag: "free",
        }}
      >
        {fat.map((recipie) => {
          return (
            <SplideSlide className="proteindiv">
              <Card key={recipie.id} className="card">
                <NavLink to={"/recipie/" + recipie.id}>
                  <div>
                    <p className="paragraphprotein">{recipie.title}</p>
                    <h4>
                      Cals: {recipie.calories} Fat: {recipie.fat}
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
  padding: 5%;

  // height: 500px;
  text-align: center;
  h2 {
     margin: 0;
    padding: 0;
    color: white;

    text-decoration: underline #00adb5; 4px
   
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
      0px -5px 35px rgba(255, 255, 255, 0.3);
  }
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

  h2{

  }

`;

export default HealthFatsandProtein;
