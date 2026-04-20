function Botao({ texto, clique }) {
   return (
    <button onClick={clique}>
      {texto}
    </button>
  );
}

export default Botao;