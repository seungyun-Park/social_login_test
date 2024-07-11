const router = require('express').Router();
const { githubAccessToken, kakaoAccessToken, googleAccessToken, callback } = require('../controller')

router.post('/git/accesstoken', githubAccessToken);
router.post('/kakao/accesstoken', kakaoAccessToken);
router.post('/google/accesstoken', googleAccessToken);

module.exports = router;