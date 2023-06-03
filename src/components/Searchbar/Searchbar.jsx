import React, {Component} from "react"
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
    return  <header className="searchbar">
                <form className="form" onSubmit={this.handleSubmit}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                    className="input"
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