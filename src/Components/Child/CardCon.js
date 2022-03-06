import React from "react"
import styled from "styled-components"
import Card from "../Cards/Card"
import luxury from "../../img/icon-luxury.svg"
import sedan from "../../img/icon-sedans.svg"
import suv from "../../img/icon-suvs.svg"

function CardCon({goToSedan, goToSuv, goToLuxury, sedanValue}) {
  return (
   <div>

    {sedanValue ?  (
      <div>
    <Holder>
       <Card 
       title ="Sedans"
       content="Choose a sedan for it affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
       icon={sedan}
       bgColor={"#E28525"}
       btnColor={"#E28525"}
       sedanValue={sedanValue}
       goToSedan={goToSedan}
       />
       <Card
       title ="suvs"
       content="Take an SUV for it spacious interior, power and versatility. Perfect for your next family vacation and off-road vacations."
       icon={suv}
       bgColor={"#016972"}
       btnColor={"#016972"}
       goToSuv={goToSuv}
       />
       <Card
       title ="luxury"
       content="Cruise in the best car brands without the bloated prices. Enjoy the enhanced of a luxury rental and arrive in style."
       icon={luxury}
       bgColor={"#00403F"}
       btnColor={"#00403F"}
       goToLuxury={goToLuxury}
       />
    </Holder>
      </div>
       
    ) : null

    }

   </div>
  );
}

export default CardCon;

const Holder = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color:#F2F2F2;
`