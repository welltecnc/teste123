import styled from "styled-components";

export const AtividadesStyle = styled.section`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Outfit', sans-serif;
    
}

.home{
    width: 100%; 
    
}
.container{
    z-index: 2;
    position: absolute;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    margin-top: -40px;
}
form{
    margin-top:80px;
    border-radius:5px;
    background: #fff;
    max-width: 500px;
    height: 380px;
    padding: 40px;
    text-align: center;
    box-shadow: #000000E4 0px 15px 20px;
}
form img{
    width: 35px;
    margin-top: -20px;
    margin-bottom: 15px;
}
.slide1{
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: -10px;
}

.slide2{

}

@media (max-width:600px){
    form{
    max-width: 400px;
    height: 450px;  
}
}
`;
