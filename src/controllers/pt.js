export function showPtDashboard(req, res) {
  res.render('pt/dashboard', {
    title: 'PT Dashboard | Mobility EHR',
  });
}

export function showPatientCarePreview(req, res) {
  res.render('pt/patient-care', {
    title: 'Patient Care Preview | Mobility EHR',
  });
}
