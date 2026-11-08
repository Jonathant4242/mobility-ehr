# Mobility EHR

Mobility EHR is my final project for CSE 340. I chose Option A and am building an electronic health record prototype for a physical therapy clinic. My goal is to help staff is to help staff manage intake requests and keep patient charts, therapist notes, and treatment plans organized throughout each care episode.

Patients will have a limited portal where they can view their home programs and treatment updates and manage their own progress logs and symptom journal entries. All patient data used for development and demonstration will be fictional.

**Project status:** Planning and initial setup. This README describes what I intend to build. I will update it as the project develops.

I created a separate [project plan](docs/PROJECT_PLAN.md) to work through ideas, track what I’ve completed, and stay focused on my next steps. It also includes a parking lot for ideas and features I may revisit later.

## User roles

### Clinic Admin

Administrators will use a protected dashboard to manage accounts and roles, respond to intake requests, assign therapists, and view active and closed care episodes. They will also add, edit, and delete patient education resources and flag inappropriate patient submissions when needed.

Education resources will be stored in PostgreSQL, so saved changes appear when users load the page.

### Physical Therapist

All clinic staff will be able to view patient intake information, evaluations, and home programs. Therapists will document evaluations and follow-up visits, record interactions such as phone calls, and create treatment plans with goals. Any therapist will be able to submit a proposed care update for any patient. Proposed updates will need staff review and approval before they appear as approved care updates. I still need to decide whether approval belongs to the evaluating therapist or another authorized staff member.

### Patient

Patients will use a protected portal to view their assigned home programs, treatment updates, and progress. Input through the portal will be limited to a simple home-program log and symptom journal. Patients can create, view, edit, and delete their own entries. These entries will remain separate from therapist-authored clinical notes.

## Intake and care workflow

**Intake Submitted → Under Review → Active Treatment → Closed**

1. The patient completes a Google intake form before the first visit.
2. An administrator manually records a basic request in Mobility EHR as Intake Submitted, assigns a therapist, and moves the request to Under Review.
3. During the initial evaluation, the therapist reviews the intake information, adds the relevant details to the clinical chart, and moves the episode to Active Treatment.
4. The episode is closed when care ends.

If a patient does not attend, the request can remain Under Review for follow-up or be closed with a recorded reason. The application will record each status change, including who made it and when. Patients can view their own status and history, while staff can track the cases they are allowed to access.

For this version, staff will enter the Google intake information manually. I am leaving automatic imports for a later stage.

## Technology

- **Node.js and Express:** backend development using ES modules (`import` and `export`) throughout.
- **EJS:** server-rendered pages with shared layouts and partials.
- **PostgreSQL:** relational database storage.
- **express-session:** session-based authentication.
- **bcrypt:** password hashing.
- **Render:** application hosting with a connected PostgreSQL database.

All application pages will be rendered on the server. Dynamic routes, such as `/care-episodes/:id`, will identify individual records.

## Code and database structure

I will follow an MVC structure with organized folders and consistent formatting. The database will use normalized, related tables for accounts, patients, care episodes, encounters, treatment plans, journal entries, status history, and educational resources.

I will choose data types that fit the information being stored and use foreign keys to maintain the relationships. Deletion rules, including `CASCADE` or `SET NULL` where appropriate, will be chosen carefully so removing one record does not unintentionally erase related history.

## Access and security

Middleware will check login status, roles, and record permissions. Patients will access only their own information. Staff access will follow the shared viewing and proposed-update rules described above, while administrators will have access to the management tools. Patients will not be able to change clinical notes, approve care updates, or use staff and administrator functions.

Authentication will use secure session settings and bcrypt password hashing. All application forms will include server-side validation and input sanitization, including checks for empty or inappropriate submissions. Database queries will be parameterized. Errors that need centralized handling will be passed to a global error handler, which will display helpful messages without exposing internal system details.

## Deployment and documentation

I will deploy the application on Render with PostgreSQL, correctly configured environment variables, and no development-only code running in production. I will commit regularly and build a history of at least 15 substantial commits. The final submission will include the public GitHub repository URL and the live Render URL.

As the project develops, I will add:

- Setup instructions and the live deployment link.
- An ERD image exported from pgAdmin.
- Test-account usernames or emails for each role.
- Known bugs, unfinished features, and other limitations.

Each role will have a working test account using the course-required password. The password will not be included in this README.

## Future development

Direct email to staff, automated Google Workspace integration, and expanded patient communication will stay in the parking lot for now. I want to finish the core application before adding those features.

Any potential use with real patient data would require a separate review of security, privacy, data handling, and suitability for clinical use.

## End-of-course evaluation

For the final evaluation, I will demonstrate a patient moving through the care workflow and explain the code behind it. I will be prepared to discuss the database relationships, request flow, access controls, a challenge I solved, and what I learned while building the project.
