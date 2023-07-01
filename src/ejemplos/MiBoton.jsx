



const MiBoton = ({children, color, click}) => {

    const style = {
        background: color,
        color: 'white',
        fontWeight: '700',
        textAlign: 'center',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px'
    }

    return (
        <button style={style} onClick={click}>
            {children}
        </button>
    )
}

export default MiBoton