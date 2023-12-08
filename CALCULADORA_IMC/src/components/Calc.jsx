
// css
import styles from "./index.module.css"

// imports
import { useState } from "react"


const Calc = () => {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [result, SetResult] = useState('');
    const [msg, setMsg] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault();

        let imc = (peso / (altura * altura)).toFixed(2)

        // filtrar os resultados
        if (imc <= 18.5) {
            setMsg("muito abaixo do peso")

        } else if (imc < 24.9) {
            setMsg(" Peso Normal")

        } else if (imc <= 29.9) {
            setMsg("Sobrepeso")

        } else if (imc <= 34.9) {
            setMsg("Obesidade classe 1")
        }

        else if (imc <= 39.9) {
            setMsg("Obesidade classe 2")
        }

        else if (imc > 40) {
            setMsg("Obesidade classe 3")

        } else {
        return
        }

        SetResult(imc)
        setPeso("");
        setAltura("")

    }

   
    return (
    <>
        <header>
            <div className={styles.container}>

                <h1> Calculadora de Imc </h1>

                <form onSubmit={handleSubmit} className={styles.form}>

                    Peso:
                    <input type="number" name="peso" value={peso} placeholder="digite seu peso" required onChange={(e) => setPeso(e.target.value)} />

                    Altura:
                    <input type="number" name="altura" value={altura} placeholder="digite sua altura em metros EX:1.89" required onChange={(e) => setAltura(e.target.value)} />

                    <button type="submit">Calcular</button>

                </form>

                {result && (
                    <div className={styles.result}>
                        <p>Seu imc é {result}</p>
                        <p>{msg}</p>
                        <img src="https://endocrinologiacuritiba.com.br/wp-content/uploads/2012/02/tabela_imc.jpg" alt="tabela imc" />
                    </div>
                )}
            </div>
        </header>
    </>
 )
}

export default Calc