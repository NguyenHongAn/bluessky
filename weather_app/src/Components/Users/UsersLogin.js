import React from "react";
import { Grid, Button, TextField, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import classnames from "classnames";
import Axios from "axios";

const style = () => ({
  root: {},
  loginContainer: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  input_group: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 15,
  },
  mb_20: {
    marginBottom: 20,
  },
  w_80: {
    width: "80%",
  },
  center_stuff_by_margin: {
    margin: "0 auto",
  },

  p_10: {
    padding: 10,
  },
  p_5: {
    padding: 5,
  },
});

// Custom text field
const UserTextField = withStyles({
  root: {
    "& label": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "black",
    },
    "& .Mui-focused": {
      // Khi focus thì black, không thì white
      "& input": {
        color: "black!important",
      },
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottomColor: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
  },
})(TextField);

// button custom
const SubmitButton = withStyles((theme) => ({
  root: {
    color: "white",
    fontFamily: "Baloo Tammudu 2, cursive, sans-serif",
    fontWeight: 400,
    fontSize: 20,
    textTransform: "initial",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "&:active": {
      color: "black",
    },
  },
}))(Button);

let log = console.log;

class UsersLogin extends React.Component {
  state = {
    username: "",
    password: "",
    isloginSuccess: false,
  };
  _isMount = false;
  // handle change login
  handleUsersLogin = async (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    const { onLogin } = this.props;

    // log(this.props);
    // log(username, password);
    // onLogin();

    const devURL = "http://localhost:5000";
    // const productionsURL = "https://bluessky.herokuapp.com";

    await Axios.post(`${devURL}/users/login`, { username, password })
      .then((rs) => {
        const { data } = rs;
        const { error } = data;
        //log(data);
        if (data) {
          const dataSaveToLocalStorage = {
            token: data.token,
            username: data.user.username,
            password: data.user.password,
            email: data.user.email,
            _id: data.user._id,
          };

          // log(dataSaveToLocalStorage);
          localStorage.setItem("userInfor", JSON.stringify(data));
        }

        this.setState({
          isloginSuccess: true,
        });
        // Nếu get được user trong DB thì thành công
        // log("Login thanh cong!");
        //   log(data);
        if (error) {
          throw new Error(error);
        }

        onLogin(this.state.isloginSuccess);
      })
      .catch((er) => {
        this.setState({
          isloginSuccess: false,
        });
        // Ngược lại thất bại
        // log("Login that bai !");
        alert(er);
        onLogin(this.state.isloginSuccess);

        //log(er.message);
      });
  };

  // handle change username
  handleChangeUsersname = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  // handle change password
  handleChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  // watch lifecirle

  // componentDidMount = () => {
  //   log("Userlogin did mount");
  // };

  componentDidUpdate = () => {
    // log("userlogin did update - setstate");
    this._isMount = true;
  };

  componentWillUnmount = () => {
    this._isMount = false;
  };
  render() {
    const { classes } = this.props;
    return (
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        height="50vh"
      >
        <Grid container id="UsersLogin" className={classes.loginContainer}>
          <form
            className={classes.input_group}
            onSubmit={this.handleUsersLogin}
          >
            <UserTextField
              label="Username"
              className={classes.mb_20}
              onChange={this.handleChangeUsersname}
            />
            <UserTextField
              label="Password"
              className={classes.mb_20}
              type="password"
              onChange={this.handleChangePassword}
            />
            <SubmitButton
              variant="contained"
              color="primary"
              className={classnames(
                classes.w_80,
                classes.center_stuff_by_margin,
                classes.p_5
              )}
              type="submit"
            >
              Login
            </SubmitButton>
          </form>
        </Grid>
      </Box>
    );
  }
}

export default withStyles(style)(UsersLogin);
