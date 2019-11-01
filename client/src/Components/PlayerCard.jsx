import React, { Component } from 'react'
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

class PlayerCard extends Component {

    render() {
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle data-testid="namePrint">{this.props.name}</CardTitle>
                        <CardSubtitle data-testid="countryPrint" >{this.props.country}</CardSubtitle>
                        <CardText data-testid="searchesPrint">Number of searches: {this.props.searches}</CardText>
                    </CardBody>

                </Card>
            </div>
        )
    }
}

export default PlayerCard