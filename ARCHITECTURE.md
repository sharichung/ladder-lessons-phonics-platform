# Ladder Lessons - Project Architecture

## Overview
Ladder Lessons is an interactive online phonics platform designed for teacher-led instruction during live Zoom classes. The platform features progressive sound groups taught through games and media, with teacher-only control for optimal screen sharing.

## Tech Stack

### Frontend
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Charts**: Recharts (for progress tracking)

### Backend
- **Authentication**: Firebase Auth
- **Database**: Firestore
- **Storage**: Firebase Storage (for audio/video assets)
- **Functions**: Firebase Functions (for server-side logic)
- **Payments**: Stripe (integrated via Firebase Extensions)

### Deployment
- **Frontend**: Firebase Hosting or GitHub Pages
- **Backend**: Firebase (fully managed)

## Project Structure

```
ladder-lessons/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/          # shadcn/ui components
│   │   │   ├── auth/        # Authentication components
│   │   │   ├── games/       # Game components
│   │   │   ├── shared/      # Shared components
│   │   │   └── layout/      # Layout components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utilities and Firebase config
│   │   ├── assets/          # Static assets
│   │   └── styles/          # Additional styles
│   └── public/              # Public assets
├── firebase/                # Firebase configuration
│   ├── functions/           # Cloud Functions
│   ├── firestore.rules     # Security rules
│   └── firebase.json       # Firebase config
└── docs/                   # Documentation
```

## Component Architecture

### Core Pages
1. **Landing Page** (`/`)
   - Hero section with value proposition
   - Feature highlights
   - Pricing plans
   - Call-to-action for signup

2. **Authentication** (`/login`, `/signup`)
   - Firebase Auth integration
   - Google and email/password login
   - Teacher verification flow

3. **Dashboard** (`/dashboard`)
   - Available phonics groups
   - Progress tracking
   - Quick access to recent groups

4. **Group View** (`/group/:groupId`)
   - Phonics song videos
   - Phoneme audio buttons
   - Access to games

5. **Games**
   - **Matching Game** (`/group/:groupId/matching`)
   - **Spelling Practice** (`/group/:groupId/spelling`)

### Shared Components

#### Audio Components
- `AudioButton` - IPA-based pronunciation playback
- `AudioPlayer` - Video/song player with controls

#### Game Components
- `LetterCard` - Interactive letter display
- `ImageCard` - Phonics image display
- `ClickToConnect` - Matching game logic
- `SpellingTiles` - Word building interface
- `GameFeedback` - Visual/audio feedback system

#### UI Components
- `Navigation` - Main navigation bar
- `Sidebar` - Dashboard sidebar
- `ProgressBar` - Learning progress display
- `SubscriptionGate` - Access control component

## Firebase Backend Design

### Authentication
```javascript
// User roles and permissions
{
  uid: "user123",
  email: "teacher@school.com",
  role: "teacher",
  subscription: {
    plan: "premium",
    status: "active",
    stripeCustomerId: "cus_xxx"
  },
  profile: {
    name: "Jane Smith",
    school: "ABC Elementary",
    verified: true
  }
}
```

### Firestore Collections

#### Users Collection
```javascript
users/{userId} {
  email: string,
  role: "teacher" | "admin",
  subscription: {
    plan: "free" | "premium",
    status: "active" | "cancelled" | "past_due",
    stripeCustomerId: string,
    currentPeriodEnd: timestamp
  },
  profile: {
    name: string,
    school: string,
    verified: boolean,
    createdAt: timestamp
  },
  progress: {
    completedGroups: array,
    currentGroup: string,
    lastAccessed: timestamp
  }
}
```

#### Phonics Groups Collection
```javascript
phonicsGroups/{groupId} {
  id: string,
  name: string,
  order: number,
  letters: array, // ["s", "a", "t"]
  description: string,
  isActive: boolean,
  requiredPlan: "free" | "premium",
  content: {
    songs: [{
      letter: string,
      title: string,
      videoUrl: string,
      duration: number
    }],
    phonemes: [{
      letter: string,
      audioUrl: string,
      ipa: string
    }],
    images: [{
      letter: string,
      word: string,
      imageUrl: string,
      audioUrl: string
    }],
    words: [{
      word: string,
      letters: array,
      audioUrl: string,
      difficulty: number
    }]
  },
  createdAt: timestamp,
  updatedAt: timestamp
}
```

#### Game Sessions Collection
```javascript
gameSessions/{sessionId} {
  userId: string,
  groupId: string,
  gameType: "matching" | "spelling",
  startTime: timestamp,
  endTime: timestamp,
  score: number,
  attempts: number,
  completed: boolean,
  results: {
    correctAnswers: number,
    totalQuestions: number,
    timeSpent: number,
    mistakes: array
  }
}
```

### Firebase Security Rules
```javascript
// Firestore Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Phonics groups are readable by authenticated users
    match /phonicsGroups/{groupId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null && 
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Game sessions belong to users
    match /gameSessions/{sessionId} {
      allow read, write: if request.auth != null && 
        resource.data.userId == request.auth.uid;
    }
  }
}
```

## Game Design Specifications

### Matching Game - Click-to-Connect
- **Objective**: Match letters with corresponding images
- **Interaction**: Teacher clicks letter, then clicks matching image
- **Visual Feedback**: 
  - Selected items highlight in bright colors
  - Correct matches: green glow + success sound
  - Incorrect matches: red flash + gentle error sound
- **Accessibility**: Large touch targets (min 44px), high contrast colors
- **Zoom Optimization**: Clear visual states, no drag-and-drop

### Spelling Practice Game
- **Objective**: Build words using available letter tiles
- **Interaction**: Click letter tiles to add to word builder
- **Features**:
  - Visual word assembly with smooth animations
  - Audio playback of completed words
  - Undo/clear functionality
  - Progressive difficulty based on group progression
- **Validation**: Real-time feedback on word completion

## Subscription & Payment Flow

### Stripe Integration
1. **Plans**:
   - Free: Access to Group 1 only
   - Premium Monthly: $9.99/month - All groups
   - Premium Yearly: $99/year - All groups + bonus content

2. **Payment Flow**:
   - User selects plan on landing page
   - Redirected to Stripe Checkout
   - Success: Firebase Function updates user subscription
   - Access gating enforced on frontend and backend

3. **Access Control**:
   - Frontend: Subscription gate components
   - Backend: Firestore rules check subscription status
   - Real-time updates via Firebase Auth state changes

## Development Phases

### Phase 1: Foundation ✅
- React app setup
- Project structure
- Architecture documentation

### Phase 2: Core Frontend
- Landing page with subscription funnel
- Authentication flow
- Dashboard layout
- Shared components

### Phase 3: Firebase Backend
- Firebase project setup
- Authentication integration
- Firestore database structure
- Security rules

### Phase 4: Interactive Games
- Matching game implementation
- Spelling practice game
- Audio integration
- Visual feedback system

### Phase 5: Payment Integration
- Stripe setup
- Subscription management
- Access gating
- Payment flow testing

### Phase 6: Content & Testing
- Sample phonics groups
- End-to-end testing
- Responsive design verification
- Zoom compatibility testing

### Phase 7: Deployment
- Production deployment
- Performance optimization
- Documentation
- User guide creation

## Design System

### Color Palette (Preschool-Friendly)
- **Primary**: Bright blue (#3B82F6)
- **Secondary**: Warm orange (#F97316)
- **Success**: Fresh green (#10B981)
- **Warning**: Sunny yellow (#F59E0B)
- **Error**: Gentle red (#EF4444)
- **Background**: Soft white (#FAFAFA)
- **Text**: Dark gray (#1F2937)

### Typography
- **Headings**: Inter (bold, large sizes)
- **Body**: Inter (regular, readable sizes)
- **Buttons**: Inter (medium weight)

### Spacing & Layout
- **Touch Targets**: Minimum 44px for accessibility
- **Padding**: Generous spacing for young learners
- **Grid**: Responsive grid system with Tailwind
- **Animations**: Gentle, purposeful transitions

This architecture provides a solid foundation for building a scalable, engaging phonics platform optimized for teacher-led Zoom instruction.

