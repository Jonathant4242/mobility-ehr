export function showAdminDashboard(req, res) {
  res.render('admin/dashboard', {
    title: 'Admin Dashboard | Mobility EHR',
  });
}

export function showIntakeForm(req, res) {
  res.render('admin/intake-form', {
    title: 'New Intake | Mobility EHR',
  });
}

export function showUsers(req, res) {
  res.render('admin/users', {
    title: 'User Accounts and Roles | Mobility EHR',
  });
}
