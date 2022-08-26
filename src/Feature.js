import React from "react";
import Stack from '@mui/material/Stack';
import mobile from "./Image/mobile.png"
import business from "./Image/business.png"
import card from "./Image/card.png"
import post from "./Image/post.png"
import schedule from "./Image/schedule.png"
import video from "./Image/video.png"
import web from "./Image/web.png"
import collage from "./Image/collage.png"

const Feature = () => {
    return (
        <section id="Feature">
            <div style={{
                width: "98%",
                textAlign: "center",
                margin: "5px",
                height: "98%"
            }}>
                <p style={{
                    fontSize: "35px",
                    color: "rgb(1, 61, 129)",
                    fontWeight: "bold",
                    marginTop: "50px"
                }}>
                    BEST FEATURES
                </p>
                <p style={{
                    fontSize: "20px",
                    color: "rgba(2, 79, 167, 0.538)",
                    marginTop: "10px"
                }}>
                    Oceanmtech DMT Is Helps You To Promote Your Business By Share Greeting And Wishes With Your Brand Name And Logo
                </p>
                <Stack
                    direction="row"
                    spacing={2}
                    style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        width: "100%",
                        marginTop: "30px",
                        height: "100%"
                    }}
                >
                    <div style={{
                        width: "450px",
                        textAlign: "right",
                        marginTop: "20px"
                    }}>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%"
                        }}>
                            <div style={{
                                textAlign: "right",
                                width: "350px"
                            }}>
                                <p className="feature-detail1">
                                    BUSINESS POST
                                </p>
                                <p className="feature-detail2">
                                    You Will Get 200+ Marketing Post For Your
                                </p>
                                <p className="feature-detail2">
                                    Business Categories
                                </p>
                            </div>
                            <div className="feature-imagediv">
                                <img
                                    src={business}
                                    className="feature-image">
                                </img>
                            </div>

                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                            marginTop: "40px"
                        }}>
                            <div style={{
                                textAlign: "right",
                                width: "350px"
                            }}>
                                <p className="feature-detail1">
                                    FESTIVAL POST
                                </p>
                                <p className="feature-detail2">
                                    Get Personalized Festival Posts To Be
                                </p>
                                <p className="feature-detail2">
                                    Connected With your Clients
                                </p>
                            </div>
                            <div className="feature-imagediv">
                                <img
                                    src={post}
                                    className="feature-image">
                                </img>
                            </div>

                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                            marginTop: "40px"
                        }}>
                            <div style={{
                                textAlign: "right",
                                width: "350px"
                            }}>
                                <p className="feature-detail1">
                                    CUSTOM TEMPLATES
                                </p>
                                <p className="feature-detail2">
                                    Ready To Use Templates Which Fulfil All Your
                                </p>
                                <p className="feature-detail2">
                                    Marketing Needs
                                </p>
                            </div>
                            <div className="feature-imagediv">
                                <img
                                    src={collage}
                                    className="feature-image">
                                </img>
                            </div>

                        </div>
                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                            marginTop: "40px"
                        }}>
                            <div style={{
                                textAlign: "right",
                                width: "350px"
                            }}>
                                <p className="feature-detail1">
                                    IMAGE TO VIDEO
                                </p>
                                <p className="feature-detail2">
                                    Convert Your Images Into Creative Videos
                                </p>
                                <p className="feature-detail2">
                                    With Our Inbuilt Effects
                                </p>
                            </div>
                            <div className="feature-imagediv">
                                <img
                                    src={video}
                                    className="feature-image">
                                </img>
                            </div>

                        </div>
                    </div>



                    <div>
                        <img src={mobile} height="70%" width="300px" />
                    </div>



                    <div style={{
                        width: "450px",
                        textAlign: "left",
                        marginTop: "20px"
                    }} >

                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",

                        }}>
                            <div className="feature-imagediv">
                                <img
                                    src={web}
                                    className="feature-image">
                                </img>
                            </div>
                            <div style={{
                                textAlign: "left",
                                width: "350px"
                            }}>
                                <p className="feature-detail1">
                                    ONE PAGE WEBSITE
                                </p>
                                <p className="feature-detail2">
                                    Get Your Business Website To Stand Out From
                                </p>
                                <p className="feature-detail2">
                                    Your Competitors
                                </p>
                            </div>
                        </div>

                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                            marginTop: "40px"

                        }}>
                            <div className="feature-imagediv">
                                <img
                                    src={card}
                                    className="feature-image">
                                </img>
                            </div>
                            <div style={{
                                textAlign: "left",
                                width: "350px"
                            }}>
                                <p className="feature-detail1">
                                    DIGITAL BUSINESS CARD
                                </p>
                                <p className="feature-detail2">
                                    Get Creative Business Card To Grab Attention
                                </p>
                                <p className="feature-detail2">
                                    Of Your Clients
                                </p>
                            </div>


                        </div>

                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                            marginTop: "40px"
                        }}>
                            <div className="feature-imagediv">
                                <img
                                    src={schedule}
                                    className="feature-image">
                                </img>
                            </div>
                            <div style={{
                                textAlign: "left",
                                width: "350px"
                            }}>
                                <p className="feature-detail1">
                                    SCHEDULE POST
                                </p>
                                <p className="feature-detail2">
                                    Yes,You Can Download And Schedule Post For
                                </p>
                                <p className="feature-detail2">
                                    Facebook And Instagram
                                </p>
                            </div>


                        </div>

                        <div style={{
                            display: "flex",
                            justifyContent: "center",
                            width: "100%",
                            marginTop: "40px"
                        }}>
                            <div className="feature-imagediv">
                                <img
                                    src={web}
                                    className="feature-image">
                                </img>
                            </div>
                            <div style={{
                                textAlign: "left",
                                width: "350px"
                            }}>
                                <p className="feature-detail1">
                                    LOGO MAKER
                                </p>
                                <p className="feature-detail2">
                                    Create Stunning Logo Which Suits Your
                                </p>
                                <p className="feature-detail2">
                                    Business
                                </p>
                            </div>
                        </div>
                    </div>
                </Stack>
            </div>
        </section>
    )
}

export default Feature