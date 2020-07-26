import React, { Component } from 'react'
import {connect} from 'react-redux';
import { deleteFromList } from '../../redux/actions';

class Destination extends Component {

    onDeleteListitem = (currentPlaceListItem) => {
        this.props.deleteFromList(currentPlaceListItem)
    }

    render() {
        return (
            <div className="places__col places__col-destination">
                    {this.props.subPlaces.map(currentSubPlace => 
                        <div>
                            {currentSubPlace.checkboxCounter > 0 && <h3>{this.props.places.find(item => item.id === currentSubPlace.placeId).name}</h3>}
                            {currentSubPlace.placesList.map(currentPlaceListItem =>(
                                <div>
                                {currentPlaceListItem.status && <div className="listitem-delete d-flex justify-content-between align-items-center">
                                        <span>{currentPlaceListItem.name}</span>
                                        <span onClick={() => this.onDeleteListitem(currentPlaceListItem)} className="listitem-delete-icon">&#10006;</span>
                                    </div>}
                                </div>
                            ))}
                        </div>
                        )
                    }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        places: state.listReducer.places,
        subPlaces: state.listReducer.subPlaces,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteFromList: item => dispatch(deleteFromList(item))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Destination);

