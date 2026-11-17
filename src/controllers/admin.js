export function showAdminDashboard(req, res) {
  res.render('admin/dashboard', {
    title: 'Admin Dashboard | Mobility EHR',
  });
}

export function showIntakeForm(req, res) {
  res.render('admin/intake-form', {
    title: 'Send Patient Paperwork | Mobility EHR',
  });
}

export function showUsers(req, res) {
  res.render('admin/users', {
    title: 'User Accounts and Roles | Mobility EHR',
  });
}

export function showAccountForm(req, res) {
  res.render('admin/account-form', {
    title: 'Add Account | Mobility EHR',
    isEditing: false,
  });
}

export function showEditAccountForm(req, res) {
  res.render('admin/account-form', {
    title: 'Edit Account Preview | Mobility EHR',
    isEditing: true,
  });
}

export function showIntakeReview(req, res) {
  res.render('admin/intake-review', {
    title: 'Intake Review | Mobility EHR',
  });
}
