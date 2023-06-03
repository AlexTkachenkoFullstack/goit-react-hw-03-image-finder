import React, {Component} from "react"
import api from "services/images-api"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
// import { Button } from "components/Button/Button";
export class ImageGallery extends Component{
    state = {
        data: [],
        // page: 1,
    }

    componentDidUpdate(prevProps, prevState) {
        const thisData = prevProps.searchName;
        const nextData = this.props.searchName;
        if (thisData !== nextData ) {
            try {
                api.fetchImages(nextData)
                    .then(response => response.json())
                    .then(data =>
             {
                 this.setState({data: data.hits})
             })
            } catch (error) {
                console.log(error.message)
            }
         }
    }
    

    // handleClick = () => {
    //     this.setState((prevState)=>({page: prevState.page+1}))
    // }
    
    render() {
        const {data}=this.state
        console.log(this.state.data)
        return (
            <>
                <ul className="gallery">
                {data.map(item =>
                    <ImageGalleryItem key={item.id}
                        image={item.webformatURL}
                        alt={ item.tags} />)}
                </ul>
                {/* <Button onClick={this.handleClick}/> */}
            </>
            
    )
    }
    
}


