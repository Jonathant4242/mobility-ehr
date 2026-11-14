import express from 'express';
import {showAdminDashboard, showIntakeForm, showUsers} from './admin.js';
import {showResources, showResourceForm} from './resources.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Mobility EHR',
  });
});

// TODO: Add admin authorization before
// connecting records or administrative actions.
router.get('/admin', showAdminDashboard);
router.get('/admin/intake', showIntakeForm);
router.get('/admin/users', showUsers);
router.get('/admin/resources', showResources);
router.get('/admin/resources/new', showResourceForm);

export default router;
