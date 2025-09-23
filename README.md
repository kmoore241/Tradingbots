# 🚀 Freqtrade - Modern Crypto Trading Bot

<div align="center">

![Freqtrade Logo](https://raw.githubusercontent.com/freqtrade/freqtrade/develop/docs/assets/freqtrade_poweredby.svg)

[![Freqtrade CI](https://github.com/freqtrade/freqtrade/actions/workflows/ci.yml/badge.svg?branch=develop)](https://github.com/freqtrade/freqtrade/actions/)
[![License](https://img.shields.io/badge/license-GPLv3-blue.svg)](LICENSE)
[![Discord](https://img.shields.io/discord/700048804177846283.svg?logo=discord&logoColor=white&label=Discord&color=5865f2)](https://discord.gg/p7nuUNVfP7)

**A production-ready crypto trading bot with a modern, gamified web interface**

[🎮 Live Demo](https://freqtrade-demo.netlify.app) • [📖 Documentation](https://www.freqtrade.io) • [💬 Discord](https://discord.gg/p7nuUNVfP7) • [🐛 Issues](https://github.com/freqtrade/freqtrade/issues)

</div>

---

## ✨ What's New in 2.0

This enhanced version of Freqtrade includes a complete modern web interface rebuild with:

🎮 **Gamified Experience** - Level up, earn achievements, complete daily quests
🎨 **Modern UI/UX** - Beautiful gradients, animations, and responsive design
♿ **Accessibility First** - Screen reader support, keyboard navigation, high contrast mode
📱 **Mobile Optimized** - Works perfectly on all devices
☁️ **Cloud Ready** - One-click deployment to Netlify and Vercel
🔐 **Enhanced Security** - Advanced authentication and security headers
📊 **Advanced Analytics** - Comprehensive trading insights and reports

## 🚀 Quick Start

### Option 1: Cloud Deployment (Recommended)

#### Deploy to Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/freqtrade/freqtrade)

#### Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/freqtrade/freqtrade)

### Option 2: Local Development

#### Prerequisites
- **Node.js** 18+ (for frontend)
- **Python** 3.11+ (for trading bot)
- **Git** for version control

#### 1. Clone and Setup Frontend
```bash
git clone https://github.com/freqtrade/freqtrade.git
cd freqtrade/frontend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env.local

# Start development server
npm run dev
```

#### 2. Setup Trading Bot (Backend)
```bash
# Return to project root
cd ..

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\\Scripts\\activate

# Install dependencies
pip install -r requirements.txt

# Create user directory and config
freqtrade create-userdir --userdir user_data
freqtrade new-config --config user_data/config.json

# Start the bot with webserver
freqtrade webserver --config user_data/config.json
```

#### 3. Access the Application
- **Frontend**: http://localhost:5173
- **API**: http://localhost:8080
- **API Docs**: http://localhost:8080/docs

## 🎮 Features Overview

### 🏆 Gamification System
- **Leveling System**: Gain XP through trading activities
- **Achievements**: Unlock badges for milestones
- **Daily Quests**: Complete tasks for rewards
- **Progress Tracking**: Visual progression indicators

### 📊 Trading Features
- **Live Trading**: Real-time market execution
- **Strategy Builder**: Visual strategy creation
- **Backtesting**: Historical performance testing
- **Risk Management**: Advanced risk controls
- **Multi-Exchange**: Support for 15+ exchanges

### 🤖 AI & Machine Learning
- **FreqAI Integration**: ML-powered predictions
- **Strategy Optimization**: Automated parameter tuning
- **Market Analysis**: AI-driven insights
- **Predictive Modeling**: Advanced forecasting

### 📱 Modern Interface
- **Responsive Design**: Works on all devices
- **Dark/Light Themes**: Customizable appearance
- **Real-time Updates**: WebSocket integration
- **Offline Support**: Works without internet

## 🛠️ Configuration

### Environment Variables

Create `.env.local` in the frontend directory:

```env
# API Configuration
VITE_API_URL=http://localhost:8080
VITE_WS_URL=ws://localhost:8080

# Feature Flags
VITE_ENABLE_DEMO_MODE=true
VITE_ENABLE_GAMIFICATION=true
VITE_ENABLE_NOTIFICATIONS=true

# Optional Analytics
VITE_GOOGLE_ANALYTICS_ID=your_ga_id
VITE_SENTRY_DSN=your_sentry_dsn
```

### Bot Configuration

Key settings in `user_data/config.json`:

```json
{
  "trading_mode": "spot",
  "dry_run": false,
  "stake_currency": "USDT",
  "stake_amount": 100,
  "api_server": {
    "enabled": true,
    "listen_ip_address": "127.0.0.1",
    "listen_port": 8080,
    "username": "freqtrader",
    "password": "SuperSecretPassword"
  }
}
```

## 📦 Deployment Guide

### Netlify Deployment

1. **Connect Repository**: Link your GitHub repo to Netlify
2. **Build Settings**:
   - Build command: `cd frontend && npm run build`
   - Publish directory: `frontend/dist`
3. **Environment Variables**: Add your API URLs
4. **Deploy**: Automatic deployments on git push

### Vercel Deployment

1. **Import Project**: Connect your GitHub repository
2. **Framework**: Select "Vite" framework
3. **Build Settings**:
   - Build command: `cd frontend && npm run build`
   - Output directory: `frontend/dist`
4. **Environment Variables**: Configure API endpoints
5. **Deploy**: Instant deployments with preview URLs

### Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up -d

# Or run individual services
docker run -d freqtrade/freqtrade:latest webserver
```

## 🎯 User Guide

### Getting Started

1. **Create Account**: Sign up or use demo mode
2. **Configure Bot**: Set up exchange API keys
3. **Choose Strategy**: Select or create trading strategy
4. **Start Trading**: Begin with dry-run mode
5. **Monitor Performance**: Track progress and earnings

### Gamification Features

#### Leveling System
- **Gain XP** through trading activities
- **Level up** to unlock new features
- **Progress bars** show advancement

#### Achievements
- 🏆 **First Profit**: Make your first profitable trade
- 🎯 **Week Warrior**: Trade for 7 consecutive days
- 🧠 **Strategy Master**: Create custom strategy
- 🛡️ **Risk Manager**: Configure risk settings

#### Daily Quests
- ✅ Check strategy performance (+50 XP)
- ✅ Review trading pairs (+30 XP)
- ✅ Update risk settings (+40 XP)

### Navigation Guide

#### Main Modules

**📊 Dashboard**
- Portfolio overview
- Recent trades
- Performance metrics
- Achievement progress

**💹 Trading**
- Active trades management
- Position monitoring
- Real-time P&L

**🧠 Strategy**
- Strategy builder
- FreqAI models
- Optimization tools

**📈 Backtesting**
- Historical testing
- Performance analysis
- Data management

**📊 Analytics**
- Detailed reports
- Risk analysis
- Market insights

**⚙️ Settings**
- Bot configuration
- Security settings
- Preferences

### Accessibility Features

- **Screen Reader Support**: Full ARIA labels and descriptions
- **Keyboard Navigation**: Tab through all interactive elements
- **High Contrast Mode**: Enhanced visibility options
- **Reduced Motion**: Respects user motion preferences
- **Focus Indicators**: Clear visual focus states
- **Alternative Text**: Images have descriptive alt text

## 🔧 Development

### Project Structure

```
freqtrade/
├── frontend/                 # Modern React frontend
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Application pages
│   │   ├── stores/         # State management
│   │   ├── hooks/          # Custom React hooks
│   │   └── utils/          # Helper functions
│   ├── public/             # Static assets
│   └── dist/               # Built files
├── freqtrade/              # Python trading bot
├── user_data/              # Bot configuration
└── docs/                   # Documentation
```

### Frontend Architecture

- **React 18**: Latest React with concurrent features
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first styling
- **Framer Motion**: Smooth animations
- **Zustand**: Lightweight state management
- **React Query**: Server state management

### Available Scripts

```bash
# Frontend development
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # TypeScript checking

# Backend commands
freqtrade trade      # Start trading
freqtrade webserver  # Start API server
freqtrade backtesting # Run backtests
```

### API Integration

The frontend communicates with the Freqtrade API:

- **REST API**: For CRUD operations
- **WebSocket**: For real-time updates
- **Authentication**: JWT-based security

Example API usage:

```typescript
// Get trading status
const response = await fetch('/api/v1/status')
const status = await response.json()

// WebSocket for real-time updates
const ws = new WebSocket('ws://localhost:8080/api/v1/message/ws')
ws.onmessage = (event) => {
  const data = JSON.parse(event.data)
  // Handle real-time updates
}
```

## 🔒 Security

### Best Practices

- **API Key Security**: Never commit API keys to version control
- **Environment Variables**: Use `.env` files for sensitive data
- **HTTPS Only**: Enforce secure connections in production
- **CSP Headers**: Content Security Policy implementation
- **Rate Limiting**: API request throttling
- **Input Validation**: Sanitize all user inputs

### Security Headers

The application includes comprehensive security headers:

```
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Development Setup

1. **Fork** the repository
2. **Clone** your fork locally
3. **Create** a feature branch
4. **Make** your changes
5. **Test** thoroughly
6. **Submit** a pull request

### Contribution Guidelines

- Follow existing code style
- Add tests for new features
- Update documentation
- Ensure accessibility compliance
- Test on multiple devices

### Code Style

- **Frontend**: ESLint + Prettier configuration
- **Backend**: PEP 8 Python standards
- **Commits**: Conventional commit messages
- **Branches**: Descriptive feature branch names

## 📞 Support

### Getting Help

- 📖 **Documentation**: [freqtrade.io](https://www.freqtrade.io)
- 💬 **Discord**: [Join our community](https://discord.gg/p7nuUNVfP7)
- 🐛 **Issues**: [GitHub Issues](https://github.com/freqtrade/freqtrade/issues)
- 📧 **Email**: [support@freqtrade.io](mailto:support@freqtrade.io)

### FAQ

**Q: Can I use this for live trading?**
A: Yes, but start with dry-run mode and paper trading first.

**Q: Which exchanges are supported?**
A: 15+ exchanges including Binance, Coinbase, Kraken, and more.

**Q: Is the bot free to use?**
A: Yes, Freqtrade is completely open source and free.

**Q: Can I customize the interface?**
A: Absolutely! The frontend is fully customizable.

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original Freqtrade development team
- Open source community contributors
- Exchange API providers
- UI/UX design inspiration from modern fintech apps

---

<div align="center">

**[⭐ Star this repo](https://github.com/freqtrade/freqtrade) • [🍴 Fork it](https://github.com/freqtrade/freqtrade/fork) • [📢 Share it](https://twitter.com/intent/tweet?text=Check%20out%20this%20amazing%20crypto%20trading%20bot!&url=https://github.com/freqtrade/freqtrade)**

Made with ❤️ by the Freqtrade community

</div>

![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/kmoore241/Tradingbots?utm_source=oss&utm_medium=github&utm_campaign=kmoore241%2FTradingbots&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)
