import styled from "styled-components"


function Card({title, content, icon, bgColor, btnColor, goToSedan, goToSuv, goToLuxury}) {
  return (
    <Container bgColor={bgColor}>
        <Wrapper>
            <Icon src={icon} alt="car icon"/>
            <TitleTag>{title}</TitleTag>
            <ContentTag>{content} </ContentTag>
            <Button onClick={goToSedan}  btnColor={btnColor}>Learn More</Button>
        </Wrapper>
    </Container>
  );
}

export default Card;

const Container = styled.div`
    height: 450px;
    background-color: ${({bgColor}) => bgColor};
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    margin:-5px;
`

const Wrapper = styled.div`
    width: 75%;
    height:80%;
`

const Icon = styled.img`
    width: 60px;
    margin-bottom: 15px;
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
    width: 200px;
    margin-bottom: 50px;
    line-height: 25px;
`
const Button = styled.button`
    color: ${({btnColor}) => btnColor} ;
    outline: none;
    border: none;
    font-size: 16px;
    font-weight: 520;
    padding: 12px 30px; 
    border-radius: 100px;
    cursor:pointer;
`





