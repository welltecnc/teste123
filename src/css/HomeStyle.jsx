import styled from "styled-components";

export const HomeStyle = styled.section`

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');

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
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    background-image: url('./src/assets/imagem.png');
    background-size: cover;
    margin-top: -40px;
    
}
form{
    margin-top: 30px;
    border-radius:5px;
    background: #fff;
    max-width: 500px;
    height: 418px;
    padding: 40px;
    text-align: center;
    box-shadow: #000000FF 0px 15px 20px;
}

.logos{
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-left: 45px;
    margin-top:-14px;
}

.fe{
    width: 120px;
    height: 90px;
    margin-top:10px;
}
.dot{
    width: 15px;
    height: 15px;
    margin-top: 50px;
    margin-left: 20px;
}
.mahindra{
    width: 200px;
    margin-bottom: 10px;
}
form p{
    margin-top:15px;
    text-align: center;
    font-size: 21px;
}


.container2{
    height: 110vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    background-image: url('./src/assets/Frame 2.png');
    background-size: cover;
    
}

.form2{
    border-radius:5px;
    background: #fff;
    max-width: 600px;
    height: 500px;
    padding: 40px;
    text-align: center;
    box-shadow: #000000FF 0px 15px 20px;
}
.form2 h2{
    font-size: 40px;
    margin-top: -10px;
}
.form2 img{
    margin-top: 20px;
    width: 250px;
    margin-bottom: 19px;
}
.form2 p{
  font-size: 20px;
}
.form2 p a{
    color: #000000;
    font-weight: 600;
    transition: all, 0.6s;
}

.form2 p a:hover{
    color: #3730FFFF;
}
.logos2{
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-left: 45px;
    margin-top:-14px;
}

.fe{
    width: 120px;
    height: 90px;
    margin-top:9px;
}
@media (max-width:600px){
    form{
    max-width: 400px;
    height: 450px;
    }
    .form2{
    max-width: 400px;
    height: 620px;

}
}

`

