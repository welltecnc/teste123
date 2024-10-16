import styled from 'styled-components'

export const CadastrarUsuarioStyle = styled.section`

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');

*{
    margin: 0;
    padding: 0;
    font-family: 'Outfit', sans-serif;
}

.x{
    color:black;
    position: absolute;
    margin-top: -18px;
    margin-left: -57px;
    transition:all 0.7s;
}
.x:hover{
    color:red;
}
.usuario{
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
    justify-content:center;
    align-items:center;
    padding:15px;
    background:transparent;
}
.login{
    border-radius: 5px;
    margin-right:50px;
    background:transparent;
    background-color: #ffffff;
    padding-top: 35px;
    padding-bottom: 35px;
    padding-left: 75px;
    padding-right: 75px;
    box-shadow: #000000FF 0px 15px 20px;
    
}
.usuario form{
    margin-bottom: 100px;
    border-radius:10px;
    text-align: center;
    padding-top: 30px;
}
.titulo{
    font-size: 40px;
}
.usuario input{
    font-size: 1rem;
    outline:0;
    padding-left: 60px;
    padding-right: 60px;
    display: block;
    text-align: center;
    margin-top: 40px;
    border:0;
    border-bottom:2px solid #d9d9d9;
}
.usuario form button{
    margin-top: 50px;
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
.usuario form button:hover{
    background:#343a41;
    box-shadow:0px 7px 10px #0000005e;
}
@media (max-width:600px){

    .x{
    margin-top: 0px;
    margin-left: -13px;
}
    .login{
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 20px;
    padding-right: 20px;
    
}   
.container-login{
    justify-content: center;
    margin-left: 50px;
}
.usuario form{
    margin-bottom: 52px;
    text-align: center;
    padding-top: 0px;
}
.usuario input{
    padding-left:20px;
    padding-right: 20px; 
    
    margin-left: 20px;
}
}
`