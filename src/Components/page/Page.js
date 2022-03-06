import React from "react"
import styled from "styled-components"

function Page({title, content, image, bgColor, btnColor, goToSedan, goToSuv, goToLuxury}) {
  return (

    // <div>
    // {sedanValue ? null : 
    // (
    //     <div>
        <Holder  bgColor={bgColor}>
        <SideImage src={image} alt="car type" />
        <MainContent>
            <TitleTag>{title}</TitleTag>
            <ContentTag>{content} </ContentTag>
            <Button onClick={goToSedan}  btnColor={btnColor}>Go Back</Button>
        </MainContent>
        </Holder> 
    //     </div>
    // )}

    // </div>

    
    
  );
}

export default Page;

const Holder = styled.div`
    min-height: 100vh;
    background-color: ${({bgColor}) => bgColor};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`


const SideImage = styled.img`
    width: 500px;
    margin: 30px;
    border-radius:100%;
`

const MainContent = styled.div`
    width: 500px;
    margin: 30px;

`

const TitleTag = styled.div`
    font-weight: 700;
    font-size: 30px;
    text-transform: uppercase;
    margin-bottom: 30px;
    color: #fff;
`
const ContentTag = styled.div`
    font-size: 15px;
    font-weight: 400;
    color:#fff;
    margin-bottom: 50px;
    line-height: 25px;
`
const Button = styled.button`
    color: ${({btnColor}) => btnColor} ;
    outline: none;
    border: none;
    font-size: 16px;
    font-weight: 530;
    padding: 12px 30px; 
    border-radius: 100px;
    cursor:pointer;
`






