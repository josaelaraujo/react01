import { useState } from "react";

function Condicional(){
    const [email, serEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.prevenrDefault()
        setUserEmail(email)
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail</h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail..."/>
                <button type="submit" onClick={enviarEmail}>
                    Enviar-email
                </button>
            </form>
        </div>
    )
}

export default Condicional;