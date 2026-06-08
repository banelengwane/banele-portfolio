import type { Project } from "../types";

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Full-Stack Task Manager",
        tier: "Beginner",
        description: "A decoupled, modern web application built to master asyncrhonous RESTful API communications and basic CRUD state mutations",
        techStack: ["ReactJS", "JavaScript", ".NET Core Web API", "C#", "CORS middleware"],
        architectureHighlights: [
            "Decoupled client-server architecture",
            "Configured cross-origin pipeline parameters",
            "Asynchronous controller endpoints"
        ],
        githubUrl: "https://github.com/banelengwane/dotnet-react-todo"
    },
    {
        id: 2,
        title: "Product Feature Request Board",
        tier: "Intermediate",
        description: "A community voting dashboard featuring robust relational database storage, automated code-first schemas, and custom API modularization.",
        techStack: ["ReactJS", "JavaScript", ".NET Core Web API", "C#", "Entity Framework Core", "PostgreSQL", "CSS Grid"],
        architectureHighlights: [
            "Abstracted network layer separate from UI layouts",
            "Persistent state mapping via ORM models",
            "CSS Grid & Flexbox adaptive layouts (Mobile + Tablet optimized)"
        ],
        githubUrl: "https://github.com/banelengwane/feature-voter"
    },
    {
        id: 3,
        title: "Distributed E-Commerce Flash Sale Platform",
        tier: "Advanced",
        description: "An enterprise-grade, event-driven distributed microservices platform engineered to withstand high-concurrecy traddic bursts.",
        techStack: ["ReactJS", "JavaScript", "Tailwind CSS", ".NET 8/9", "MassTransit", "RabbitMQ", "Docker Compose", "xUnit", "Moq"],
        architectureHighlights: [
            "Asynchronous message brokering ensuring fault tolerance",
            "Developed fully via Test-Driven Development (TDD)",
            "Multi-container orchestration via Docker Compose infrastructure"
        ],
        githubUrl: "https://github.com/banelengwane/flash-sale-platform"
    }
]