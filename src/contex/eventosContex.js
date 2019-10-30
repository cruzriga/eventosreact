import React, {Component} from 'react';
import axios from 'axios';
const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;
class EventosProvider extends Component{
    token  = 'XCGSCHJW2UA4OYXMVFCD';
    //token  = 'VSWJZ2GTDBWVWAHKZOUV';
    sort_by = 'date';
    state = {
        events: []
    };
    obtnerEventos = async (query) =>{
        let url = `https://www.eventbriteapi.com/v3/events/search/?token=${this.token}&q=${query.nombre}&categories=${query.categoria}&locale=es_ES&sort_by=${this.sort_by}`;
        const events = await axios(url);
        this.setState({events : events.data.events})
    };
    render() {
        return(
            <EventosContext.Provider
                value = {{
                    events : this.state.events,
                    obtenerEventos : this.obtnerEventos
                }}>
                {this.props.children}
            </EventosContext.Provider>
        );

    }
}

export default EventosProvider;