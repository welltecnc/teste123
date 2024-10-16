import styled from "styled-components";

export const NavStyle = styled.header`

.logo{
    width: 100px;
    position: absolute;
    padding-top: 15px;
    margin-left:15px;
}
.nav{
    position: relative;
    z-index: 3;
}
.nav .container{
    display:flex;
    padding: 10px ;
    justify-content:space-between;
    align-items:center;
    width:100%;
    justify-content:center;
}
.nav ul .navLink{
    font-size:0.7rem;
    font-weight:700;
    text-transform:uppercase;
    padding-right: 20px;
    padding-left: 20px;
    color:#ffff;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration-line: underline; 
    text-decoration-style: solid;  
    text-decoration-color: #ffffff28;  
    text-decoration-thickness: 2px; 
    transition: 0.7s;
}

.nav ul .navLink:hover{
    text-decoration-color: #ffff;  
    transition: 0.7s;
}
.logoc{
    text-align:end;
    margin-right: 257px;
    margin-top: -23px;
}
.logo2{
    width: 240px;  
    position: absolute;
    opacity:80%;  
}
@media (max-width:750px){
    .logo2{
        display:none;
    }

}
@media (max-width:600px){
    .logo2{
    display :none ;
    }
    .container{
        margin-left: 50px;
    }
    .logo{
        margin-top: -7px;
    }

}
`