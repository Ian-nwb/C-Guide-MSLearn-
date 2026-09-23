# C# / ASP.NET Full-Stack & Backend Developer Roadmap

---

## Phase 1: C# Fundamentals
- [Get Started with C#](https://learn.microsoft.com/training/paths/get-started-c-sharp-part-1/)
- [C# Fundamentals](https://learn.microsoft.com/training/paths/csharp-first-steps/)
- [Add Logic to C# Applications](https://learn.microsoft.com/training/paths/csharp-if-elseif-else/)
- [Work with Variable Data](https://learn.microsoft.com/training/paths/csharp-arrays-operations/)
- **Topics:** Variables & Data Types, Control Flow (if/switch), Loops (for/foreach/while), Arrays & Collections, Methods & Scope, Value Types vs Reference Types, Memory Management (Stack vs Heap)

## Phase 2: Object-Oriented Programming (OOP)
- [Create Classes and Objects](https://learn.microsoft.com/training/modules/create-classes-objects-c-sharp/)
- [Implement Inheritance](https://learn.microsoft.com/training/modules/inheritance-c-sharp/)
- [Use Interfaces](https://learn.microsoft.com/training/modules/develop-object-oriented-programming/)
- **Topics:** Classes, Objects, Properties & Fields, Encapsulation, Abstraction, Inheritance, Polymorphism, Interfaces, Records & Immutability

## Phase 3: Intermediate C# & Advanced Features
- [LINQ Query & Enumerable Operations](https://learn.microsoft.com/dotnet/csharp/linq/)
- [Async Programming](https://learn.microsoft.com/dotnet/csharp/asynchronous-programming/)
- [Collections & Generic Types](https://learn.microsoft.com/dotnet/csharp/programming-guide/concepts/collections)
- **Topics:** Exception Handling, Generics, Delegates, Events, LINQ, Async/Await, `IDisposable`
- **Extra:** `Span<T>` / `Memory<T>`, `IAsyncEnumerable<T>`, CancellationTokens, Pattern Matching

## Phase 4: Git & GitHub
- [Microsoft Git Learning Path](https://learn.microsoft.com/training/paths/intro-to-vc-git/)
- [GitHub Fundamentals](https://learn.microsoft.com/training/paths/github-foundations/)
- **Topics:** Git Commands, Branching Strategies, Merge vs Rebase, Pull Requests, Code Reviews, GitHub Actions, Conventional Commits

## Phase 5: Web Fundamentals (HTML5, CSS3 & JavaScript)
- [FreeCodeCamp Responsive Web Design Certification](https://www.freecodecamp.org/learn/2022/responsive-web-design/)
- [MDN Web Docs: Web Development Tutorials](https://developer.mozilla.org/en-US/docs/Learn)
- **Topics:** HTML5 Elements, Semantic Markup, Forms & Validation, CSS3 Box Model, Flexbox, Grid, Media Queries, Responsive Design, Modern JavaScript (ES6+), DOM Manipulation, Fetch API
- **Why:** Essential foundation before building Blazor UIs, Razor Pages, or consuming backend REST APIs from client applications.

## Phase 6: SQL & Database Fundamentals
- [Introduction to Querying with Transact-SQL](https://learn.microsoft.com/training/paths/get-started-querying-with-transact-sql/)
- [Azure SQL Fundamentals](https://learn.microsoft.com/training/modules/azure-sql-intro/)
- **Topics:** SELECT, JOIN, GROUP BY, Stored Procedures, Views, Indexes, Database Normalization, Dapper Micro-ORM
- **Extra:** Transactions, Isolation Levels, Connection Pooling, N+1 Query Antipatterns

## Phase 7: Entity Framework Core (EF Core)
- [EF Core Documentation](https://learn.microsoft.com/ef/core/)
- [Getting Started with EF Core](https://learn.microsoft.com/ef/core/get-started/)
- **Topics:** DbContext, Migrations & CLI, Relationships (1:1, 1:N, N:M), LINQ-to-Entities, CRUD Operations
- **Extra:** Query Performance Tuning (`AsNoTracking`, Split Queries), Interceptors, Raw SQL Fallback, Code-First vs Database-First

## Phase 8: ASP.NET Core Fundamentals & MVC
- [Build Web Apps with ASP.NET Core](https://learn.microsoft.com/training/paths/aspnet-core-web-app/)
- [ASP.NET Core Documentation](https://learn.microsoft.com/aspnet/core/)
- **Topics:** Middleware Pipeline, Routing, Razor Pages / MVC Views, Dependency Injection (Transient, Scoped, Singleton), Configuration (`appsettings.json`, User Secrets), Structured Logging
- **Extra:** Kestrel Web Server, Options Pattern, Health Checks, `IHostedService` Background Workers

## Phase 9: Web API Development & Minimal APIs
- [Build RESTful APIs with ASP.NET Core](https://learn.microsoft.com/aspnet/core/web-api/)
- [Minimal APIs Overview](https://learn.microsoft.com/aspnet/core/fundamentals/minimal-apis)
- **Topics:** Controllers vs Minimal APIs, HTTP Verbs & Status Codes, DTOs & Mapping, Validation (FluentValidation), OpenAPI / Swagger
- **Extra:** API Versioning, Pagination/Filtering/Sorting, Response Caching, Rate Limiting Middleware, ProblemDetails Global Exception Handling, gRPC Basics, SignalR for Real-time Endpoints

## Phase 10: Blazor & Modern Frontend Integration
- [Blazor Overview](https://learn.microsoft.com/aspnet/core/blazor/)
- [Build a Blazor Web App](https://learn.microsoft.com/training/modules/build-blazor-webassembly-application-with-visual-studio-code/)
- **Topics:** Blazor Server vs Blazor WebAssembly vs Blazor Auto Render Modes, Components, Data Binding, EventCallbacks, Cascading Parameters, JS Interop, State Management
- **Extra:** Consuming ASP.NET Core Web APIs from Blazor, TailwindCSS / MudBlazor Component Libraries, Authentication State Integration

## Phase 11: Authentication & Authorization
- [Secure ASP.NET Core APIs](https://learn.microsoft.com/aspnet/core/security/)
- [Configure JWT Authentication](https://learn.microsoft.com/aspnet/core/security/authentication/)
- **Topics:** JWT (JSON Web Tokens), ASP.NET Core Identity, Claims & `ClaimsPrincipal`, Role-Based Access Control (RBAC), Policy-Based Authorization, OAuth2 & OpenID Connect
- **Extra:** Refresh Token Rotation, External OAuth Providers (Google/GitHub), API Key Auth for Service-to-Service Calls

## Phase 12: Clean Architecture & Design Patterns
- [.NET Architecture Guides](https://learn.microsoft.com/dotnet/architecture/)
- **Topics:** Repository & Unit of Work Patterns, CQRS (Command Query Responsibility Segregation), Clean Architecture, SOLID Principles, Design Patterns (Factory, Strategy, Decorator)
- **Extra:** MediatR Pipeline Behaviors, Result Pattern for Functional Error Handling, Domain Events, Feature-Folder Structure

## Phase 13: Unit Testing & Integration Testing
- [Unit Testing in .NET](https://learn.microsoft.com/dotnet/core/testing/)
- [Integration Testing ASP.NET Core APIs](https://learn.microsoft.com/aspnet/core/test/integration-tests)
- **Topics:** Unit Testing (xUnit/NUnit), Mocking Frameworks (Moq/NSubstitute), FluentAssertions, Integration Testing, Test-Driven Development (TDD)
- **Extra:** `WebApplicationFactory` for API Integration Tests, Testcontainers for Real DB Tests, Contract Testing Basics

## Phase 14: Docker & Cloud-Native .NET Aspire
- [Docker for .NET](https://learn.microsoft.com/dotnet/core/docker/)
- [Get Started with .NET Aspire](https://learn.microsoft.com/dotnet/aspire/get-started/aspire-overview)
- **Topics:** Containers, Dockerfiles, Docker Compose, Environment Variable Config
- **Extra:** Multi-stage Builds, Containerized DB + API setups, .NET Aspire Service Discovery & Orchestration

## Phase 15: Azure Cloud Services
- [AZ-900 Learning Path](https://learn.microsoft.com/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/)
- [Azure Developer Certification Path](https://learn.microsoft.com/credentials/certifications/azure-developer/)
- **Topics:** Azure App Service, Azure SQL Database, Blob Storage, Azure Functions (Serverless), Azure Key Vault
- **Extra:** Azure Container Apps, App Configuration, Managed Identities, Application Insights API Monitoring

## Phase 16: CI/CD Deployment Pipelines
- [Automate Workflows with GitHub Actions](https://learn.microsoft.com/training/paths/github-actions/)
- [Azure Pipelines for ASP.NET Core](https://learn.microsoft.com/azure/devops/pipelines/ecosystems/dotnet-core)
- **Topics:** Build Pipelines, Deployment Pipelines, Automated Testing in CI, Artifact & Container Registry Management
- **Extra:** Automated EF Core Migrations in Pipelines, Secret Management, Deployment Slots (Blue-Green Releases)

## Phase 17: Backend Scalability & Reliability
- [Distributed Caching in ASP.NET Core](https://learn.microsoft.com/aspnet/core/performance/caching/distributed)
- [Implement Application Resiliency with Polly](https://learn.microsoft.com/dotnet/architecture/microservices/implement-resilient-applications/)
- [.NET Observability with OpenTelemetry](https://learn.microsoft.com/dotnet/core/diagnostics/observability-with-otel)
- **Topics:** Caching Strategies (In-Memory, Redis, HybridCache), Message Queues (RabbitMQ / Azure Service Bus), Background Job Processing (Hangfire / Quartz.NET), Resiliency Patterns (Retry, Circuit Breaker with Polly), Structured Logging (Serilog), Distributed Tracing

## Phase 18: Multi-Tenancy Patterns
- [Multitenant SaaS Patterns (Azure SQL Database)](https://learn.microsoft.com/azure/azure-sql/database/saas-tenancy-app-design-patterns)
- [Architect Multitenant Solutions on Azure](https://learn.microsoft.com/azure/architecture/guide/multitenant/overview)
- **Topics:** Tenancy Models (Single-DB Shared-Schema, Schema-per-Tenant, DB-per-Tenant), Sharding, Tenant Context Resolution, Noisy Neighbor Antipattern

## Phase 19: Domain-Driven Design (DDD) & Microservices Patterns
- [Designing a Microservice Domain Model](https://learn.microsoft.com/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/microservice-domain-model)
- [Domain Events: Design and Implementation](https://learn.microsoft.com/dotnet/architecture/microservices/microservice-ddd-cqrs-patterns/domain-events-design-implementation)
- [Tactical DDD Design in .NET](https://learn.microsoft.com/azure/architecture/microservices/model/tactical-domain-driven-design)
- **Topics:** Aggregates & Root Entities, Entities vs Value Objects, Bounded Contexts, Ubiquitous Language, Domain Events vs Integration Events
- **Extra:** Transactional Outbox Pattern, MassTransit Integration, Saga Pattern

## Phase 20: Event-Driven Architecture & Messaging
- [Asynchronous Message-Based Communication](https://learn.microsoft.com/dotnet/architecture/microservices/architect-microservice-container-applications/asynchronous-message-based-communication)
- [Implementing Event-Based Communication Between Microservices](https://learn.microsoft.com/dotnet/architecture/microservices/multi-container-microservice-net-applications/integration-event-based-microservice-communications)
- [MassTransit Documentation](https://masstransit.io/)
- **Topics:** Pub/Sub vs Point-to-Point Queues, Message Bus Abstractions (MassTransit), RabbitMQ & Azure Service Bus, Eventual Consistency, Choreography vs Saga Orchestration

## Phase 21: API Gateway & Reverse Proxy (YARP)
- [Overview of YARP (Yet Another Reverse Proxy)](https://learn.microsoft.com/aspnet/core/fundamentals/servers/yarp/yarp-overview)
- [Get Started with YARP](https://learn.microsoft.com/aspnet/core/fundamentals/servers/yarp/getting-started)
- **Topics:** Request Routing, Load Balancing, TLS Termination, Gateway Rate Limiting, Per-Route Authorization Policies

## Phase 22: Security Hardening & OWASP
- [OWASP Top 10 for .NET Developers](https://learn.microsoft.com/training/modules/owasp-top-10-for-dotnet-developers/)
- [ASP.NET Core Security Overview](https://learn.microsoft.com/aspnet/core/security/)
- [Safe Storage of App Secrets](https://learn.microsoft.com/aspnet/core/security/app-secrets)
- **Topics:** OWASP Top 10 Mitigation, Input Validation & Sanitization, Secret Manager vs Key Vault, HTTPS & HSTS Enforcement, CSRF & XSS Mitigation

## Phase 23: Performance Profiling & Diagnostics
- [.NET Diagnostic Tools Overview](https://learn.microsoft.com/dotnet/core/diagnostics/tools-overview)
- [Debug High CPU Usage in .NET Core](https://learn.microsoft.com/dotnet/core/diagnostics/debug-highcpu)
- **Topics:** `dotnet-trace`, `dotnet-counters`, `dotnet-dump`, `dotnet-gcdump`, Memory Leak Analysis, Allocation Profiling, Flamegraphs

## Phase 24: NoSQL Persistence with MongoDB
- [Create a Web API with ASP.NET Core and MongoDB](https://learn.microsoft.com/aspnet/core/tutorials/first-mongo-app)
- **Topics:** MongoDB.Driver, BsonId & BSON Serialization, Document Store vs Relational Mindset, Repository Pattern with Mongo, When NoSQL Beats EF Core

---

## Portfolio Projects

**Beginner**
- Personal Portfolio Website (HTML5, CSS3, JavaScript)
- Calculator CLI & Web App
- Student Management System
- Library Management System

**Intermediate**
- Inventory Management System (Blazor + EF Core)
- Expense Tracker REST API with Auth
- Employee Management API (Dapper + SQL Server)

**Advanced**
- E-Commerce REST API (Clean Architecture + CQRS + MediatR)
- Task Management Platform with SignalR Real-Time Notifications
- Hotel Reservation System API with EF Core & MongoDB
- Banking Platform API with Audit Trail & Micro-transactions

**Backend & Architecture Add-Ons**
- Queue-Driven Notification Microservice (MassTransit + RabbitMQ + Background Worker)
- Rate-Limited Public API with API Key Auth & Redis Caching
- Multi-Tenant SaaS Platform Backend with Tenant Resolution Middleware

---

## Recommended Certification Order

### 100% Free Certifications & Official Credentials
1. [FreeCodeCamp: Foundational C# with Microsoft Certification](https://www.freecodecamp.org/learn/foundational-c-sharp-with-microsoft/)
2. [FreeCodeCamp: Responsive Web Design Certification](https://www.freecodecamp.org/learn/2022/responsive-web-design/)
3. [Microsoft Applied Skills: Get started with classes, properties, and methods in C#](https://learn.microsoft.com/credentials/applied-skills/get-started-with-classes-properties-and-methods-in-c-sharp/)
4. [Microsoft Applied Skills: Create web apps with ASP.NET Core](https://learn.microsoft.com/credentials/applied-skills/create-web-apps-with-aspnet-core/)
5. [Microsoft Applied Skills: Develop an ASP.NET Core web app that consumes an API](https://learn.microsoft.com/credentials/applied-skills/develop-an-aspnet-core-web-app-that-consumes-an-api/)
6. [Microsoft Applied Skills: Deploy containerized apps to Azure Container Apps](https://learn.microsoft.com/credentials/applied-skills/deploy-apps-to-azure-container-apps/)

### Standard Industry Role Certifications (Paid Exams / Free Study Paths)
7. [AZ-900 Azure Fundamentals](https://learn.microsoft.com/credentials/certifications/azure-fundamentals/)
8. [GitHub Foundations](https://learn.microsoft.com/credentials/certifications/github-foundations)
9. [AZ-204 Azure Developer Associate](https://learn.microsoft.com/credentials/certifications/azure-developer/)

---

## Skill Milestones
- **Through Phase 10** → Junior Full-Stack / .NET Backend Developer
- **Through Phase 16 + AZ-204 + 3 Portfolio Projects** → Mid-level Backend Developer
- **Through Phase 18 + Scalability/Caching Project** → Production-ready Mid-level Backend Engineer
- **Through Phase 24 + Multi-tenant or Event-driven Microservices Project** → Senior-leaning Backend Architect
