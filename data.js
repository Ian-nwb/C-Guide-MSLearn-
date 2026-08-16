const ROADMAP = {
  phases: [
    {
      n: "01", title: "C# Fundamentals",
      links: [
        { t: "Get Started with C#", u: "https://learn.microsoft.com/training/paths/get-started-c-sharp-part-1/" },
        { t: "C# Fundamentals", u: "https://learn.microsoft.com/training/paths/csharp-first-steps/" },
        { t: "Add Logic to C# Applications", u: "https://learn.microsoft.com/training/paths/csharp-if-elseif-else/" },
        { t: "Work with Variable Data", u: "https://learn.microsoft.com/training/paths/csharp-arrays-operations/" }
      ],
      topics: []
    },
    {
      n: "02", title: "Object-Oriented Programming",
      links: [
        { t: "Create Classes and Objects", u: "https://learn.microsoft.com/training/modules/create-classes-objects-c-sharp/" },
        { t: "Implement Inheritance", u: "https://learn.microsoft.com/training/modules/inheritance-c-sharp/" },
        { t: "Use Interfaces", u: "https://learn.microsoft.com/training/modules/develop-object-oriented-programming/" }
      ],
      topics: ["Classes", "Objects", "Properties", "Encapsulation", "Abstraction", "Inheritance", "Polymorphism", "Interfaces"]
    },
    {
      n: "03", title: "Intermediate C#",
      links: [
        { t: "LINQ", u: "https://learn.microsoft.com/dotnet/csharp/linq/" },
        { t: "Async Programming", u: "https://learn.microsoft.com/dotnet/csharp/asynchronous-programming/" },
        { t: "Collections", u: "https://learn.microsoft.com/dotnet/csharp/programming-guide/concepts/collections" }
      ],
      topics: ["Exception Handling", "Generics", "Delegates", "Events", "LINQ", "Async/Await"],
      extra: "Span<T> / Memory<T> basics, IAsyncEnumerable<T>, cancellation tokens"
    },
    {
      n: "04", title: "Git & GitHub",
      links: [
        { t: "Microsoft Git Learning Path", u: "https://learn.microsoft.com/training/paths/intro-to-vc-git/" },
        { t: "GitHub Fundamentals", u: "https://learn.microsoft.com/training/paths/github-foundations/" }
      ],
      topics: ["Git", "Branching", "Pull Requests", "GitHub Actions"]
    },
    {
      n: "05", title: "SQL & Database Fundamentals",
      links: [
        { t: "Introduction to SQL", u: "https://learn.microsoft.com/training/paths/get-started-querying-with-transact-sql/" },
        { t: "Azure SQL Fundamentals", u: "https://learn.microsoft.com/training/modules/azure-sql-intro/" }
      ],
      topics: ["SELECT", "JOIN", "GROUP BY", "Stored Procedures", "Indexes", "Database Design"],
      extra: "transactions, isolation levels, connection pooling, N+1 query patterns"
    },
    {
      n: "06", title: "Entity Framework Core",
      links: [
        { t: "EF Core Documentation", u: "https://learn.microsoft.com/ef/core/" },
        { t: "Getting Started with EF Core", u: "https://learn.microsoft.com/ef/core/get-started/" }
      ],
      topics: ["DbContext", "Migrations", "Relationships", "LINQ", "CRUD"],
      extra: "query performance tuning (AsNoTracking, split queries), interceptors, raw SQL fallback, database-first vs code-first"
    },
    {
      n: "07", title: "ASP.NET Core Fundamentals",
      links: [
        { t: "Build Web Apps with ASP.NET Core", u: "https://learn.microsoft.com/training/paths/aspnet-core-web-app/" },
        { t: "ASP.NET Core Documentation", u: "https://learn.microsoft.com/aspnet/core/" }
      ],
      topics: ["Middleware", "Routing", "Dependency Injection", "Configuration", "Logging"],
      extra: "hosting model (Kestrel), options pattern, health checks, IHostedService / background services"
    },
    {
      n: "08", title: "Web API Development", tagline: "Expanded",
      links: [
        { t: "Build Web APIs", u: "https://learn.microsoft.com/aspnet/core/web-api/" },
        { t: "Create RESTful APIs", u: "https://learn.microsoft.com/training/modules/build-web-api-aspnet-core/" },
        { t: "Minimal APIs Overview", u: "https://learn.microsoft.com/aspnet/core/fundamentals/minimal-apis" }
      ],
      topics: ["Controllers", "Minimal APIs", "HTTP Methods", "DTOs", "Validation (FluentValidation)", "Swagger/OpenAPI"],
      extra: "API versioning, pagination/filtering/sorting patterns, response caching, rate limiting middleware, problem details / global exception handling, gRPC basics, SignalR for real-time endpoints"
    },
    {
      n: "8.5", title: "Blazor",
      links: [
        { t: "Blazor Overview", u: "https://learn.microsoft.com/aspnet/core/blazor/" },
        { t: "Build a Blazor Web App", u: "https://learn.microsoft.com/training/modules/build-blazor-webassembly-application-with-visual-studio-code/" }
      ],
      topics: ["Blazor Server vs WebAssembly vs Web App (hybrid render modes)", "Components", "Data Binding", "EventCallbacks", "Cascading Parameters", "JS Interop"],
      extra: "calling your ASP.NET Core Web API from a Blazor front end, Blazor Server + SignalR under the hood, auth state with ASP.NET Core Identity, hosting Blazor + API in the same project",
      why: "Gives you a full-stack C# option (no separate JS front end needed) — useful for internal admin panels/dashboards on top of your APIs."
    },
    {
      n: "09", title: "Authentication & Authorization",
      links: [
        { t: "Secure ASP.NET Core APIs", u: "https://learn.microsoft.com/aspnet/core/security/" },
        { t: "JWT Authentication", u: "https://learn.microsoft.com/aspnet/core/security/authentication/" }
      ],
      topics: ["JWT", "Identity", "Claims", "Roles", "OAuth"],
      extra: "refresh token rotation, ASP.NET Core Identity + external providers, API key auth for service-to-service calls, policy-based authorization"
    },
    {
      n: "10", title: "Clean Architecture & Design Patterns",
      links: [
        { t: ".NET Architecture Guides", u: "https://learn.microsoft.com/dotnet/architecture/" }
      ],
      topics: ["Repository Pattern", "Unit of Work", "CQRS", "Clean Architecture", "SOLID Principles"],
      extra: "MediatR pipeline behaviors, Result pattern for error handling, domain events, feature-folder structure"
    },
    {
      n: "11", title: "Testing",
      links: [
        { t: "Unit Testing in .NET", u: "https://learn.microsoft.com/dotnet/core/testing/" }
      ],
      topics: ["xUnit", "Mocking (Moq/NSubstitute)", "Integration Testing"],
      extra: "WebApplicationFactory for API integration tests, Testcontainers for real DB tests, contract testing basics"
    },
    {
      n: "12", title: "Docker",
      links: [
        { t: "Docker for .NET", u: "https://learn.microsoft.com/dotnet/core/docker/" }
      ],
      topics: ["Containers", "Dockerfiles", "Docker Compose"],
      extra: "multi-stage builds for smaller images, containerized DB + API compose setup, .NET Aspire for orchestration"
    },
    {
      n: "13", title: "Azure Cloud",
      links: [
        { t: "AZ-900 Learning Path", u: "https://learn.microsoft.com/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/" },
        { t: "Azure Developer Certification", u: "https://learn.microsoft.com/credentials/certifications/azure-developer/" }
      ],
      topics: ["Azure App Service", "Azure SQL", "Storage Accounts", "Functions", "Key Vault"],
      extra: "Azure Container Apps, App Configuration, managed identities, Application Insights for API monitoring"
    },
    {
      n: "14", title: "CI/CD",
      links: [
        { t: "GitHub Actions", u: "https://learn.microsoft.com/training/paths/github-actions/" },
        { t: "Azure DevOps", u: "https://learn.microsoft.com/azure/devops/" }
      ],
      topics: ["Build Pipelines", "Deployment Pipelines", "Automated Testing"],
      extra: "automated EF Core migrations in pipeline, environment-based config/secrets, blue-green or slot deployments"
    },
    {
      n: "15", title: "Backend Scalability & Reliability", tagline: "New",
      links: [
        { t: "Distributed Caching in ASP.NET Core", u: "https://learn.microsoft.com/en-us/aspnet/core/performance/caching/distributed" },
        { t: "Implement Application Resiliency (Polly)", u: "https://learn.microsoft.com/en-in/training/modules/microservices-resiliency-aspnet-core/3-implement-application-resiliency" },
        { t: ".NET Observability with OpenTelemetry", u: "https://learn.microsoft.com/en-us/dotnet/core/diagnostics/observability-with-otel" }
      ],
      topics: ["caching strategies (in-memory, distributed/Redis)", "message queues (RabbitMQ/Azure Service Bus)", "background job processing (Hangfire/Quartz.NET)", "retry/circuit breaker patterns (Polly)", "structured logging (Serilog)", "distributed tracing/OpenTelemetry"],
      why: "Rounds out the \"junior → mid-level backend\" gap around real-world production concerns."
    }
  ],

  projects: [
    { tier: "Beginner", items: ["Calculator", "Student Management System", "Library Management System"] },
    { tier: "Intermediate", items: ["Inventory System", "Expense Tracker", "Employee Management API"] },
    { tier: "Advanced", items: ["E-Commerce API", "Task Management API", "Learning Management System (LMS)", "Hotel Reservation API", "Banking API"] },
    { tier: "Backend-heavy add-ons", items: ["Notification service (queue-driven, background worker)", "Rate-limited public API with API key auth", "Multi-tenant SaaS-style API (tie into your existing capstone work)"] }
  ],

  certs: [
    { t: "AZ-900 Azure Fundamentals", u: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/" },
    { t: "GitHub Foundations", u: "https://learn.microsoft.com/en-us/credentials/certifications/github-foundations" },
    { t: "Applied Skills: Get started with classes, properties, and methods in C#", u: "https://learn.microsoft.com/en-us/credentials/applied-skills/get-started-with-classes-properties-and-methods-in-c-sharp/" },
    { t: "AZ-204 Azure Developer Associate", u: "https://learn.microsoft.com/en-us/credentials/certifications/azure-developer/" },
    { t: "Applied Skills: Develop an ASP.NET Core web app that consumes an API", u: "https://learn.microsoft.com/en-us/credentials/applied-skills/develop-an-aspnet-core-web-app-that-consumes-an-api/" },
    { t: "Build APIs with ASP.NET Core", u: "https://learn.microsoft.com/en-us/training/modules/build-web-api-aspnet-core/", note: "no standalone Applied Skills credential found under this exact name — closest match is this training module (not a certification exam)" }
  ],

  milestones: [
    { range: "Through Phase 10", result: "Junior .NET Backend Developer skill level" },
    { range: "Through Phase 14 + AZ-204 + 3 strong portfolio projects", result: "Approaching Mid-level Backend Developer" },
    { range: "Through Phase 15 + a scalability-focused project", result: "Mid-level, production-ready backend skill set" }
  ]
};
