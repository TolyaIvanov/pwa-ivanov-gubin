import React from 'react'
import Header from '../Header'
import {Helmet} from 'react-helmet'
import Paper from '@material-ui/core/Paper/Paper'
import Today from "./Today";
import History from "./History/History";
import Typography from "@material-ui/core/Typography";

const styles = {
    paper: {
        margin: 'auto',
        marginTop: 50,
        paddingTop: 10,
        width: '60%'
    },
    typography: {
        marginBottom: 15
    }
}

class Coins extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>MWA - coins</title>
                    <meta name="description" content="coins test Page"/>
                </Helmet>
                <Header/>
                <Paper elevation={4} style={styles.paper} align="center">
                    <Typography variant="h5">PusherCoins is a realtime price information about<br></br> BTC, ETH and LTC.</Typography>
                    <div className="results--section__inner">
                        <Today />
                        <History />
                    </div>
                </Paper>
            </div>
        )
    }
}

export default Coins
