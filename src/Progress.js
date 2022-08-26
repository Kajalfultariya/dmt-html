import React, { useRef } from 'react';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import login from "./Image/login.png"
import image from "./Image/image.png"
import download from "./Image/download.png"
import Feature from './Feature';

const Projects = () => {
  const d1 = useRef();
  const d2 = useRef();

 
  const getOffset = (el) => {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.pageXOffset,
      top: rect.top + window.pageYOffset,
      width: rect.width || el.offsetWidth,
      height: rect.height || el.offsetHeight
    };
  }

  const connect = (div1, div2, color, thickness) => {
    const off1 = getOffset(div1);
    const off2 = getOffset(div2);

    const x1 = off1.left + off1.width;
    const y1 = off1.top + off1.height;

    const x2 = off2.left + off2.width;
    const y2 = off2.top;

    const length = Math.sqrt(((x2 - x1) * (x2 - x1)) + ((y2 - y1) * (y2 - y1)));

    const cx = ((x1 + x2) / 2) - (length / 2);
    const cy = ((y1 + y2) / 2) - (thickness / 2);

    const angle = Math.atan2((y1 - y2), (x1 - x2)) * (60 / Math.PI);

    const htmlLine = "<div style='padding:0px; margin:0px; height:" + thickness + "px; background-color:" + color + "; line-height:1px; position:absolute; left:" + cx + "px; top:" + cy + "px; width:" + length + "px; -moz-transform:rotate(" + angle + "deg); -webkit-transform:rotate(" + angle + "deg); -o-transform:rotate(" + angle + "deg); -ms-transform:rotate(" + angle + "deg); transform:rotate(" + angle + "deg);' />";

    document.body.innerHTML += htmlLine;
  
  }
 // const d1 = document.getElementById('d1')
//  const d2 = document.getElementById('d2')

 

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

          {/* <div  style={{display:"inline-block"}}>
            
            <div style={{height:"100px" ,width:"100px",backgroundColor:"black"}}></div>
            <div   style={{
              width: "120px",
              height: "60px",
              zIndex: "-1",
              background: "transparent",
              border: "none",
              borderBottom: "dashed 2px orange",
              padding: "40px 40px",
              borderRadius: "50%",
              margin: "20px -50px 0",

            }}></div>
            <div style={{height:"100px" ,width:"100px",backgroundColor:"black",paddingTop:"50px"}}
          ></div>
            <div   style={{
              width: "120px",
              height: "60px",
              zIndex: "-1",
              background: "transparent",
              border: "none",
              borderTop: "dashed 2px orange",
              padding: "40px 40px",
              borderRadius: "50%",
              margin: "20px -50px 0",

            }}></div>
            <div style={{height:"100px" ,width:"100px",backgroundColor:"black"}}></div>
          </div>
          */}
      {/*}    <div ref={d1} style={{ width: "20px", position: "absolute", top: "150px", left: "150px" }}>
            foo
          </div>

          <div ref={d2} style={{ width: "20px", position: "absolute", top: "300px", left: "300px" }}>
            bar
          </div>

          {
             d1.current ?
             connect(d1.current, d2.current, 'pink', 5) : ""
          
          }
        */}
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

                  }}>
                    <img src={login}
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

              <div style={{
                width: "380px",
                textAlign: "center",
                marginTop: "80px",
                marginBottom: "20px"
              }}>
                <center>
                  <div style={{
                    height: "110px",
                    width: "120px",
                    backgroundColor: "rgb(1, 61, 129)",
                    borderRadius: "20%",

                  }}>
                    <img src={image}
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