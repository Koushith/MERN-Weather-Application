import axios from 'axios';

// @desc Fetch all weather data
//  @route GET /api/weather
//  @access Public

export const weatherController = async (req, res) => {
  try {
    const { city } = req.body;
    console.log('city', city);
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPEN_API_KEY}&units=metric`;
    const { data } = await axios.get(url);
    res.status(200).json({
      data,
    });
  } catch (error) {
    res.send(error);
  }
};
