import styled from "styled-components";

import "@splidejs/react-splide/css";
import { NavLink } from "react-router-dom";
import { GiChickenOven, GiCow, GiGoat } from "react-icons/gi";
import { GiFlatfish, GiTomato, GiCakeSlice } from "react-icons/gi";

function Category() {
  return (
    <Wrapper>
      <h2> Quick links: Food </h2>
      <div className="categorydiv animate__animated animate__heartBeat">
        <List className="listdiv">
          <NavLink to={"/cuisine/Chicken"}>
            <Categorydiv className="icon">
              <GiChickenOven className="categoryicon" />
              <h3>Chicken</h3>
            </Categorydiv>
          </NavLink>

          <NavLink to={"/cuisine/Beef"}>
            <Categorydiv className="icon">
              <GiCow className="categoryicon" />
              <h3>Beef</h3>
            </Categorydiv>
          </NavLink>

          <NavLink to={"/cuisine/Fish"}>
            <Categorydiv className="icon">
              <GiFlatfish className="categoryicon" />
              <h3>Fish</h3>
            </Categorydiv>
          </NavLink>

          <NavLink to={"/cuisine/Lamb"}>
            <Categorydiv className="icon">
              <GiGoat className="categoryicon" />
              <h3>Lamb</h3>
            </Categorydiv>
          </NavLink>

          <NavLink to={"/cuisine/Vegetarian"}>
            <Categorydiv className="icon">
              <GiTomato className="categoryicon" />
              <h3>Veggie</h3>
            </Categorydiv>
          </NavLink>

          <NavLink to={"/cuisine/Vegetarian"}>
            <Categorydiv className="icon">
              <GiCakeSlice className="categoryicon" />
              <h3>Health Desert</h3>
            </Categorydiv>
          </NavLink>
        </List>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  h2 {
    position: relative; 
    top: 10px; 
    left: 14px; 
    margin: 0;
    padding: 3%;
    color: black;
    text-align: center; 
    text-decoration: underline #00adb5; 4px
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
      0px -5px 35px rgba(255, 255, 255, 0.3);
  }
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  word-wrap: wrap;
  position: relative;
  left: 14%;
  color: white;
  width: 80%;
`;

const Categorydiv = styled.div`
 
  height: 5rem;
  width: 5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3px;
  background: rgb(0,255,235);
  background: linear-gradient(252deg, rgba(0,255,235,0.9220281862745098) 0%, rgba(0,180,181,1) 65%);
  );
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-decoration: none;
  font-size: 1rem;
  text-align: center;
  color: white; 
  text-decoration: none;

  h3{

   
  }

  a {
    text-decoration: none;
    
  }
`;

export default Category;
