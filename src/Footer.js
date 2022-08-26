import React from 'react';
import Typography from '@material-ui/core/Typography';
import oclogo from "./Image/oclogo.png"
import Avatar from '@mui/material/Avatar';
import facebook from "./Image/facebook.jpg"
import tweeter from "./Image/tweet.jpg"
import linkedin from "./Image/linkedin.png"
import insta from "./Image/insta.jpg"
import uparrow from "./Image/uparrow.jpg"
import whatsapp from "./Image/Whatsapp.png"
import Stack from '@mui/material/Stack';

const Footer = () => {
    return (
        <footer id="Footer">
            <div style={{
                display: "flex",
                width: "95%",
                justifyContent: "space-between",
                marginBottom: "-50px"
            }}>
                <img
                    height="60"
                    width="65"
                    src={oclogo}
                    style={{
                        borderRadius: "20px",
                        marginTop: "60px"
                    }}
                />
                <div style={{
                    fontWeight: "bold",
                    marginTop: "85px",
                    marginLeft: "5px",

                }}>
                    Oceanmtech DMT
                </div>
                <div style={{
                    fontSize: "0.85rem",
                    marginTop: "87px",
                    marginLeft: "10px",

                }}>
                    Copyright @2021 All rights reserved
                </div>
                <div style={{
                    fontSize: "0.7rem",
                    marginTop: "88px",
                    marginLeft: "35px",

                }}>
                    <strong>   Privacy Policy | Terms & condition | Refund Policy | Faqs </strong>
                </div>
                <div style={{
                    //  fontSize: "0.7rem",
                    marginTop: "15px",
                    marginLeft: "60px",

                }}>
                    <Stack
                        direction="row"
                        spacing={2}
                    >
                        <Avatar
                            style={{
                                height: "60px",
                                width: "60px",
                                marginTop: "45px"
                            }}

                            alt="facebook"
                            src={facebook}
                        />
                        <Avatar
                            style={{
                                height: "45px",
                                width: "45px",
                                marginTop: "50px"
                            }}

                            alt="tweeter"
                            src={tweeter}
                        />
                        <Avatar
                            style={{
                                height: "45px",
                                width: "45px",
                                marginTop: "50px"
                            }}

                            alt="linkedin"
                            src={linkedin}
                        />
                        <Avatar
                            style={{
                                height: "45px",
                                width: "45px",
                                marginTop: "50px"
                            }}

                            alt="insta"
                            src={insta}
                        />
                        <div style={{
                            //  fontSize: "0.7rem",
                            marginTop: "-15px",
                            marginLeft: "80px",

                        }}>
                            <Avatar
                                style={{
                                    height: "65px",
                                    width: "65px",
                                    marginTop: "-10px"
                                }}

                                alt="whatsapp"
                                src={whatsapp}
                            />
                            <Avatar
                                style={{
                                    height: "65px",
                                    width: "65px",
                                    //marginTop: "-10px"
                                }}

                                alt="uparrow"
                                src={uparrow}
                            />

                        </div>
                    </Stack>


                </div>
            </div>

        </footer>
    )
}

export default Footer;