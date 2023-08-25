const React = require('react');
const Layout = require('../Layout');

function ThemePage({ questions, themes }) {
  return (
    <Layout>
      <p>{themes.title}</p>
      {
  questions.map((questionsObj) => (
    <div key={questionsObj.id}>
      <h3>{questionsObj.question}</h3>
    </div>
  ));
}
    </Layout>
  );
}

module.exports = ThemePage;
