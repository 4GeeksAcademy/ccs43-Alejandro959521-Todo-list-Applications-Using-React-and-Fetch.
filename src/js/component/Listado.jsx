import React from "react";



function Listado({ array, filtradoLista }) {

    return (
        <div className=" " >

            <ul className="list-group">

                {array.length > 0 ? (
                    array.map((item, index) => {
                        //console.log("esto es item", item)
                        return (
                            <div className="text-white bg-info rounded-pill" key={index}>
                                <li className="listado d-flex justify-content-between list-group-item mx-3">{item.label}
                                    <button
                                        className=" bg-info rounded-circle"
                                        onClick={() => {

                                            let listaFiltrada = array.filter((i, newindex) => index != newindex);
                                            filtradoLista(listaFiltrada)
                                            // console.log("lista filtrada", listaFiltrada)
                                        }

                                        }> ❌ </button></li>

                            </div>

                        )
                    }))
                    : (<li className="text-white bg-dark list-group-item text-center">No hay tareas! añadir tareas</li>)
                }


            </ul>

        </div>




    )


}

export default Listado;