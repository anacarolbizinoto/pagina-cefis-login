import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = () => {

    const funcao =[
        'Aluno',
        'Professor'
    ]

    const[email, setEmail] = useState('')
    const[senha, setSenha] = useState('')
    const[cargo, setCargo] = useState('')


    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('O cadastro foi submetido =>', email, senha, cargo)
    } 

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
            <h2>LOGIN</h2>
            <CampoTexto 
                obrigatorio={true} 
                label="Usuário" 
                placeholder="Digite o seu e-mail"
                valor={email}
                aoAlterado={valor => setEmail(valor)}
            />
            <CampoTexto 
                obrigatorio={true} 
                label="Senha" 
                placeholder="Digite a sua senha"
                valor={senha}
                aoAlterado={valor => setSenha(valor)}
            />

            <ListaSuspensa 
                obrigatorio={true} 
                label="Aluno ou Professor" 
                itens={funcao} 
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
            />

            <Botao obrigatorio={true}>
                ENTRAR
            </Botao>

            </form>
        </section>
    )
}
export default Formulario