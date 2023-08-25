const React = require('react');
const ReactDOMServer = require('react-dom/server');

function renderComponentFn(component, props, { doctype = true } = {}) {
  const reactElement = React.createElement(component, props);

  const html = ReactDOMServer.renderToStaticMarkup(reactElement);

  return doctype ? `<!DOCTYPE html>${html}` : html;
}

function ssr(req, res, next) {
  res.renderComponent = renderComponentFn;
  next();
}

module.exports = ssr;
