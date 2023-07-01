import { Usuario } from "./Usuario"

export const Tutores = () => {

    return (
        <div>
            <h3>Tutores</h3>
            <ul>
                <Usuario nombre="Joao Moraes" rol="Estudiante" edad={28}/>
                <Usuario nombre="Matias Cantora" edad={16} rol="Tutor" />
                <Usuario nombre="Fede Blautzik" rol="Tutor Adjunto" edad={22}/>
            </ul>
        </div>
    )  
}