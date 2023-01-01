import React from "react";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

const MyCollection = [
    {
        label: "First Picture",
        imgPath:
            "./images/slider1.jpg",
    },
    {
        label: "Second Picture",
        imgPath:
            "./images/slider2.jpg",
    },
    {
        label: "Third Picture",
        imgPath:
            "./images/slider3.jpg",
    },
];

const App = () => {
    const CollectionSize = MyCollection.length;
    const theme = useTheme();
    const [index, setActiveStep] = React.useState(0);

    const goToNextPicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    return (
        <div
            style={{
                marginLeft: "40%",
            }}
        >
            <div
                style={{
                    maxWidth: 400,
                    flexGrow: 1,
                }}
            >
                <Paper
                    square
                    elevation={0}
                    style={{
                        height: 50,
                        display: "flex",
                        paddingLeft: theme.spacing(4),
                        backgroundColor: theme.palette.background.default,
                        alignItems: "center",
                    }}
                >
                    <Typography>{MyCollection[index].label}</Typography>
                </Paper>
                <img
                    src={MyCollection[index].imgPath}
                    style={{
                        height: 255,
                        width: "100%",
                        maxWidth: 400,
                        display: "block",
                        overflow: "hidden",
                    }}
                    alt={MyCollection[index].label}
                />
                <MobileStepper
                    variant="text"
                    position="static"
                    index={index}
                    steps={CollectionSize}
                    nextButton={
                        <Button
                            size="small"
                            onClick={goToNextPicture}
                            disabled={index === CollectionSize - 1}
                        >
                            Next
                            {theme.direction !== "rtl" ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                        </Button>
                    }
                />
            </div>
        </div>
    );
};

export default App;
