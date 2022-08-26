//Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import { Stack } from "@mui/material";
import mobile2 from "./Image/mobile2.png"
import pin from "./Image/pin.png"
import otp2image from "./Image/otp2image.png"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
//import TextField from '@mui/material/TextField';


const Navbar = ({ navClass, linkClassName }) => (
  <NavComponent navClass={navClass}
    linkClassName={linkClassName}
  />
);

export const NavComponent = ({ onClick, navClass, linkClassName }) => {

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [HandleOtp1Open, setHandleOtp1Open] = React.useState(false);
  const HandleOtp1SetOpen = () => {
    setHandleOtp1Open(true);
  }
  const HandleOtp1SetClose = () => {
    setHandleOtp1Open(false);
  };


  const [HandleOtp2Open, setHandleOtp2Open] = React.useState(false);
  const HandleOtp2SetOpen = () => {
    setHandleOtp2Open(true);
  }
  const HandleOtp2SetClose = () => {
    setHandleOtp2Open(false);
  };

  const [HandlePin1Open, setHandlePin1Open] = React.useState(false);
  const HandlePin1SetOpen = () => {
    setHandlePin1Open(true);
  }
  const HandlePin1SetClose = () => {
    setHandlePin1Open(false);
  };


  const [HandlePin2Open, setHandlePin2Open] = React.useState(false);
  const HandlePin2SetOpen = () => {
    setHandlePin2Open(true);
  }
  const HandlePin2SetClose = () => {
    setHandlePin2Open(false);
  };

  const [HandleFPinOpen, setHandleFPinOpen] = React.useState(false);
  const HandleFPinSetOpen = () => {
    setHandleFPinOpen(true);
  }
  const HandleFPinSetClose = () => {
    setHandleFPinOpen(false);
  };

  const [BOpen, BsetOpen] = React.useState(false);
  const BackOpen = () => {
    BsetOpen(true);
  }
  const BackClose = () => {
    BsetOpen(false);
  };

  return (
    <nav className={navClass}>

      <Link to="Daily"
        smooth={true}
        className={linkClassName}
        onClick={onClick}
        style={{ marginTop: "-5px" }}
      >
        Daily
        <KeyboardArrowDownIcon
          style={{
            height: "25px",
            color: "white",
            paddingTop: "10px",
          }} />
      </Link>

      <Link to="Festival"
        smooth={true}
        className={linkClassName}
        onClick={onClick}
        style={{ marginTop: "-5px" }}
      >
        Festivals
        <KeyboardArrowDownIcon
          style={{
            height: "25px",
            color: "white",
            paddingTop: "10px",
          }} />
      </Link>
      <Link to="Days"
        smooth={true}
        className={linkClassName}
        onClick={onClick}
        style={{ marginTop: "-5px" }}
      >
        Days
        <KeyboardArrowDownIcon
          style={{
            height: "25px",
            color: "white",
            paddingTop: "10px",
          }} />
      </Link>
      <Link to="Business Category"
        smooth={true}
        className={linkClassName}
        onClick={onClick}
        style={{ marginTop: "-5px" }}
      >
        Business Categories
        <KeyboardArrowDownIcon
          style={{
            height: "25px",
            color: "white",
            paddingTop: "10px",
          }} />
      </Link>
      <Button variant='contained' style={{
        color: "rgb(1, 61, 129)",
        backgroundColor: "white",
        fontFamily: "sans-serif",
        fontSize: "1rem",
        textTransform: "none",
        marginTop: "-5px"
      }} onClick={handleClickOpen}
      >
        <strong>
          Sign Up | Login
        </strong>

      </Button>



      <Dialog open={open} onClose={handleClose} style={{ marginTop: "100px" }}>
        <div style={{ margin: "15px" }}>
          <DialogTitle>
            <p style={{
              fontSize: "30px",
              color: "rgb(1, 61, 129)",
              fontWeight: "bold"
            }}>
              Login/Sign Up
            </p>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <p style={{
                fontSize: "15px",
                color: "rgb(1, 61, 129)",
                marginTop: "20px"
                // fontWeight: "bold"
              }}>
                Mobile Number
              </p>
            </DialogContentText>

            <Input
              variant="outlined"
              name="Batch"
              type="text"
              //  value={number || ""}
              //  onChange={(e) => setNumber(e.target.value)}
              //  className="form-control w-75"
              placeholder="Enter Your Mobile Number"
              style={{
                padding: 10,
                height: "70px",
                width: "500px",
                marginTop: "5px",
                fontSize: "20px",
                color: "rgb(1, 61, 129)",
                border: "solid",
                borderColor: "rgb(1, 61, 129)"
              }}
              startAdornment={
                <InputAdornment position="start">
                  <img
                    src=
                    "https://media.istockphoto.com/photos/indian-flag-badge-picture-id495617382?k=20&m=495617382&s=612x612&w=0&h=19bql2Euoq_JELDmJ2zrxQHrD3eidNHMHWdXacUNmKM="
                    style={{
                      height: 30,
                      width: 30,
                      borderRadius: "50%",
                      // border: "3px solid grey",
                    }}
                  />
                  <select
                    disable="true"
                    Value="dfgdfgfdgdf"
                    style={{
                      width: "90px",
                      color: "rgb(1, 61, 129)",
                      //  backgroundColor: "rgb(1, 61, 129)",
                      border: "solid",
                      borderColor: "white",
                      fontSize: "12px",
                      fontWeight: "bold",
                      marginLeft: "10px",
                      height: "50px",
                      pointerEvents: "none"
                    }}>
                    <option>India +91  </option>
                  </select>
                </InputAdornment>}
            />
            <div style={{ marginTop: "20px" }}>
              <p style={{
                fontFamily: "sans-serif",
                fontSize: "0.9rem",
                color: "rgba(2, 79, 167, 0.538)"
              }}>
                By Signup, you confirm that you accept our <font style={{ color: "rgb(1, 61, 129)" }}> Terms and conditions </font> and
              </p>
              <p style={{
                fontFamily: "sans-serif",
                fontSize: "0.9rem",
                color: "rgba(2, 79, 167, 0.538)",
                marginTop: "5px"
              }}>
                have read or <font style={{ color: "rgb(1, 61, 129)" }}>Privacy Policy</font>
              </p>
            </div>
          </DialogContent>
          <DialogActions>
            <div style={{
              display: "flex",
              justifyContent: "left",
              height: "70px",
              width: "600px",
              marginTop: "30px",
              marginLeft: "30px"
            }}>
              <Button
                onClick={() => {
                  handleClose()
                  //   BackOpen()
                  HandleOtp1SetOpen()
                }}
                variant="contained"
                style={{
                  height: "50px",
                  width: "120px"
                }}
              >
                send otp
              </Button>
            </div>
          </DialogActions>
        </div>
      </Dialog>

      {/*  back side dialog  */}
      <Dialog
        open={BOpen}
        onClose={BackClose}
        style={{
          marginTop: "140px",
          marginLeft: "450px",
          height: "400px",
          width: "550px",
          backgroundColor: "white"
        }}>
      </Dialog>


      {/* otp send */}
      <Dialog
        open={HandleOtp1Open}
        onClose={HandleOtp1SetClose}
        style={{
          marginTop: "100px"
        }}>
        <div style={{
          margin: "15px",
          textAlign: "center",
          overflow: "hidden"
        }}>
          <DialogTitle>
            <p style={{
              fontSize: "30px",
              color: "rgb(1, 61, 129)",
              fontWeight: "bold"
            }}>
              OTP Varification
            </p>
            <p style={{
              fontSize: "20px",
              color: "rgb(1, 61, 129)",

            }}>
              Enter otp sent to +91-9099814643
            </p>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <img src={mobile2}
                height="70px"
                width="40px"
                style={{ marginTop: "10px" }} />
              <p style={{
                fontSize: "20px",
                color: "rgb(1, 61, 129)",
                marginBottom: "20px"
              }}>
                Enter 6 digit code
              </p>
            </DialogContentText>

            <Stack
              direction="row"
              spacing={2}
              style={{
                width: "500px",
                display: "flex",
                justifyContent: "center"
              }}>
              <input
                type='text'
                className='otpinput'
              />
              <input
                type='text'
                className='otpinput'
              />
              <input
                type='text'
                className='otpinput'
              />
              <input
                type='text'
                className='otpinput'
              />
              <input
                type='text'
                className='otpinput'
              />
              <input
                type='text'
                className='otpinput'
              />
            </Stack>

          </DialogContent>
          <DialogActions style={{
            width: "500px",
            display: "flex",
            justifyContent: "center",
            marginLeft: "22px"
          }}>

            <Button
              onClick={() => {
                HandleOtp1SetClose()
                HandleOtp2SetOpen()
              }}
              variant="contained"
              style={{
                height: "50px",
                width: "91%",
                backgroundColor: "rgb(1, 61, 129)"
              }}
            >
              submit
            </Button>

          </DialogActions>
          <div style={{ marginTop: "20px", marginBottom: "30px" }}>
            <p style={{
              fontFamily: "sans-serif",
              fontSize: "1.1rem",
              color: "lightgray",
              fontWeight: "bold"
            }}>
              Didn't Receive the OTP?  <font style={{ color: "rgb(1, 61, 129)" }}>00:25</font>
            </p>

          </div>

        </div>
      </Dialog>


      {/*otp sent2 */}
      <Dialog
        open={HandleOtp2Open}
        onClose={HandleOtp2SetClose}
        style={{
          marginTop: "100px"
        }}>
        <div
          style={{
            textAlign: "center",
            overflow: "hidden"
          }}>
          <DialogTitle>
            <p style={{
              fontSize: "30px",
              color: "rgb(1, 61, 129)",
              fontWeight: "bold"
            }}>
              Enter Who Refer You
            </p>

          </DialogTitle>
          <DialogContent>
            <DialogContentText>

              <img src={otp2image}
                height="100px"
                width="120px"
                style={{ marginTop: "10px" }} />

              <p style={{
                fontSize: "20px",
                color: "rgb(1, 61, 129)",
                marginBottom: "20px"
              }}>
                Enter 6 digit code
              </p>
            </DialogContentText>

            <Stack
              direction="row"
              spacing={2}
              style={{
                width: "500px",
                display: "flex",
                justifyContent: "center"
              }}>
              <input
                type='text'
                className='otpinput'
              />
              <input
                type='text'
                className='otpinput'
              />
              <input
                type='text'
                className='otpinput'
              />
              <input
                type='text'
                className='otpinput'
              />
              <input
                type='text'
                className='otpinput'
              />
              <input
                type='text'
                className='otpinput'
              />
            </Stack>

          </DialogContent>
          <DialogActions style={{
            width: "500px",
            display: "flex",
            justifyContent: "center",
            marginLeft: "22px"
          }}>

            <Button
              onClick={() => {
                //  handleClose()
                HandleOtp2SetClose()
                HandlePin1SetOpen()
              }}
              variant="contained"
              style={{
                height: "50px",
                width: "91%",
                backgroundColor: "rgb(1, 61, 129)"
              }}
            >
              submit
            </Button>

          </DialogActions>
          <div style={{ marginTop: "2px", marginBottom: "10px" }}>
            <p style={{
              fontFamily: "sans-serif",
              fontSize: "1.1rem",
              color: "lightgray",
              fontWeight: "bold"
            }}>
              skip
            </p>

          </div>

        </div>
      </Dialog>


      {/*pin sent */}
      <Dialog
        open={HandlePin1Open}
        onClose={HandlePin1SetClose}
        style={{
          marginTop: "100px"
        }}>
        <div style={{
          margin: "15px",
          textAlign: "center",
          overflow: "hidden"
        }}>
          <DialogTitle>
            <p style={{
              fontSize: "35px",
              color: "rgb(1, 61, 129)",
              fontWeight: "bold"
            }}>
              Create a PIN
            </p>

          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <img src={pin}
                height="70px"
                width="70px"
                style={{ marginTop: "10px" }} />
              <p style={{
                fontSize: "15px",
                color: "rgb(1, 61, 129)",
                marginBottom: "20px"
              }}>
                This PIN will be used to unlock your app
              </p>
            </DialogContentText>

            <Stack
              direction="row"
              spacing={2}
              style={{
                width: "500px",
                display: "flex",
                justifyContent: "center"
              }}>
              <p style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "sans-serif",
                color: "rgb(1, 61, 129)",
                fontWeight: "bold",
                marginRight: "20px"
              }}>
                ENTER YOUR PIN
              </p>
              <input
                type='text'
                className='otpinput'
              />
              <input
                type='text'
                className='otpinput'
              />
              <input
                type='text'
                className='otpinput'
              />
              <input
                type='text'
                className='otpinput'
              />

            </Stack>

            <Stack
              direction="row"
              spacing={2}
              style={{
                marginTop: "20px",
                width: "500px",
                display: "flex",
                justifyContent: "center"
              }}>
              <p style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "sans-serif",
                color: "rgb(1, 61, 129)",
                fontWeight: "bold"
              }}>
                CONFIRM YOUR PIN
              </p>
              <input
                type='text'
                className='otpinput'
              />
              <input
                type='text'
                className='otpinput'
              />
              <input
                type='text'
                className='otpinput'
              />
              <input
                type='text'
                className='otpinput'
              />

            </Stack>

          </DialogContent>
          <DialogActions style={{
            width: "500px",
            display: "flex",
            justifyContent: "center",
            marginLeft: "22px"
          }}>

            <Button
              onClick={() => {
                HandlePin1SetClose()
                HandlePin2SetOpen()
              }}
              variant="contained"
              style={{
                height: "50px",
                width: "91%",
                backgroundColor: "rgb(1, 61, 129)"
              }}
            >
              Save
            </Button>

          </DialogActions>
        </div>
      </Dialog>

      {/*pin sent 2*/}
      <Dialog
        open={HandlePin2Open}
        onClose={HandlePin2SetClose}
        style={{
          marginTop: "100px"
        }}>
        <div style={{
          margin: "15px",
          textAlign: "center",
          overflow: "hidden"
        }}>
          <DialogTitle>
            <p style={{
              fontSize: "35px",
              color: "rgb(1, 61, 129)",
              fontWeight: "bold"
            }}>
              Enter PIN
            </p>

          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <img src={pin}
                height="70px"
                width="70px"
                style={{ marginTop: "10px" }} />
              <p style={{
                fontSize: "15px",
                color: "rgb(1, 61, 129)",
                marginBottom: "20px"
              }}>
                Please enter your PIN
              </p>
            </DialogContentText>

            <Stack
              direction="row"
              spacing={2}
              style={{
                width: "500px",
                display: "flex",
                justifyContent: "center"
              }}>

              <input
                type='text'
                className='otpinput'
              />
              <input
                type='text'
                className='otpinput'
              />
              <input
                type='text'
                className='otpinput'
              />
              <input
                type='text'
                className='otpinput'
              />

            </Stack>


          </DialogContent>
          <DialogActions style={{
            width: "500px",
            display: "flex",
            justifyContent: "center",
            marginLeft: "22px"
          }}>

            <Button
              onClick={() => {
                // HandlePin1SetClose()
                ///   HandlePin2SetOpen()
              }}
              variant="contained"
              style={{
                height: "50px",
                width: "91%",
                backgroundColor: "rgb(1, 61, 129)"
              }}
            >
              submit
            </Button>

          </DialogActions>

          <div style={{
            marginTop: "10px",
            marginBottom: "15px"
          }}>
            <p style={{
              fontFamily: "sans-serif",
              fontSize: "1.1rem",
              color: "rgb(1, 61, 129)",
              cursor: "pointer"
            }}
              onClick={() => {
                HandlePin2SetClose()
                HandleFPinSetOpen()
              }}
            >
              Forgot your PIN?
            </p>

          </div>

        </div>
      </Dialog>


      {/*Forgot pin sent */}
      <Dialog
        open={HandleFPinOpen}
        onClose={HandleFPinSetClose}
        style={{
          marginTop: "100px"
        }}>
        <div style={{
          margin: "15px",
          textAlign: "center",
          overflow: "hidden"
        }}>
          <DialogTitle>
            <p style={{
              fontSize: "35px",
              color: "rgb(1, 61, 129)",
              fontWeight: "bold"
            }}>
              Forgot Your PIN
            </p>

          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <img src={pin}
                height="70px"
                width="70px"
                style={{ marginTop: "10px" }} />
              <p style={{
                fontSize: "15px",
                color: "rgb(1, 61, 129)",

              }}>
                Provide Your account's mobile number for
              </p>
              <p style={{
                fontSize: "15px",
                color: "rgb(1, 61, 129)",
                marginBottom: "20px"
              }}>
                which you want to reset your PIN!
              </p>
            </DialogContentText>

            <TextField
            autoFocus
            //  sx={{ height: "80px" }}
            //  inputProps={{ style: { fontFamily: 'nunito', color: 'navy'}}}
              InputProps={{ sx: { height: "50px"} }}
              label="Mobile Number"
              variant="outlined"
              style={{
                width: "450px",
                fontSize: "15px"
              }}
            />

          </DialogContent>
          <DialogActions style={{
            width: "500px",
            display: "flex",
            justifyContent: "center",
            //marginLeft: "5px"
          }}>

            <Button
              onClick={() => {
                // HandlePin1SetClose()
                ///   HandlePin2SetOpen()
              }}
              variant="contained"
              style={{
                height: "50px",
                width: "91%",
                backgroundColor: "rgb(1, 61, 129)"
              }}
            >
              continue
            </Button>

          </DialogActions>

        </div>
      </Dialog>
    </nav>
  )
}
export default Navbar;