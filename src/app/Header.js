import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const styles = {
  link: {
    color: 'inherit'
  },
  coins:{
    textDecoration: 'none',
    color: 'inherit',
    marginLeft: 30
  }
}

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link to="/" style={styles.link}>
          <Typography variant="h5" color="inherit">
            Modern Web App
          </Typography>
        </Link>
        <Link to="/coins" style={styles.coins}>
          <Typography variant="h5" color="inherit">
            Coins
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}
