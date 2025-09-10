const projects = [
  {
    id: 1,
    title: "Task Manager API",
    desc: "A robust REST API for task management with user authentication, built with Django REST Framework. Features JWT tokens, CRUD operations, and user-specific data isolation.",
    tech: ["Django", "DRF", "JWT", "PostgreSQL"],
    live: "https://your-live-app.example",
    github: "https://github.com/yourusername/task-api"
  },
  {
    id: 2,
    title: "Expense Tracker",
    desc: "A FastAPI application for tracking personal expenses. Includes user registration, data visualization, and export functionality.",
    tech: ["FastAPI", "React", "PostgreSQL", "Docker"],
    live: "https://your-expense-app.example",
    github: "https://github.com/yourusername/expense-tracker"
  },
  {
    id: 3,
    title: "E-Commerce Backend",
    desc: "Complete e-commerce backend with product management, shopping cart, order processing, and payment integration.",
    tech: ["Django", "Stripe API", "Celery", "Redis"],
    live: "https://your-ecommerce-app.example",
    github: "https://github.com/yourusername/ecommerce-api"
  }
];

export default projects;