// Header.js
import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-scroll'; // react-scroll is a library for scrolling in React
import SmallScreensNavbar from './SmallScreensNavbar';
import { useWindowWidthAndHeight } from './CustomHooks';
import oclogo from "./Image/oclogo.png"
import call from "./Image/whitecall.png"
import Button from '@mui/material/Button';


const Header = () => {
    // use our custom hook to get the the window size
    const [width, height] = useWindowWidthAndHeight();
    

    return (
        <header>
            <div className="header-inner">
                <Link to="Home"
                    smooth={true}
                    className="logo nav-link">
                    <div style={{
                        display: "flex",
                        justifyContent: "space-evenly"
                    }}>
                        <div style={{
                            height: "70px",
                            width: "75px",
                            backgroundColor: "white",
                            borderRadius: "10%",
                            marginBottom: "10px"
                        }}>
                            <img
                                height="70"
                                width="75"
                                src={oclogo}
                                style={{ borderRadius: "20px" }}
                            />


                        </div>
                        <div style={{
                            fontFamily: "sans-serif",
                            fontSize: "1.4rem",
                            marginTop: "20px",
                            marginLeft: "10px",
                            color: "whitesmoke"
                        }}>

                            Oceanmtech DMT

                        </div>
                        <div style={{
                            // border: "solid",
                            // borderColor: "white",
                            height: "40px",
                            width: "170px",
                            marginTop: "14px",
                            marginLeft: "10px",
                           // borderRadius: "20%",
                            color: "whitesmoke"
                        }}>
                            <Button variant="outlined"
                                style={{
                                    color: "white",
                                    borderColor: "white",
                                    border: "solid",
                                    fontFamily: "sans-serif",
                                    fontSize: "0.8rem",
                                   // borderRadius:"20%"
                                }}>
                                <img src={call} height="20px" width="20px"></img> +91 910 690 2181
                            </Button>

                        </div>
                    </div>
                </Link>
                {width > 1000 ?
                    <Navbar navClass="nav-big"
                        linkClassName="nav-big-link" />
                    :
                    <SmallScreensNavbar navClass="nav-small"
                        linkClassName="nav-small-link"
                    />
                }
            </div>
        </header>
    )
}

export default Header;