# CLAUDE.md - AI Assistant Guide for AI-Accelerated Venture Lab

This file provides guidance for AI assistants (like Claude) working with this codebase.

## Project Overview

**AI-Accelerated Venture Lab** is a project designed to leverage AI capabilities for venture development, startup ideation, and business acceleration workflows.

### Project Status: Initializing

This repository is currently being set up. The following sections will be updated as the project evolves.

---

## Repository Structure

```
AI-Accelerated-Venture-Lab/
├── CLAUDE.md           # This file - AI assistant guidance
├── README.md           # Project documentation (to be created)
├── src/                # Source code (to be created)
├── tests/              # Test files (to be created)
├── docs/               # Documentation (to be created)
└── .gitignore          # Git ignore rules (to be created)
```

---

## Development Guidelines

### Code Style and Conventions

1. **Language**: Specify primary language when project is initialized
2. **Formatting**: Use consistent formatting tools (Prettier, Black, etc.)
3. **Naming Conventions**:
   - Use descriptive, meaningful names
   - camelCase for variables and functions (JavaScript/TypeScript)
   - snake_case for Python
   - PascalCase for classes and components

### Git Workflow

1. **Branch Naming**:
   - Feature branches: `feature/<description>`
   - Bug fixes: `fix/<description>`
   - Claude sessions: `claude/<session-id>`

2. **Commit Messages**:
   - Use clear, descriptive commit messages
   - Start with a verb (Add, Fix, Update, Remove, Refactor)
   - Keep the first line under 72 characters
   - Reference issues when applicable

3. **Pull Requests**:
   - Provide clear descriptions of changes
   - Include test coverage for new features
   - Request reviews before merging

### Testing Requirements

- Write tests for new functionality
- Maintain test coverage above project threshold
- Run tests locally before pushing

---

## AI Assistant Instructions

### When Working on This Codebase

1. **Read Before Writing**: Always read existing files before making modifications
2. **Respect Patterns**: Follow existing code patterns and conventions
3. **Minimal Changes**: Make only necessary changes; avoid over-engineering
4. **Security First**: Never introduce security vulnerabilities (OWASP Top 10)
5. **Test Coverage**: Add tests for new functionality when applicable

### Task Approach

1. **Exploration**: Use search and read tools to understand context
2. **Planning**: Use TodoWrite to plan multi-step tasks
3. **Implementation**: Make incremental, well-tested changes
4. **Verification**: Run tests and linting after changes
5. **Documentation**: Update documentation when adding features

### Things to Avoid

- Do not commit sensitive data (API keys, credentials, .env files)
- Do not add unnecessary dependencies
- Do not create documentation files unless explicitly requested
- Do not over-engineer solutions
- Do not make changes outside the scope of the request

---

## Common Commands

Commands will be added as the project develops. Expected commands:

```bash
# Install dependencies (example)
npm install          # Node.js projects
pip install -r requirements.txt  # Python projects

# Run development server (example)
npm run dev          # Node.js
python main.py       # Python

# Run tests (example)
npm test             # Node.js
pytest               # Python

# Build for production (example)
npm run build        # Node.js
```

---

## Architecture Overview

*To be documented as the project develops.*

### Key Components

- **Core Module**: Main application logic
- **API Layer**: External integrations and endpoints
- **Data Layer**: Data models and persistence
- **UI Layer**: User interface components (if applicable)

---

## Configuration

### Environment Variables

Create a `.env` file for local development (never commit to git):

```
# Example environment variables
API_KEY=your_api_key_here
DATABASE_URL=your_database_url
DEBUG=true
```

### Configuration Files

- Configuration patterns will be documented as they are established

---

## Dependencies

*Dependencies will be listed here as the project develops.*

---

## Troubleshooting

### Common Issues

*Common issues and solutions will be documented here.*

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write/update tests
5. Submit a pull request

---

## Resources

- [Project Documentation](./docs/) (to be created)
- [Issue Tracker](../../issues)

---

*Last updated: 2026-02-03*
*This file should be updated as the project evolves to reflect current structure and conventions.*
