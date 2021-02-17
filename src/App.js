import React from "react";

import { Start, General, CountryPicker, Chart, Table } from "./components";
import { fetchData } from "./api/";
import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
    data2: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
    this.setState({ data2: fetchedData });
  }

  handleCountryChange = async (country) => {
    //fetch the data, set the state
    const fetcedhData = await fetchData(country);
    this.setState({ data: fetcedhData, country: country });
    
  }

  handleCountryChangeTable = async (country) => {
    //fetch the data, set the state
    const fetcedhData = await fetchData(country);
    this.setState({ data2: fetcedhData });
    
  }

  render() {
    const { data, data2, country } = this.state;

    return (
      <div className={styles.container}>
        <Start data={data} />
        <General data={data} country={country} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country}/>
        <Table data={data2} handleCountryChange={this.handleCountryChangeTable}/>
      </div>
    );
  }
}

export default App;
