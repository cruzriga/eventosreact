import React, {Component} from 'react';
import {CategoriasConsumer} from "../contex/categoriasContex";
import {EventosConsumer} from "../contex/eventosContex";

class Formulario extends Component {
    state ={
        nombre  : '',
        categoria : ''
    }

    // si el usuario tipea el evento o categoria
    obtenerDatosEvento = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <EventosConsumer>
                {(value)=>{
                    return (
                            <form onSubmit={e=>{
                                e.preventDefault();
                                value.obtenerEventos(this.state) }}
                            >
                                <fieldset className="uk-fieldset uk-margin">
                                    <legend className="uk-legend uk-text-center">
                                        Busca tu evento por nombre o categoria
                                    </legend>
                                </fieldset>
                                <div className="uk-column-1-3@m uk-margin">
                                    <div className="uk-margin" uk-margin="true">
                                        <input type="text"
                                               name="nombre"
                                               className="uk-input"
                                               placeholder="Nombre del evento o ciudad"
                                               onChange={this.obtenerDatosEvento}/>
                                    </div>
                                    <div className="uk-margin" uk-margin = "true">
                                        <select name="categoria" className="uk-select" onChange={this.obtenerDatosEvento}>
                                            <option value="">Seleccione categoría</option>
                                            <CategoriasConsumer>
                                                {(value)=>{
                                                    return ( value.categorias.map(categoria =>(
                                                            <option key={categoria.id} value={categoria.id} data-uk-form-select>
                                                                {categoria.name_localized}
                                                            </option>
                                                        ))
                                                    )
                                                }}
                                            </CategoriasConsumer>
                                        </select>
                                    </div>
                                    <div>
                                        <input type="submit"
                                               className="uk-button uk-button-danger"
                                               value="Busca Eventos"/>
                                    </div>
                                </div>
                            </form>
                    )
                }}
            </EventosConsumer>
        );
    }
}

export default Formulario;