# RepliCons V13

**Psychoanalytical Cognitive Intelligence Platform**

RepliCons V13 is a cutting-edge system designed to:
- Capture and analyze memories
- Model personality evolution using the Big Five framework
- Detect behavioral patterns and cognitive biases
- Map identity continuity through semantic memory networks
- Build the foundation for future Soul Computing applications

## 🎯 Vision

RepliCons evolves into a professional psychoanalytical cognitive mapping platform that serves as the foundation for the Soul Computing initiative—a framework for long-term identity continuity through structured preservation of human cognition.

## 📊 Stack

### Backend
- **Runtime:** Node.js 18+
- **Framework:** Express.js with TypeScript
- **ORM:** Prisma
- **Database:** PostgreSQL with pgvector
- **Authentication:** JWT with bcrypt
- **Validation:** Zod
- **Cache:** Redis

### Frontend
- **Framework:** React 18 with TypeScript
- **Styling:** Styled Components
- **State Management:** Zustand + React Query
- **Visualization:** Three.js, Recharts
- **UI Philosophy:** NASA Mission Control + MIT Media Lab aesthetic

### Infrastructure
- **Containerization:** Docker & Docker Compose
- **Database:** PostgreSQL 16 with pgvector extension
- **Cache:** Redis 7
- **Monitoring:** Prometheus & Grafana (future)

## 📁 Project Structure

```
RepliConsV13/
├── backend/
│   ├── src/
│   │   ├── index.ts              # Server entry point
│   │   ├── middleware/           # Express middleware
│   │   │   └── errorHandler.ts
│   │   └── routes/               # API routes
│   │       ├── auth.ts
│   │       ├── memory.ts
│   │       ├── personality.ts
│   │       ├── behavior.ts
│   │       └── timeline.ts
│   ├── prisma/
│   │   ├── schema.prisma         # Database schema (complete)
│   │   └── seed.ts               # Database seeding
│   ├── package.json
│   ├── tsconfig.json
│   ├── .eslintrc.json
│   ├── .prettierrc
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── pages/                # Page components
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Timeline.tsx
│   │   │   ├── Memories.tsx
│   │   │   └── Personality.tsx
│   │   ├── App.tsx               # Main app component
│   │   ├── index.tsx             # Entry point
│   │   └── index.css             # Global styles
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
│
├── docs/
│   ├── 00PROJECT_ROADMAP.md      # Development roadmap
│   ├── 01ARCHITECTURE.md         # System architecture
│   ├── 02DATABASE_SCHEMA.md      # Database design
│   ├── 03API_SPECIFICATION.md    # API endpoints
│   ├── 04SOUL_COMPUTING_RESEARCH.md
│   └── 05UI_DESIGN_SYSTEM.md     # Design system
│
├── scripts/
│   └── init-db.sql               # Database initialization
│
├── docker-compose.yml            # Complete Docker setup
├── Makefile                      # Development commands
├── .env.example                  # Environment template
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Docker & Docker Compose
- Node.js 18+ (for local development)
- Git

### Using Docker Compose (Recommended)

```bash
# 1. Clone and setup
git clone https://github.com/develoc/RepliConsV13.git
cd RepliConsV13

# 2. Copy environment file
cp .env.example .env

# 3. Start all services
make docker-up

# 4. Run database migrations
make db-migrate

# 5. View logs
make docker-logs
```

Services will be available at:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:3001
- **Health Check:** http://localhost:3001/health
- **PostgreSQL:** localhost:5432
- **Redis:** localhost:6379

### Local Development

```bash
# 1. Install dependencies
make install

# 2. Start Docker services (database & redis)
make docker-up

# 3. In one terminal, start backend
cd backend && npm run dev

# 4. In another terminal, start frontend
cd frontend && npm start
```

## 🔧 Environment Variables

Key variables (see `.env.example` for complete list):

```env
# Database
DATABASE_URL=postgresql://replicons:replicons@localhost:5432/replicons_db
DATABASE_NAME=replicons_db
DATABASE_USER=replicons
DATABASE_PASSWORD=replicons

# Backend
NODE_ENV=development
PORT=3001

# Frontend
REACT_APP_API_URL=http://localhost:3001

# JWT
JWT_SECRET=your_secret_key_change_in_production
JWT_REFRESH_SECRET=your_refresh_secret_change_in_production

# AI Services
OPENAI_API_KEY=sk-...
CLAUDE_API_KEY=...
```

## 📚 Database Schema

Core tables:

- **users** - User authentication & roles
- **profiles** - User profile information
- **memories** - Memory records with emotions
- **memory_tags** - Memory categorization
- **memory_relationships** - Connections between memories
- **timeline_events** - Chronological event tracking
- **personality_traits** - Big Five model tracking
- **behavioral_patterns** - Detected behavioral patterns
- **embeddings** - Vector embeddings for semantic search
- **audit_logs** - Security and compliance logging

### Database Migrations

```bash
cd backend

# Create new migration
npm run prisma:migrate

# Generate Prisma client
npm run prisma:generate

# Open Prisma Studio (visual browser)
npm run prisma:studio
```

## 🔌 API Endpoints

Base URL: `http://localhost:3001/api/v1`

### Authentication
```
POST   /auth/register       - Register new user
POST   /auth/login          - Login user
POST   /auth/refresh        - Refresh JWT token
POST   /auth/logout         - Logout user
```

### Memories
```
GET    /memories            - Get all memories
GET    /memories/:id        - Get single memory
POST   /memories            - Create memory
PUT    /memories/:id        - Update memory
DELETE /memories/:id        - Delete memory
```

### Personality
```
GET    /personality         - Get personality profile
POST   /personality/analyze - Analyze personality
```

### Behavior
```
GET    /behavior            - Get behavioral patterns
POST   /behavior/analyze    - Analyze behavior
```

### Timeline
```
GET    /timeline            - Get timeline
GET    /timeline/:year      - Get timeline by year
```

## 🎨 Design System

### Color Palette (NASA Mission Control Theme)
```
Background:       #05070A
Panel:            #0F172A
Primary Accent:   #22D3EE (Cyan)
Secondary Accent: #94A3B8 (Slate)
Text Primary:     #F8FAFC (Almost White)
```

### Typography
- **Primary:** Inter
- **Monospace:** JetBrains Mono

### Philosophy
- NASA Mission Control aesthetic
- MIT Media Lab sophistication
- Scientific research platform feel
- Avoid: Neon overload, cyberpunk gaming aesthetics

## 📋 Development Roadmap

### Phase 1: Foundation ✅ (Current)
- [x] PostgreSQL setup with Prisma
- [x] Docker containerization
- [x] JWT authentication structure
- [x] Basic API routing
- [x] Frontend React setup with styled-components
- [ ] Complete authentication endpoints
- [ ] Database migrations setup

### Phase 2: Memory Core (Next)
- [ ] Memory CRUD operations
- [ ] Memory categorization and tagging
- [ ] Timeline engine with visualization
- [ ] Memory search functionality
- [ ] Tag-based filtering

### Phase 3: Psychoanalytical Layer
- [ ] Big Five personality model
- [ ] Attachment analysis (Secure/Anxious/Avoidant/Disorganized)
- [ ] Cognitive bias detection
- [ ] Narrative metrics calculation
- [ ] Identity stability tracking

### Phase 4: AI Integration
- [ ] OpenAI/Claude API integration
- [ ] Emotion extraction from memory text
- [ ] Theme detection and analysis
- [ ] Relationship mapping between memories
- [ ] Personality indicators extraction

### Phase 5: Semantic Memory Network
- [ ] pgvector embeddings generation
- [ ] Similarity search across memories
- [ ] Memory relationship discovery
- [ ] Semantic context retrieval
- [ ] Cognitive graph visualization

### Phase 6: Professional UI & Metrics
- [ ] Dashboard implementation
- [ ] Timeline visualization
- [ ] Cognitive graph display
- [ ] Identity stability metrics
- [ ] Memory density calculations
- [ ] Emotional diversity tracking
- [ ] Behavioral consistency analysis
- [ ] Narrative coherence scoring

### Phase 7: Soul Computing Research Layer
- [ ] Values modeling framework
- [ ] Beliefs tracking system
- [ ] Goals and objectives tracking
- [ ] Decision-making pattern preservation
- [ ] Relationship mapping
- [ ] Identity persistence model

## 💻 Development Commands

```bash
# Setup
make install              # Install all dependencies
make dev                  # Start development environment
make build                # Build for production

# Database
make db-migrate           # Run database migrations
make db-seed              # Seed database with test data

# Docker
make docker-up            # Start Docker containers
make docker-down          # Stop Docker containers
make docker-logs          # View Docker logs

# Code Quality
make lint                 # Run linter
make test                 # Run tests
make clean                # Clean build artifacts
```

## 🧪 Testing

```bash
# Run all tests
make test

# Backend tests
cd backend && npm test
cd backend && npm run test:watch

# Frontend tests
cd frontend && npm test
```

## 📝 Code Style

### Backend
- TypeScript strict mode enforced
- ESLint + Prettier configured
- No untyped code allowed
- Comprehensive error handling required

### Frontend
- React functional components
- TypeScript strict mode
- Styled Components for all styling
- WCAG AA accessibility standards

## 🐛 Troubleshooting

### Database Connection Error
```bash
# Check if PostgreSQL container is running
make docker-logs

# Verify connection string in .env
echo $DATABASE_URL
```

### Port Already in Use
```bash
# Find process on port
sudo lsof -i :3001

# Kill process or change port in .env
```

### Docker Build Issues
```bash
# Clean up and rebuild
make docker-down
docker system prune -a
make docker-up
```

## 🤝 Contributing

1. Create feature branches from `dev/initial-setup`
2. Follow the development roadmap phases
3. Maintain code quality standards
4. Write tests for new features
5. Update documentation as needed

## 📄 License

MIT License - See LICENSE file for details

## 👤 Contact

**Project:** RepliCons V13  
**Author:** [develoc](https://github.com/develoc)  
**Repository:** [RepliConsV13](https://github.com/develoc/RepliConsV13)  
**Status:** 🚀 Active Development

---

**Last Updated:** July 21, 2026

**Current Phase:** Phase 1 - Foundation ✅

**Next Focus:** Phase 2 - Memory Core Implementation
