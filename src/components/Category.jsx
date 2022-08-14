import styled from "styled-components";

import "@splidejs/react-splide/css";
import { NavLink } from "react-router-dom";
import { GiChickenOven, GiCow, GiGoat } from "react-icons/gi";
import { GiFlatfish } from "react-icons/gi";

function Category() {
  return (
    <div
      className="categorydiv"
      className="animate__animated animate__heartBeat"
    >
      <List className="listdiv">
        <NavLink to={"/cuisine/Chicken"}>
          <Chicken className="icon">
            <h3>Chicken</h3>
            <GiChickenOven className="categoryicon" />
          </Chicken>
        </NavLink>

        <NavLink to={"/cuisine/Beef"}>
          <Beef className="icon">
            <h3>Beef</h3>
            <GiCow className="categoryicon" />
          </Beef>
        </NavLink>

        <NavLink to={"/cuisine/Fish"}>
          <Fish className="icon">
            <h3>Fish</h3>
            <GiFlatfish className="categoryicon" />
          </Fish>
        </NavLink>

        <NavLink to={"/cuisine/Lamb"}>
          <Lamb className="icon">
            <h3>Lamb</h3>
            <GiGoat className="categoryicon" />
          </Lamb>
        </NavLink>
      </List>
    </div>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
  word-wrap: wrap;
  width: 100%;
  position: relative: 
  
`;

const Chicken = styled.div`
  min-width: 8rem;
  min-height: 8rem;
  max-width: 8rem;
  height: 7rem;
  border: transparent;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background-color: #fad961;
  background-image: linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Beef = styled.div`
  min-width: 8rem;
  min-height: 8rem;
  max-width: 5rem;
  height: 7rem;
  border: transparent;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background-color: #fad961;
  background-image: linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Fish = styled.div`
  min-width: 8rem;
  min-height: 8rem;
  max-width: 5rem;
  height: 7rem;
  border: transparent;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background-color: #fad961;
  background-image: linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Lamb = styled.div`
  min-width: 8rem;
  min-height: 8rem;
  max-width: 5rem;
  height: 7rem;
  border: transparent;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  background-color: #fad961;
  background-image: linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default Category;
