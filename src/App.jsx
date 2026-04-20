import { useState } from 'react'
import Botao from './components/Botao'

function App() {
  // ESTADOS: MEMÓRIA APP
  const [lista, setLista] = useState([
    { id: 1, texto: "Estudar React", concluida: false }
  ]);
  const [input, setInput] = useState("");

  // FUNÇÃO: ADICIONAR
  const adicionarTarefa = () => {
    if (input.trim() === "") return;

    const novaTarefa = {
      id: Date.now(),
      texto: input,
      concluida: false
    };

    setLista([...lista, novaTarefa]);
    setInput(""); 
  };

  // FUNÇÃO: REMOVER
  const removerTarefa = (idParaRemover) => {
    const listaFiltrada = lista.filter(item => item.id !== idParaRemover);
    setLista(listaFiltrada);
  };

  // FUNÇÃO: ALTERNAR STATUS
  const alternarConcluida = (idParaMudar) => {
    const listaAtualizada = lista.map(item => {
      if (item.id === idParaMudar) {
        return { ...item, concluida: !item.concluida };
      }
      return item;
    });
    setLista(listaAtualizada);
  };

  // FRONT
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Minha Lista de Tarefas</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="O que precisa ser feito?"
        />
        <Botao texto="Adicionar" clique={adicionarTarefa} />
      </div>

      <ul>
        {lista.map((tarefa) => (
          <li key={tarefa.id} style={{ marginBottom: '10px', listStyle: 'none' }}>
            <input 
              type="checkbox" 
              checked={tarefa.concluida} 
              onChange={() => alternarConcluida(tarefa.id)} 
            />
            <span style={{ 
              textDecoration: tarefa.concluida ? 'line-through' : 'none',
              margin: '0 10px' 
            }}>
              {tarefa.texto}
            </span>
            <Botao texto="Remover" clique={() => removerTarefa(tarefa.id)} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App