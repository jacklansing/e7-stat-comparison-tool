"use strict";

const fs = require("fs");
const fetch = require("node-fetch");
const url = "https://api.epicsevendb.com/api/hero/";

const getData = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const heroNames = data.results.map(hero => {
      const { _id } = hero;
      return _id;
    });
    Promise.all(
      heroNames.map(name => {
        return fetch(url + name);
      })
    )
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(heroResponses => {
        const heroesWithStats = [];
        heroResponses.forEach(response => {
          heroesWithStats.push(response.results[0]);
        });
        return heroesWithStats;
      })
      .then(heroesWithStats => {
        fs.appendFileSync("all-hero-data.json", JSON.stringify(heroesWithStats));
      });
  } catch (error) {
    console.log(error);
  }
};

getData(url);
