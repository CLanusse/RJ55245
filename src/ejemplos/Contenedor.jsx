

const Contenedor = ( {children} ) => {

  const estilos = {
    background: "grey",
    color: "white",
    padding: "20px",
    margin: "0 auto",
    maxWidth: "1100px",
  };

  return (
    <div style={estilos}>
      { children }
    </div>
  );
};

export default Contenedor;
