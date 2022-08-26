//Navbar.js
import React from 'react';
import { Link } from 'react-scroll';
import { Stack } from "@mui/material";
import mobile2 from "./Image/mobile2.png"
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

  const [BillPaySixopen, BillPaySixsetOpen] = React.useState(false);
  const BillPaySixClickOpen = () => {
    BillPaySixsetOpen(true);
  }
  const BillPaySixClose = () => {
    BillPaySixsetOpen(false);
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
                  BillPaySixClickOpen()
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
        style={{ marginTop: "140px", marginLeft: "450px", height: "400px", width: "550px", backgroundColor: "white" }}>
      </Dialog>


      {/* otp send */}
      <div >
        <Dialog
          open={BillPaySixopen}
          onClose={BillPaySixClose}
          style={{ //marginTop: "100px" 
          }}>
          <div style={{ margin: "15px", textAlign: "center", overflow: "hidden" }}>
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
                <img src={mobile2} height="70px" width="40px" style={{ marginTop: "10px" }} />
                <p style={{
                  fontSize: "20px",
                  color: "rgb(1, 61, 129)",
                  marginBottom: "20px"
                }}>
                  Enter 6 digit code
                </p>
              </DialogContentText>

              <Stack direction="row" spacing={2} style={{ width: "500px", display: "flex", justifyContent: "center" }}>
                <input
                  type='text'
                  style={{
                    border: "2px solid #dddddd",
                    // padding: "0.575rem 0.75rem",
                    height: "60px",
                    width: "60px"
                  }}
                />
                <input
                  type='text'
                  style={{
                    border: "2px solid #dddddd",
                    // padding: "0.575rem 0.75rem",
                    height: "60px",
                    width: "60px"
                  }}
                />
                <input
                  type='text'
                  style={{
                    border: "2px solid #dddddd",
                    // padding: "0.575rem 0.75rem",
                    height: "60px",
                    width: "60px"
                  }}
                />
                <input
                  type='text'
                  style={{
                    border: "2px solid #dddddd",
                    // padding: "0.575rem 0.75rem",
                    height: "60px",
                    width: "60px"
                  }}
                />
                <input
                  type='text'
                  style={{
                    border: "2px solid #dddddd",
                    // padding: "0.575rem 0.75rem",
                    height: "60px",
                    width: "60px"
                  }}
                />
                <input
                  type='text'
                  style={{
                    border: "2px solid #dddddd",
                    // padding: "0.575rem 0.75rem",
                    height: "60px",
                    width: "60px"
                  }}
                />
              </Stack>

            </DialogContent>
            <DialogActions style={{ width: "500px", display: "flex", justifyContent: "center", marginLeft: "22px" }}>

              <Button
                onClick={() => {
                  handleClose()
                  BillPaySixClickOpen()
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
      </div >
    </nav>
  )
}
export default Navbar;