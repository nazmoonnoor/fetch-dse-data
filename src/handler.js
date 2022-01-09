import axios from "axios";

let lastPrices = {
  getData: async () => {
    let url = "https://www.amarstock.com/LatestPrice/34267d8d73dd";
    let res = await axios.get(url);
    return res.data;
  }
};

export default lastPrices;
