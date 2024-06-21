const jwt = require('jsonwebtoken');

// лучше хранить не в открытую
const signatureAccess = "signature_access";
const signatureRefresh = "signature_refresh";

const accessTokenAge = 20; // sec
const refreshTokenAge = 60 * 60 * 24; // 1 day

const getTokens = (login) => ({
  accessToken: jwt.sign({ login }, signatureAccess, {
    expiresIn: `${accessTokenAge}s`
  }),
  refreshToken: jwt.sign({ login }, signatureRefresh, {
    expiresIn: `${refreshTokenAge}s`
  })
}) 

module.exports = {
  getTokens,
  refreshTokenAge
}