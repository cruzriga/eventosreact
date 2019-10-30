import React from 'react';
import Event from "./Event";
import {EventosConsumer} from "../contex/eventosContex";

const ListEvents = ()=>{
    return(
        <div className="uk-child-width-1-3@m" uk-grid="true">
            <EventosConsumer>
                {(value)=>{
                    console.log(value.events);
                    return(
                       value.events.map( event => {
                                return(<Event
                                    key = {event.id}
                                    event = {event}
                                />);
                           }
                       )
                    )}
                }
            </EventosConsumer>
        </div>
    );
}

export default ListEvents;