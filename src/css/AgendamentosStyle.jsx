
import styled from "styled-components";

export const AgendamentosStyle = styled.section`

    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');

    *{
        font-family: 'Outfit', sans-serif;
    }
    section{
        margin-top: -40px;
        background-color: #06001a ;
    }
    
    h1{
        padding-top: 60px;
        font-size: 60px;
        text-align: center;
        color:white;
    }    
    h2{
        text-align: center;
        font-size: 30px;
        color:white;
    }
    .btn{
        color: #ffffff78;
        cursor: pointer;
        border:none;
        background-color:  #06001a11 ;
        font-size:40px;
        position:absolute;
        margin-top: -100px;
        margin-left: 13px;
        transition:all 0.7s;
    }
    .btn:hover{
        color: #ffffff;
    }
    .linha{
        background-color: #ffffff78;
        width: 90%;
        height: 4px;
        margin-top: 20px;
        border-radius:100px;
        margin-left: 5%;
    }
    
    .Escolas h2{
        margin-top: 20px;
        text-align: center;
        font-size: 35px;
        margin-bottom: 40px;
    }
    .Escolas{
        justify-content: center;
        text-align: center;
        display:block;
        margin-bottom: 60px;
    }
    .cards{
        margin-left: 1px;
        border: none;
        justify-content: center;
        padding: 10px;
        text-align: center;
        background-color: white;
        margin-bottom: 30px;
        width: 50%;
        border-radius: 10px;
        box-shadow: #00000061 0px 5px 10px;
        transition:all 0.2s;
    }
    .cards:hover{
        padding: 15px;
    }
    .cards h3{
        padding-bottom: 10px;
        font-size: 20px;
    }
    .cards p {
        font-size: 17px;
    }
    label input{
        cursor: pointer;
        position: absolute;
        margin-left: -20%;
        margin-top: -40px;
        transform: scale(1.5);
    }
    .azul{
        background-color: #06001a;
        width: 100%;
        height: 750px;
    }
   
.h22{
    margin-top: 30px;
    font-size: 40px;
    margin-bottom: -60px;
}
header{
    text-align: center;
    padding: 2rem;
    background: var(--color1);
    border-bottom:  1px solid var(--color6);
}

.produto-grid{
    margin-left: 10%;
    margin-top: -760px;
    position: absolute;
    display: grid;
    grid-template-columns: repeat(4, minmax(auto,1fr));
    gap:1rem;
    padding: 2rem;
}
.produto-item{
    justify-content: center;
    text-align: center;
    color:var(--color4);
    padding: 2rem 1rem;
    border-radius: 5px;

}
.produto-item div{
    
    cursor: pointer;
    background-color: #FFFFFFFF;
    padding-top: 20px;
    padding-bottom: 60px;
    padding-left: 10Px;
    padding-right: 10px;
    border-radius:5px;
    width: 100%;
    justify-content: space-evenly;
    box-shadow: #000000FF 0px 5px 10px;
    transition: all 0.5s;
}

.produto-item div:hover{
    padding-top: 30px;
    padding-bottom: 70px;
    transition: all 0.5s;
}

.produto-item p{
    font-size: 1.3rem;
    font-weight: 700;
    color:black;
}
.produto-item h3{
    color:black;
}
.span-row-2{
    grid-row: span 2;
}

.span-col-2{
    grid-column: span 2;
}
.btn2{
    text-align: center;
}
.Agendar{
    text-align: center;
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    font-size: 25px;
    border: none;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 70px;
    padding-right: 70px;
    border-radius: 5px;
    margin-bottom: 60px;
    cursor: pointer;
    background-color: #2bfb2b;
    box-shadow: #000000FC 0px 5px 10px;
    transition: all 0.5s;
}
.Agendar:hover{
    padding-top: 25px;
    padding-bottom: 25px;
    margin-bottom: 57px;
    background-color: #00FF00FF;
}

@media(width <= 500px){
    .Agendar{
        margin-left: 100px;
    }
    .azul{
        height: 1570px;
    }
    .produto-grid{
    margin-top: -1580px;
    }
    .produto-grid{
        grid-template-columns: 1fr;
        margin-left: 10px;
    }
    .span-row-2{
        grid-column: span 2;
    }
}
`
