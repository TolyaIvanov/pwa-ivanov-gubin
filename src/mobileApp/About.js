import React from 'react'
import { Helmet } from 'react-helmet'

import Header from './Header'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = {
  paper: {
    margin: "auto",
    marginTop: 20,
    width: "90%"
  },
  img: {
    width: '100%'
  },
  typography: {
    marginTop: 15,
    marginBottom: 15
  }
}

export default class Coins extends React.Component{
  render(){
    return (
      <div>
        <Header/>
        <Helmet>
          <title>Mobile Index test Page</title>
          <meta name="description" content="Mobile Index test Page" />
        </Helmet>
        <Paper elevation={4} style={styles.paper} align="center">
          <Typography variant="h5" style={styles.typography}>About MWA</Typography>
          <img src="/assets/MWA.png" alt="MWA (Modern Web App) is a new way to build your web apps" style={styles.img}/>
          <br/>
          <Typography variant="subtitle1">
            Learn more about it <a href="https://github.com/vanishmax/modern-web-app" target="_blank"> here - GitHub</a>
          </Typography>
        </Paper>
      </div>
    )
  }
}
