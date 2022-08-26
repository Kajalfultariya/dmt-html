import React from 'react';
import Stack from '@mui/material/Stack';
import { Button } from '@mui/material';
import business from "./Image/business.png"
import card from "./Image/card.png"
import post from "./Image/post.png"
import schedule from "./Image/schedule.png"
import back from "./Image/back.png"
import web from "./Image/web.png"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
    },
    {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
    },
];

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
                    backgroundImage: "url(" + back + ")",
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    //backgroundColor: "rgb(1, 61, 129)",
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
                            //position:"static"
                        }}
                    >
                        <div style={{
                            width: "50%",
                            height: "70%",
                            //   display: "flex",
                            //  justifyContent: "center",
                            textAlign: "left",
                            marginLeft: "100px"

                        }}>
                            <p style={{ fontSize: "55px", marginTop: "100px", fontWeight: "bold" }}>
                                More Than 100,000+
                            </p>
                            <p style={{ fontSize: "47px", marginTop: "30px" }}>
                                Creative Marketing
                            </p>
                            <p style={{ fontSize: "47px", marginTop: "30px" }}>
                                Images
                            </p>
                            <p style={{ fontSize: "22px", marginTop: "60px" }}>
                                Whether You have a small and medium business,
                            </p>
                            <p style={{ fontSize: "22px", marginTop: "10px" }}>
                                get all required marketing stuff in a few clicks.
                            </p>
                            <p style={{ fontSize: "22px", marginTop: "10px" }}>
                                Easiest way to promote your business
                            </p>
                            <button variant="filled" style={{
                                backgroundColor: "white",
                                color: "rgb(1, 61, 129)",
                                marginTop: "50px",
                                width: "300px",
                                fontWeight: "bold",
                                height: "55px",
                                borderRadius: "10%"
                                //  position: "fixed"
                            }}>
                                download free post now
                            </button>
                        </div>
                        <div style={{
                            width: "50%",
                            height: "70%",
                            display: "flex",
                            justifyContent: "center",
                            textAlign: "center",
                            marginTop: "40px",
                            marginRight: "30px",
                          
                          //   rotate:"30deg",
                            
                          
                          
                          // writingMode: "vertical-rl",  /* `vertical-rl` and a rotation will achieve the same effect */
                            //  transform: "scaleX(-1) scaleY(-1)",
                            //    position:"absolute"
                       //     display:"-webkit-inline-flex",
                       //     float:"none"
                           // visibility:"hidden"
                            //  position:"sticky",
                            //  overflow:"auto",
                            // transform: "rotateZ(30deg)",
                            //position:"static"
                            // float:"left"
                            //  webkitTransform: "rotate(30deg)",

                        }}>
                            <div style={{// position: "relative" 
                            }}>
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-evenly",
                                        width: "50%",
                                        margin: "50px",
                                        height: "100%",
                                        paddingTop: "10px",
                                      //  webkitTransform: " rotate(-10deg)",
                                     //   mozTransform: "rotate(10deg)",
                                      //  msTransform: "rotate(10deg)",
                                      //  oTransform: "rotate(10deg)",
                                      //  transform: "rotate(10deg)",
                                      //  position: "absolute",
                                       // zIndex: "-1"
                                    }}
                                >
                                    <div>
                                        <div style={{
                                            backgroundImage: "url(" + web + ")",
                                            height: "90px",
                                            width: "90px",
                                            backgroundSize: "100% 100%",
                                            backgroundRepeat: "no-repeat",
                                            borderRadius: "10%",

                                            marginTop: "50px"
                                        }} />
                                        <div style={{
                                            backgroundImage: "url(" + web + ")",
                                            height: "90px",
                                            width: "90px",
                                            backgroundSize: "100% 100%",
                                            backgroundRepeat: "no-repeat",
                                            borderRadius: "10%",
                                            marginTop: "10px"
                                        }} />
                                        <div style={{
                                            backgroundImage: "url(" + web + ")",
                                            height: "90px",
                                            width: "90px",
                                            backgroundSize: "100% 100%",
                                            backgroundRepeat: "no-repeat",
                                            borderRadius: "10%",
                                            marginTop: "10px"
                                        }} />
                                    </div>
                                    <div>
                                        <div style={{
                                            backgroundImage: "url(" + web + ")",
                                            height: "90px",
                                            width: "90px",
                                            backgroundSize: "100% 100%",
                                            backgroundRepeat: "no-repeat",
                                            borderRadius: "10%"
                                        }} />
                                        <div style={{
                                            backgroundImage: "url(" + web + ")",
                                            height: "90px",
                                            width: "90px",
                                            backgroundSize: "100% 100%",
                                            backgroundRepeat: "no-repeat",
                                            borderRadius: "10%",
                                            marginTop: "10px"
                                        }} />
                                        <div style={{
                                            backgroundImage: "url(" + web + ")",
                                            height: "90px",
                                            width: "90px",
                                            backgroundSize: "100% 100%",
                                            backgroundRepeat: "no-repeat",
                                            borderRadius: "10%",
                                            marginTop: "10px"
                                        }} />
                                        <div style={{
                                            backgroundImage: "url(" + web + ")",
                                            height: "90px",
                                            width: "90px",
                                            backgroundSize: "100% 100%",
                                            backgroundRepeat: "no-repeat",
                                            borderRadius: "10%",
                                            marginTop: "10px"
                                        }} />
                                    </div>
                                    <div >
                                        <div style={{
                                            backgroundImage: "url(" + web + ")",
                                            height: "90px",
                                            width: "90px",
                                            backgroundSize: "100% 100%",
                                            backgroundRepeat: "no-repeat",
                                            borderRadius: "10%",

                                            marginTop: "50px"
                                        }} />
                                        <div style={{
                                            backgroundImage: "url(" + web + ")",
                                            height: "90px",
                                            width: "90px",
                                            backgroundSize: "100% 100%",
                                            backgroundRepeat: "no-repeat",
                                            borderRadius: "10%",
                                            marginTop: "10px"
                                        }} />
                                        <div style={{
                                            backgroundImage: "url(" + web + ")",
                                            height: "90px",
                                            width: "90px",
                                            backgroundSize: "100% 100%",
                                            backgroundRepeat: "no-repeat",
                                            borderRadius: "10%",
                                            marginTop: "10px"
                                        }} />

                                    </div>
                                    <div>
                                        <div style={{
                                            backgroundImage: "url(" + web + ")",
                                            height: "90px",
                                            width: "90px",
                                            backgroundSize: "100% 100%",
                                            backgroundRepeat: "no-repeat",
                                            borderRadius: "10%"
                                        }} />
                                        <div style={{
                                            backgroundImage: "url(" + web + ")",
                                            height: "90px",
                                            width: "90px",
                                            backgroundSize: "100% 100%",
                                            backgroundRepeat: "no-repeat",
                                            borderRadius: "10%",
                                            marginTop: "10px"
                                        }} />
                                        <div style={{
                                            backgroundImage: "url(" + web + ")",
                                            height: "90px",
                                            width: "90px",
                                            backgroundSize: "100% 100%",
                                            backgroundRepeat: "no-repeat",
                                            borderRadius: "10%",
                                            marginTop: "10px"
                                        }} />
                                        <div style={{
                                            backgroundImage: "url(" + web + ")",
                                            height: "90px",
                                            width: "90px",
                                            backgroundSize: "100% 100%",
                                            backgroundRepeat: "no-repeat",
                                            borderRadius: "10%",
                                            marginTop: "10px"
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
                    <div style={{ textAlign: "center" }}>
                        <p style={{
                            fontSize: "45px",
                            fontWeight: "bold"
                        }} >
                            1,055,1585+
                        </p>
                        <p style={{
                            fontSize: "20px"
                        }} >
                            Creative option</p>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Home;