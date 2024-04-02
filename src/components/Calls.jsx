import { useState } from 'react'
import '../css/Calls.css'

export default function Calls() {
    const [localChamada, setLocalChamada] = useState('');
    const [problemaChamada, setProblemaChamada] = useState('');
    const [dataChamada, setDataChamada] = useState('');
    const [autorChamada, setAutorChamada] = useState('');
    const [listaChamadas, setListaChamadas] = useState([]);

    const [chamarLista, setChamarLista] = useState(false);

    const adicionarChamada = () => {
        if ((localChamada !== '') && (problemaChamada !== '') && (autorChamada !== '') && (dataChamada !== '')){
            setListaChamadas([ ...listaChamadas,{ name: autorChamada, problem: problemaChamada, local: localChamada, date: dataChamada}]);

            setAutorChamada('');
            setDataChamada('');
            setLocalChamada('');
            setProblemaChamada('')
        }
        
    }

    const acessarLista = () => {
        if (chamarLista === true) {
            setChamarLista(false);
        } else {
            setChamarLista(true);
        }
    }

    return (
        <div className='Calls'>
            <div className='Calls__create'>
                <h2 className='Calls__title'>Criar tarefa</h2>

                <h3 className='Calls__topic'>Local da Chamada</h3>
                <input className='Calls__input' type="text" value={localChamada} onChange={(e)=>setLocalChamada(e.target.value)} placeholder='ex: 2° Andar, sala 15' required/>
                <h3 className='Calls__topic'>Problema Ocorrido</h3>
                <input className='Calls__input' type="text" value={problemaChamada} onChange={(e)=>setProblemaChamada(e.target.value)} placeholder='ex: Computador não liga' required/>
                <h3 className='Calls__topic'>Autor da chamada</h3>
                <input className='Calls__input' type="text" value={autorChamada} onChange={(e)=>setAutorChamada(e.target.value)} placeholder='ex: José Santana' required/>
                <h3 className='Calls__topic'>Data de Chamada</h3>
                <input className='Calls__input' type="date" value={dataChamada} onChange={(e)=>setDataChamada(e.target.value)} required/>

                <button className='Calls__button' onClick={adicionarChamada}>Adicionar nova chamada</button>
                <button className='Calls__button' onClick={acessarLista}>{chamarLista ? 'Fechar lista de chamadas' : 'Abrir lista de chamadas'}</button>
            </div>
                {chamarLista ? (
                <div className='Calls__list'>
                    {listaChamadas.map((chamada, index) => {
                        return (
                            <div className='Calls__listItem' key={index}>
                                <p className='Calls--text'>Problema: {chamada.problem}</p>
                                <p className='Calls--text'>Local: {chamada.local}</p>
                                <p className='Calls--text'>Autor: {chamada.name}</p>
                                <p className='Calls--text'>Data: {chamada.date}</p>
                            </div>
                        )
                    })}
                </div>
                ) : (
                    <div className='Calls__exception'>
                        <h2 className='Calls--errorTitle'>Abra a lista e adicione uma chamada</h2>
                    </div>        
                )}
        </div>
    )
}