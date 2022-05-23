//inside /frontend/src/components/analytics
import {
    Stack,
    VStack,
    HStack,
    Heading,
    Flex,
    Box,
    Center,
    Text,
    Button,
  } from "@chakra-ui/react";
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

export default function BestUploadDayChart() {
    const axios = require("axios");
    const [Results, setSearchResults] = useState([]);
    const [btnClicked, setBtnClicked] = useState(false);
    const [displayChart, setDisplayChart] = useState(false);
    function handleFetch() {
      const backend_avg_num_tags_url = "http://127.0.0.1:8000/average-tags/";
      axios.get(backend_avg_num_tags_url).then(function (response) {});
      setBtnClicked(true);
    }
  
    function handleDisplayChart() {
      setDisplayChart(true);
    }
    
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/videos/")
        .then(function (response) {
            let result = response.data;
            setSearchResults([...result]);
            console.log("searchResults:", Results);
        })
    }, [Results.length]);

    const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var data = {
        labels,
        datasets: [
            {
                label: "Day of the Week vs. Videos Published",
                data: getDayData(),
                backgroundColor: 'rgba(255, 99, 132, 1)'
            },
        ],
    };

    // function dayofweek(y, d, m){
    //     let t = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];

    //     y -= (m < 3) ? 1 : 0;

    //     return ( y + y/4 - y/100 + y/400 + t[m-1] + d) % 7;
    // }

    function getDayData() {
        let times = [Results.map(info => info.publishedAt)];
        let t = [ 0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4 ];
        let dayData = []
        let sunday = 0
        let monday = 0
        let tuesday = 0
        let wednesday = 0
        let thursday = 0
        let friday = 0
        let saturday = 0
        let y = 0
        let d = 0
        let m = 0
        let dayNum = 0
        
        for (let i = 0; i < Results.length; ++i){
            y = 0
            m = 0
            d = 0
            if (times[0][i].charAt(3) === '1'){  //YEAR: 000X
                y = y + 1
            }
            else if (times[0][i].charAt(3) === '2'){
                y = y + 2
            }
            else if (times[0][i].charAt(3) === '3'){
                y = y + 3
            }
            else if (times[0][i].charAt(3) === '4'){
                y = y + 4
            }
            else if (times[0][i].charAt(3) === '5'){
                y = y + 5
            }
            else if (times[0][i].charAt(3) === '6'){
                y = y + 6
            }
            else if (times[0][i].charAt(3) === '7'){
                y = y + 7
            }
            else if (times[0][i].charAt(3) === '8'){
                y = y + 8
            }
            else if (times[0][i].charAt(3) === '9'){
                y = y + 9
            }

            if (times[0][i].charAt(2) === '1'){  //YEAR: 00XX
                y = y + 10
            }
            else if (times[0][i].charAt(2) === '2'){
                y = y + 20
            }
            else if (times[0][i].charAt(2) === '3'){
                y = y + 30
            }
            else if (times[0][i].charAt(2) === '4'){
                y = y + 40
            }
            else if (times[0][i].charAt(2) === '5'){
                y = y + 50
            }
            else if (times[0][i].charAt(2) === '6'){
                y = y + 60
            }
            else if (times[0][i].charAt(2) === '7'){
                y = y + 70
            }
            else if (times[0][i].charAt(2) === '8'){
                y = y + 80
            }
            else if (times[0][i].charAt(3) === '9'){
                y = y + 90
            }

            if (times[0][i].charAt(0) === '1' && times[0][i].charAt(1) === '9'){  //YEAR: 0XXX //Either choice is 1900 or 2000 //if 2000 do not need to add
                y = y + 1900
            }
            if (times[0][i].charAt(0) === '2' && times[0][i].charAt(1) === '0'){  //YEAR: XXXX
                y = y + 2000
            }

            ///////////////////////////////
            if (times[0][i].charAt(5) === '1'){  //MONTH: 000X ONLY FOR DEC,NOV,OCT
                m = m + 10
            }
            if (times[0][i].charAt(6) === '1'){
                m = m + 1
            }
            else if (times[0][i].charAt(6) === '2'){
                m = m + 2
            }
            else if (times[0][i].charAt(6) === '3'){
                m = m + 3
            }
            else if (times[0][i].charAt(6) === '4'){
                m = m + 4
            }
            else if (times[0][i].charAt(6) === '5'){
                m = m + 5
            }
            else if (times[0][i].charAt(6) === '6'){
                m = m + 6
            }
            else if (times[0][i].charAt(6) === '7'){
                m = m + 7
            }
            else if (times[0][i].charAt(6) === '8'){
                m = m + 8
            }
            else if (times[0][i].charAt(6) === '9'){
                m = m + 9
            }

            ///////////////////////////////
            if (times[0][i].charAt(9) === '1'){  //DAY: X0
                d = d + 10
            }
            else if (times[0][i].charAt(9) === '2'){  //DAY: X0
                d = d + 20
            }
            else if (times[0][i].charAt(9) === '3'){  //DAY: X0
                d = d + 30
            }

            if (times[0][i].charAt(9) === '1'){ //DAY: XX
                d = d + 1
            }
            else if (times[0][i].charAt(9) === '2'){
                d = d + 2
            }
            else if (times[0][i].charAt(9) === '3'){
                d = d + 3
            }
            else if (times[0][i].charAt(9) === '4'){
                d = d + 4
            }
            else if (times[0][i].charAt(9) === '5'){
                d = d + 5
            }
            else if (times[0][i].charAt(9) === '6'){
                d = d + 6
            }
            else if (times[0][i].charAt(9) === '7'){
                d = d + 7
            }
            else if (times[0][i].charAt(9) === '8'){
                d = d + 8
            }
            else if (times[0][i].charAt(9) === '9'){
                d = d + 9
            }
            
            y -= (m < 3) ? 1 : 0
            dayNum = ( y + y/4 - y/100 + y/400 + t[m-1] + d) % 7

            if (dayNum === 0){
                sunday++;
            }
            else if (dayNum === 1){
                monday++;
            }
            else if (dayNum === 2){
                tuesday++;
            }
            else if (dayNum === 3){
                wednesday++;
            }
            else if (dayNum === 4){
                thursday++;
            }
            else if (dayNum === 5){
                friday++;
            }
            else if (dayNum === 6){
                saturday++;
            }
        }
        dayData = [ sunday, monday, tuesday, wednesday, thursday, friday, saturday ]
        
        return dayData;
    };

    return (
        <Flex>
          <VStack as={"column"}>
            <Box mt={15}>
              <Heading size={"lg"}>
                Here's the best day of the week to upload a youtube video based on our data
              </Heading>
            </Box>
      
            <Box my={10}>
              <Button variant={"solid"} onClick={handleDisplayChart} my={5}>
                <Text>Click to load the data</Text>
              </Button>
              {displayChart === true ? <Bar data={data}></Bar> : ""}
            </Box>
      
            <Box mt={20}></Box>
          </VStack>
        </Flex>
      );
}