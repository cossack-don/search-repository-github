module.exports = {
  // publicPath: "/textbook/",
  publicPath: process.env.NODE_ENV === 'production' ?
    '/search-repository-github/' :
    '/'
  // используется для продакшена '/textbook/' имя репозитория
};
