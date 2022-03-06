import {React, useState} from "react"
import styled from "styled-components"
import CardCon from "../Child/CardCon"
import  Page from "../page/Page"

import redCar from "../../img/red.jpg"


function Router() {
    const [sedanValue, setSedanValue] = useState(true)
    const [suvValue, setSuvValue] = useState(true)
    const [luxuryValue, setLuxuryValue] = useState(true)

    const navigate={
        goToSedan: ()=> {
            setSedanValue(!sedanValue)
            console.log(sedanValue);
        },
        goToSuv:() => {
            setSuvValue(!suvValue)
            console.log(suvValue);
        },

        goToLuxury : () => {
            setLuxuryValue(!luxuryValue)
            console.log(luxuryValue);
        }

    }

    const goBack = ()=> {
        setSedanValue(sedanValue === true)
        setSuvValue(suvValue === true)
        setLuxuryValue(luxuryValue === true)
    }

    // const goToSedan = () => {
    //     setSedanValue(!sedanValue)
    //     console.log(sedanValue);
    // }

    // const goToSuv = () => {
    //     setSuvValue(!suvValue)
    //     console.log(suvValue);
    // }

    // const goToLuxury = () => {
    //     setLuxuryValue(!luxuryValue)
    //     console.log(luxuryValue);
    // }

  return (
    <div>

         <CardCon goToSedan={navigate.goToSedan}  sedanValue={sedanValue} />

        {/* navigation to sedan page */}
        {sedanValue ?  null : (
            <div>
            <Page
            title ="Sedans"
        content="Choose a sedan for it affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip. Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec, vis te zril urbanitas scribentur. In utamur impedit feugait nec, ex putent alienum est. 
        Nam tantas latine admodum at, ea etiam nobis pri. Paulo alienum recusabo vis ad, eam simul perpetua in. Ludus aliquid officiis sed te, vix stet 
        disputationi ex, nec ex quaeque signiferumque mediocritatem."
        bgColor={"#E28525"}
        btnColor={"#E28525"}
        image={redCar}
        goToSedan={navigate.goToSedan}
        goBack={goBack}
        sedanValue={sedanValue}
            />
            </div>
        )}

        {/* navigation to suv page */}
        {/* {suvValue ? <CardCon goToSuv={navigate.goToSuv}/>  :
         <div>
         <Page
         title ="suv"
        content="Take an SUV for it spacious interior, power and versatility. Perfect for your next family vacation and off-road vacations. Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec, vis te zril urbanitas scribentur. In utamur impedit feugait nec, ex putent alienum est. Nam tantas latine admodum at, ea etiam nobis pri. Paulo alienum recusabo vis ad, eam simul perpetua in. Ludus aliquid officiis sed te, vix stet disputationi ex, nec ex quaeque signiferumque mediocritatem."
        bgColor={"#016972"}
        btnColor={"#016972"}
        goToSuv={navigate.goToSuv}
     
         />
         </div>
         } */}

         {/* navigation to luxury page */}
         {/* {suvValue ? <CardCon goToLuxury={goToLuxury}/>  :
          <div>
          <Page
          title ="luxury"
         content="Cruise in the best car brands without the bloated prices. Enjoy the enhanced of a luxury rental and arrive in style. Lorem ipsum dolor sit amet, quodsi conceptam adversarium te nec, vis te zril urbanitas scribentur. In utamur impedit feugait nec, ex putent alienum est. Nam tantas latine admodum at, ea etiam nobis pri. Paulo alienum recusabo vis ad, eam simul perpetua in. Ludus aliquid officiis sed te, vix stet disputationi ex, nec ex quaeque signiferumque mediocritatem."
         bgColor={"#00403F"}
         btnColor={"#00403F"}
         goToLuxury={goToLuxury}
      
          />
          </div>
          } */}
      {/* <CardCon/> */}
    </div>
  );
}

export default Router;
