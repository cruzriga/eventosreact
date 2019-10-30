import React from 'react';
const Event =  ({event})=>{
    let {text} = event.description;
    text = (text && text.length > 250 ) ? text.substr(0,250) + " ..." : text;
    return (
        <div className="">
            <div className="uk-card uk-card-default">
                <div className="uk-card-media-top">
                    {event.logo ? <img src={event.logo.url} alt=""/> : null  }
                </div>
                <div className="uk-card-body">
                    <h3 className="uk-card-title">{event.name.text}</h3>
                    <p>{text}</p>
                </div>
                <div className="uk-card-footer">
                    <a href={event.url} className="uk-button uk-button-secondary" target="_blank" rel="noopener noreferrer">
                        Más información
                    </a>
                </div>
            </div>
        </div>
    );
};
export default  Event;