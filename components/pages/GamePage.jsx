const React = require('react');
const Layout = require('../Layout');

function GamePage({ themes, user }) {
  return (
    <Layout>
      <div>
        <h3>Привет {user.name}!</h3>
        {themes.map((themesObj) => (
          <div key={themesObj.id}>
            <h3>
              <a href={`/game/${themes.id}`}>{themesObj.title}</a>
            </h3>
          </div>
        ))}
      </div>
    </Layout>
  );
}

module.exports = GamePage;
