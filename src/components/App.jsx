import React, { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import {ImageGallery} from './ImageGallery/ImageGallery'
export class App extends Component {

  state = {
    searchName: ''
   
  }

  handleSubmit = (searchName) => {
    this.setState({ searchName })
  }

  render() {
    return(
    <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery searchName={this.state.searchName} />
    </div>
  );
  }
};
