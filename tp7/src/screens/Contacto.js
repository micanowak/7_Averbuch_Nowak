const Contacto = () => {
    
    console.log("en Contacto");
    
    return (
        <form>
            <label>
                Name:
                <input type="text" name="Nombre" />
            </label>
            <label>
                Surname:
                <input type="text" name="Apellido" />
            </label>
            <label>
                Mail:
                <input type="text" name="Mail" />
            </label>
            <label>
                Your Question:
                <textarea />
            </label>
        </form>
    );
}

export default Contacto;