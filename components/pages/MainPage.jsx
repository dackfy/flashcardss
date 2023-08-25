const React = require('react');
const Layout = require('../Layout');

function MainPage({ user }) {
  return (
    <Layout>
      <div>
        <h1> Quiz </h1>
        <form action="/login" method="POST" id="form">
          <label>
            <input type="text" name="name" />
          </label>
          <button type="submit" name="submit" style={{ width: '150px' }}>
            добавить игрока
          </button>
        </form>
      </div>
    </Layout>
  );
}

module.exports = MainPage;
