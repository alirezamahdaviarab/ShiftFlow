# ShiftFlow: Shift Scheduling and Management System

A **Shift Scheduling and Management System** built with **Next.js**, **Appwrite**, **Clerk** (for authentication and role-based access control), **Liveblocks** (for notifications and real-time updates), **ShadCN UI**, and **Tailwind CSS**.

## Features

### Core Features
1. **Workplace Management**:
   - Create, edit, and delete workplaces.
   - Track workers and pay periods.

2. **Employee Management**:
   - Add employees with details (name, role, email, phone number, etc.).
   - Manage employee availability and hours worked.
   - Handle pay calculations for the current pay period.

3. **Shift Scheduling**:
   - Admins can assign shifts to employees.
   - Employees can post shifts "up for grabs" for others to take.
   - Send reminders for shifts.
   - Allow employees to comment on shifts (e.g., "I can work 3 hours of this shift").

4. **Daily Summary**:
   - Track:
     - Hours worked and hours remaining for the day.
     - Credit card and cash tips.
     - Tips per hour.

5. **Notifications**:
   - Shift reminders.
   - Open shift notifications to all eligible employees.
   - Custom notifications sent by shift leads.
   - Real-time updates and comments on shifts using Liveblocks.

## Tech Stack

### Frontend
- **Next.js**: React-based framework for building the application.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **ShadCN UI**: Component library for consistent and elegant UI design.

### Backend
- **Appwrite**: Backend services for database, storage, and real-time features.
- **Liveblocks**: Real-time collaboration and notifications.

### Authentication
- **Clerk**: Authentication and role-based access control (RBAC).

### Version Control
- **GitHub**: Repository hosting for version control.

## Helpful Links

- [Once UI Theming Documentation](https://once-ui.com/docs/theming)
- [Building a Task Manager with Clerk](https://clerk.com/blog/build-a-team-based-task-manager-with-organizations)
- [Next.js Postgres NextAuth Tailwind Template](https://github.com/vercel/nextjs-postgres-nextauth-tailwindcss-template)
- [Tailwind Grid Generator](https://tailkits.com/tools/tailwind-grid-generator/)
- [Preline Application Layout Examples](https://preline.co/examples/layouts-application.html)
- [Preline Application Tables](https://preline.co/examples/application-tables.html)
- [Preline Basic Layouts](https://preline.co/examples/layouts-basic.html#)
- [Preline Admin Template](https://preline.co/templates/admin/index.html)

## Clerk Components and Their Use Cases

1. **[Sign-In](https://clerk.com/docs/components/authentication/sign-in)**:
   - Allows users to log into the application securely.
   - Can be used on the `/sign-in` route for authentication.

2. **[Sign-Up](https://clerk.com/docs/components/authentication/sign-up)**:
   - Enables new users to create an account.
   - Useful for onboarding new employees or admins.

3. **[User Button](https://clerk.com/docs/components/user/user-button)**:
   - Displays the logged-in user's profile picture and options.
   - Can be used in the app's header for quick profile access.

4. **[User Profile](https://clerk.com/docs/components/user/user-profile)**:
   - Allows users to manage their profile details (e.g., name, email).
   - Can be used in the `/profile` route.

5. **[Create Organization](https://clerk.com/docs/components/organization/create-organization)**:
   - Allows admins to create a new organization (e.g., a workplace).
   - Can be used when setting up a new workplace.

6. **[Organization Profile](https://clerk.com/docs/components/organization/organization-profile)**:
   - Displays and manages organization details.
   - Can be accessed by admins to edit workplace information.

7. **[Organization Switcher](https://clerk.com/docs/components/organization/organization-switcher)**:
   - Allows users to switch between multiple organizations (if they belong to more than one).
   - Useful for admins managing multiple workplaces.

8. **[Organization List](https://clerk.com/docs/components/organization/organization-list)**:
   - Lists all organizations a user belongs to.
   - Can be displayed on a dashboard for quick navigation.

9. **[Waitlist](https://clerk.com/docs/components/waitlist)**:
   - Enables waitlisting users who want to join the platform.
   - Useful for managing access during early launch phases.
### Development Roadmap

#### **Phase 1: Initial Setup**
1. **Create GitHub Repository**: Set up the repository to track progress.
2. **Clone Repository**: Clone the repository locally to begin work.
3. **Install Dependencies**: Set up `Next.js` and required dependencies using `npm install`.
4. **Configure Environment Variables**: Create `.env.local` with keys for `Clerk`, `Appwrite`, and any other required services.

#### **Phase 2: Core Functionality**
##### **Navigational Layout**
5. **Develop Header and Sidebar**:
   - Build a responsive header for navigation, including search, notifications, and user profile options.
   - Create a collapsible sidebar with links to key sections such as Dashboard, Employees, Shifts, and Reports.
   - Use Tailwind CSS for styling and integrate ShadCN UI components for consistency.

##### **Workplace Management**
6. **Develop Workplace Model**: Create a schema for workplace data in Appwrite.
7. **Add CRUD Features**:
   - Build APIs for creating, updating, deleting, and retrieving workplaces.
   - Integrate the frontend with workplace CRUD operations.

##### **Employee Management**
8. **Create Employee Model**: Define an employee schema (name, role, availability, hours worked, etc.).
9. **Add Employee CRUD Features**:
   - Develop APIs for employee management.
   - Build the frontend UI to handle adding, updating, and managing employee data.

##### **Shift Scheduling**
10. **Develop Shift Model**: Create schema to manage shift details (e.g., date, assigned employee, comments).
11. **Implement Shift Scheduling**:
    - Admins can assign shifts.
    - Allow employees to mark shifts as “up for grabs.”
12. **Send Reminders**:
    - Use Liveblocks or a notification service to alert employees of upcoming shifts.



#### **Phase 3: Advanced Features**
##### **Daily Summary**
12. **Create Day Model**: Define schema for tracking daily data (hours worked, tips, etc.).
13. **Implement Summary Views**:
    - Develop APIs to calculate hours, tips, and summary data.
    - Build a frontend dashboard for daily summaries.

##### **Notifications**
14. **Integrate Liveblocks**:
    - Set up real-time notifications for shifts and comments.
    - Create functionality for custom notifications by shift leads.

#### **Phase 4: User Authentication**
15. **Integrate Clerk**:
    - Add authentication to secure routes.
    - Implement role-based access control (Admin, Shift Lead, Worker).

#### **Phase 5: UI/UX Enhancements**
16. **Implement ShadCN UI**: Use pre-built components for a consistent user interface.
17. **Style Application**: Customize with Tailwind CSS for a responsive design.
18. **Add Helpful Features**:
    - Use the Clerk organization switcher for users managing multiple workplaces.
    - Enable comments on shifts for improved communication.

#### **Phase 6: Testing & Deployment**
19. **Test Features**:
    - Use mock data to validate CRUD operations, shift scheduling, and notifications.
    - Ensure role-based access functions correctly.
20. **Deploy to Vercel**: Host the frontend application.
21. **Deploy Appwrite Backend**: Host Appwrite instance via Docker or cloud.

## Database Schema

### 1. **Workplaces**
| Field         | Type    | Description                 |
|---------------|---------|-----------------------------|
| `id`          | String  | Unique workplace ID         |
| `name`        | String  | Name of the workplace       |
| `workers`     | Array   | Array of employee IDs       |
| `payPeriod`   | String  | Pay period for the workplace|

### 2. **Employees**
| Field           | Type    | Description                             |
|------------------|---------|-----------------------------------------|
| `id`            | String  | Unique employee ID                     |
| `name`          | String  | Employee name                          |
| `role`          | String  | Role (Admin, Shift Lead, Worker)        |
| `email`         | String  | Employee email                         |
| `phone`         | String  | Employee phone number                  |
| `hoursWorked`   | Number  | Hours worked this pay period           |
| `hoursToWork`   | Number  | Scheduled hours for the pay period      |
| `payThisPeriod` | Number  | Total pay earned this pay period        |
| `availability`  | String  | Employee availability                  |
| `askedOffTime`  | Date    | Requested date(s) off                  |

### 3. **Shifts**
| Field               | Type    | Description                     |
|----------------------|---------|---------------------------------|
| `id`                | String  | Unique shift ID                |
| `who`               | String  | Employee ID assigned to shift  |
| `when`              | Date    | Date and time of the shift      |
| `shiftLeadRequired` | Boolean | Whether a shift lead is required|
| `comments`          | String  | Additional comments for the shift|

### 4. **Days**
| Field             | Type    | Description                         |
|--------------------|---------|-------------------------------------|
| `id`              | String  | Unique day ID                      |
| `employeesWorked` | Array   | Array of employee IDs who worked   |
| `employeesScheduled` | Array | Employees still working or scheduled|
| `hoursWorkedToday`| Number  | Total hours worked for the day     |
| `hoursToAdd`      | Number  | Hours to be added after close      |
| `creditTips`      | Number  | Total credit card tips             |
| `cashTips`        | Number  | Total cash tips                    |
| `tipsPerHour`     | Number  | Tips per hour worked               |

## Features by Role

### Admin
- Manage workplaces and employees.
- Schedule shifts and post open shifts.
- View daily summaries.

### Shift Lead
- Send custom notifications.
- Monitor daily stats.

### Worker
- View assigned shifts.
- Post shifts "up for grabs."
- Track hours worked and pay.
- Add comments on shifts (e.g., partial availability).

## Notifications

### Shift Notifications
- **Shift Reminder**: Notify employees about their upcoming shifts.
- **Open Shift Notification**: Broadcast open shifts to eligible employees.
- **Shift Details**: Include information about the shift, such as the assigned employee, timing, and comments.

### Custom Notifications and Comments
- Shift leads can send notifications to all employees or specific roles.
- Employees can comment on shifts to provide additional details, such as partial availability ("I can take 3 hours of this shift").

3. **Workflow**:
   - Admin posts a shift: Broadcast notifications via Liveblocks.
   - Employees comment: Comments are displayed in real time for other users to see.

## Deployment

1. Deploy the frontend on **Vercel**:
   - Configure environment variables in Vercel for Appwrite and Clerk.

2. Deploy Appwrite:
   - Use Docker or Appwrite Cloud for hosting.

## Future Enhancements
- Add analytics for shift performance and trends.
- Implement user-friendly dashboards for admins and workers.
- Enable exporting data to CSV or Excel for payroll purposes.

---

