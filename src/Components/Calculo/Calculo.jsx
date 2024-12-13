import { useState } from "react";
import styles from './Calculo.module.css';

const Calculo = () => {
    let [altura, setAltura] = useState(0);
    let [peso, setPeso] = useState(0);
    let [imc, setImc] = useState(0);
    

    const fazCalculo = (evento) => {
        const alturaNum = parseFloat(altura);
        const pesoNum = parseFloat(peso);

        let resultado = pesoNum / (alturaNum * alturaNum);
        setImc(resultado)
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Calcule seu IMC</h1>
            <form className={styles.form}>
                <label className={styles.label} htmlFor="altura">Altura</label>
                <input className={styles.area} onChange={evento => setAltura(evento.target.value)} id="altura" type="number" placeholder="Digite sua altura" />
                <label className={styles.label} htmlFor="peso">Peso</label>
                <input className={styles.area} onChange={evento => setPeso(evento.target.value)} type="number" id="peso" placeholder="Digite seu peso" />
                <button className={styles.button} onClick={fazCalculo} type="button">Calcular</button>
            </form>
            <table className={styles.table}>
                <thead>
                    <th>Altura</th>
                    <th>Peso</th>
                    <th>IMC</th>
                </thead>
                <tbody>
                    <td>{altura}</td>
                    <td>{peso}</td>
                    <td>{imc}</td>  
                </tbody>
            </table>
        </div>
        
    )
}

export default Calculo;