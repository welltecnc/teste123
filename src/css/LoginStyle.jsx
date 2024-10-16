import styled from 'styled-components'

export const LoginStyle = styled.section`

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
    margin: 0;
    padding: 0;
    font-family: 'Outfit', sans-serif;
}
.container{
    width:100%;
    margin: 0 auto;
    background-image: url('./src/assets/carro.png');
    background-size: cover;
    margin-top: -40px;
}

.container-login{
    min-height: 100vh;
    display:flex;
    flex-wrap:wrap;
    margin-left:100px;
    align-items:center;
    padding:15px;
    background:transparent;
}
.login{
    border-radius: 5px;
    margin-right:50px;
    background:transparent;
    background-color: #ffffff;
    padding-top: 70px;
    padding-bottom: 70px;
    padding-left: 110px;
    padding-right: 110px;
    box-shadow: #000000FF 0px 15px 20px;
}
.login-form{
    width:100%
}

.titulo-login{
    display:block;
    font-size:40px;
    line-height:1.3;
    text-align:center;
}
.w-input{
    width:100%;
    position:relative;
    margin-top:30px;
    margin-bottom:30px;
    border-bottom:2px solid #d9d9d9;
    
}
.w-input:hover{
    border-bottom:2px solid blue;
}

.input-form{
    font-size:1rem;
    line-height:1.2;
    display:block;
    width:100%;
    height:30px;
    padding:0 5px;
    border:none;
    outline:0;
    text-align: center;
    
}
.login-btn{
    width:100%;
    display:flex;
    justify-content:center;
}
.login-form-btn{
    font-size:1rem;
    width:280px;
    height:50px;
    background:#22262b;
    color:#fff;
    text-transform:uppercase;
    border-radius:10px;
    transition: all 0.4s;
    cursor:pointer;
}
.login-form-btn:hover{
    background:#343a41;
    box-shadow:0px 7px 10px #0000005e;
}
.utilidades{
    margin-top:20px;
    margin-bottom:10px;
    text-align:center;
}
.text1{
    color:#555;
}
.text2{
    font-weight: 600;
    color:#555;
    transition:0.7s;
}

.text2:hover{
    color:#0003ad;
}
@media (max-width:600px){
    .login{
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: center;
}   
    .container-login{
        justify-content: center;
        margin-left:50px;
    }
}
`