export function showPatientDashboard(req, res) {
  res.render('patient/dashboard', {
    title: 'Patient Dashboard | Mobility EHR',
  });
}

export function showPatientIntakePreview(req, res) {
  res.render('patient/intake', {
    title: 'Patient Intake Preview | Mobility EHR',
  });
}

export function showJournalForm(req, res) {
  res.render('patient/journal-form', {
    title: 'Add Journal Entry | Mobility EHR',
    isEditing: false,
  });
}

export function showEditJournalForm(req, res) {
  res.render('patient/journal-form', {
    title: 'Edit Journal Entry Preview | Mobility EHR',
    isEditing: true,
  });
}
