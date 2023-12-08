
// css
import styles from "./index.module.css"

// imports
import { useState } from "react"


const Calc = () => {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [result, SetResult] = useState('');


    const handleSubmit = (e) => {

        e.preventDefault();
        setPeso("");
        setAltura("")
        let imc = (peso / (altura * altura)).toFixed(2)

        return SetResult(imc)

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
                        <input type="number" name="altura" value={altura} placeholder="digite sua altura EX:1,89" required onChange={(e) => setAltura(e.target.value)} />

                        <button type="submit">Calcular</button>

                    </form>

                    {result && (
                        <div className={styles.result}>
                            <p>Seu imc é {result}</p>

                            <img src="https://endocrinologiacuritiba.com.br/wp-content/uploads/2012/02/tabela_imc.jpg" alt="tabela imc" />
                        </div>
                    )}
                </div>
            </header>
        </>
    )
}

export default Calc