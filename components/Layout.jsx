const React = require('react');
const Header = require('./Header');

function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <title>КВИЗ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="/js/create.js" />
      </head>
      <Header />
      {children}
    </html>
  );
}

module.exports = Layout;
