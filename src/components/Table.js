import React from 'react';
import Tablerow from './TableRow';

const Table = () => {

    let data = [
        {
            title: "Billy Elliot",
            length: 123,
            rating: 5,
            genres: ["Drama", "Comedia"],
            awards: 2
        },
        {
            title: "Alicia en el pais de las maravillas",
            length: 142,
            rating: 4.8,
            genres: ["Drama", "Comedia", "Accion"],
            awards: 3
        }
    ]


    return (
        <div className='container'>
            <div className='card shadow mb-4'>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Titulo</th>
                            <th scope="col">Duracion</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Genero</th>
                            <th scope="col">Premios</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => <Tablerow key={index + Date.now()} {...item} />)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Table;
