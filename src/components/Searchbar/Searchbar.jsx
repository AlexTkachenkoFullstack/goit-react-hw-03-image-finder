import React, { Component } from "react"
import css from './Searchbar.module.css'
import { BsSearchHeartFill } from "react-icons/bs";

export class Searchbar extends Component {
    state = {
    searchName:''
    }
    
    handleChange = (event) => {
        this.setState({searchName:event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.searchName.trim() === '') {
            return alert('Введите что-то адекватное')
        }
        this.props.onSubmit(this.state.searchName)
        this.setState({searchName:''})
    }

    render() {
        return <header className={css.searchbar}>
                <form className={css.searchForm} onSubmit={this.handleSubmit}>
                    <button type="submit" className={css.searchFormButton}>
                    {/* <span className={css.searchFormButtonLabel}>Search</span> */}
                    <BsSearchHeartFill  className={css.searchIcon}/>
                    </button>

                    <input
                    className={css.searchFormInput}
                    type="text"
                    value={this.state.searchName}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={this.handleChange}
                    />
                </form>
            </header>
}
 
}