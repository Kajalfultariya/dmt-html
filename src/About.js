import React from 'react';
import qr from "./Image/qr.png"
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import { Button } from '@material-ui/core';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { TextField } from "@material-ui/core";
import Video from './Video';


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
                                <div style={{
                                    marginTop: "20px",
                                    border: "solid",
                                    borderColor: "white",
                                    width: "300px",
                                    borderRadius: "15%",
                                    height: "80px",
                                    alignItems: "center",
                                    display: "flex",
                                    justifyContent: "center"

                                }}>
                                    <p style={{
                                        fontSize: "15px",
                                        color: "white",
                                    }}>
                                        GPay/PhonePe/Paytm
                                        <p
                                            style={{
                                                fontSize: "28px",
                                                color: "white",
                                                marginTop: "5px"
                                            }}>
                                            +91 9099814643
                                        </p>
                                    </p>
                                </div>
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
                            <select
                                disable="true"
                                Value="dfgdfgfdgdf"
                                style={{
                                    width: "100%",
                                    color: "white",
                                    backgroundColor: "rgb(1, 61, 129)",
                                    border: "solid",
                                    borderColor: "white",
                                    fontSize: "20px",
                                    marginTop: "20px",
                                    height: "50px",
                                    pointerEvents: "none"
                                }}>
                                <option>   Bank Name : Axis Bank</option>
                            </select>
                            {/*}  <Button variant="outlined" style={{
                                color: "white",
                                borderColor: "white",
                                width: "300px",
                                fontSize: "20px",
                                marginTop: "20px",
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
                                */}
                            <input
                                placeholder="Name : Ambtech Multitrade Private Limited"
                              //  readonly="readonly"
                                type="text"
                                style={{
                                    marginTop: "50px",
                                    fontFamily: "sans-serif",
                                    fontSize: "20px",
                                    color: "white",
                                    //background: "transparent",
                                    border: "none",
                                    borderBottom: "1px solid white",
                                    padding: "5px 10px",
                                    outline: "none",
                                    width: "100%"
                                }} />

                            <input
                                placeholder="A/c No : 0561451103215410"
                                readonly="readonly"
                                type="text"
                                style={{
                                    fontFamily: "sans-serif",
                                    fontSize: "20px",
                                    color: "white",
                                    background: "transparent",
                                    border: "none",
                                    borderBottom: "1px solid white",
                                    padding: "5px 10px",
                                    outline: "none",
                                    width: "100%"
                                }} />
                            <input
                                placeholder="IFSC Code : UTIB0003732"
                                readonly="readonly"
                                type="text"
                                style={{
                                    fontFamily: "sans-serif",
                                    fontSize: "20px",
                                    color: "white",
                                    background: "transparent",
                                    border: "none",
                                    borderBottom: "1px solid white",
                                    padding: "5px 10px",
                                    outline: "none",
                                    width: "100%"
                                }} />
                            <input
                                placeholder="Branch Name : Yogi Chowk"
                                readonly="readonly"
                                type="text"
                                style={{
                                    fontFamily: "sans-serif",
                                    fontSize: "20px",
                                    color: "white",
                                    background: "transparent",
                                    border: "none",
                                    borderBottom: "1px solid white",
                                    padding: "5px 10px",
                                    outline: "none",
                                    width: "100%"
                                }} />

                            <p style={{
                                width: "100%",
                                fontSize: "20px",
                                marginTop: "60px",
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