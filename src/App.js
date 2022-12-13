import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "../src/api";
import coronaImage from "./images/coronaImage.png";
import { DataStore } from "@aws-amplify/datastore";
import { CovidReport } from "./models";
import Authenticator from "./components/Authenticator";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "./aws-exports.js";
Amplify.configure(awsExports);
class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    //console.log(fetchedData);
    this.setState({
      data: fetchedData,
    });
  }

  dataseed = async (Recovered, Infected, Died, Country) => {
    // console.log(Country);
    const data = await DataStore.save(
      new CovidReport({
        Recovered,
        Infected,
        Died,
        Country,
      })
    );
    return data;
  };

  handleCountryChange = async (country) => {
    //console.log(country)
    const fetchCountryData = await fetchData();
    //console.log(fetchCountryData)
    this.setState({
      data: fetchCountryData,
      country: country,
    });

    this.dataseed(
      fetchCountryData.negative,
      fetchCountryData.positive,
      fetchCountryData.death,
      country
    );
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Authenticator />
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
