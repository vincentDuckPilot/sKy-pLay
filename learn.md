# sKy-pLay: Complete Learning Guide

## 🎯 **Learning Overview**

This guide covers everything your 3-person team needs to learn to build sKy-pLay efficiently. Each section includes prerequisites, core concepts, recommended resources, and hands-on exercises.

**Time Investment**: ~40-60 hours per person over 2-3 weeks before starting development.

---

## 📚 **Prerequisites (Everyone Must Know)**

### **1. Fundamental Programming Concepts**
- [ ] **Version Control**: Git workflows, branching, pull requests
- [ ] **Command Line**: Basic terminal navigation, file operations
- [ ] **JSON/YAML**: Data formats for configs and APIs
- [ ] **HTTP/REST**: Request/response cycle, status codes, headers
- [ ] **Basic Networking**: IP addresses, ports, DNS, latency concepts

**Resources:**
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [Command Line Crash Course](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)
- [HTTP Basics](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)

**Hands-on Exercise:**
```bash
# Test your Git knowledge
git clone https://github.com/your-username/test-repo
git checkout -b feature/learning
echo "Learning Git" > learning.txt
git add . && git commit -m "Add learning file"
git push origin feature/learning
# Create pull request and merge
```

---

## 🔧 **Core Technologies Breakdown**

### **TypeScript (Everyone - 80% of codebase)**

#### **Essential Concepts:**
- [ ] **Type System**: Interfaces, types, generics, union types
- [ ] **Async/Await**: Promises, error handling, async patterns
- [ ] **Modules**: Import/export, ES6 modules, CommonJS
- [ ] **Object-Oriented**: Classes, inheritance, access modifiers
- [ ] **Functional Programming**: Arrow functions, array methods, immutability

#### **Learning Path:**
1. **Week 1**: TypeScript basics and syntax
2. **Week 2**: Advanced types and patterns
3. **Week 3**: Real-world project patterns

#### **Resources:**
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/)
- [Execute Program - TypeScript](https://www.executeprogram.com/courses/typescript)

#### **Hands-on Exercise:**
```typescript
// Create a gaming session type system
interface User {
  id: string;
  email: string;
  subscription: 'free' | 'premium';
}

interface GameSession {
  id: string;
  userId: string;
  gameId: string;
  startTime: Date;
  endTime?: Date;
  status: 'active' | 'ended' | 'paused';
}

// Implement session management functions
async function createSession(user: User, gameId: string): Promise<GameSession> {
  // Your implementation here
}
```

### **Docker & Containerization (Person 1 Lead, Others Support)**

#### **Essential Concepts:**
- [ ] **Containers vs VMs**: Understanding the difference
- [ ] **Docker Images**: Building, layering, optimization
- [ ] **Docker Compose**: Multi-container applications
- [ ] **Volumes**: Data persistence and sharing
- [ ] **Networking**: Container communication, port mapping
- [ ] **GPU Access**: NVIDIA Container Runtime

#### **Learning Path:**
1. **Days 1-2**: Docker basics and first containers
2. **Days 3-4**: Docker Compose and multi-container apps
3. **Days 5-7**: GPU containers and optimization

#### **Resources:**
- [Docker Official Tutorial](https://docs.docker.com/get-started/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [NVIDIA Container Toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html)

#### **Hands-on Exercise:**
```dockerfile
# Create a Sunshine gaming container
FROM ubuntu:22.04

# Install NVIDIA drivers and Sunshine
RUN apt-get update && apt-get install -y \
    nvidia-driver-535 \
    sunshine-package

# Configure for game streaming
EXPOSE 47989 47990 48010/tcp
EXPOSE 47998 47999 48000/udp

CMD ["sunshine"]
```

```yaml
# docker-compose.yml for development
version: '3.8'
services:
  sunshine:
    build: ./sunshine
    privileged: true
    runtime: nvidia
    ports:
      - "47989:47989"
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: skyplay
```

---

## 👨‍💻 **Role-Specific Learning Paths**

### **Person 1: Infrastructure & Streaming Specialist**

#### **Core Technologies to Master:**

##### **1. Sunshine Game Streaming**
- [ ] **Installation**: Linux setup, NVIDIA drivers, dependencies
- [ ] **Configuration**: Streaming settings, quality optimization
- [ ] **Network Setup**: Port forwarding, firewall configuration
- [ ] **Performance Tuning**: Latency optimization, bandwidth management

**Resources:**
- [Sunshine Documentation](https://app.lizardbyte.dev/Sunshine)
- [Sunshine GitHub Issues](https://github.com/LizardByte/Sunshine/issues) (common problems)
- [Linux Gaming Community](https://www.reddit.com/r/linux_gaming/)

**Hands-on Exercise:**
```bash
# Set up Sunshine on Ubuntu
sudo apt update
sudo apt install -y sunshine

# Configure for optimal streaming
sudo nano /etc/sunshine/sunshine.conf
# Test with a simple game
sunshine --config /etc/sunshine/sunshine.conf
```

##### **2. GPU Server Management**
- [ ] **NVIDIA Drivers**: Installation, version management
- [ ] **CUDA**: Basic understanding for GPU acceleration
- [ ] **Virtual GPUs**: Understanding vGPU concepts
- [ ] **Resource Monitoring**: GPU utilization, memory usage

**Resources:**
- [NVIDIA Developer Documentation](https://developer.nvidia.com/cuda-zone)
- [AWS EC2 GPU Instances](https://docs.aws.amazon.com/ec2/latest/userguide/accelerated-computing-instances.html)

##### **3. Linux System Administration**
- [ ] **System Services**: systemd, service management
- [ ] **Process Management**: Resource allocation, priority control
- [ ] **Network Configuration**: iptables, ufw, networking
- [ ] **Performance Monitoring**: htop, nvidia-smi, iostat

**Hands-on Exercise:**
```bash
# Create a game server monitoring script
#!/bin/bash
echo "=== GPU Status ==="
nvidia-smi --query-gpu=utilization.gpu,memory.used,memory.total --format=csv

echo "=== System Load ==="
uptime

echo "=== Sunshine Status ==="
systemctl status sunshine
```

##### **4. Docker Orchestration**
- [ ] **Docker Swarm**: Cluster management, service deployment
- [ ] **Container Scaling**: Auto-scaling based on demand
- [ ] **Load Balancing**: Distributing sessions across containers
- [ ] **Health Checks**: Monitoring container health

**Learning Path:**
1. **Week 1**: Docker fundamentals and GPU containers
2. **Week 2**: Docker Swarm and orchestration
3. **Week 3**: Auto-scaling and monitoring

### **Person 2: Backend Developer**

#### **Core Technologies to Master:**

##### **1. Node.js & Express.js**
- [ ] **Server Setup**: Express server, middleware, routing
- [ ] **Authentication**: JWT tokens, password hashing, sessions
- [ ] **Error Handling**: Try-catch, error middleware, logging
- [ ] **API Design**: RESTful APIs, status codes, pagination

**Resources:**
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [JWT.io Introduction](https://jwt.io/introduction/)

**Hands-on Exercise:**
```typescript
// Build a basic gaming session API
import express from 'express';
import jwt from 'jsonwebtoken';

const app = express();

// Authentication middleware
const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.sendStatus(401);
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Session management routes
app.post('/api/sessions', authenticateToken, createGameSession);
app.get('/api/sessions/:id', authenticateToken, getGameSession);
```

##### **2. PostgreSQL Database**
- [ ] **SQL Fundamentals**: SELECT, INSERT, UPDATE, DELETE, JOINs
- [ ] **Database Design**: Normalization, relationships, indexes
- [ ] **Transactions**: ACID properties, isolation levels
- [ ] **Performance**: Query optimization, explain plans

**Resources:**
- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)
- [Database Design Course](https://www.freecodecamp.org/news/database-design-course-for-beginners/)

**Hands-on Exercise:**
```sql
-- Design the core database schema
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    subscription_type VARCHAR(50) DEFAULT 'free',
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE game_sessions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    game_id VARCHAR(255) NOT NULL,
    server_instance VARCHAR(255),
    start_time TIMESTAMP DEFAULT NOW(),
    end_time TIMESTAMP,
    total_duration INTERVAL,
    status VARCHAR(50) DEFAULT 'active'
);

-- Create indexes for performance
CREATE INDEX idx_sessions_user_id ON game_sessions(user_id);
CREATE INDEX idx_sessions_status ON game_sessions(status);
```

##### **3. Redis Cache & Sessions**
- [ ] **Data Types**: Strings, lists, sets, hashes, sorted sets
- [ ] **Session Storage**: User sessions, temporary data
- [ ] **Pub/Sub**: Real-time messaging, event broadcasting
- [ ] **Performance**: Connection pooling, pipeline operations

**Resources:**
- [Redis University](https://university.redis.com/)
- [Redis Node.js Guide](https://github.com/redis/node-redis)

**Hands-on Exercise:**
```typescript
import { createClient } from 'redis';

const redis = createClient({
  host: 'localhost',
  port: 6379
});

// Session management with Redis
export class SessionManager {
  async createSession(userId: string, gameId: string): Promise<string> {
    const sessionId = generateSessionId();
    
    await redis.setex(`session:${sessionId}`, 3600, JSON.stringify({
      userId,
      gameId,
      startTime: new Date(),
      status: 'active'
    }));
    
    return sessionId;
  }
  
  async getSession(sessionId: string): Promise<GameSession | null> {
    const data = await redis.get(`session:${sessionId}`);
    return data ? JSON.parse(data) : null;
  }
}
```

##### **4. Payment & Billing Systems**
- [ ] **Stripe Integration**: Payment processing, webhooks
- [ ] **Subscription Management**: Plans, upgrades, cancellations
- [ ] **Usage Tracking**: Metered billing, time-based charges
- [ ] **Security**: PCI compliance, secure data handling

**Resources:**
- [Stripe Documentation](https://stripe.com/docs)
- [Subscription Billing Best Practices](https://stripe.com/guides/subscription-billing)

### **Person 3: Frontend Developer**

#### **Core Technologies to Master:**

##### **1. Next.js 15 with TypeScript**
- [ ] **App Router**: File-based routing, layouts, pages
- [ ] **Server Components**: SSR, data fetching, performance
- [ ] **Client Components**: Interactivity, state management
- [ ] **API Routes**: Built-in API endpoints, middleware

**Resources:**
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn Course](https://nextjs.org/learn)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

**Hands-on Exercise:**
```typescript
// app/dashboard/page.tsx - Game dashboard
'use client';

import { useState, useEffect } from 'react';
import { GameSession } from '@/types';

export default function Dashboard() {
  const [sessions, setSessions] = useState<GameSession[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserSessions();
  }, []);

  const fetchUserSessions = async () => {
    try {
      const response = await fetch('/api/sessions');
      const data = await response.json();
      setSessions(data);
    } catch (error) {
      console.error('Failed to fetch sessions:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading your games...</div>;

  return (
    <div className="dashboard">
      <h1>Your Gaming Sessions</h1>
      {sessions.map(session => (
        <GameSessionCard key={session.id} session={session} />
      ))}
    </div>
  );
}
```

##### **2. Moonlight Client Integration**
- [ ] **Protocol Understanding**: GameStream protocol basics
- [ ] **Web Client**: Browser-based streaming setup
- [ ] **Input Handling**: Keyboard, mouse, controller events
- [ ] **Performance Optimization**: Latency reduction, quality settings

**Resources:**
- [Moonlight Documentation](https://moonlight-stream.org/)
- [Moonlight GitHub](https://github.com/moonlight-stream)
- [GameStream Protocol](https://github.com/moonlight-stream/moonlight-docs)

**Hands-on Exercise:**
```typescript
// components/GameStreamer.tsx
import { useEffect, useRef, useState } from 'react';

interface GameStreamerProps {
  sessionId: string;
  serverAddress: string;
}

export function GameStreamer({ sessionId, serverAddress }: GameStreamerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [latency, setLatency] = useState<number>(0);

  useEffect(() => {
    initializeMoonlightConnection();
  }, [sessionId]);

  const initializeMoonlightConnection = async () => {
    try {
      // Initialize Moonlight web client
      const connection = await setupMoonlightStream({
        serverAddress,
        sessionId,
        videoElement: videoRef.current
      });
      
      setIsConnected(true);
      monitorLatency(connection);
    } catch (error) {
      console.error('Failed to connect to game stream:', error);
    }
  };

  return (
    <div className="game-streamer">
      <video 
        ref={videoRef}
        autoPlay
        muted={false}
        className="w-full h-full"
      />
      <div className="stream-stats">
        Status: {isConnected ? 'Connected' : 'Connecting...'}
        Latency: {latency}ms
      </div>
    </div>
  );
}
```

##### **3. Tailwind CSS & Modern UI**
- [ ] **Utility Classes**: Layout, spacing, colors, typography
- [ ] **Responsive Design**: Mobile-first, breakpoints, flexbox/grid
- [ ] **Component Patterns**: Reusable components, design systems
- [ ] **Dark Mode**: Theme switching, color schemes

**Resources:**
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Headless UI Components](https://headlessui.com/)
- [Tailwind UI Examples](https://tailwindui.com/examples)

##### **4. State Management & Real-time Updates**
- [ ] **Zustand**: Lightweight state management
- [ ] **WebSockets**: Real-time communication, connection handling
- [ ] **React Hooks**: useEffect, useState, useCallback, useMemo
- [ ] **Error Boundaries**: Error handling, fallback UIs

**Hands-on Exercise:**
```typescript
// stores/gameStore.ts - Zustand state management
import { create } from 'zustand';

interface GameState {
  currentSession: GameSession | null;
  availableGames: Game[];
  isStreaming: boolean;
  latency: number;
  
  // Actions
  startGameSession: (gameId: string) => Promise<void>;
  endGameSession: () => Promise<void>;
  updateLatency: (latency: number) => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  currentSession: null,
  availableGames: [],
  isStreaming: false,
  latency: 0,

  startGameSession: async (gameId: string) => {
    set({ isStreaming: true });
    try {
      const response = await fetch('/api/sessions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gameId })
      });
      const session = await response.json();
      set({ currentSession: session });
    } catch (error) {
      set({ isStreaming: false });
      throw error;
    }
  },

  endGameSession: async () => {
    const { currentSession } = get();
    if (!currentSession) return;

    await fetch(`/api/sessions/${currentSession.id}`, {
      method: 'DELETE'
    });
    
    set({ 
      currentSession: null, 
      isStreaming: false, 
      latency: 0 
    });
  },

  updateLatency: (latency: number) => set({ latency })
}));
```

---

## 🎮 **Game Platform APIs**

### **Steam Integration (Person 2 Lead)**
- [ ] **Steam Web API**: Authentication, user libraries, game info
- [ ] **Steam CMD**: Automated game installation and updates
- [ ] **OpenID**: Steam user authentication flow

**Resources:**
- [Steam Web API Documentation](https://steamcommunity.com/dev)
- [Steam CMD Guide](https://developer.valvesoftware.com/wiki/SteamCMD)

**Hands-on Exercise:**
```typescript
// services/steamService.ts
export class SteamService {
  async getUserGames(steamId: string): Promise<Game[]> {
    const response = await fetch(
      `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.STEAM_API_KEY}&steamid=${steamId}&format=json&include_appinfo=true`
    );
    
    const data = await response.json();
    return data.response.games.map(game => ({
      id: game.appid.toString(),
      name: game.name,
      iconUrl: `https://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`
    }));
  }
}
```

---

## 🧪 **Testing & Validation**

### **Unit Testing (Everyone)**
```typescript
// tests/sessionManager.test.ts
import { SessionManager } from '../src/services/SessionManager';

describe('SessionManager', () => {
  let sessionManager: SessionManager;

  beforeEach(() => {
    sessionManager = new SessionManager();
  });

  test('should create a new game session', async () => {
    const userId = 'user-123';
    const gameId = 'game-456';
    
    const sessionId = await sessionManager.createSession(userId, gameId);
    
    expect(sessionId).toBeDefined();
    expect(sessionId).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
  });
});
```

### **Integration Testing**
```bash
# Test the complete flow
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Should return JWT token for further requests
```

---

## 📅 **3-Week Learning Schedule**

### **Week 1: Foundations**
- **Everyone**: TypeScript fundamentals, Git workflow, basic Docker
- **Person 1**: Linux basics, Docker deep dive
- **Person 2**: Node.js/Express, PostgreSQL basics
- **Person 3**: React/Next.js fundamentals, Tailwind CSS

### **Week 2: Specialization**
- **Person 1**: Sunshine setup, GPU containers, system administration
- **Person 2**: Advanced database design, Redis, authentication
- **Person 3**: Advanced React patterns, state management, WebSocket integration

### **Week 3: Integration & Practice**
- **Everyone**: Build a mini version of each component
- **Integration**: Connect all pieces together
- **Testing**: Write tests and validate the complete flow
- **Documentation**: Create runbooks and troubleshooting guides

---

## ✅ **Knowledge Validation Checklist**

### **Before Starting Development, Can You:**

#### **Person 1 (Infrastructure):**
- [ ] Set up Sunshine on a Linux server and stream a game
- [ ] Create a Docker container that runs a game with GPU access
- [ ] Monitor system resources and optimize for multiple concurrent users
- [ ] Set up basic load balancing between multiple game servers

#### **Person 2 (Backend):**
- [ ] Build a REST API with authentication and database integration
- [ ] Implement real-time session management with Redis
- [ ] Handle user registration, login, and subscription management
- [ ] Integrate with Steam API to fetch user game libraries

#### **Person 3 (Frontend):**
- [ ] Build a responsive Next.js application with TypeScript
- [ ] Integrate a video streaming client (test with any WebRTC stream)
- [ ] Implement user authentication UI and session management
- [ ] Create a game library browser with search and filtering

#### **Everyone:**
- [ ] Clone, modify, and deploy the project using Git and Docker
- [ ] Debug issues across the full stack
- [ ] Write basic tests for your components
- [ ] Document your code and create simple runbooks

---

## 🚀 **Final Learning Tips**

### **Learning Efficiently:**
1. **Learn by doing**: Build small projects for each technology
2. **Document everything**: Create your own cheat sheets and notes
3. **Practice together**: Pair programming and code reviews
4. **Ask questions**: Use Discord/Stack Overflow/GitHub issues actively

### **Staying Current:**
- Follow key GitHub repositories for updates
- Join relevant Discord/Slack communities
- Subscribe to newsletters: Node Weekly, React Status, etc.
- Attend virtual meetups and conferences

### **When You Get Stuck:**
1. **Read the docs first** (official documentation is usually best)
2. **Search GitHub issues** (others have likely faced the same problem)
3. **Ask specific questions** (include error messages, code snippets)
4. **Rubber duck debugging** (explain the problem out loud)

**Remember**: You don't need to be an expert in everything before starting. Learn the basics, then improve as you build. The best way to learn is by building real projects! 🎮✨