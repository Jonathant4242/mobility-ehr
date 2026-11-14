export function notFound(req, res) {
  res.status(404).render('errors/404', {
    title: 'Page not found | Mobility EHR',
  });
}

// Express identifies error middleware by its four parameters.
export function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }

  console.error('Request failed:', err);

  const errorStatus = err.status ?? err.statusCode;
  const status =
    Number.isInteger(errorStatus) && errorStatus >= 400 && errorStatus <= 599
      ? errorStatus
      : 500;

  // Keep the client-error status without exposing internal details.
  if (status < 500 && status !== 404) {
    return res
      .status(status)
      .type('text')
      .send('The request could not be completed.');
  }

  const view = status === 404 ? 'errors/404' : 'errors/500';
  const title =
    status === 404
      ? 'Page not found | Mobility EHR'
      : 'Server error | Mobility EHR';

  res.status(status).render(view, {title, status}, (renderError, html) => {
    if (renderError) {
      console.error('Unable to render the error page:', renderError);
      return res
        .status(500)
        .type('text')
        .send('Something went wrong. Please try again later.');
    }

    res.send(html);
  });
}
