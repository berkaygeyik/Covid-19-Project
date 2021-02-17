import React, {useState, useEffect} from 'react';
import { fetchDailyData } from '../../api/index';
import {  Line, Bar } from 'react-chartjs-2';
import { Card, CardContent, Typography, Grid, Divider } from "@material-ui/core";
import styles from './Chart.module.css'

const Chart = ({data: { confirmed, recovered, deaths }, country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        //console.log(dailyData)
        fetchAPI();
    }, [])

    const lineChart = (
        dailyData
        ? (<Line 
            data = {{
                labels: dailyData.map(({date}) => date),
                datasets: [{
                    data: dailyData.map(({confirmed}) => confirmed),
                    label: "Infected",
                    borderColor: "#3333ff",
                    fill: true
                }, {
                    data: dailyData.map(({deaths}) => deaths),
                    label: "Deaths",
                    borderColor: "red",
                    backgroundColor: "rgba(255, 0, 0, 0.5)",
                    fill: true
                }],
            }}
        />) : null
    );

    const barChart = (
        confirmed
        ? (<Bar 
            data = {{
                labels: ['Infected', 'Recovered', 'Deaths'],
                datasets: [{
                      label: 'People',
                      backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                      data: [confirmed.value, recovered.value, deaths.value],
                    },
                  ],
            }}
            options = {{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country}` },
            }}
        />) : null
    );

    return(
        <div className={styles.container }>
            {country ? barChart : lineChart}
            <Divider light className={styles.divider } />
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <div className={styles.doubleChart }>
                        <h3>Daily Global Cases</h3>
                        {lineChart}
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className={styles.doubleChart }>
                        <h3>Current Cases</h3>
                        {barChart}
                    </div>
                </Grid>
            </Grid>
            <Divider light className={styles.divider } />
        </div>
        // <div className={styles.container }>
        //     {country ? barChart : lineChart}
        //     <div className={styles.doubleChart }>
        //         <h3>Line</h3>
        //         <h3>Chart</h3>
        //     </div>
        //     <div className={styles.doubleChart }>
        //         {lineChart}
        //         {barChart}
        //     </div>
            
        // </div>
        
    );
};

export default Chart;