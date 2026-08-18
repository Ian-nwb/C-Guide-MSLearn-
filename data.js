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
    },
    {
      n: "16", title: "Multi-Tenancy Patterns", tagline: "New",
      links: [
        { t: "Multitenant SaaS Patterns (Azure SQL Database)", u: "https://learn.microsoft.com/en-us/azure/azure-sql/database/saas-tenancy-app-design-patterns?view=azuresql" },
        { t: "SaaS and Multitenant Solution Architecture", u: "https://learn.microsoft.com/en-us/azure/architecture/guide/saas-multitenant-solution-architecture/" },
        { t: "Architect Multitenant Solutions on Azure", u: "https://learn.microsoft.com/en-us/azure/architecture/guide/multitenant/overview" }
      ],
      topics: ["tenancy models (single-DB shared-schema, schema-per-tenant, DB-per-tenant)", "sharding", "tenant identity", "the Noisy Neighbor antipattern"],
      why: "Directly relevant to SaaS-style projects — picking the wrong tenancy model early is expensive to walk back."
    },
    {
      n: "17", title: "Domain-Driven Design & Microservices Patterns", tagline: "New",
      links: [
        { t: "Designing a Microservice Domain Model", u: "https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/microservice-domain-model" },
        { t: "Domain Events: Design and Implementation", u: "https://learn.microsoft.com/en-us/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-events-design-implementation" },
        { t: "Use Domain Analysis to Model Microservices", u: "https://learn.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis" },
        { t: "Use Tactical DDD to Design Microservices", u: "https://learn.microsoft.com/en-us/azure/architecture/microservices/model/tactical-domain-driven-design" }
      ],
      topics: ["aggregates", "entities vs value objects", "bounded contexts", "ubiquitous language", "domain events vs integration events"],
      why: "Goes deeper than Phase 10's Clean Architecture — this is where CQRS and Result-pattern choices actually get justified."
    },
    {
      n: "18", title: "Event-Driven Architecture & Messaging", tagline: "New",
      links: [
        { t: "Asynchronous Message-Based Communication", u: "https://learn.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/asynchronous-message-based-communication" },
        { t: "Implementing Event-Based Communication Between Microservices", u: "https://learn.microsoft.com/en-us/dotnet/architecture/microservices/multi-container-microservice-net-applications/integration-event-based-microservice-communications" },
        { t: "Event-Driven Architecture Style", u: "https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven" }
      ],
      topics: ["pub/sub vs point-to-point queues", "event bus abstractions", "eventual consistency", "choreography vs saga orchestration"],
      why: "Turns Phase 15's \"message queues\" bullet into an actual pattern instead of a name-drop."
    },
    {
      n: "19", title: "API Gateway & Reverse Proxy (YARP)", tagline: "New",
      links: [
        { t: "Overview of YARP", u: "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/yarp/yarp-overview?view=aspnetcore-10.0" },
        { t: "Get Started with YARP", u: "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/yarp/getting-started?view=aspnetcore-10.0" },
        { t: "YARP Configuration Files", u: "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/yarp/config-files?view=aspnetcore-10.0" },
        { t: "YARP Authentication and Authorization", u: "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/servers/yarp/authn-authz?view=aspnetcore-10.0" }
      ],
      topics: ["routing", "load balancing", "TLS termination", "per-route authorization policies"],
      why: "A first-party .NET reverse proxy — useful the moment you split a monolith into more than one backend service."
    },
    {
      n: "20", title: "Security Hardening", tagline: "New",
      links: [
        { t: "Guide to Secure .NET Development with OWASP Top 10", u: "https://learn.microsoft.com/en-us/training/modules/owasp-top-10-for-dotnet-developers/" },
        { t: "ASP.NET Core Security Topics (overview)", u: "https://learn.microsoft.com/en-us/aspnet/core/security/?view=aspnetcore-7.0" },
        { t: "Safe Storage of App Secrets in Development", u: "https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-10.0" }
      ],
      topics: ["OWASP Top 10 for .NET", "input validation", "Secret Manager vs Key Vault", "HTTPS/HSTS", "CSRF/XSS mitigation in Razor/Blazor"],
      why: "Closes the gap between \"auth works\" (Phase 9) and \"auth is actually hardened\"."
    },
    {
      n: "21", title: "Performance Profiling & Diagnostics", tagline: "New",
      links: [
        { t: ".NET Diagnostic Tools Overview", u: "https://learn.microsoft.com/en-us/dotnet/core/diagnostics/tools-overview" },
        { t: "Profiling Tools in .NET", u: "https://learn.microsoft.com/en-us/dotnet/core/diagnostics/profilers" },
        { t: "dotnet-counters Diagnostic Tool", u: "https://learn.microsoft.com/en-us/dotnet/core/diagnostics/dotnet-counters" },
        { t: "Debug High CPU Usage in .NET Core", u: "https://learn.microsoft.com/en-us/dotnet/core/diagnostics/debug-highcpu" }
      ],
      topics: ["dotnet-trace", "dotnet-counters", "dotnet-dump", "dotnet-gcdump", "flamegraphs", "root-causing slow endpoints"],
      why: "The practical skill behind \"why is this API slow\" once caching/resilience (Phase 15) alone doesn't explain it."
    },
    {
      n: "22", title: "NoSQL with .NET (MongoDB)", tagline: "New",
      links: [
        { t: "Create a Web API with ASP.NET Core and MongoDB", u: "https://learn.microsoft.com/en-us/aspnet/core/tutorials/first-mongo-app?view=aspnetcore-10.0" }
      ],
      topics: ["MongoDB.Driver", "BsonId/BSON serialization attributes", "collections vs tables mindset", "when NoSQL beats EF Core/SQL for a given service"],
      why: "You already run MongoDB elsewhere (Wattly, SHIELA, Nini HR) — this closes the gap between \"I use Mongo in Node\" and \"I use Mongo in .NET\"."
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
    { range: "Through Phase 15 + a scalability-focused project", result: "Mid-level, production-ready backend skill set" },
    { range: "Through Phase 22 + a multi-tenant or event-driven project", result: "Senior-leaning backend skill set (architecture, security, diagnostics)" }
  ]
};
