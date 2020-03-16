"use strict";

const fs = require("fs");
const fetch = require("node-fetch");
const url = "https://api.epicsevendb.com/api/hero/";

const getData = async url => {
	try {
		const response = await fetch(url);
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};

const heroes = ["achates", "adlay", "ains", "aither", "alencia", "alexa"];

const getAllHeroData = heroes => {
	const peeps = [];
	Promise.all(
		heroes.map(hero => {
			return getData(url + hero);
		})
	).then(res => {
		console.log(res);
		const heroes = [];
		for (let hero of res) {
			const { name, stats } = hero.results[0];
			heroes.push({
				name: name,
				stats: stats
			});
		}
		fs.appendFileSync("stats.json", JSON.stringify(heroes));
	});
};

getAllHeroData(heroes);
