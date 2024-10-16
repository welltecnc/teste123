
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import  {AgendamentosStyle } from "../css/AgendamentosStyle";

const Agendamentos = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("senha");
        alert("Saindo....")
        navigate("/")
    }

    const navigate2 = useNavigate();

    const handleCadastro = () => {
        sessionStorage.removeItem("usuario");
        sessionStorage.removeItem("senha");
        alert("Sua palestra foi cadastrada!!")
        navigate("/")
    }

    return (
        <AgendamentosStyle>
            <section>
                <h1>Agendamentos</h1>
                <h2>Marque uma palestra escolar conosco</h2>
                <button className="btn" onClick={handleLogout}>
                    <MdLogout className="logout" />
                </button>
                <div className="linha"></div>
                <div className="Escolas">
                    <h2>Escolas Disponíveis</h2>
                    <div>
                        <button className="cards">
                            <h3>Escola Primária Verde Vale</h3>
                            <p>Cidade: Jardim do Sol <br />
                                Rua: Rua das Flores, 123</p>
                            <label><input type="checkbox" /></label>
                        </button>

                        <button className="cards">
                            <h3>Colégio Futuro Brilhante</h3>
                            <p>Cidade: Vila Esperança <br />
                                Rua: Avenida dos Sonhos, 4756</p>
                            <label><input type="checkbox" /></label>
                        </button>

                        <button className="cards">
                            <h3>Instituto Educacional Nova Geração</h3>
                            <p>Cidade: Cidade do Progresso <br />
                                Rua: Rua do Conhecimento, 789</p>
                            <label><input type="checkbox" /></label>
                        </button>
                    </div>
                </div>
                <div className="linha"></div>
                <h2 className="h22">Dias Disponíveis</h2>
                <div className='azul'></div>
                <div className="btn2">
                    <button className="Agendar" onClick={handleCadastro}>Agendar</button>
                </div>

                <main>
                    <article className="produto-grid">
                        <section className="produto-item span-row-2">
                            <div>
                                <h3>10 de outubro de 2024</h3>

                            </div>
                        </section>

                        <section className="produto-item ">

                            <div>
                                <h3>20 de outubro de 2024</h3>

                            </div>
                        </section>


                        <section className="produto-item">

                            <div>
                                <h3>1 de novembro de 2024 </h3>

                            </div>
                        </section>

                        <section className="produto-item span-row-2">

                            <div>
                                <h3>15 de novembro de 2024</h3>


                            </div>
                        </section>

                        <section className="produto-item  span-row-2 span-col-2">

                            <div>
                                <h3>14 de <noframes></noframes>ovembro de 2024</h3>

                            </div>
                        </section>


                        <section className="produto-item">

                            <div>
                                <h3>10 de novembro de 2024</h3>

                            </div>
                        </section>

                        <section className="produto-item">

                            <div>
                                <h3>1 de dezembro de 2024</h3>

                            </div>
                        </section>

                        <section className="produto-item">

                            <div>
                                <h3>25 de janeiro de 2024</h3>

                            </div>
                        </section>

                        <section className="produto-item">

                            <div>
                                <h3>1 de janeiro de 2025</h3>

                            </div>
                        </section>

                        <section className="produto-item ">

                            <div>
                                <h3>10 de janeiro de 2025</h3>

                            </div>
                        </section>

                        <section className="produto-item ">

                            <div>
                                <h3>15 de janeiro de 2025</h3>

                            </div>
                        </section>

                    </article>
                </main>

            </section>
        </AgendamentosStyle>
    )
}
export default Agendamentos