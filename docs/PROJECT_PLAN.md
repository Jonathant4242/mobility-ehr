# Mobility EHR project plan

This is my working checklist for building Mobility EHR. Checked items are in place; unchecked items are still planned. I will update this as I build and test each part. All development and demonstration data will be fictional.

## What works now

- [x] Initialize the Node.js project with ES modules, Express, and EJS.
- [x] Add start and development scripts.
- [x] Render the Mobility EHR home page through an Express route.
- [x] Serve public files and connect separate 404 and 500 error pages.

The header, footer, and stylesheet currently contain planning comments only. They are not finished features. Authentication, the database, and the role dashboards are not built yet.

## Build order

1. **Finish the page structure.** Build the shared header and footer, include them in the pages, and add basic responsive styles. Add role-specific navigation when authentication is ready.
2. **Set up configuration and the database.** I will create a local .env for my settings and a documented .env.example with placeholder values. I will configure environment-variable loading, connect PostgreSQL, design the database relationships, and export an ERD from pgAdmin. Actual credentials will stay out of source control.
3. **Build login and access controls.** Add accounts, bcrypt password hashing, express-session, login/logout, and server-side role and record checks. Test access by visiting protected routes directly.
4. **Build the admin tools.** Start with education-resource CRUD. Then add account and role management, manual intake entry, therapist assignments, case views, and submission flagging.
5. **Build the care workflow.** Add intake reviews, evaluations, encounters, treatment plans, and home programs. Record who changed each episode status and when. Resolve the approval rule before building proposed care updates and approval actions.
6. **Build the patient portal.** Show the patient's own home program, treatment plan, approved updates, and status history. Add create, view, edit, and delete actions for their home-program logs and symptom journals.
7. **Finish deployment and documentation.** Deploy to Render with PostgreSQL, verify each role, collect peer feedback, and document setup, test-account usernames, limitations, and the live URL. Use the course-required test password without putting it in the README. Commit regularly toward at least 15 substantial commits.

For each feature, add validation, parameterized queries, permission checks, and appropriate error handling as it is built. Add audit records alongside patient sign-in and entry actions. Check that a patient cannot access another patient's records or staff actions.

## Where the code belongs

Paths marked **planned** do not exist yet. I will create them when I build the feature.

| Location                           | Purpose                                                                            |
| ---------------------------------- | ---------------------------------------------------------------------------------- |
| `src/server.js`                    | Configure Express, connect middleware and routes, and start the server.            |
| `src/controllers/routes.js`        | Connect URLs to request handlers. Add feature routers here as they are built.      |
| `src/controllers/`                 | Handle requests, call model functions, and choose views or redirects.              |
| `src/models/` — planned            | Keep PostgreSQL queries and data access functions out of route handlers and views. |
| `src/config/database.js` — planned | Configure the database connection using environment variables.                     |
| `src/middleware/`                  | Handle errors now; add login, permission, and validation checks as needed.         |
| `src/views/`                       | EJS pages for the application.                                                     |
| `src/views/partials/`              | Shared header, navigation, and footer markup.                                      |
| `src/views/errors/`                | Separate missing-page and server-error views.                                      |
| `public/css/styles.css`            | Shared page styles.                                                                |
| `database/` — planned              | Schema and fictional seed-data scripts.                                            |
| `docs/`                            | This plan, the ERD image, and other useful project notes.                          |

## Roles and review rules

- **Clinic Admin:** Manage accounts and roles, intake requests, assignments, education resources, submission flags, and case status views.
- **Physical Therapist:** Staff can view intake information, evaluations, and home programs across patients. Any therapist can propose an update for any patient. Proposed updates need review and approval before they appear as approved care updates. Therapists cannot change user roles.
- **Patient:** View only their own permitted information and manage their own logs and journals. Patients cannot change therapist-authored notes, approve care updates, or access staff and admin tools.

**Decision before implementation:** Who can approve a proposed care update: the evaluating therapist, or another authorized staff member? Can a therapist approve their own proposal? These rules are not settled yet.

## Intake and status history

**Intake Submitted → Under Review → Active Treatment → Closed**

The patient completes a Google intake form. An administrator manually enters a basic request, assigns a therapist, and moves it to Under Review. The therapist adds clinical details during the initial evaluation and starts Active Treatment. A missed visit can remain Under Review for follow-up or be closed with a reason. Record the actor and time for each transition, and close the episode when care ends.

## Records and audit history

Plan related tables for accounts, patient profiles, care episodes, encounters, treatment plans and home programs, patient logs and journals, status history, education resources, proposed care updates, and audit events. Final table names and relationships will be decided in the ERD.

Keep patient-authored entries separate from clinical notes. A restricted server-side audit log will record patient sign-ins and entry creation, edits, and deletions, including who acted and when. Patients cannot view, edit, or delete that log. Deleting an entry from the portal will not remove its audit event.

Keeping an audit event does not settle whether deleted entry content will also be retained. Decide that separately, along with which staff roles can view audit history. Check deletion rules carefully so they do not erase related clinical or audit history unintentionally.

## Later, outside this version

Direct email to staff, automated Google Workspace imports, and expanded patient communication remain future ideas. Any use with real patient data would need a separate review of security, privacy, data handling, and suitability for clinical use.

For the final interview, be ready to demonstrate the care workflow and explain the database relationships, request flow, access checks, approval rules, and a challenge solved during development.
