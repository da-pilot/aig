# AIG
AIG website built with Adobe Experience Manager Edge Delivery Services.

## Environments
- Preview: https://main--aig--da-pilot.aem.page/
- Live: https://main--aig--da-pilot.aem.live/

## Documentation

Before using the aem-boilerplate, we recommand you to go through the documentation on https://www.aem.live/docs/ and more specifically:
1. [Developer Tutorial](https://www.aem.live/developer/tutorial)
2. [The Anatomy of a Project](https://www.aem.live/developer/anatomy-of-a-project)
3. [Web Performance](https://www.aem.live/developer/keeping-it-100)
4. [Markup, Sections, Blocks, and Auto Blocking](https://www.aem.live/developer/markup-sections-blocks)
5. [Developing With AI](https://www.aem.live/developer/ai-coding-agents)

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate` template
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)

## AI Development Setup

If you're using AI coding agents (Claude Code, Cursor, etc.), install Adobe's EDS skills for enhanced development support:

### Claude Code
```
/plugin marketplace add adobe/skills
/plugin install aem-edge-delivery-services@adobe-skills
```

### GitHub CLI (upskill)
```sh
gh extension install ai-ecoverse/gh-upskill
gh upskill adobe/skills --path plugins/aem/edge-delivery-services --all
```

These skills provide AI assistance for:
- Content-driven development workflow
- Code review and quality checks
- Block development patterns
- Documentation search
- Testing guidance
- And more

See [Developing With AI](https://www.aem.live/developer/ai-coding-agents) for complete documentation.
