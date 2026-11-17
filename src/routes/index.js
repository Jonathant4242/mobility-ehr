import express from 'express';
import {showLogin} from '../controllers/auth.js';
import {
  showAdminDashboard,
  showIntakeForm,
  showUsers,
  showAccountForm,
  showEditAccountForm,
  showIntakeReview,
} from '../controllers/admin.js';
import {
  showResources,
  showResourceForm,
  showEditResourceForm,
} from '../controllers/resources.js';
import {
  showPatientDashboard,
  showPatientIntakePreview,
  showJournalForm,
  showEditJournalForm,
} from '../controllers/patient.js';
import {showPtDashboard, showPatientCarePreview} from '../controllers/pt.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Mobility EHR',
  });
});

router.get('/login', showLogin);

// Public preview only; patient sign-in and submission are not implemented.
router.get('/intake/preview', showPatientIntakePreview);

// TODO: Add admin authorization before
// connecting records or administrative actions.
router.get('/admin', showAdminDashboard);
router.get('/admin/intake', showIntakeForm);
router.get('/admin/intake/review', showIntakeReview);
router.get('/admin/users', showUsers);
router.get('/admin/users/new', showAccountForm);
router.get('/admin/users/edit-preview', showEditAccountForm);
router.get('/admin/resources', showResources);
router.get('/admin/resources/new', showResourceForm);
router.get('/admin/resources/edit-preview', showEditResourceForm);

// Front-end preview only; require staff authorization before connecting records.
router.get('/pt', showPtDashboard);
router.get('/pt/patients/preview', showPatientCarePreview);

// Front-end preview only; require patient sign-in and ownership checks before connecting records.
router.get('/patient', showPatientDashboard);
router.get('/patient/journal/new', showJournalForm);
router.get('/patient/journal/edit-preview', showEditJournalForm);

export default router;
