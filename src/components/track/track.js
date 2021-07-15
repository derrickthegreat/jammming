import React from 'react';
import './track.css';

export class Track extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isRemoval: false}
    }
    renderAction() {
        if(this.state.isRemoval) {
            return <button className="Track-action">+</button>
        } else {
            return <button className="Track-action">-</button>
        }
    }
    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{/*<!-- track name will go here -->*/}</h3>
                    <p>{/*<!-- track artist will go here--> | <!-- track album will go here -->*/}</p>
                </div>
                    {this.renderAction}
            </div>
        )
    }
}