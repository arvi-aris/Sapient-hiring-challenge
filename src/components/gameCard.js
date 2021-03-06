
import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';

const styles = {
    width: 350,
    height: 350,
    margin: '25px',
    display: 'block',
    float:'left',
    'background-color':'rgb(179, 188, 189)',
    'box-shadow' : '5px 5px 5px #888888',
};

class GameCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
              <Card style = {styles} >
                <CardHeader
                title={this.props.gameInfo.title}
                subtitle={this.props.gameInfo.genre}
                />
                <CardText>
                    <List>
                    <ListItem  primaryText='Platform ' inputProps="platform" secondaryText={this.props.gameInfo.platform} />
                    <ListItem  primaryText='Score ' inputProps="score" secondaryText={ this.props.gameInfo.score}  />
                    <ListItem primaryText='Editor"s choice ' inputProps="editors_choice" secondaryText={this.props.gameInfo.editors_choice === "Y" ? "Yes" : "No"} onClick={this.filterByCategory} />
                    </List>
                </CardText>
            </Card>
        );
    }
}

export default GameCard;