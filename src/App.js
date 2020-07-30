import React from "react";

// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api/index";

import coronaImage from './images/image.png'

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetcedhData = await fetchData();
    this.setState({ data: fetcedhData });
  }

  handleCountryChange = async (country) => {
    //fetch the data, set the state
    const fetcedhData = await fetchData(country);
    this.setState({ data: fetcedhData, country: country });
    
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19"/>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
      </div>
    );
  }
}

export default App;