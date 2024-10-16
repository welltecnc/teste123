
import {HomeStyle}  from "../css/HomeStyle"


const Home = () => {
    return (

        <HomeStyle>
            <section class="form-container">
                <div class="container">
                    <form>
                        <div className="logos">
                            <img className="fe" src="./src/assets/Formula_E1.png" alt="Formula1" />
                            <img className="dot" src="./src/assets/dot.png" alt="" />
                            <img className="mahindra" src="./src/assets/mahindra.png" alt="" />
                        </div>
                        <p>A Tech Mahindra em parceria com a Formula E colaboraram para aprimorar o desenvolvimento de soluções tecnológicas e digitais nas experiências da Formula E no Brasil. As mesmas colaboraram com a Data Sphere Solutions para expandir a popularidade da categoria no país.</p>
                    </form>
                </div>
            </section>

            <section class="form-container">
                <div class="container2">
                    <form className="form2">
                        <h2>O que é a Data Sphere?</h2>
                        <img src="./src/assets/data.png" alt="" />
                        <p>Data Sphere é uma empresa fictícia criada para simular uma equipe do mercado representando ao nosso grupo para as entregas dos trabalhos. Nossa solução para este problema foi a criação de atividades escolares. Para mais informações, veja a página de <a href="/atividades">Atividades</a>. </p>
                    </form>
                </div>

            </section>
        </HomeStyle>

    )
}
export default Home