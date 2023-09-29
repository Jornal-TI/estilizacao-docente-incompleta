import React from 'react'
import './modal-dados.css'

const ModalDados = () => {

    const nomeUsuario = "Samuel Costa"
    const emailUsuario = "samuelcosta@gmail.com"
    const cpfUsuario = "527.721.410-04"
    const enderecoUsuario = "Rua Tchurubengos"
    const telefoneUsuario = "(11)94358-5819"


    return (

        <div>
            <div className='dados-form'>


                <div className='parte-alta'>

                    <label>Nome:</label>
                    <input type="text" />
                    <br /><br />
                    
                    <label>Data de Nascimento:</label>
                    <input type="date"/>
                    <br /><br />

                    <label>Turma:</label>
                    <input type="number"/>

                    <br /><br />
                    <label>CPF:</label>
                    <input type="number"/>
                    <br /><br />

                    <label>Telefone:</label>
                    <input type="number"  />  
                    
                    <br /><br />
                    <label>Email:</label>
                    <input type="text"/>

                </div>

                <div className='parte-baixa'>

                    <label>Endereço:</label>
                    <input type="text"/>
                    <br /><br />


                    <label>Número:</label>
                    <input type="text"/>
                    <br /><br />

                    <label>Bairro:</label>
                    <input type="text"/>
                    <br /><br />

                    <label>Cidade:</label>
                    <input type="text"/>
                    <br /><br />

                    <label>Estado:</label>
                    <input type="text"/>
                    <br /><br />

                    <label>CEP:</label>
                    <input type="text"/>
                   
                   
                    
                </div>

            </div>


        </div>

    )

}
export default ModalDados;