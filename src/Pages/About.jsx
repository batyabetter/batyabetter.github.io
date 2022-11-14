import React, { Component } from "react";
import { Container } from "react-bootstrap";


export default class About extends Component {

    constructor(props){
        super(props);
        this.state = {
            error: null , 
            isLoaded: false,
            items: []
        };
    }

    componentDidMount(){
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.drinks
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render(){
        
        const {error, isLoaded , items} = this.state;
        if(error) {
            return <p> Error {error.message} </p>
        } else if(!isLoaded){
            return <p>Loading...</p>
        } else {
            return(
                <Container style= {{width:'960px'}}>
                <ul className="ce">
                    {items.map(item =>(
                        <li className="p-2 bg-light border" key= {item.name}>
                            {item.strDrink}
                            <img className="pl-2" alt="car" width="50" height="50" src={item.strDrinkThumb}/>
                         </li>   
                         
                    ))}
                </ul>
                        
                </Container>
            )
        }
    }
   

}