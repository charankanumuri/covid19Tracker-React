import React, { Component } from 'react';
import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from '../src/api';
import coronaImage from './images/coronaImage.png'

class App extends Component {
	state = {
		data: {},
		country:''
	};
	async componentDidMount() {
		const fetchedData = await fetchData();
		//console.log(fetchedData);
		this.setState({
			data: fetchedData
		});
	}

	handleCountryChange = async (country) => {
		//console.log(country)
		const fetchCountryData = await fetchData(country)
		//console.log(fetchCountryData)
		this.setState({
			data: fetchCountryData,
			country: country
		});
	}

	render() {
		const { data, country } = this.state;
		return (
			<div className={styles.container}>
				<img className={styles.image} src={coronaImage} alt="COVID-19"/>
				<Cards data={data} />
				<CountryPicker handleCountryChange = {this.handleCountryChange} />
				<Chart data={data} country={country}/>
			</div>
		);
	}
}

export default App;
