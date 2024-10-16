import { useParams, Link, useNavigate } from 'react-router-dom'
import { ImCancelCircle } from "react-icons/im";
import { useState, useEffect } from 'react';
import  {CadastrarUsuarioStyle } from '../css/CadastrarUsuarioStyle';


const CadastrarUsuario = () => {

    let { id } = useParams();
    const [usuarios, setUsuarios] = useState({
        id,
        usuario: '',
        senha: '',
    });

    const navigate = useNavigate();

    let metodo = "post";
    if (id) {
        metodo = "put";
    }
    const handleChange = (e) => {
        setUsuarios({ ...usuarios, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        fetch(`http://localhost:5000/usuarios/${id ? id : ''}`, {
            method: metodo,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuarios),
        }).then(() => {
            navigate("/login")
        });
    }

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5000/usuarios/${id}`)
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setUsuarios(data);
                });
        }
    }, [id])


    return (
        <CadastrarUsuarioStyle>
            <section className="usuario">
                <div className="container-login">
                    <div className="login">
                            <Link className='x' to="/login">
                            <ImCancelCircle />
                             </Link>
                        <form onSubmit={handleSubmit}>
                            <span className="titulo">Cadastre-se</span>
                            <input
                                type="text"
                                name="usuario"
                                placeholder="Digite seu Usuário"
                                value={usuarios.usuario}
                                onChange={handleChange}
                            />
                            
                            <input
                                type="password"
                                name="senha"
                                placeholder="Digite sua senha"
                                value={usuarios.senha}
                                onChange={handleChange}
                            />

                            <button type="submit">Cadastrar</button>

                        </form>
                    </div>
                </div>
            </section>
        </CadastrarUsuarioStyle>

    )
}
export default CadastrarUsuario

