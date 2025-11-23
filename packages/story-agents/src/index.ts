/**
 * OurStory Research Agents
 * AI agents specialized in uncovering historical truths and investigating cover-ups
 */

// Export types
export * from './types';

// Export individual agents
export { ussLibertyMossadAgent } from './agents/uss-liberty-mossad';
export { deepStateOperationsAgent } from './agents/deep-state-operations';
export { financialSystemsAgent } from './agents/financial-systems';
export { ancientMysteriesAgent } from './agents/ancient-mysteries';
export { vaticanSecretsAgent } from './agents/vatican-secrets';
export { secretSocietiesAgent } from './agents/secret-societies';
export { ufoDisclosureAgent } from './agents/ufo-disclosure';
export { politicalAssassinationsAgent } from './agents/political-assassinations';
export { falseFlagOperationsAgent } from './agents/false-flag-operations';
export { medicalCoverupsAgent } from './agents/medical-coverups';
export { philadelphiaExperimentAgent } from './agents/philadelphia-experiment';

// Import all agents for registry
import { ussLibertyMossadAgent } from './agents/uss-liberty-mossad';
import { deepStateOperationsAgent } from './agents/deep-state-operations';
import { financialSystemsAgent } from './agents/financial-systems';
import { ancientMysteriesAgent } from './agents/ancient-mysteries';
import { vaticanSecretsAgent } from './agents/vatican-secrets';
import { secretSocietiesAgent } from './agents/secret-societies';
import { ufoDisclosureAgent } from './agents/ufo-disclosure';
import { politicalAssassinationsAgent } from './agents/political-assassinations';
import { falseFlagOperationsAgent } from './agents/false-flag-operations';
import { medicalCoverupsAgent } from './agents/medical-coverups';
import { philadelphiaExperimentAgent } from './agents/philadelphia-experiment';

import { StoryAgent, AgentRegistry } from './types';

/**
 * All story agents in a single array
 */
export const storyAgents: StoryAgent[] = [
  ussLibertyMossadAgent,
  deepStateOperationsAgent,
  financialSystemsAgent,
  ancientMysteriesAgent,
  vaticanSecretsAgent,
  secretSocietiesAgent,
  ufoDisclosureAgent,
  politicalAssassinationsAgent,
  falseFlagOperationsAgent,
  medicalCoverupsAgent,
  philadelphiaExperimentAgent,
];

/**
 * Calculate total research topics across all agents
 */
const calculateTotalTopics = (agents: StoryAgent[]): number => {
  return agents.reduce((total, agent) => total + agent.researchTopics.length, 0);
};

/**
 * The complete agent registry
 */
export const agentRegistry: AgentRegistry = {
  id: 'ourstory-agent-registry-001',
  name: 'OurStory Truth Research Agents',
  description:
    'A collection of specialized AI research agents dedicated to uncovering historical truths, investigating cover-ups, and challenging official narratives. Each agent focuses on a specific domain of suppressed or contested history.',
  agents: storyAgents,
  totalTopics: calculateTotalTopics(storyAgents),
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01'),
};

/**
 * Get an agent by ID
 */
export const getAgentById = (id: string): StoryAgent | undefined => {
  return storyAgents.find((agent) => agent.id === id);
};

/**
 * Get an agent by codename
 */
export const getAgentByCodename = (codename: string): StoryAgent | undefined => {
  return storyAgents.find((agent) => agent.codename.toLowerCase() === codename.toLowerCase());
};

/**
 * Get all agents by specialization
 */
export const getAgentsBySpecialization = (
  specialization: string
): StoryAgent[] => {
  return storyAgents.filter((agent) => agent.specialization === specialization);
};

/**
 * Get all research topics across all agents
 */
export const getAllResearchTopics = () => {
  return storyAgents.flatMap((agent) =>
    agent.researchTopics.map((topic) => ({
      ...topic,
      agentId: agent.id,
      agentCodename: agent.codename,
    }))
  );
};

export default agentRegistry;
