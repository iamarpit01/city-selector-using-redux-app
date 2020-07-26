import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addToList, deleteFromList} from '../../redux/actions';

import Checkbox from '../../shared/checbox/checkbox';

class Source extends Component {
    handleInputChange = (evt, finalPlace) => {
        if(evt.target.checked){
            this.props.addToList(finalPlace)
        }
        else{
            this.props.deleteFromList(finalPlace)
        }
    }

    render() {
        return (
            <div className="places__col">
                { this.props.places.map(place => (
                    <div key={place.id}>
                        <h3>{place.name}</h3>
                        {this.props.subPlaces.map(subPlace => 
                             subPlace.placeId === place.id && <div>
                                {subPlace.placesList.map(finalPlace => (
                                    <div className="listitem">
                                        <Checkbox handleChange={this.handleInputChange} finalPlace={finalPlace} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        places: state.listReducer.places,
        subPlaces: state.listReducer.subPlaces
    })

const mapDispatchToProps = dispatch => ({
        addToList: currentPlace => dispatch(addToList(currentPlace)),
        deleteFromList: currentPlace => dispatch(deleteFromList(currentPlace)),
    })

export default connect(mapStateToProps, mapDispatchToProps)(Source)
