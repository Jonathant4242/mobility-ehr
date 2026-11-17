export function showResources(req, res) {
  res.render('admin/resources', {
    title: 'Patient Education Resources | Mobility EHR',
  });
}

export function showResourceForm(req, res) {
  res.render('admin/resource-form', {
    title: 'Add Education Resource | Mobility EHR',
    isEditing: false,
  });
}

export function showEditResourceForm(req, res) {
  res.render('admin/resource-form', {
    title: 'Edit Education Resource Preview | Mobility EHR',
    isEditing: true,
  });
}
