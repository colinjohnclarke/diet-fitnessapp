import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { NavLink } from "react-router-dom";
import "@splidejs/react-splide/css";

function LowCalories() {
  const [lowcalories, setLowCalories] = useState([]);

  useEffect(() => {
    getlowCals();
  }, []);

  const getlowCals = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByNutrients?&maxCalories=500&number=20&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
      );

      const data = await response.json();
      setLowCalories(data);

      console.log(data);
      console.log(`these are the recipies`, lowcalories);
      if (!response.ok) {
        throw Error(response);
      }
    } catch (err) {
      console.log(`there is an error `, err);
    }
  };

  return (
    <Wrapper className="highProtein">
      <h2 className="h1protein"> Low Calorie Recipies (less than 400) </h2>
      <Splide
        className="splide"
        options={{
          perPage: 3,
          arrows: true,
          pagination: true,
          drag: "free",
        }}
      >
        {lowcalories.map((recipie) => {
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
  width: 100%;
  margin: 0%;
  text-align: center;

  h2 {
    @media (min-width: 400px) {
      max-width: 300px;
      margin-left: 70px;
    }
  }
`;

const Card = styled.div`
    border: transparent; 
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      min-height: 15rem;
      border-radius: 2rem;
      overflow: hidden;
      position: relative;
      margin-top: 3rem;
      margin-bottom: 3rem;
      margin-left: 0.5rem; 
      margin-right: 0.5rem; 
      border-right: 1px solid turquoise;
      border-bottom: 1px solid turquoise;
     
    
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
        top: 25%;
        transform: translate(-50%, 0%);
        color: white;
        width: 100%;
        text-align: center;
        font-size: 135.0%;
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

export default LowCalories;
