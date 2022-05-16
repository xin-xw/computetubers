//inside /frontend/src/components/analytics
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { React, useState, useEffect } from "react";
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins:{
        legend:{
            display:false
        }
    },
    layout: {
        padding: {bottom:100}
    },
    scales: {
        labels:{
            ticks:{
                autoSkip: false,
                barPercentage: 0.5,
                color:"white",
                minRotation: 90,
                maxRotation: 90,
                font:{
                    size:18
                }
            }
        },
        vidTotal:{
            ticks:{
                color:"white",
                font:{
                    size:18
                }
            }
        }
    }
};

export default function Chart() {
    const axios = require("axios");
    const [Results, setSearchResults] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/videos/")
        .then(function (response) {
            let result = response.data;
            setSearchResults([...result]);
            console.log("searchResults:", Results);
        })
    }, [Results.length]);

    const labels = ['12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM',
                '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'];

    var data = {
        labels,
        datasets: [
            {
                label: "Time (Hour) vs. Videos Published",
                data: getHourData(),
                backgroundColor: 'rgba(255, 99, 132, 1)'
            },
        ],
    };

    function getHourData() {
        let times = [Results.map(info => info.publishedAt)];
        let hourData = []
        let hour0 = 0
        let hour1 = 0
        let hour2 = 0
        let hour3 = 0
        let hour4 = 0
        let hour5 = 0
        let hour6 = 0
        let hour7 = 0
        let hour8 = 0
        let hour9 = 0
        let hour10 = 0
        let hour11 = 0
        let hour12 = 0
        let hour13 = 0
        let hour14 = 0
        let hour15 = 0
        let hour16 = 0
        let hour17 = 0
        let hour18 = 0
        let hour19 = 0
        let hour20 = 0
        let hour21 = 0
        let hour22 = 0
        let hour23 = 0

// 12 13 -> index 11 12
        
        for (let i = 0; i < Results.length; ++i){
            if (times[0][i].charAt(11) === '0'){
                if (times[0][i].charAt(12) === '0'){
                    hour0++;
                }
                else if (times[0][i].charAt(12) === '1'){
                    hour1++;
                }
                else if (times[0][i].charAt(12) === '2'){
                    hour2++;
                }
                else if (times[0][i].charAt(12) === '3'){
                    hour3++;
                }
                else if (times[0][i].charAt(12) === '4'){
                    hour4++;
                }
                else if (times[0][i].charAt(12) === '5'){
                    hour5++;
                }
                else if (times[0][i].charAt(12) === '6'){
                    hour6++;
                }
                else if (times[0][i].charAt(12) === '7'){
                    hour7++;
                }
                else if (times[0][i].charAt(12) === '8'){
                    hour8++;
                }
                else if (times[0][i].charAt(12) === '9'){
                    hour9++;
                }
            }
            else if (times[0][i].charAt(11) === '1'){
                if (times[0][i].charAt(12) === '0'){
                    hour10++;
                }
                else if (times[0][i].charAt(12) === '1'){
                    hour11++;
                }
                else if (times[0][i].charAt(12) === '2'){
                    hour12++;
                }
                else if (times[0][i].charAt(12) === '3'){
                    hour13++;
                }
                else if (times[0][i].charAt(12) === '4'){
                    hour14++;
                }
                else if (times[0][i].charAt(12) === '5'){
                    hour15++;
                }
                else if (times[0][i].charAt(12) === '6'){
                    hour16++;
                }
                else if (times[0][i].charAt(12) === '7'){
                    hour17++;
                }
                else if (times[0][i].charAt(12) === '8'){
                    hour18++;
                }
                else if (times[0][i].charAt(12) === '9'){
                    hour19++;
                }
            }
            else if (times[0][i].charAt(11) === '2'){
                if (times[0][i].charAt(12) === '0'){
                    hour20++;
                }
                else if (times[0][i].charAt(12) === '1'){
                    hour21++;
                }
                else if (times[0][i].charAt(12) === '2'){
                    hour22++;
                }
                else if (times[0][i].charAt(12) === '3'){
                    hour23++;
                }
            }
        }

        hourData = [hour0, hour1 , hour2 , hour3 , hour4 , hour5 , hour6 , hour7 , hour8 , hour9 , hour10, hour11 , hour12 , hour13 , hour14 , hour15 , hour16 , hour17 , hour18 , hour19 , hour20 , hour21 , hour22 , hour23 ]
        
        return  hourData;
    };

    return <Bar data={data} />;
}