import React, { Component } from 'react';
import axios from 'axios'
import moment from 'moment'
import {SectionBox} from "./SectionBox";

class History extends Component {
	constructor () {
		super();
		this.state = {
			todayprice: {},
			yesterdayprice: {},
			twodaysprice: {},
			threedaysprice: {},
			fourdaysprice: {}
		};
	}

	saveStateToLocalStorage = () => {
		localStorage.setItem('history-state', JSON.stringify(this.state));
	};

	restoreStateFromLocalStorage = () => {
		const state = JSON.parse(localStorage.getItem('today-state'));
		console.log(state);
		this.setState(state);
	};

	getPriceForDay = (daysCount = 0, key) => {
		const time = moment().subtract(daysCount, 'days').unix();
		axios.all([this.getETHPrices(time), this.getBTCPrices(time), this.getLTCPrices(time)])
			.then(axios.spread((eth, btc, ltc) => {
				let f = {
					date: moment.unix(time).format("MMMM Do YYYY"),
					eth: eth.data.ETH.USD,
					btc: btc.data.BTC.USD,
					ltc: ltc.data.LTC.USD
				};
				this.setState({
					[key]: f
				}, this.saveStateToLocalStorage);
			}));
	};

	getCurrencyPrice = (date, currency) =>
		axios.get(`https://min-api.cryptocompare.com/data/pricehistorical?fsym=${currency}&tsyms=USD&ts=${date}`);

	getETHPrices = (date) => this.getCurrencyPrice(date, 'ETH');
	getBTCPrices = (date) => this.getCurrencyPrice(date, 'BTC');
	getLTCPrices = (date) => this.getCurrencyPrice(date, 'LTC');

	componentDidMount () {
		if (!navigator.onLine) {
			this.restoreStateFromLocalStorage();
		}
		const days = ['today', 'yesterday', 'twodays'];
		for(const day in days){
			this.getPriceForDay(day, `${days[day]}price`);
		}
	}
	render() {
		const {todayprice, yesterdayprice, twodaysprice, threedaysprice, fourdaysprice} = this.state;
		console.log(this.state);
		return (
			<div className="history--section container">
				<h2>History (Past 5 days)</h2>
				<div className="history--section__box">
					<SectionBox price={todayprice}/>
					<SectionBox price={yesterdayprice}/>
					<SectionBox price={twodaysprice}/>
				</div>
			</div>
		)
	}
}

export default History;