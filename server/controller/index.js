const axios = require("axios");

module.exports = {
  githubAccessToken: async (req, res) => {
    try {
      const { code } = req.body;
      const accessToken = await axios({
        url: "https://github.com/login/oauth/access_token",
        method: "POST",
        data: {
          client_id: process.env.GIT_CLIENT_ID,
          client_secret: process.env.GIT_CLIENT_SECRET,
          code: code,
        },
      });
      const item = accessToken.data;
      res.status(200).json(item);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  kakaoAccessToken: async (req, res) => {
    try {
      const { code } = req.body;
      console.log(code);
      const accessToken = await axios({
        url: "https://kauth.kakao.com/oauth/token",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        params: {
          grant_type: "authorization_code",
          client_id: process.env.KAKAO_CLIENT_ID,
          redirect_uri: process.env.KAKAO_REDIRECT_URL,
          client_secret: process.env.KAKAO_CLIENT_SECRET,
          code: code,
        }
      });
      console.log("hi");

      const item = accessToken.data;
      res.status(200).json(item);
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },
  googleAccessToken: async (req, res) => {
    try {
      const { code } = req.body;
      const accessToken = await axios({
        url: "https://oauth2.googleapis.com/token",
        method: "POST",
        data: {
          grant_type: "authorization_code",
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_CLIENT_SECRET,
          code: code,
          redirect_uri: process.env.GOOGLE_REDIRECT_URL,
        },
      });
      const item = accessToken.data;
      res.status(200).json(item);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
};
