import {useEffect, useState } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() =>{
        console.log("o componente iniciou");
        
        return () => {
            console.log("o componente finalizou")
        }
    }, []);

    useEffect(() => {
        console.log("materia A mudou para: " + materiaA)
    }, [materiaA, materiaB, materiaC]);

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Você foi aprovado</p>
            )
        } else {
            return (
                <p>Você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>   
    )
}

export default Formulario