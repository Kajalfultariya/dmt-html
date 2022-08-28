import React from 'react';
import qr from "./Image/qr.png"
import Stack from '@mui/material/Stack';
import Video from './Video';
import { Button } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const About = () => {

    return (
        <>
            <Video />

            <section id="Payment">

                <div style={{
                    width: "98%",
                    height: "100%",
                }}>
                    <p style={{
                        marginTop: "30px",
                        fontSize: "45px",
                        fontWeight: "bold",
                        marginLeft: "70px",
                        color: "white"
                    }}>
                        PAYMENT METHOD
                    </p>
                    <Stack
                        direction="row"
                        spacing={10}
                        style={{ margin: "20px" }}>
                        <div style={{
                            width: "40%",
                            textAlign: "center",
                            color: "whitesmoke",
                            margin: "20px"
                        }}>
                            <p
                                style={{ fontSize: "35px" }}>
                                OUR QR CODE
                            </p>
                            <img
                                src={qr}
                                height="200px"
                                width="200px"
                            />
                            <p
                                style={{ fontSize: "25px" }}>
                                UPI ID : hirpara27-3@oksbi
                            </p>
                            <p
                                style={{ fontSize: "22px" }}>
                                scan my QR code to pay
                            </p>
                            <p
                                style={{
                                    fontSize: "30px",
                                    marginTop: "20px"
                                }}>
                                OUR WALLET
                            </p>
                            <center>
                                <Button className='payment-last'
                                    variant='outlined'
                                    style={{ bodrer: "solid", 
                                    borderColor: "white",
                                    marginTop:"20px" }}>
                                    <p style={{
                                        fontSize: "15px",
                                        color: "white",
                                    }}>
                                        GPay/PhonePe/Paytm
                                        <p
                                            style={{
                                                fontSize: "28px",
                                                color: "white",
                                                // marginTop: "5px"
                                            }}>
                                            +91 9099814643
                                        </p>
                                    </p>

                                </Button>
                            </center>

                        </div>
                        <div style={{
                            width: "50%",
                            textAlign: "center",
                            color: "whitesmoke",
                            margin: "30px"
                        }}>
                            <p
                                style={{ fontSize: "30px" }}>
                                OUR BANK DETAILS
                            </p>

                            <Button variant="outlined"
                                style={{
                                    textTransform: "none",
                                    color: "white",
                                    borderColor: "white",
                                    width: "300px",
                                    fontSize: "20px",
                                    marginTop: "40px",
                                    width: "100%",
                                    display: "flex", justifyContent: "space-between",
                                    // position:"fixed",
                                    // overflow:"hidden"
                                }}>

                                Bank Name : Axis Bank

                                <KeyboardArrowDownIcon
                                    style={{
                                        height: "25px",
                                        color: "white",
                                        //   marginBottom: "30px",
                                    }} />
                            </Button>



                            <input
                                //  placeholder="Name : Ambtech Multitrade Private Limited"
                                readonly="readonly"
                                value="Name : Ambtech Multitrade Private Limited"
                                type="text"
                                className='payment-detail'
                                style={{
                                    marginTop: "30px",

                                }} />

                            <input
                                value="A/c No : 0561451103215410"
                                readonly="readonly"
                                className='payment-detail'
                                type="text"
                            />
                            <input
                                value="IFSC Code : UTIB0003732"
                                readonly="readonly"
                                className='payment-detail'
                                type="text"
                            />
                            <input
                                value="Branch Name : Yogi Chowk"
                                readonly="readonly"
                                className='payment-detail'
                                type="text"
                            />

                            <p style={{
                                width: "100%",
                                fontSize: "20px",
                                marginTop: "70px",
                                textAlign: "left"
                            }}>
                                Terms and Conditions*
                            </p>
                        </div>
                    </Stack>

                </div>
            </section>
        </>
    )
}

export default About;