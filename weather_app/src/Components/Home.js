import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchInput from "./SearchInput";
import Suggestions from "./Suggestions";
import SearchResult from "./SearchResult";
// import Axios from "axios";
const usestyles = makeStyles((theme) => ({
  root: {},
  home_background: {
    height: "100%",
  },
  cl_white: {
    color: "white",
  },
  search_box: {
    height: "10%",
    padding: "15px",
  },
  result_box: {
    height: "90%",
  },
  //
  d_flex_end: {
    display: "flex",
    justifyContent: "flex-end",
  },
  d_flex_center: {
    display: "flex",
    justifyContent: "center",
  },
  time_and_icon: {
    alignItems: "center",
  },
  weather_status_icon: {
    height: 25,
    width: 25,
  },
  clock_icon: {
    height: 25,
    width: 25,
  },
  timer: {
    display: "flex",
  },

  mr_10: {
    marginRight: 10,
  },
  homeContent: {
    overflow: "auto",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: "20px 0",
    backgroundColor: "transparent",
  },
}));

function RealTimeClock() {
  let clock = new Date();
  let hour = clock.getHours();
  let minute = clock.getMinutes();
  let second = clock.getSeconds();
  return { hour, minute, second };
}

// let log = console.log;
function Home(props) {
  const classes = usestyles();
  const [completed, setCompleted] = React.useState(0);
  React.useEffect(() => {
    function progress() {
      setCompleted((oldCompleted) => {
        if (oldCompleted === 100) {
          return 0;
        }
        const diff = Math.random() * 15; // không biết lấy độ chính xác của axios
        return Math.min(oldCompleted + diff, 100);
      });
    }

    const timer = setInterval(progress, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // log(this.state.foreData);
  let timer = RealTimeClock();

  // handle status icon
  // Axios to "http://localhost:5000";
  // const handleStatusIcon = async () => {
  //   // const devURL = "http://localhost:5000";
  //   // const data = {};
  //   // await Axios.get(`${devURL}/weather/status`)
  //   //   .then((icon) => {
  //   //     data = icon;
  //   //   })
  //   //   .catch((er) => log(er));
  //   // return data.map((data) => {
  //   //   return <div>{data}</div>;
  //   // });
  // };

  return (
    <Box
      display="flex"
      justifyContent="around"
      flexDirection="column"
      alignItems="center"
      className={classes.home_background}
    >
      <Box
        className={classes.cl_white + " " + classes.search_box}
        width="80%"
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
      >
        <SearchInput />
      </Box>
      <Box className={classes.cl_white + " " + classes.result_box} width="100%">
        <Grid container className={classes.homeContent}>
          <Grid
            className={classes.d_flex_center + " " + classes.time_and_icon}
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
          >
            <div className={classes.timer}>
              <div
                id="time_icon"
                className={classes.mr_10 + " " + classes.clock_icon}
              >
                <svg viewBox="0 0 443.294 443.294">
                  <path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z" />
                  <path d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z" />
                </svg>
              </div>
              <div id="real-time-clock">
                {timer.hour + ":" + timer.minute + ":" + timer.second}
              </div>
            </div>
          </Grid>
          <Grid
            className={classes.d_flex_center + " " + classes.time_and_icon}
            item
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
          >
            <div className={classes.weather_status_icon}>
              <svg
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 399.079 399.079"
              >
                <g>
                  <g>
                    <path
                      d="M371.84,100.04c-2.01-3.457-6.443-4.63-9.9-2.62l-35.36,20.44c-3.457,2.01-4.63,6.443-2.62,9.9
			c2.01,3.457,6.443,4.63,9.9,2.62l35.36-20.44C372.677,107.929,373.85,103.497,371.84,100.04z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M369.22,289.18l-35.36-20.44c-3.457-2.01-7.89-0.837-9.9,2.62c-2.01,3.457-0.837,7.89,2.62,9.9l35.36,20.44
			c3.457,2.01,7.89,0.837,9.9-2.62C373.85,295.622,372.677,291.19,369.22,289.18z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M200.099,342.62c-4.01-0.298-7.501,2.711-7.799,6.721c-0.027,0.359-0.027,0.719,0,1.078v40.84
			c-0.298,4.01,2.711,7.501,6.721,7.799s7.501-2.711,7.799-6.721c0.027-0.359,0.027-0.719,0-1.078v-40.84
			C207.117,346.41,204.108,342.918,200.099,342.62z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M72.5,117.86L37.14,97.42c-3.457-2.01-7.89-0.837-9.9,2.62c-2.01,3.457-0.837,7.89,2.62,9.9l35.36,20.44
			c3.457,2.01,7.89,0.837,9.9-2.62C77.13,124.302,75.957,119.87,72.5,117.86z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M200.099,0.02c-4.01-0.298-7.501,2.711-7.799,6.721c-0.027,0.359-0.027,0.719,0,1.078v40.84
			c0.022,3.989,3.251,7.218,7.24,7.24c4.021,0,7.28-3.259,7.28-7.28V7.82C207.117,3.81,204.108,0.318,200.099,0.02z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M130.34,65.22l-20.4-35.36c-2.01-3.457-6.443-4.63-9.9-2.62c-3.457,2.01-4.63,6.443-2.62,9.9l20.4,35.36
			c2.01,3.457,6.443,4.63,9.9,2.62C131.177,73.109,132.35,68.677,130.34,65.22z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M200.618,134.94c-0.359-0.027-0.719-0.027-1.078,0c-35.678,0-64.6,28.922-64.6,64.6c0,4.021,3.259,7.28,7.28,7.28
			c4.005-0.022,7.24-3.275,7.24-7.28c-0.022-27.636,22.364-50.058,50-50.08c0.027,0,0.053,0,0.08,0
			c4.01,0.298,7.501-2.711,7.799-6.721S204.628,135.237,200.618,134.94z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M397.98,198.98c-0.267-3.595-3.125-6.454-6.721-6.721h-40.84c-4.01-0.298-7.501,2.711-7.799,6.721
			s2.711,7.501,6.721,7.799c0.359,0.027,0.72,0.027,1.079,0h40.84C395.269,206.482,398.278,202.99,397.98,198.98z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M49.738,192.3c-0.359-0.027-0.719-0.027-1.078,0H7.82c-4.01,0.298-7.019,3.79-6.721,7.799
			c0.267,3.595,3.125,6.454,6.721,6.721h40.84c4.01,0.298,7.501-2.711,7.799-6.721C56.757,196.089,53.748,192.597,49.738,192.3z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M199.569,92.7c-59.006-0.008-106.846,47.819-106.855,106.825c-0.004,28.347,11.258,55.534,31.305,75.575
			c20.009,20.059,47.188,31.316,75.52,31.28c59.006,0.008,106.847-47.819,106.855-106.825S258.575,92.708,199.569,92.7z
			 M264.819,264.94c-36.053,36.053-94.507,36.053-130.56,0c-17.343-17.343-27.072-40.874-27.04-65.4
			c-0.035-24.492,9.697-47.987,27.04-65.28v0.12c36.053-36.053,94.507-36.053,130.56,0
			C300.873,170.433,300.873,228.887,264.819,264.94z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M301.678,361.972c-0.006-0.011-0.012-0.022-0.019-0.032l-20.44-35.36c-2.01-3.457-6.443-4.63-9.9-2.62
			c-3.457,2.01-4.63,6.443-2.62,9.9l20.44,35.36c2.002,3.453,6.422,4.634,9.88,2.64
			C302.484,369.863,303.675,365.436,301.678,361.972z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M299.28,27.24c-3.457-2.01-7.89-0.837-9.9,2.62l-20.44,35.36c-2.024,3.449-0.868,7.885,2.58,9.908
			c0.007,0.004,0.013,0.008,0.02,0.012h0c3.454,2.014,7.887,0.847,9.901-2.608c0.006-0.011,0.013-0.022,0.019-0.032l20.44-35.36
			C303.91,33.682,302.737,29.25,299.28,27.24z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M127.76,323.96c-3.457-2.01-7.89-0.837-9.9,2.62l-20.44,35.36c-2.01,3.457-0.837,7.89,2.62,9.9s7.89,0.837,9.9-2.62
			l20.44-35.36C132.39,330.402,131.217,325.97,127.76,323.96z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M75.12,271.32c-2.01-3.457-6.443-4.63-9.9-2.62l-35.36,20.44c-3.457,2.01-4.63,6.443-2.62,9.9
			c2.01,3.457,6.443,4.63,9.9,2.62l35.36-20.44C75.957,279.209,77.13,274.777,75.12,271.32z"
                    />
                  </g>
                </g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Suggestions />
            <SearchResult />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;
