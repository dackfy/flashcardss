const React = require('react');

function QuestionPage({ question }) {
  return (
    <div>
      <label>
        {question.question}
        <input type="text" name="answer" />
        <button type="submit" name="submit" style={{ width: '150px' }}>
          ответить
        </button>
      </label>
    </div>
  );
}

module.exports = QuestionPage;
