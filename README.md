# C# / ASP.NET Backend Developer Roadmap

---

## Phase 1: C# Fundamentals
- [Get Started with C#](https://learn.microsoft.com/training/paths/get-started-c-sharp-part-1/)
- [C# Fundamentals](https://learn.microsoft.com/training/paths/csharp-first-steps/)
- [Add Logic to C# Applications](https://learn.microsoft.com/training/paths/csharp-if-elseif-else/)
- [Work with Variable Data](https://learn.microsoft.com/training/paths/csharp-arrays-operations/)

## Phase 2: Object-Oriented Programming
- [Create Classes and Objects](https://learn.microsoft.com/training/modules/create-classes-objects-c-sharp/)
- [Implement Inheritance](https://learn.microsoft.com/training/modules/inheritance-c-sharp/)
- [Use Interfaces](https://learn.microsoft.com/training/modules/develop-object-oriented-programming/)
- Topics: Classes, Objects, Properties, Encapsulation, Abstraction, Inheritance, Polymorphism, Interfaces

## Phase 3: Intermediate C#
- [LINQ](https://learn.microsoft.com/dotnet/csharp/linq/)
- [Async Programming](https://learn.microsoft.com/dotnet/csharp/asynchronous-programming/)
- [Collections](https://learn.microsoft.com/dotnet/csharp/programming-guide/concepts/collections)
- Topics: Exception Handling, Generics, Delegates, Events, LINQ, Async/Await
- Extra (backend-relevant): `Span<T>` / `Memory<T>` basics, `IAsyncEnumerable<T>`, cancellation tokens

## Phase 4: Git & GitHub
- [Microsoft Git Learning Path](https://learn.microsoft.com/training/paths/intro-to-vc-git/)
- [GitHub Fundamentals](https://learn.microsoft.com/training/paths/github-foundations/)
- Topics: Git, Branching, Pull Requests, GitHub Actions

## Phase 5: SQL & Database Fundamentals
- [Introduction to SQL](https://learn.microsoft.com/training/paths/get-started-querying-with-transact-sql/)
- [Azure SQL Fundamentals](https://learn.microsoft.com/training/modules/azure-sql-intro/)
- Topics: SELECT, JOIN, GROUP BY, Stored Procedures, Indexes, Database Design
- Extra (backend-relevant): transactions, isolation levels, connection pooling, N+1 query patterns

## Phase 6: Entity Framework Core
- [EF Core Documentation](https://learn.microsoft.com/ef/core/)
- [Getting Started with EF Core](https://learn.microsoft.com/ef/core/get-started/)
- Topics: DbContext, Migrations, Relationships, LINQ, CRUD
- Extra: query performance tuning (AsNoTracking, split queries), interceptors, raw SQL fallback, database-first vs code-first

## Phase 7: ASP.NET Core Fundamentals
- [Build Web Apps with ASP.NET Core](https://learn.microsoft.com/training/paths/aspnet-core-web-app/)
- [ASP.NET Core Documentation](https://learn.microsoft.com/aspnet/core/)
- Topics: Middleware, Routing, Dependency Injection, Configuration, Logging
- Extra: hosting model (Kestrel), options pattern, health checks, `IHostedService` / background services

## Phase 8: Web API Development (Expanded)
- [Build Web APIs](https://learn.microsoft.com/aspnet/core/web-api/)
- [Create RESTful APIs](https://learn.microsoft.com/training/modules/build-web-api-aspnet-core/)
- [Minimal APIs Overview](https://learn.microsoft.com/aspnet/core/fundamentals/minimal-apis)
- Topics: Controllers, Minimal APIs, HTTP Methods, DTOs, Validation (FluentValidation), Swagger/OpenAPI
- Extra: API versioning, pagination/filtering/sorting patterns, response caching, rate limiting middleware, problem details / global exception handling, gRPC basics, SignalR for real-time endpoints

## Phase 8.5: Blazor
- [Blazor Overview](https://learn.microsoft.com/aspnet/core/blazor/)
- [Build a Blazor Web App](https://learn.microsoft.com/training/modules/build-blazor-webassembly-application-with-visual-studio-code/)
- Topics: Blazor Server vs Blazor WebAssembly vs Blazor Web App (hybrid render modes), Components, Data Binding, EventCallbacks, Cascading Parameters, JS Interop
- Extra (backend-relevant): calling your ASP.NET Core Web API from a Blazor front end, Blazor Server + SignalR under the hood, auth state with ASP.NET Core Identity, hosting Blazor + API in the same project
- Why: gives you a full-stack C# option (no separate JS front end needed) — useful for internal admin panels/dashboards on top of your APIs

## Phase 9: Authentication & Authorization
- [Secure ASP.NET Core APIs](https://learn.microsoft.com/aspnet/core/security/)
- [JWT Authentication](https://learn.microsoft.com/aspnet/core/security/authentication/)
- Topics: JWT, Identity, Claims, Roles, OAuth
- Extra: refresh token rotation, ASP.NET Core Identity + external providers, API key auth for service-to-service calls, policy-based authorization

## Phase 10: Clean Architecture & Design Patterns
- [.NET Architecture Guides](https://learn.microsoft.com/dotnet/architecture/)
- Topics: Repository Pattern, Unit of Work, CQRS, Clean Architecture, SOLID Principles
- Extra: MediatR pipeline behaviors, Result pattern for error handling, domain events, feature-folder structure

## Phase 11: Testing
- [Unit Testing in .NET](https://learn.microsoft.com/dotnet/core/testing/)
- Topics: xUnit, Mocking (Moq/NSubstitute), Integration Testing
- Extra: WebApplicationFactory for API integration tests, Testcontainers for real DB tests, contract testing basics

## Phase 12: Docker
- [Docker for .NET](https://learn.microsoft.com/dotnet/core/docker/)
- Topics: Containers, Dockerfiles, Docker Compose
- Extra: multi-stage builds for smaller images, containerized DB + API compose setup, .NET Aspire for orchestration

## Phase 13: Azure Cloud
- [AZ-900 Learning Path](https://learn.microsoft.com/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/)
- [Azure Developer Certification](https://learn.microsoft.com/credentials/certifications/azure-developer/)
- Topics: Azure App Service, Azure SQL, Storage Accounts, Functions, Key Vault
- Extra: Azure Container Apps, App Configuration, managed identities, Application Insights for API monitoring

## Phase 14: CI/CD
- [GitHub Actions](https://learn.microsoft.com/training/paths/github-actions/)
- [Azure DevOps](https://learn.microsoft.com/azure/devops/)
- Topics: Build Pipelines, Deployment Pipelines, Automated Testing
- Extra: automated EF Core migrations in pipeline, environment-based config/secrets, blue-green or slot deployments

## Phase 15 (New): Backend Scalability & Reliability
- [Distributed Caching in ASP.NET Core](https://learn.microsoft.com/en-us/aspnet/core/performance/caching/distributed)
- [Implement Application Resiliency (Polly)](https://learn.microsoft.com/en-in/training/modules/microservices-resiliency-aspnet-core/3-implement-application-resiliency)
- [.NET Observability with OpenTelemetry](https://learn.microsoft.com/en-us/dotnet/core/diagnostics/observability-with-otel)
- Topics: caching strategies (in-memory, distributed/Redis), message queues (RabbitMQ/Azure Service Bus), background job processing (Hangfire/Quartz.NET), retry/circuit breaker patterns (Polly), structured logging (Serilog), distributed tracing/OpenTelemetry
- Why: rounds out the "junior → mid-level backend" gap around real-world production concerns

---

## Portfolio Projects

**Beginner**
- Calculator
- Student Management System
- Library Management System

**Intermediate**
- Inventory System
- Expense Tracker
- Employee Management API

**Advanced**
- E-Commerce API
- Task Management API
- Learning Management System (LMS)
- Hotel Reservation API
- Banking API

**Backend-heavy add-ons**
- Notification service (queue-driven, background worker)
- Rate-limited public API with API key auth
- Multi-tenant SaaS-style API (tie into your existing capstone work)

---

## Suggested Certification Order
1. [AZ-900 Azure Fundamentals](https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/)
2. [GitHub Foundations](https://learn.microsoft.com/en-us/credentials/certifications/github-foundations)
3. [Applied Skills: Get started with classes, properties, and methods in C#](https://learn.microsoft.com/en-us/credentials/applied-skills/get-started-with-classes-properties-and-methods-in-c-sharp/)
4. [AZ-204 Azure Developer Associate](https://learn.microsoft.com/en-us/credentials/certifications/azure-developer/)
5. [Applied Skills: Develop an ASP.NET Core web app that consumes an API](https://learn.microsoft.com/en-us/credentials/applied-skills/develop-an-aspnet-core-web-app-that-consumes-an-api/)
6. Applied Skills: Build APIs with ASP.NET Core — no standalone Applied Skills credential found under this exact name; closest match is the [Create a web API with ASP.NET Core controllers](https://learn.microsoft.com/en-us/training/modules/build-web-api-aspnet-core/) training module (not a certification exam)

---

## Milestones
- **Through Phase 10** → Junior .NET Backend Developer skill level
- **Through Phase 14 + AZ-204 + 3 strong portfolio projects** → approaching Mid-level Backend Developer
- **Through Phase 15 + a scalability-focused project** → Mid-level, production-ready backend skill set
