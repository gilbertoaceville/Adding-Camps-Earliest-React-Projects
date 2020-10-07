import React from 'react'

export default class Ajax extends React.Component{
componentDidMount() {
 let loadData = async() =>{
    let countries = await fetch("https://restcountries.eu/rest/v2/all")
    let allCountries = await countries.json()
    this.setState({
        ...this.state,
        getCountries: [...allCountries]
    })
 }
 loadData()
}

showAllCountries = e =>{
    this.setState({
        ...this.state,
        showCountries: true
    })

    document.querySelector('.input').value.length === 1 && (
        this.setState({
            ...this.state,
            showCountries: !this.state.showCountries
        })
    )
} 

handleSearch = e =>{
    let filter = this.state.getCountries.filter(v=>v.name.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({
        ...this.state,
        getCountries: [...filter]
    })
    document.querySelector('.inputs').value.length === 1 && (
        this.setState({
            ...this.state,
        })
    )
}


state = {
    getCountries : [],
    bg: '',
    showCountries: false
}
    render(){
        return(
            <>
            <div>
            <div>
                <h4>Before this search input is used, use the search input below to get list of countries</h4>
                <input className='inputs' onChange={this.handleSearch.bind(this)} type='text' placeholder='Search Country of Choice by Name'/>
            </div>
                <input className='input' onKeyPress={this.props.change} onKeyDown={this.showAllCountries.bind(this)} type="text" placeholder='Insert Navigation Bar Color' />
            </div>

            {
                this.state.showCountries &&

                <div>
                <ul>
                    {this.state.getCountries.map((eachCountry)=>{
                        return <li>{eachCountry.name}</li>
                    })}
                </ul>
            </div>
            }

            </>
        )
    }
}