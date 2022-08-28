import React, { useRef, useState } from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import login from "./Image/login.png"
import image from "./Image/image.png"
import download from "./Image/download.png"
import Feature from './Feature';
import Arrow, { DIRECTION } from 'react-arrows'

const Projects = () => {


  var p1x = parseFloat(1);
  var p1y = parseFloat(70);
  var p2x = parseFloat(180);
  var p2y = parseFloat(140);
  var mpx = (p2x + p1x) * 0.5;
  var mpy = (p2y + p1y) * 0.5;
  var theta = Math.atan2(p2y - p1y, p2x - p1x) - Math.PI / 2;
  var offset = -70;
  var c1x = mpx + offset * Math.cos(theta);
  var c1y = mpy + offset * Math.sin(theta);
  const curve = "M" + p1x + " " + p1y + " Q " + c1x + " " + c1y + " " + p2x + " " + p2y;


  var p1x1 = parseFloat(2);
  var p1y1 = parseFloat(130);
  var p2x1 = parseFloat(180);
  var p2y1 = parseFloat(70);
  var mpx1 = (p2x1 + p1x1) * 0.5;
  var mpy1 = (p2y1 + p1y1) * 0.5;
  var theta1 = Math.atan2(p2y1 - p1y1, p2x1 - p1x1) - Math.PI / 2;
  var offset1 = 80;
  var c1x1 = mpx1 + offset1 * Math.cos(theta1);
  var c1y1 = mpy1 + offset1 * Math.sin(theta1);
  const curve1 = "M" + p1x1 + " " + p1y1 + " Q " + c1x1 + " " + c1y1 + " " + p2x1 + " " + p2y1;


  return (
    <>
      <section id="Progress">
        <div style={{
          width: "100%",
          textAlign: "center"
        }}>
          <div>
            <p style={{
              fontSize: "30px",
              color: "rgba(2, 79, 167, 0.538)"
            }}>
              How IT Works
            </p>

            <p style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginTop: "25px"
            }}>
              OUR WORK PROGRESS
            </p>
          </div>
          <div style={{
            width: "98%",
            marginTop: "30px"
          }}>
            <Stack
              direction="row"
              spacing={2}
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
                margin: "10px"
              }}
            >
              <div style={{
                width: "260px", textAlign: "center",

              }}>
                <center>
                  <div style={{
                    height: "110px",
                    width: "120px",
                    backgroundColor: "rgb(1, 61, 129)",
                    borderRadius: "20%",
                    boxShadow: "1px 5px 20px  rgb(1, 61, 129)"
                  }}>
                    <img id="from" src={login}
                      height="90px"
                      width="90px"
                      style={{ marginTop: "10px" }}
                    >
                    </img>
                  </div>
                </center>
                <p style={{
                  fontSize: "20px",
                  color: "rgb(1, 61, 129)",
                  marginTop: "20px"
                }}>
                  LOGIN/SIGNUP
                </p>
                <p style={{
                  fontSize: "15px",
                  color: "rgba(2, 79, 167, 0.538)",
                  marginTop: "10px"
                }}>
                  Login To Oceanmtech DMT Portal With
                </p>
                <p style={{
                  fontSize: "15px",
                  color: "rgba(2, 79, 167, 0.538)"
                }}>
                  Your Mobile Number
                </p>

              </div>
              <div style={{ width: "10px", marginLeft: "-100px" }}>
                <svg  >
                  <path id="curve"
                    d={curve}
                    stroke="rgba(2, 79, 167, 0.538)"
                    stroke-width="3"
                    stroke-linecap="butt"
                    stroke-linejoin="round"
                    stroke-dasharray="10,10"
                    fill="none"
                  ></path>
                </svg>
              </div>

              <div style={{
                width: "380px",
                textAlign: "center",
                marginTop: "80px",
                marginBottom: "20px"
              }}>

                <center>
                  <div

                    style={{
                      height: "110px",
                      width: "120px",
                      backgroundColor: "rgb(1, 61, 129)",
                      borderRadius: "20%",
                      boxShadow: "1px 5px 20px  rgb(1, 61, 129)"
                    }}>
                    <img src={image}
                      height="90px"
                      width="90px"
                      style={{
                        marginTop: "10px",
                      }}
                    >
                    </img>
                  </div>
                </center>
                <p style={{
                  fontSize: "20px",
                  color: "rgb(1, 61, 129)",
                  marginTop: "20px"
                }}>
                  SELECT CREATIVES
                </p>
                <p style={{
                  fontSize: "15px",
                  color: "rgba(2, 79, 167, 0.538)",
                  marginTop: "10px"
                }}>
                  We Have Wide Range Of Categories To Choose
                </p>
                <p style={{
                  fontSize: "15px",
                  color: "rgba(2, 79, 167, 0.538)"
                }}>
                  Best Marketing Post
                </p>

              </div>


              <div style={{ width: "10px", marginLeft: "-150px", marginRight: "40px" }}>
                <svg  >
                  <path id="curve"
                    d={curve1}
                    stroke="rgba(2, 79, 167, 0.538)"
                    stroke-width="3"
                    stroke-linecap="butt"
                    stroke-linejoin="round"
                    stroke-dasharray="10,10"
                    fill="none"
                  ></path>
                </svg>
              </div>
              <div style={{
                width: "280px",
                textAlign: "center"
              }}>
                <center>
                  <div style={{
                    height: "110px",
                    width: "120px",
                    backgroundColor: "rgb(1, 61, 129)",
                    borderRadius: "20%",
                    boxShadow: "1px 5px 20px  rgb(1, 61, 129)"
                  }}>
                    <img src={download}
                      height="90px"
                      width="90px"
                      style={{ marginTop: "10px" }}
                    >
                    </img>
                  </div>
                </center>
                <p style={{
                  fontSize: "20px",
                  color: "rgb(1, 61, 129)",
                  marginTop: "20px"
                }}>
                  DOWNLOAD & SHARE
                </p>
                <p style={{
                  fontSize: "15px",
                  color: "rgba(2, 79, 167, 0.538)",
                  marginTop: "10px"
                }}>
                  Download And Share Ir On All Your Social
                </p>
                <p style={{
                  fontSize: "15px",
                  color: "rgba(2, 79, 167, 0.538)"
                }}>
                  Media/Digital Platforms
                </p>

              </div>


            </Stack>
          </div>
        </div>
      </section>
      <section id="Feature">
        <Feature />
      </section>
    </>
  )
}

export default Projects;