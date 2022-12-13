import axios from "axios";

export const fetchData = async () => {
  let dynamicUrl = `https://api.covidtracking.com/v1/us/20210307.json`;
  try {
    const {
      data: { positive, negative, death, lastModified },
    } = await axios.get(dynamicUrl);

    console.log(positive, negative, death, lastModified);
    const modifiedData = {
      positive,
      negative,
      death,
      lastModified,
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(
      `https://api.covidtracking.com/v1/us/daily.json`
    );
    // console.log(data);
    const obtainedData = data.map((dailyData) => ({
      positive: dailyData.positive,
      negative: dailyData.negative,
      death: dailyData.death,
      date: dailyData.lastModified,
    }));
    return obtainedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const res = await axios.get(
      `https://api.covidtracking.com/v1/states/info.json`
    );
    // console.log(res.data);
    return res.data.map((country) => country.state);
  } catch (error) {
    console.log(error);
  }
};
