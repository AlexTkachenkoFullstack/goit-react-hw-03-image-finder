import React, {Component} from "react"
import api from "services/images-api"
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Button } from "components/Button/Button";
import { Loader } from "components/Loader/Loader";
import { Modal } from "components/Modal/Modal";
import css from './ImageGallery.module.css'

export class ImageGallery extends Component{
    state = {
        data: [],
        page: 1,
        isLoader: false,
        showButton: false,
        showModal: false,
        modalImg:''
    }

    componentDidUpdate(prevProps, prevState) {
        const thisData = prevProps.searchName;
        const nextData = this.props.searchName;
        if (thisData !== nextData) {
            this.setState({page:1, isLoader: true})
            setTimeout(() => {
              api.fetchImages(nextData, this.state.page)
                    .then(response => {
                       return response.json()
                    })
                    .then(data =>
                    { this.setState({ data: data.hits }) })
             .catch ((error)=>{
                console.log(error.message)
             })
            .finally(()=>{this.setState({isLoader: false, showButton:true})})
        }, 2000)
          }     
        
        if (prevState.page !== this.state.page) {
            this.setState({isLoader: true, showButton: false})
            setTimeout(()=> {
                  api.fetchImages(nextData, this.state.page)
                    .then(response => {
                        console.log(response)
                       return response.json()
                    })
                    .then(data =>
             {
                 this.setState((prevState)=>({data: [...prevState.data, ...data.hits]}))
             })
           .catch ((error) =>{
                console.log(error.message)
           })
            .finally(()=>{this.setState({isLoader: false, showButton: true})})
              }, 2000)  
        }

    }
    

    handleClick = () => {
        this.setState((prevState)=>({page: prevState.page+1}))
    }
    
    handleModalClick = (largeImage) => {
        this.setState({ modalImg: largeImage, showModal:true })
        
    }
    

    onClose = () => {
        this.setState({ showModal:false })
    }

    render() {
       
        const { data, isLoader, showButton, showModal, modalImg } = this.state
        return (
            <>
                <ul className={css.imageGallery} onClick={this.toggleModal}>
                {data.map(item =>
                    <ImageGalleryItem key={item.id}
                        image={item.webformatURL}
                        alt={item.tags}
                        largeImage={item.largeImageURL}
                        handleClick={this.handleModalClick} />)}
                </ul>
                {isLoader && <Loader />}
                {showButton && <Button onClick={this.handleClick} />}
                {showModal && <Modal modalImg={modalImg} onClose={this.onClose}/>}
            </>
            
    )
    }
    
}


