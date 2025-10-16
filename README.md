 Campus Life Planner

The **Campus Life Planner** is a responsive and interactive web application designed to help students stay organized throughout their academic journey.  
It enables users to efficiently manage tasks, monitor progress, review records, and personalize their experience — all in one elegant and intuitive interface.

---

##  Overview

The **Campus Life Planner** serves as a digital productivity companion for students.  
It’s designed with simplicity, speed, and clarity in mind — allowing users to:
- Track assignments, deadlines, and academic goals.
- Log and review completed activities.
- Gain insights through a clean dashboard.
- Customize interface settings for a personalized experience.

Built using **HTML**, **CSS**, and **JavaScript**, the project emphasizes clean UI design, fluid responsiveness, and accessibility (a11y) across all devices.

---

##  Chosen Theme

The app follows a **modern minimalistic design theme**:
- Light background with soft gradient accents (Blue → Aqua).  
- Rounded cards and smooth hover effects.  
- Sans-serif **Montserrat** typography for a clean academic look.  
- Emphasis on readability, contrast, and simplicity.  

Animations are subtle and enhance the experience without distraction — including **hover glows**, **fade-ins**, and **sliding transitions**.

---

##  Key Features

-  **Responsive Layout** – Works seamlessly on mobile, tablet, and desktop.  
-  **Add, Edit & Delete Tasks** – Manage academic and personal goals.  
-  **Search & Filter Records** – Find tasks quickly and stay organized.  
-  **Dashboard Overview** – Track productivity and task summaries.  
-  **Settings Panel** – Customize appearance and preferences.  
-  **Modern UI Animations** – Subtle transitions, hover effects, and gradients.  
-  **Accessibility-Friendly (a11y)** – Keyboard navigation and high-contrast text.  

---

##  Pages Overview

###  1. Home / About Page
The landing page introduces users to the planner’s purpose and core features.

**Includes:**
- Logo and title section  
- Navigation bar (Home, Dashboard, Records, Add Task, Settings)  
- Hero banner with motivational quote and CTA buttons (“Get Started”, “View Records”)  
- Short overview of key features  

---

###  2. Dashboard
Provides a summarized view of the user’s progress and recent tasks.

**Features:**
- Displays total, completed, and pending tasks.  
- Cards for quick statistics.  
- Direct button link to **Add Task**.  
- Clean visual overview.  

---

###  3. Records Page
Lists all created tasks with details and management options.

**Features:**
- Organized list or table of tasks.  
- Edit and Delete buttons per record.  
- Optional search/filter bar for large task sets.  
- Responsive grid layout.  

---

###  4. Add Task Page
A form interface for adding new tasks and deadlines.

**Form Fields:**
- Task title, description, due date, category, and priority.  

**Includes:**
- “Save Task” button (links back to Dashboard).  
- Regex validation for input fields.  
- Confirmation alerts and success feedback.  

---

###  5. Settings Page
Allows customization and personal preferences.

**Options Include:**
- Toggle between Light / Dark Mode.  
- Adjust font scaling or layout spacing.  
- Reset or clear local data.  
- Enable / disable animations.  

---

##  Technology Stack

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Structural layout and semantic elements |
| **CSS3** | Visual styling, animations, responsiveness |
| **JavaScript (ES6)** | Logic, interactivity, and validation |
| **Google Fonts (Montserrat)** | Clean, modern typography |
| **Font Awesome** | Iconography for buttons and UI |

---

##  Regex Catalog (Validation Patterns)

Used primarily in the **Add Task** and **Settings** pages to validate input fields.

| Purpose | Pattern | Example |
|----------|----------|----------|
| Task Title | `/^[A-Za-z0-9\s]{3,50}$/` | `Study Math Notes` |
| Description | `/^.{5,200}$/` | `Finish research paper on AI ethics.` |
| Date Format (YYYY-MM-DD) | `/^\d{4}-\d{2}-\d{2}$/` | `2025-10-16` |
| Category | `/^[A-Za-z\s]{3,20}$/` | `Assignments` |

---

##  Keyboard Map (Accessibility)

| Key | Function |
|-----|-----------|
| **Tab / Shift + Tab** | Navigate through interactive elements |
| **Enter / Space** | Activate buttons or links |
| **Esc** | Close modals or cancel current action |
| **↑ / ↓** | Scroll through records or lists |
| **Ctrl + S** | Save a task (in supported browsers) |

---

##  Accessibility (a11y) Notes

The planner follows basic accessibility guidelines:
- High contrast between text and background.  
- Descriptive `alt` tags for all images.  
- Keyboard navigability on all major elements.  
- Readable font size (min 16px on mobile).  
- Smooth focus outlines for clarity.  

---

##  How to Run Tests

This project includes basic manual and automated checks:

**Manual Testing**
1. Open each HTML page in a browser.  
2. Verify navigation links function correctly.  
3. Add, edit, and delete sample tasks.  
4. Resize the browser to test responsiveness.  
5. Toggle dark mode and check element visibility.

**Automated Validation**
- Run HTML validator: [https://validator.w3.org/](https://validator.w3.org/)  
- Run CSS validator: [https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)  
- Check JS console for errors in Developer Tools.  

---

##  Responsiveness

Optimized with **mobile-first design** using CSS media queries:
- **Mobile:** Single-column layout, collapsible navbar.  
- **Tablet:** Two-column grids, balanced spacing.  
- **Desktop:** Full multi-section view with expanded navigation.  

---

##  How to Use

1. Open `About.html` in your browser.  
2. Navigate through the top navbar.  
3. Create a new task via **Add Task**.  
4. Review entries in **Records**.  
5. View your summary in **Dashboard**.  
6. Adjust preferences in **Settings**.  

---

##  Author

**Joseph Oke**  
 Email: `j.oke@alustudent.com`  
 GitHub: [Joseph-Oke](https://github.com/Joseph-Oke)  
 Demo video: https://youtu.be/e3OpbMy-mH8
 
 Website link: https://joseph-oke.github.io/Building-Responsive-UI/
