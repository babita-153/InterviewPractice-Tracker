
const interviewQuestions = [
  // ==================== EASY ====================
  {
    id: 1,
    title: "What is JavaScript?",
    topic: "JavaScript",
    difficulty: "Easy",
    question:
      "What is JavaScript and where is it commonly used?",
  },
  {
    id: 2,
    title: "var, let and const",
    topic: "JavaScript",
    difficulty: "Easy",
    question:
      "What is the difference between var, let and const in JavaScript?",
  },
  {
    id: 3,
    title: "What is a Promise?",
    topic: "JavaScript",
    difficulty: "Easy",
    question:
      "What is a Promise in JavaScript and what are its different states?",
  },
  {
    id: 4,
    title: "What is React?",
    topic: "React",
    difficulty: "Easy",
    question:
      "What is React and why is it used for building user interfaces?",
  },
  {
    id: 5,
    title: "Props vs State",
    topic: "React",
    difficulty: "Easy",
    question:
      "What is the difference between props and state in React?",
  },
  {
    id: 6,
    title: "What is Node.js?",
    topic: "Node.js",
    difficulty: "Easy",
    question:
      "What is Node.js and why is it used for backend development?",
  },
  {
    id: 7,
    title: "What is Express.js?",
    topic: "Express",
    difficulty: "Easy",
    question:
      "What is Express.js and why is it commonly used with Node.js?",
  },
  {
    id: 8,
    title: "What is MongoDB?",
    topic: "MongoDB",
    difficulty: "Easy",
    question:
      "What is MongoDB and how is it different from a relational database?",
  },
  {
    id: 9,
    title: "What is an API?",
    topic: "Backend",
    difficulty: "Easy",
    question:
      "What is an API and how does a frontend application communicate with a backend API?",
  },
  {
    id: 10,
    title: "Authentication vs Authorization",
    topic: "Authentication",
    difficulty: "Easy",
    question:
      "What is the difference between authentication and authorization?",
  },

  // ==================== MEDIUM ====================
  {
    id: 11,
    title: "Event Loop",
    topic: "JavaScript",
    difficulty: "Medium",
    question:
      "Explain the JavaScript event loop and the difference between microtasks and macrotasks.",
  },
  {
    id: 12,
    title: "React Re-rendering",
    topic: "React",
    difficulty: "Medium",
    question:
      "Why does a React component re-render and how can unnecessary re-renders be reduced?",
  },
  {
    id: 13,
    title: "React.memo, useMemo and useCallback",
    topic: "React",
    difficulty: "Medium",
    question:
      "What are React.memo, useMemo and useCallback and when should they be used?",
  },
  {
    id: 14,
    title: "Express Middleware",
    topic: "Express",
    difficulty: "Medium",
    question:
      "What is middleware in Express.js and how does it work in the request-response cycle?",
  },
  {
    id: 15,
    title: "MongoDB Indexing",
    topic: "MongoDB",
    difficulty: "Medium",
    question:
      "What is an index in MongoDB and how does it improve query performance?",
  },

  // ==================== HARD ====================
  {
    id: 16,
    title: "JWT Authentication",
    topic: "Authentication",
    difficulty: "Hard",
    question:
      "Explain how JWT authentication works from login to accessing a protected API.",
  },
  {
    id: 17,
    title: "REST API Request Flow",
    topic: "Backend",
    difficulty: "Hard",
    question:
      "Explain the complete request flow of a protected REST API from the client to the database and back.",
  },
  {
    id: 18,
    title: "MongoDB Race Condition",
    topic: "MongoDB",
    difficulty: "Hard",
    question:
      "Why is checking whether an email already exists before registration not enough to prevent duplicate users?",
  },
  {
    id: 19,
    title: "401 vs 403",
    topic: "Authentication",
    difficulty: "Hard",
    question:
      "What is the difference between HTTP 401 Unauthorized and 403 Forbidden?",
  },
  {
    id: 20,
    title: "Authentication and Resource Ownership",
    topic: "Security",
    difficulty: "Hard",
    question:
      "How would you prevent an authenticated user from accessing another user's private resources by changing an ID in the URL?",
  },
];

export default interviewQuestions;

