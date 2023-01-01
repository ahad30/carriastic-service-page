import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { SliderData } from './SliderData';
import { Box } from '@material-ui/core';
import AppButton from './reusables/AppButton';



function Item(props) {
    const { item, index } = props;

    let position = "flex-start";
    if (index % 2 === 0) {
        position = "flex-end"
    }
    return (
        <Box style={{
            height: "600px",
            width: "1000px",
            margin: "0 auto",
            elevation: 10,
            backgroundImage: `url(${item.image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            marginTop: "10px"
        }}>
            <Box style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: position, margin: "0 10px" }}>
                <Box style={{ textAlign: "center" }}>
                    <h2>{item.title}</h2>
                    <h2>{item.subtitle}</h2>
                    <AppButton sx={{ width: "200px", margin: "10px 0" }}>
                        Check it out!
                    </AppButton>
                </Box>
            </Box>
        </Box >
    )
}
function CarouserSlider(props) {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel autoPlay={true} style={{ height: "100%", width: "100%" }}>
            {
                SliderData.map((item, i) => <Item key={i} item={item} index={i} />)
            }
        </Carousel>
    )
}

export default CarouserSlider;
