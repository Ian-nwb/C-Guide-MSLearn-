const ROADMAP = {
  phases: [
    {
      n: "01", title: "C# Fundamentals",
      links: [
        { t: "Get Started with C#", u: "https://learn.microsoft.com/training/paths/get-started-c-sharp-part-1/" },
        { t: "C# Fundamentals for Beginners", u: "https://learn.microsoft.com/training/paths/csharp-first-steps/" },
        { t: "Add Logic to C# Applications", u: "https://learn.microsoft.com/training/paths/csharp-if-elseif-else/" },
        { t: "Work with Variable Data in C#", u: "https://learn.microsoft.com/training/paths/csharp-arrays-operations/" }
      ],
      topics: ["Variables & Data Types", "Control Flow (if/switch)", "Loops (for/foreach/while)", "Arrays & Collections", "Methods & Scope", "Value Types vs Reference Types", "Memory Management (Stack vs Heap)"]
    },
    {
      n: "02", title: "Object-Oriented Programming (OOP)",
      links: [
        { t: "Create Classes and Objects in C#", u: "https://learn.microsoft.com/training/modules/create-classes-objects-c-sharp/" },
        { t: "Implement Inheritance in C#", u: "https://learn.microsoft.com/training/modules/inheritance-c-sharp/" },
        { t: "Use Interfaces in C#", u: "https://learn.microsoft.com/training/modules/develop-object-oriented-programming/" },
        { t: "Records and Immutability in C#", u: "https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/record" }
      ],
      topics: ["Classes", "Objects", "Properties & Fields", "Encapsulation", "Abstraction", "Inheritance", "Polymorphism", "Interfaces", "Records & Immutability"]
    },
    {
      n: "03", title: "Intermediate C# & Advanced Features",
      links: [
        { t: "LINQ Query & Enumerable Operations", u: "https://learn.microsoft.com/dotnet/csharp/linq/" },
        { t: "Asynchronous Programming with async/await", u: "https://learn.microsoft.com/dotnet/csharp/asynchronous-programming/" },
        { t: "Collections & Generic Types", u: "https://learn.microsoft.com/dotnet/csharp/programming-guide/concepts/collections" },
        { t: "Memory Performance: Span<T> and Memory<T>", u: "https://learn.microsoft.com/dotnet/standard/memory-and-spans/memory-t-usage-guidelines" }
      ],
      topics: ["Exception Handling", "Generics", "Delegates & Lambda Expressions", "Events", "LINQ", "Async/Await", "IDisposable & using statements"],
      extra: "Span<T> / Memory<T>, IAsyncEnumerable<T>, CancellationTokens, Pattern Matching"
    },
    {
      n: "04", title: "Git, GitHub & Version Control",
      links: [
        { t: "Microsoft Git Learning Path", u: "https://learn.microsoft.com/training/paths/intro-to-vc-git/" },
        { t: "GitHub Foundations Path", u: "https://learn.microsoft.com/training/paths/github-foundations/" },
        { t: "Automate Workflows with GitHub Actions", u: "https://learn.microsoft.com/training/paths/github-actions/" }
      ],
      topics: ["Git Core Commands", "Branching Strategies", "Merge vs Rebase", "Pull Requests & Code Reviews", "GitHub Actions", "Semantic & Conventional Commits"]
    },
    {
      n: "05", title: "HTML5 & Semantic Web Fundamentals", tagline: "New - Frontend",
      links: [
        { t: "FreeCodeCamp Responsive Web Design Certification", u: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" },
        { t: "MDN Web Docs: HTML Developer Guide", u: "https://developer.mozilla.org/en-US/docs/Learn/HTML" },
        { t: "W3C Web Accessibility (WCAG) Overview", u: "https://www.w3.org/WAI/fundamentals/accessibility-intro/" }
      ],
      topics: ["Semantic HTML5 Elements (<header>, <main>, <nav>, <article>, <footer>)", "HTML Forms, Validation & Input Types", "DOM Structure & Tree Navigation", "Web Accessibility (a11y) & ARIA Attributes", "SEO Best Practices & Meta Tags"],
      why: "Provides foundational HTML understanding necessary before wiring up Razor Pages, MVC, or Blazor UIs."
    },
    {
      n: "06", title: "CSS3, Flexbox, Grid & Modern Styling", tagline: "New - Frontend",
      links: [
        { t: "MDN Web Docs: CSS Developer Guide", u: "https://developer.mozilla.org/en-US/docs/Learn/CSS" },
        { t: "Flexbox Froggy (Interactive Practice)", u: "https://flexboxfroggy.com/" },
        { t: "CSS Grid Garden (Interactive Practice)", u: "https://cssgridgarden.com/" },
        { t: "Tailwind CSS Official Documentation", u: "https://tailwindcss.com/docs" }
      ],
      topics: ["CSS Box Model & Display Properties", "Flexbox Layout Architecture", "CSS Grid Layout Architecture", "Responsive Web Design & Media Queries", "CSS Custom Properties (Variables)", "Utility-First CSS (Tailwind CSS / Bootstrap)"],
      why: "Delivers essential modern responsive layout and styling skills for web development."
    },
    {
  n: "06.5", title: "TypeScript & React Integration", tagline: "Industry Standard Frontend",
  links: [
    { t: "TypeScript Documentation", u: "https://www.typescriptlang.org/docs/" },
    { t: "React Official Documentation", u: "https://react.dev/" },
    { t: "Build a React App with ASP.NET Core API", u: "https://learn.microsoft.com/visualstudio/javascript/tutorial-asp-net-core-with-react" }
  ],
  topics: ["TypeScript Syntax & Static Typing", "React Functional Components & Hooks", "State Management (Zustand / Redux)", "Axios / Fetch API integration with .NET Web API", "CORS Configuration in ASP.NET Core"],
  why: "Prepares you for the most common real-world stack: ASP.NET Core Web API + React/TS Frontend."
},
    {
      n: "07", title: "SQL, Relational Databases & Dapper",
      links: [
        { t: "Introduction to Querying with Transact-SQL", u: "https://learn.microsoft.com/training/paths/get-started-querying-with-transact-sql/" },
        { t: "Azure SQL Database Fundamentals", u: "https://learn.microsoft.com/training/modules/azure-sql-intro/" },
        { t: "Dapper Micro-ORM Tutorial", u: "https://learn.microsoft.com/dotnet/architecture/microservices/net-core-net-framework-containers/net-framework-migration-guidance#micro-orms" }
      ],
      topics: ["SELECT & Filtering", "JOINs (Inner, Left, Right)", "GROUP BY & Aggregations", "Stored Procedures & Views", "Indexes & Query Plans", "Database Normalization", "Dapper Micro-ORM"],
      extra: "Transactions, Isolation levels, Connection pooling, N+1 query antipattern"
    },
    {
      n: "08", title: "Entity Framework Core (EF Core)",
      links: [
        { t: "EF Core Documentation & Overview", u: "https://learn.microsoft.com/ef/core/" },
        { t: "Getting Started with EF Core", u: "https://learn.microsoft.com/ef/core/get-started/" },
        { t: "EF Core Query Performance Tuning", u: "https://learn.microsoft.com/ef/core/performance/efficient-querying" },
        { t: "EF Core Migrations in Production", u: "https://learn.microsoft.com/ef/core/managing-schemas/migrations/" }
      ],
      topics: ["DbContext", "Migrations & CLI", "Relationships (1:1, 1:N, N:M)", "LINQ-to-Entities", "CRUD Operations", "Value Objects & Owned Entities"],
      extra: "AsNoTracking, Split Queries, Interceptors, Raw SQL Fallback, Code-First vs Database-First"
    },
    {
      n: "09", title: "ASP.NET Core Fundamentals & MVC", tagline: "Updated",
      links: [
        { t: "Build Web Apps with ASP.NET Core", u: "https://learn.microsoft.com/training/paths/aspnet-core-web-app/" },
        { t: "ASP.NET Core Architecture & Documentation", u: "https://learn.microsoft.com/aspnet/core/" },
        { t: "Razor Pages Web App Development", u: "https://learn.microsoft.com/aspnet/core/razor-pages/" },
        { t: "Dependency Injection in .NET", u: "https://learn.microsoft.com/dotnet/core/extensions/dependency-injection" }
      ],
      topics: ["Middleware Pipeline", "Routing & Endpoint Matching", "Razor Pages & MVC Views (HTML + C#)", "Dependency Injection", "Configuration (appsettings.json, User Secrets)", "Structured Logging"],
      extra: "Kestrel web server, Options pattern, Health checks, IHostedService background workers"
    },
    {
      n: "10", title: "Web API Development & Minimal APIs",
      links: [
        { t: "Build RESTful APIs with ASP.NET Core", u: "https://learn.microsoft.com/aspnet/core/web-api/" },
        { t: "Minimal APIs Quickstart", u: "https://learn.microsoft.com/aspnet/core/fundamentals/minimal-apis" },
        { t: "OpenAPI Support in .NET", u: "https://learn.microsoft.com/aspnet/core/fundamentals/openapi/overview" },
        { t: "Real-time Communication with SignalR", u: "https://learn.microsoft.com/aspnet/core/signalr/introduction" }
      ],
      topics: ["Controllers vs Minimal APIs", "HTTP Verbs & Status Codes", "DTOs & Mapping", "Request Validation (FluentValidation)", "OpenAPI / Swagger / Scalar", "Endpoint Filters"],
      extra: "API Versioning, Pagination/Filtering/Sorting patterns, Response Caching, Rate Limiting, ProblemDetails global exception handling, gRPC, SignalR"
    },
    {
      n: "11", title: "Blazor Full-Stack UI & Component Libraries", tagline: "Expanded",
      links: [
        { t: "Blazor Architecture & Overview", u: "https://learn.microsoft.com/aspnet/core/blazor/" },
        { t: "Build a Blazor Web Assembly App", u: "https://learn.microsoft.com/training/modules/build-blazor-webassembly-application-with-visual-studio-code/" },
        { t: "Blazor Render Modes in .NET 8+", u: "https://learn.microsoft.com/aspnet/core/blazor/components/render-modes" },
        { t: "MudBlazor Component Library Doc", u: "https://mudblazor.com/" }
      ],
      topics: ["Blazor Server vs WebAssembly vs Auto render modes", "Components & Parameters", "Data Binding & Form Validation", "EventCallbacks", "Cascading Parameters", "JS Interop", "State Management"],
      extra: "TailwindCSS / MudBlazor integration, Auth state integration, Calling ASP.NET Web APIs"
    },
    {
      n: "12", title: "Authentication & Authorization",
      links: [
        { t: "Overview of ASP.NET Core Security", u: "https://learn.microsoft.com/aspnet/core/security/" },
        { t: "Configure JWT Authentication", u: "https://learn.microsoft.com/aspnet/core/security/authentication/" },
        { t: "Policy-Based Authorization in ASP.NET Core", u: "https://learn.microsoft.com/aspnet/core/security/authorization/policies" },
        { t: "ASP.NET Core Identity Integration", u: "https://learn.microsoft.com/aspnet/core/security/authentication/identity" }
      ],
      topics: ["JWT (JSON Web Tokens)", "ASP.NET Core Identity", "Claims & ClaimsPrincipal", "Role-Based Access Control (RBAC)", "Policy-Based Authorization", "OAuth2 & OpenID Connect"],
      extra: "Refresh Token rotation, External OAuth providers (Google/GitHub), API Key auth"
    },
    {
      n: "13", title: "Clean Architecture & Design Patterns",
      links: [
        { t: ".NET Application Architecture Guides", u: "https://learn.microsoft.com/dotnet/architecture/" },
        { t: "Common Web Application Architectures", u: "https://learn.microsoft.com/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures" },
        { t: "CQRS Pattern in .NET", u: "https://learn.microsoft.com/azure/architecture/patterns/cqrs" }
      ],
      topics: ["Repository & Unit of Work Patterns", "CQRS (Command Query Responsibility Segregation)", "Clean / Onion Architecture", "SOLID Principles", "Factory, Strategy, and Decorator Patterns"],
      extra: "MediatR pipeline behaviors, Result pattern, Domain Events, Feature-folder structure"
    },
    {
      n: "14", title: "Unit Testing & Integration Testing",
      links: [
        { t: "Unit Testing C# Code in .NET", u: "https://learn.microsoft.com/dotnet/core/testing/" },
        { t: "Integration Testing ASP.NET Core APIs", u: "https://learn.microsoft.com/aspnet/core/test/integration-tests" },
        { t: "Testcontainers for .NET Integration Tests", u: "https://testcontainers.com/modules/mssql/" }
      ],
      topics: ["Unit Testing (xUnit / NUnit)", "Mocking Frameworks (Moq / NSubstitute)", "FluentAssertions", "Integration Testing", "Test-Driven Development (TDD)"],
      extra: "WebApplicationFactory for API tests, Testcontainers for real containerized DB tests"
    },
    {
      n: "15", title: "Docker & Cloud-Native .NET Aspire",
      links: [
        { t: "Containerize a .NET Application", u: "https://learn.microsoft.com/dotnet/core/docker/" },
        { t: "Get Started with .NET Aspire", u: "https://learn.microsoft.com/dotnet/aspire/get-started/aspire-overview" },
        { t: ".NET Aspire Service Discovery & Orchestration", u: "https://learn.microsoft.com/dotnet/aspire/service-discovery/overview" }
      ],
      topics: ["Docker Concepts & Containers", "Dockerfile creation for .NET", "Docker Compose multi-container setups", "Environment Variable Config"],
      extra: "Multi-stage builds, Containerized DB + API setups, .NET Aspire dashboard"
    },
    {
      n: "16", title: "Azure Cloud Services",
      links: [
        { t: "AZ-900 Azure Fundamentals Path", u: "https://learn.microsoft.com/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/" },
        { t: "Azure Developer Certification (AZ-204) Path", u: "https://learn.microsoft.com/credentials/certifications/azure-developer/" },
        { t: "Azure App Service Documentation", u: "https://learn.microsoft.com/azure/app-service/" },
        { t: "Azure Key Vault Integration with .NET", u: "https://learn.microsoft.com/azure/key-vault/general/overview" }
      ],
      topics: ["Azure App Service", "Azure SQL Database", "Azure Blob Storage", "Azure Functions (Serverless)", "Azure Key Vault"],
      extra: "Azure Container Apps, App Configuration, Managed Identities"
    },
    {
      n: "17", title: "CI/CD Deployment Pipelines",
      links: [
        { t: "Build and Deploy .NET with GitHub Actions", u: "https://learn.microsoft.com/azure/developer/github/github-actions" },
        { t: "Azure Pipelines for ASP.NET Core", u: "https://learn.microsoft.com/azure/devops/pipelines/ecosystems/dotnet-core" }
      ],
      topics: ["Build Pipelines", "Deployment Pipelines", "Automated Testing in CI", "Artifact & Container Registry Management"],
      extra: "Automated EF Core migrations in deployment, Secret management in pipelines"
    },
    {
      n: "18", title: "Backend Scalability & Resilience",
      links: [
        { t: "Distributed Caching & HybridCache in .NET", u: "https://learn.microsoft.com/aspnet/core/performance/caching/distributed" },
        { t: "Implement Resiliency with Polly in .NET", u: "https://learn.microsoft.com/dotnet/architecture/microservices/implement-resilient-applications/" },
        { t: ".NET Observability with OpenTelemetry", u: "https://learn.microsoft.com/dotnet/core/diagnostics/observability-with-otel" },
        { t: "Background Tasks with Quartz.NET / Hangfire", u: "https://learn.microsoft.com/aspnet/core/fundamentals/host/hosted-services" }
      ],
      topics: ["Caching Strategies (In-Memory, Redis, HybridCache)", "Background Processing (Hangfire / Quartz.NET)", "Polly Resilience Patterns (Retry, Circuit Breaker)", "OpenTelemetry Distributed Tracing"],
      why: "Provides skills to build robust, scalable API platforms."
    },
    {
  n: "18.5", title: "Production Observability & APM", tagline: "Enterprise Operations",
  links: [
    { t: "Serilog & Structured Logging", u: "https://serilog.net/" },
    { t: "Grafana & Prometheus Documentation", u: "https://prometheus.io/docs/introduction/overview/" },
    { t: "Seq Centralized Logging for .NET", u: "https://datalust.co/seq" }
  ],
  topics: ["Serilog & Structured JSON Logs", "Prometheus Metrics Gathering", "Grafana Dashboard Setup", "OpenTelemetry Tracing", "Centralized Log Aggregation (Seq / ELK Stack)"],
  why: "Essential for debugging silent production failures without attaching a live debugger."
},
    {
      n: "19", title: "Multi-Tenancy SaaS Patterns",
      links: [
        { t: "SaaS Tenancy Architecture Patterns", u: "https://learn.microsoft.com/azure/azure-sql/database/saas-tenancy-app-design-patterns" },
        { t: "Architecting Multitenant Solutions on Azure", u: "https://learn.microsoft.com/azure/architecture/guide/multitenant/overview" }
      ],
      topics: ["Tenancy Models (Shared Schema, Schema-per-Tenant, DB-per-Tenant)", "Database Sharding", "Tenant Context Resolution", "Noisy Neighbor Antipattern"],
      why: "Essential for building production-ready SaaS applications."
    },
    {
      n: "20", title: "Domain-Driven Design (DDD) & Tactical Patterns",
      links: [
        { t: "Designing Microservice Domain Models", u: "https://learn.microsoft.com/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/microservice-domain-model" },
        { t: "Domain Events Implementation", u: "https://learn.microsoft.com/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-events-design-implementation" },
        { t: "Tactical DDD Design in .NET", u: "https://learn.microsoft.com/azure/architecture/microservices/model/tactical-domain-driven-design" }
      ],
      topics: ["Aggregates & Root Entities", "Entities vs Value Objects", "Bounded Contexts", "Ubiquitous Language", "Domain Events vs Integration Events"],
      extra: "Transactional Outbox Pattern, MassTransit Integration, Saga Pattern"
    },
    {
      n: "21", title: "Event-Driven Architecture & Messaging (MassTransit)",
      links: [
        { t: "Asynchronous Messaging Architecture", u: "https://learn.microsoft.com/dotnet/architecture/microservices/architect-microservice-container-applications/asynchronous-message-based-communication" },
        { t: "Integration Event Communications", u: "https://learn.microsoft.com/dotnet/architecture/microservices/multi-container-microservice-net-applications/integration-event-based-microservice-communications" },
        { t: "MassTransit Quickstart Guide", u: "https://masstransit.io/quick-starts/rabbitmq" }
      ],
      topics: ["Pub/Sub vs Queues", "Message Bus Abstractions (MassTransit)", "RabbitMQ & Azure Service Bus", "Eventual Consistency", "Choreography vs Saga Orchestration"],
      why: "Turns message queues into scalable architectural patterns."
    },
    {
      n: "22", title: "API Gateway & Reverse Proxy (YARP)",
      links: [
        { t: "YARP: Yet Another Reverse Proxy Overview", u: "https://learn.microsoft.com/aspnet/core/fundamentals/servers/yarp/yarp-overview" },
        { t: "Getting Started with YARP", u: "https://learn.microsoft.com/aspnet/core/fundamentals/servers/yarp/getting-started" },
        { t: "Authentication & Authorization in YARP", u: "https://learn.microsoft.com/aspnet/core/fundamentals/servers/yarp/authn-authz" }
      ],
      topics: ["Request Routing", "Load Balancing", "TLS Termination", "Gateway Rate Limiting", "Per-route Authorization Policies"],
      why: "Microsoft reverse proxy for monolith-to-microservice migration."
    },
    {
      n: "23", title: "Security Hardening & OWASP",
      links: [
        { t: "OWASP Top 10 for .NET Developers", u: "https://learn.microsoft.com/training/modules/owasp-top-10-for-dotnet-developers/" },
        { t: "ASP.NET Core Security Best Practices", u: "https://learn.microsoft.com/aspnet/core/security/" },
        { t: "Safe Storage of App Secrets", u: "https://learn.microsoft.com/aspnet/core/security/app-secrets" }
      ],
      topics: ["OWASP Top 10 Mitigation", "Input Sanitization & Validation", "Secret Manager vs Azure Key Vault", "HTTPS & HSTS Enforcement", "CSRF & XSS Protection"],
      why: "Ensures production-level security implementation."
    },
    {
      n: "24", title: "Performance Profiling & Diagnostics",
      links: [
        { t: ".NET Diagnostic Tools Overview", u: "https://learn.microsoft.com/dotnet/core/diagnostics/tools-overview" },
        { t: "Diagnose High CPU with dotnet-counters", u: "https://learn.microsoft.com/dotnet/core/diagnostics/dotnet-counters" },
        { t: "Memory Dump Analysis with dotnet-dump", u: "https://learn.microsoft.com/dotnet/core/diagnostics/debug-highcpu" }
      ],
      topics: ["dotnet-trace", "dotnet-counters", "dotnet-dump", "dotnet-gcdump", "Memory Leak & Allocation Profiling", "Flamegraphs"],
      why: "Hands-on diagnostic skills for resolving production performance issues."
    },
    {
      n: "25", title: "NoSQL Data Access with MongoDB",
      links: [
        { t: "Create a Web API with ASP.NET Core and MongoDB", u: "https://learn.microsoft.com/aspnet/core/tutorials/first-mongo-app" }
      ],
      topics: ["MongoDB.Driver for .NET", "BsonId & Serialization", "Document Store vs Relational Mindset", "Repository Pattern with Mongo", "When to choose NoSQL vs EF Core"],
      why: "Expands document persistence options alongside relational databases."
    },
    {
  n: "25.5", title: "Vector Databases & AI Integration (Semantic Kernel)", tagline: "Modern AI Stack",
  links: [
    { t: "Microsoft Semantic Kernel Docs", u: "https://learn.microsoft.com/semantic-kernel/overview/" },
    { t: "Azure OpenAI & .NET Integration", u: "https://learn.microsoft.com/azure/ai-services/openai/" }
  ],
  topics: ["Vector Embeddings & Search", "Pinecone / Qdrant / Pgvector", "Microsoft Semantic Kernel SDK", "Building RAG (Retrieval-Augmented Generation) with .NET"],
  why: "Positions you at the bleeding edge of AI-driven .NET application development."
}
    
  ],

  projects: [
    { tier: "Beginner Frontend & C#", items: ["Responsive Personal Portfolio Site (HTML5/CSS3)", "Calculator CLI & Web App", "Student Management System"] },
    { tier: "Intermediate Full-Stack", items: ["Inventory Management System (Blazor + EF Core)", "Expense Tracker API & Responsive Dashboard", "Employee Management API with Auth"] },
    { tier: "Advanced Architecture", items: ["E-Commerce Web App (Blazor WebAssembly + Minimal APIs + CQRS)", "Task Management App with SignalR Real-Time Updates", "Hotel Reservation System (Clean Architecture + Tailwind)"] },
    { tier: "Backend-heavy add-ons", items: ["Queue-Driven Notification Service (MassTransit + Worker)", "Rate-limited Public API with API Key Auth", "Multi-Tenant SaaS Platform Backend"] }
  ],

  certs: [
    { t: "FreeCodeCamp: Responsive Web Design Certification (100% Free Cert)", u: "https://www.freecodecamp.org/learn/2022/responsive-web-design/" },
    { t: "FreeCodeCamp: C# Certification with Microsoft (100% Free Cert)", u: "https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/" },
    { t: "Microsoft Applied Skills: Get started with classes, properties, and methods in C# (Free Cert)", u: "https://learn.microsoft.com/credentials/applied-skills/get-started-with-classes-properties-and-methods-in-c-sharp/" },
    { t: "Microsoft Applied Skills: Develop an ASP.NET Core web app that consumes an API (Free Cert)", u: "https://learn.microsoft.com/credentials/applied-skills/develop-an-aspnet-core-web-app-that-consumes-an-api/" },
    { t: "Microsoft Applied Skills: Deploy containerized apps to Azure Container Apps (Free Cert)", u: "https://learn.microsoft.com/credentials/applied-skills/deploy-apps-to-azure-container-apps/" },
    { t: "Cisco Networking Academy: Cybersecurity Essentials (100% Free Cert)", u: "https://www.netacad.com/courses/cybersecurity/cybersecurity-essentials" },
    { t: "AZ-900 Azure Fundamentals (Paid Exam / Free Learning Path)", u: "https://learn.microsoft.com/credentials/certifications/azure-fundamentals/" },
    { t: "GitHub Foundations (Paid Exam / Free Learning Path)", u: "https://learn.microsoft.com/credentials/certifications/github-foundations" },
    { t: "AZ-204 Azure Developer Associate (Paid Exam / Free Learning Path)", u: "https://learn.microsoft.com/credentials/certifications/azure-developer/" },

{ t: "Microsoft Applied Skills: Create a serverless logic app with Azure Logic Apps (Free Cert)", u: "https://learn.microsoft.com/credentials/applied-skills/create-a-serverless-logic-app-with-azure-logic-apps/" },
{ t: "Microsoft Applied Skills: Implement security in Azure Storage (Free Cert)", u: "https://learn.microsoft.com/credentials/applied-skills/implement-security-in-azure-storage/" },
{ t: "MongoDB University: MongoDB Node.js / C# Developer Path (100% Free Badges)", u: "https://learn.mongodb.com/" },
{ t: "Postman API Fundamentals Student Expert (100% Free Badge)", u: "https://www.postman.com/company/student-program/" }
  ],

  milestones: [
    { range: "Through Phase 06", result: "Frontend Basics & Responsive Layout Specialist" },
    { range: "Through Phase 12", result: "Junior Full-Stack .NET Developer" },
    { range: "Through Phase 17 + Free Certifications", result: "Mid-level Full-Stack Developer with Cloud Deployment skills" },
    { range: "Through Phase 25 + Advanced Portfolio", result: "Senior-leaning Full-Stack .NET Architect (Distributed systems, Cloud, Microservices)" }
  ]
};
