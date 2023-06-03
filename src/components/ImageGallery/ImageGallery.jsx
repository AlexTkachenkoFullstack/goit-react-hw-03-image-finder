import React, {Component} from "react"
import api from "services/images-api"
export class ImageGallery extends Component{
    state = {
    data:[]
    }

    componentDidUpdate(prevProps, prevState) {
        const thisData = prevProps.searchName;
        const nextData = this.props.searchName;
        if (thisData !== nextData) {
         api.fetchImages(nextData)
            .then(response => response.json())
             .then(data => {
                 console.log(data)
                 this.setState({
                     data: data.hits
                 })
             })
         }
     }
    
    render(){
        return (
            <ul className="gallery">
            </ul>
    )
    }
    
}


