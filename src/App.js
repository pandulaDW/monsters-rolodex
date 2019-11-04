import React, { Component } from "react";
import { CardList } from "./components/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super(); // gives us access to the state
    this.state = {
      monsters: [],
      searchField: ""
    };
    // if we are going to use normal functions as methods, need to do this 
    // this.handleChange = this.handleChange.bind(this);
    // can do this here or in the method calling place
  }

  // life cycle method
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // arrow functions don't get it own this keyword, lexical this 
  handleChange = event => this.setState({ searchField: event.target.value, title: event.target });

  // render method is given by Component
  // each time the state changes, this render method gets called
  render() {
    const { monsters, searchField } = this.state; // create copies of state attributes
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
