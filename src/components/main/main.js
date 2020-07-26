import React, { Component } from 'react'
import Source from '../source'
import Destination from '../destination'

import './main.css';

export default class Main extends Component {
    render() {
        return (
            <div className="places-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Source />
                        </div>
                        <div className="col-6">
                            <Destination />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
