import {FooterStyle} from '../css/FooterStyle'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <FooterStyle>
            <section className='footer1'>
                <div className='div'>
                    <img src="./src/assets/mahindrab.png" alt="techmahindra" className='img' />
                    <div className='email'>
                        <img src="./src/assets/icons8-nova-mensagem-24.png" alt="" />
                        <p>Contato@TechMahindra.com.br</p>
                    </div>

                    <div className='insta'>
                        <img src="./src/assets/icons8-instagram-24.png" alt="" />
                        <a href="https://www.instagram.com/techmahindra_official/">Tech Mahindra</a>
                    </div>
                </div>

                <img src="./src/assets/Line 10.png" alt="" className='line' />
                <img src="./src/assets/Line 11.png" alt="" className='line1' />


                <div className='div'>
                    <img src="./src/assets/Fe.png" alt="" className='img' />
                    <div className='email'>
                        <img src="./src/assets/icons8-nova-mensagem-24.png" alt="" />
                        <p>Contato@FormulaE.com.br</p>
                    </div>

                    <div className='insta'>
                        <img src="./src/assets/icons8-instagram-24.png" alt="" />
                        <a href="https://www.instagram.com/fiaformulae/">Formula E</a>
                    </div>
                </div>

                <img src="./src/assets/Line 10.png" alt="" className='line' />
                <img src="./src/assets/Line 11.png" alt="" className='line1' />

                <div className='Div1'>
                    <img src="./src/assets/logob.png" alt="" className='imlogo' />
                    <div className='email'>
                        <img src="./src/assets/icons8-nova-mensagem-24.png" alt="" />
                        <p>Contato@DataSphere.com.br</p>
                    </div>

                    <div className='insta'>
                        <img src="./src/assets/icons8-instagram-24.png" alt="" />
                        <a href="https://www.instagram.com/datasphere_solutions/">Data Sphere</a>
                    </div>
                </div>
            </section>

            <section className='footer2'>
                <nav>
                    <Link to="/" className="navLink">Home</Link>
                    <Link to="/Atividades" className="navLink">Atividades</Link>
                    <Link to='/login' className="navLink">Login</Link>
                    <Link to='/login' className="navLink">Agendamentos</Link>
                </nav>

                <h5>@2024 - Todos direitos reservados à DataSphere/TechMahindra/FormulaE</h5>
            </section>
        </FooterStyle>
    )
}
export default Footer