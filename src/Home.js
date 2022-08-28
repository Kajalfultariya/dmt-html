import React from 'react';
import Stack from '@mui/material/Stack';
import back from "./Image/back.png"
import web from "./Image/web.png"
import { Button } from '@mui/material';

const Home = () => {
    return (
        <section id="Home">

            <div style={{
                width: "100%",
                height: "100%",
                marginTop: "120px",
                overflow: "hidden",
                display: "inline-block"
            }}>
                <div style={{
                    width: "100%",
                    height: "75%",
                    // backgroundColor:"red",
                    backgroundImage: "url(" + back + ")",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    color: "white",

                }}>

                    <Stack
                        direction="row"
                        spacing={2}
                        style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            width: "100%",
                            marginTop: "30px",
                            height: "100%",
                            paddingTop: "10px",
                        }}
                    >
                        <div style={{
                            width: "50%",
                            height: "70%",
                            textAlign: "left",
                            marginLeft: "100px"

                        }}>
                            <p style={{
                                fontSize: "55px",
                                marginTop: "100px",
                                fontWeight: "bold"
                            }}>
                                More Than 100,000+
                            </p>
                            <p style={{
                                fontSize: "47px",
                                marginTop: "30px"
                            }}>
                                Creative Marketing
                            </p>
                            <p style={{
                                fontSize: "47px",
                                marginTop: "30px"
                            }}>
                                Images
                            </p>
                            <p style={{
                                fontSize: "22px",
                                marginTop: "60px"
                            }}>
                                Whether You have a small and medium business,
                            </p>
                            <p style={{
                                fontSize: "22px",
                                marginTop: "8px"
                            }}>
                                get all required marketing stuff in a few clicks.
                            </p>
                            <p style={{
                                fontSize: "22px",
                                marginTop: "8px"
                            }}>
                                Easiest way to promote your business
                            </p>
                            <Button variant="contained" style={{
                                backgroundColor: "white",
                                color: "rgb(1, 61, 129)",
                                marginTop: "50px",
                                width: "300px",
                                fontWeight: "bold",
                                height: "55px",
                            }}>
                                download free post now
                            </Button>
                        </div>
                        <div style={{
                            width: "50%",
                            height: "70%",
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            marginTop: "70px",
                            //marginRight: "30px",
                            rotate: "30deg",

                        }}>
                            <div style={{// position: "relative" 
                            }}>
                                <Stack
                                    direction="row"
                                    spacing={0.9}
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        width: "50%",
                                        margin: "50px",
                                        height: "100%",
                                        paddingTop: "10px",
                                    }}
                                >
                                    <div>
                                        <div className='home-imagegroup'
                                            style={{
                                                backgroundImage: "url(" + web + ")",
                                                marginTop: "50px"
                                            }} />
                                        <div className='home-imagegroup' style={{
                                            backgroundImage: "url(" + web + ")",
                                            marginTop: "8px"
                                        }} />
                                        <div className='home-imagegroup' style={{
                                            backgroundImage: "url(" + web + ")",
                                            marginTop: "8px"
                                        }} />
                                    </div>
                                    <div>
                                        <div className='home-imagegroup' style={{
                                            backgroundImage: "url(" + web + ")",

                                        }} />
                                        <div className='home-imagegroup' style={{
                                            backgroundImage: "url(" + web + ")",
                                            marginTop: "8px"
                                        }} />
                                        <div className='home-imagegroup' style={{
                                            backgroundImage: "url(" + web + ")",
                                            marginTop: "8px"
                                        }} />
                                        <div className='home-imagegroup' style={{
                                            backgroundImage: "url(" + web + ")",
                                            marginTop: "8px"
                                        }} />
                                    </div>
                                    <div >
                                        <div className='home-imagegroup' style={{
                                            backgroundImage: "url(" + web + ")",
                                            marginTop: "50px"
                                        }} />
                                        <div className='home-imagegroup' style={{
                                            backgroundImage: "url(" + web + ")",
                                            marginTop: "8px"
                                        }} />
                                        <div className='home-imagegroup' style={{
                                            backgroundImage: "url(" + web + ")",
                                            marginTop: "8px"
                                        }} />

                                    </div>
                                    <div>
                                        <div className='home-imagegroup' style={{
                                            backgroundImage: "url(" + web + ")",
                                        }} />
                                        <div className='home-imagegroup' style={{
                                            backgroundImage: "url(" + web + ")",
                                            marginTop: "8px"
                                        }} />
                                        <div className='home-imagegroup' style={{
                                            backgroundImage: "url(" + web + ")",
                                            marginTop: "8px"
                                        }} />
                                        <div className='home-imagegroup' style={{
                                            backgroundImage: "url(" + web + ")",
                                            marginTop: "8px"
                                        }} />
                                    </div>
                                </Stack>


                            </div>
                        </div>

                    </Stack>
                </div>
                <div style={{
                    width: "100%",
                    height: "15%",
                    display: "flex",
                    justifyContent: "space-evenly",
                    color: "rgb(1, 61, 129)",
                    alignItems: "center",
                    marginBottom: "100px"
                }}>
                    <div style={{ textAlign: "center" }}>
                        <p style={{
                            fontSize: "45px",
                            fontWeight: "bold"
                        }} >
                            1,559,658+
                        </p>
                        <p style={{
                            fontSize: "20px"
                        }} >
                            Business Registered</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <p style={{
                            fontSize: "45px",
                            fontWeight: "bold"
                        }} >
                            7,844,980+
                        </p>
                        <p style={{
                            fontSize: "20px"
                        }} >
                            Post Download</p>
                    </div>
                    <div style={{
                        textAlign: "center"
                    }}>
                        <p style={{
                            fontSize: "45px",
                            fontWeight: "bold"
                        }} >
                            1,055,1585+
                        </p>
                        <p style={{
                            fontSize: "20px"
                        }} >
                            Creative option
                        </p>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Home;