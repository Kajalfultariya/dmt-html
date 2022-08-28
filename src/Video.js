import React from "react";
import Stack from '@mui/material/Stack';
import video from "./Image/video.png"
import MobileStepper from '@material-ui/core/MobileStepper';


const Video = () => {

    return (
        <section id="Touse">
            <div style={{
                width: "100%",
                textAlign: "center",
                height: "100%"
            }}>
                <p style={{
                    fontSize: "35px",
                    color: "rgb(1, 61, 129)",
                    fontWeight: "bold",
                    marginTop: "50px"
                }}>
                    How To Use ?
                </p>

                <Stack
                    direction="row"
                    spacing={5}
                    style={{
                        width: "100%",
                        marginTop: "30px",
                        height: "100%"
                    }}
                >
                    <div style={{
                        height: "70%",
                        width: "10%",
                        backgroundColor: "lightgray",
                        marginTop: "50px"
                    }}>

                    </div>
                    <div style={{
                        height: "80%",
                        width: "80%",
                        backgroundColor: "lightgray",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <div>
                            <div width="150px" >
                                <img
                                    src={video}
                                    height="120px" width="120px"
                                    style={{borderRadius:"25%"}} >
                                </img>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        height: "70%",
                        width: "10%",
                        backgroundColor: "lightgray",
                        marginTop: "50px"
                    }}>

                    </div>
                </Stack>
                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "-175px"
                }}>
                    <MobileStepper
                        variant="dots"
                        steps={3}
                        position="static"
                        activeStep={1}

                    />
                </div>
            </div>
        </section>
    )
}

export default Video;