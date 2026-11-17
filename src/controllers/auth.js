export function showLogin(req, res) {
  res.render('auth/login', {
    title: 'Log In | Mobility EHR',
  });
}
