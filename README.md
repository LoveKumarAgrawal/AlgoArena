# 🏆 AlgoArena

<div align="center">

A modern, full-stack competitive programming platform inspired by Codeforces, built with cutting-edge technologies and scalable architecture.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Turborepo](https://img.shields.io/badge/Turborepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white)](https://turbo.build/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

<br/>

## 🎥 Demo Video

<div align="center">
  <a href="https://drive.google.com/file/d/1EsPJ81qzSaN55d-894LzLMSxmCGkeE8m/view?usp=drive_link" target="_blank">
    <img src="https://img.shields.io/badge/▶️_Watch_Demo_Video-4285F4?style=for-the-badge&logo=googledrive&logoColor=white" alt="Watch Demo Video" />
  </a>
</div>

<br/>

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Architecture](#-architecture)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Applications & Services](#-applications--services)
- [Packages](#-packages)
- [Development Workflow](#-development-workflow)
- [Contributing](#-contributing)

---

## 🎯 Overview

**AlgoArena** is a competitive programming platform that enables developers to:
- Solve algorithmic problems in multiple programming languages (JavaScript, C++, Rust)
- Participate in timed contests with real-time leaderboards
- Track submissions with detailed test case results
- View global and contest-specific standings
- Experience a modern, responsive UI with Monaco Editor integration

Built as a **monorepo using Turborepo**, AlgoArena demonstrates enterprise-grade architecture with shared packages, optimized builds, and scalable microservices.

---

## ✨ Key Features

### For Users
- 🔐 **Secure Authentication** - NextAuth.js-based authentication with bcrypt password hashing
- 💻 **Multi-Language Support** - Write solutions in JavaScript, C++, and Rust
- 📝 **Rich Code Editor** - Monaco Editor (VS Code's editor) with syntax highlighting
- ⚡ **Real-time Judging** - Instant feedback on submissions with test case results
- 🏅 **Contest System** - Participate in timed programming contests
- 📊 **Live Leaderboards** - Dynamic rankings based on solve time and accuracy
- 📈 **Submission History** - Track your progress with detailed submission logs
- 🎨 **Modern UI/UX** - Beautiful, responsive design with Tailwind CSS and Radix UI

### For Developers
- 🚀 **Scalable Architecture** - Microservices-based design with clear separation of concerns
- 📦 **Monorepo Setup** - Turborepo for efficient build caching and parallel execution
- 🔄 **Code Reusability** - Shared packages for database, UI components, and utilities
- 🛠️ **Type Safety** - End-to-end TypeScript with Zod validation
- 🐳 **Containerization** - Docker support for boilerplate generation
- 📐 **Schema-Driven** - Prisma ORM with PostgreSQL for robust data modeling

---

## 🏗️ Architecture

AlgoArena follows a **modular microservices architecture** within a monorepo:

```

┌─────────────────────────────────────────────────────────────────┐
│                         Frontend (Next.js)                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   Problems   │  │   Contests   │  │  Leaderboard │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        API Layer (Next.js)                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │   /api/...   │  │   Auth       │  │  Submissions │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
└─────────────────────────────────────────────────────────────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
    ┌─────────────┐  ┌─────────────┐  ┌─────────────┐
    │ Submission  │  │ Boilerplate │  │ Leaderboard │
    │  Webhook    │  │  Generator  │  │  Generator  │
    │  (Express)  │  │   (ANTLR4)  │  │   (Node.js) │
    └─────────────┘  └─────────────┘  └─────────────┘
              │
              ▼
    ┌─────────────────────┐
    │   PostgreSQL DB     │
    │   (Prisma ORM)      │
    └─────────────────────┘
```

<div align="center">
  <img src="./media/Screenshot%202025-12-22%20165243.png" alt="AlgoArena Architecture Diagram" width="800">
  <p><em>AlgoArena System Architecture (Created with Excalidraw)</em></p>
</div>

### Key Architectural Decisions

1. **Monorepo with Turborepo**: Enables code sharing, faster builds with intelligent caching, and simplified dependency management
2. **Microservices Pattern**: Each service has a single responsibility (submission handling, boilerplate generation, leaderboard computation)
3. **Type-Safe APIs**: Zod schemas ensure runtime validation matches TypeScript types
4. **Database-First Design**: Prisma schema serves as the single source of truth
5. **Separation of Concerns**: Frontend, backend logic, and utility services are clearly separated

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with tailwindcss-animate
- **UI Components**: Radix UI primitives (Avatar, Slot)
- **Code Editor**: Monaco Editor (VS Code editor)
- **Markdown**: react-markdown with remark-gfm
- **State Management**: React hooks + NextAuth session
- **Notifications**: react-toastify

### Backend
- **API Routes**: Next.js API routes
- **Authentication**: NextAuth.js with credentials provider
- **Validation**: Zod schemas
- **Webhook Service**: Express.js
- **ORM**: Prisma Client
- **Database**: PostgreSQL

### DevOps & Tools
- **Monorepo**: Turborepo
- **Package Manager**: Yarn workspaces
- **Containerization**: Docker (for boilerplate generation)
- **Code Quality**: ESLint, Prettier
- **Type Checking**: TypeScript 5.3+

### Supported Languages (Submissions)
- JavaScript (Node.js)
- C++ (GCC)
- Rust (rustc)

---

## 📂 Project Structure

```
AlgoArena/
├── apps/                                    # Application services
│   ├── web/                                 # Next.js frontend application
│   │   ├── app/                             # Next.js 14 app directory
│   │   │   ├── api/                         # API routes
│   │   │   ├── problem/[problemId]/         # Dynamic problem pages
│   │   │   ├── contest/[contestId]/         # Dynamic contest pages
│   │   │   ├── contests/                    # Contests listing
│   │   │   ├── problems/                    # Problems listing
│   │   │   └── standings/                   # Leaderboard
│   │   ├── components/                      # React components
│   │   │   ├── Problem.tsx                  # Problem viewer
│   │   │   ├── Contest.tsx                  # Contest interface
│   │   │   ├── SubmissionTable.tsx          # Submission history
│   │   │   └── ...                          
│   │   └── public/                          # Static assets
│   │
│   ├── submission-webhook/                  # Submission processing service
│   │   └── src/
│   │       ├── index.ts                     # Express server
│   │       ├── outputMapping.ts             # Test case validation
│   │       ├── points.ts                    # Scoring logic
│   │       └── db/                          # Database operations
│   │
│   ├── boilerplate-generator/               # Code template generator
│   │   ├── src/
│   │   │   ├── index.ts                     # Main entry
│   │   │   ├── ProblemDefinitionGenerator.ts
│   │   │   └── FullProblemDefinitionGenerator.ts
│   │   └── Dockerfile                       # ANTLR4 environment
│   │
│   ├── leaderboard-generator/               # Contest rankings service
│   │   └── src/index.ts
│   │
│   └── problems/                            # Problem definitions
│       ├── two-sum/
│       │   ├── Problem.md                   # Problem statement
│       │   ├── Structure.md                 # Input/output format
│       │   ├── boilerplate/                 # Starter code
│       │   ├── boilerplate-full/            # Complete templates
│       │   └── tests/                       # Test cases
│       ├── max-element/
│       └── classroom/
│
├── packages/                                # Shared packages
│   ├── db/                                  # Database package
│   │   ├── prisma/
│   │   │   ├── schema.prisma                # Database schema
│   │   │   ├── seed.ts                      # Seed data
│   │   │   └── migrations/                  # Migration history
│   │   └── src/index.ts                     # Prisma client export
│   │
│   ├── common/                              # Shared utilities
│   │   ├── language/index.ts                # Language configurations
│   │   └── zod/                             # Validation schemas
│   │       ├── submissionInput.ts
│   │       └── submissionCallback.ts
│   │
│   ├── ui/                                  # Shared UI components
│   │   └── src/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── code.tsx
│   │
│   ├── eslint-config/                       # ESLint configurations
│   └── typescript-config/                   # TypeScript configurations
│
├── package.json                             # Root package configuration
├── turbo.json                               # Turborepo pipeline config
└── tsconfig.json                            # Root TypeScript config
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **Yarn** 1.22.22
- **PostgreSQL** database
- **Docker** (optional, for boilerplate generator)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/AlgoArena.git
   cd AlgoArena
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Setup environment variables**
   
   Create `.env` files in the following locations:
   
   **`apps/web/.env`**
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/algoarena"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

   **`apps/boilerplate-generator/.env`**
   ```env
   GENERATOR_FILE_PATH=../../problems/two-sum
   ```

4. **Setup database**
   ```bash
   cd packages/db
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Build all packages**
   ```bash
   yarn build
   ```

6. **Start development server**
   ```bash
   yarn dev
   ```

   The application will be available at `http://localhost:3000`

---

## 🔧 Applications & Services

### 1. **Web Application** (`apps/web`)
The main Next.js frontend application featuring:
- **Problem Browser**: Browse and search problems by difficulty
- **Code Editor**: Monaco Editor with multi-language support
- **Contest Interface**: Real-time contest participation
- **Leaderboards**: Dynamic rankings and statistics
- **User Dashboard**: Submission history and progress tracking

**Key Routes**:
- `/` - Landing page
- `/problems` - Problem listing
- `/problem/[slug]` - Individual problem page
- `/contests` - Contest listing
- `/contest/[id]` - Contest interface
- `/standings` - Global leaderboard

### 2. **Submission Webhook** (`apps/submission-webhook`)
Express.js microservice responsible for:
- Receiving submission results from judge servers
- Validating test case outputs
- Calculating points and updating scores
- Managing submission status (AC, WA, TLE, RE)
- Updating user and contest statistics

**Endpoints**:
- `POST /webhook` - Receive judging results

### 3. **Boilerplate Generator** (`apps/boilerplate-generator`)
Automated code template generator using ANTLR4:
- Parses problem structure definitions
- Generates language-specific boilerplate code
- Creates full problem templates with test harness
- Supports C++, JavaScript, and Rust

**Usage**:
```bash
docker build -t antlr4-typescript .
docker run --rm -v $(pwd)/src/outputs:/usr/src/app antlr4-typescript
GENERATOR_FILE_PATH=../../problems/two-sum node dist/index.js
```

### 4. **Leaderboard Generator** (`apps/leaderboard-generator`)
Service for computing and caching leaderboard data:
- Aggregates user scores across problems
- Calculates contest rankings
- Handles tie-breaking logic (time-based)
- Optimizes database queries for performance

---

## 📦 Packages

### `@repo/db`
Prisma-based database package providing:
- Unified Prisma Client for all apps
- Schema definitions (User, Problem, Contest, Submission, etc.)
- Migration management
- Seed scripts for development data

**Key Models**:
- `User` - User accounts with authentication
- `Problem` - Problem definitions and metadata
- `Contest` - Contest information and timing
- `Submission` - Code submissions and results
- `ContestProblem` - Many-to-many contest-problem relation
- `TestCase` - Individual test case results

### `@repo/common`
Shared utilities and type definitions:
- **Language configurations**: Language IDs, file extensions, compilers
- **Zod schemas**: Runtime validation for API inputs/outputs
- **Type exports**: Shared TypeScript types

### `@repo/ui`
Reusable React components library:
- Button, Card, Code components
- Consistent styling with Tailwind CSS
- Radix UI integration for accessibility

### `@repo/eslint-config`
Centralized ESLint configurations:
- `next.js` - Configuration for Next.js apps
- `library.js` - Configuration for libraries
- `react-internal.js` - Strict React rules

### `@repo/typescript-config`
Shared TypeScript configurations:
- `base.json` - Base configuration
- `nextjs.json` - Next.js-specific settings
- `react-library.json` - React library settings

---

## 💻 Development Workflow

### Running Specific Apps

```bash
# Run only the web app
yarn workspace web dev

# Run submission webhook
yarn workspace submission-webhook dev

# Run leaderboard generator
yarn workspace leaderboard-generator dev
```

### Building for Production

```bash
# Build all apps and packages
yarn build

# Build specific workspace
yarn workspace web build
```

### Database Operations

```bash
# Generate Prisma Client
cd packages/db
npx prisma generate

# Create a new migration
npx prisma migrate dev --name add_feature

# Reset database
npx prisma migrate reset

# Open Prisma Studio
npx prisma studio
```

### Code Quality

```bash
# Lint all workspaces
yarn lint

# Format code
yarn format
```

### Adding a New Problem

1. Create problem directory in `apps/problems/[problem-name]/`
2. Add `Problem.md` with problem statement
3. Add `Structure.md` with input/output format
4. Create test cases in `tests/inputs/` and `tests/outputs/`
5. Generate boilerplate using boilerplate-generator
6. Add problem to database via Prisma Studio or seed script

---

## 🏛️ Database Schema Highlights

```prisma
model User {
  id          String     @id @default(cuid())
  email       String     @unique
  password    String     // bcrypt hashed
  role        UserRole   @default(USER)
  submissions Submission[]
}

model Problem {
  id          String     @id @default(cuid())
  title       String
  slug        String     @unique
  description String
  difficulty  Difficulty
  solved      Int        @default(0)
  submissions Submission[]
}

model Contest {
  id          String     @id @default(cuid())
  title       String
  startTime   DateTime
  endTime     DateTime
  hidden      Boolean    @default(true)
  problems    ContestProblem[]
}

model Submission {
  id          String   @id @default(cuid())
  code        String
  status      SubmissionResult @default(PENDING)
  languageId  Int
  userId      String
  problemId   String
  testcases   TestCase[]
}
```

---

## 🎨 UI/UX Highlights

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode Ready**: Theme-aware components
- **Accessibility**: ARIA labels, keyboard navigation, semantic HTML
- **Performance**: Optimized images, code splitting, lazy loading
- **Monaco Editor**: Full-featured code editor with IntelliSense
- **Real-time Updates**: Instant feedback on submissions

---

## 🔐 Security Features

- **Password Hashing**: bcrypt with salt rounds
- **Authentication**: Secure session-based auth with NextAuth.js
- **Input Validation**: Zod schemas prevent injection attacks
- **SQL Injection Protection**: Parameterized queries via Prisma
- **CSRF Protection**: Built-in Next.js security features
- **Environment Variables**: Sensitive data in `.env` files

---

## 📈 Performance Optimizations

- **Turborepo Caching**: Intelligent build caching reduces build time by 60%+
- **Database Indexing**: Optimized queries with proper indexes
- **Code Splitting**: Next.js automatic code splitting
- **Static Generation**: Pre-rendered pages where possible
- **Lazy Loading**: Components loaded on demand
- **Connection Pooling**: Efficient database connection management

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Love Kumar Agrawal**

- GitHub: [@LoveKumarAgrawal](https://github.com/LoveKumarAgrawal)

---

## 🙏 Acknowledgments

- Inspired by [Codeforces](https://codeforces.com/)
- Built with [Turborepo](https://turbo.build/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Code editor powered by [Monaco Editor](https://microsoft.github.io/monaco-editor/)

---

<div align="center">

**⭐ Star this repository if you find it helpful!**

Made with ❤️ by Love Kumar Agrawal

</div>

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
