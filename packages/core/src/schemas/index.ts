/**
 * @module @minions-repos/sdk/schemas
 * Custom MinionType schemas for Minions Repos.
 */

import type { MinionType } from 'minions-sdk';

export const repodefinitionType: MinionType = {
  id: 'repos-repo-definition',
  name: 'Repo definition',
  slug: 'repo-definition',
  description: 'A GitHub repository to be created and configured.',
  icon: '📦',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'visibility', type: 'select', label: 'visibility' },
    { name: 'defaultBranch', type: 'string', label: 'defaultBranch' },
    { name: 'template', type: 'string', label: 'template' },
    { name: 'org', type: 'string', label: 'org' },
    { name: 'status', type: 'select', label: 'status' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
    { name: 'repoUrl', type: 'string', label: 'repoUrl' },
  ],
};

export const workflowtemplateType: MinionType = {
  id: 'repos-workflow-template',
  name: 'Workflow template',
  slug: 'workflow-template',
  description: 'A reusable GitHub Actions workflow template.',
  icon: '⚙️',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'filename', type: 'string', label: 'filename' },
    { name: 'content', type: 'string', label: 'content' },
    { name: 'triggerEvents', type: 'string', label: 'triggerEvents' },
    { name: 'isDefault', type: 'boolean', label: 'isDefault' },
    { name: 'version', type: 'string', label: 'version' },
  ],
};

export const labelsetType: MinionType = {
  id: 'repos-label-set',
  name: 'Label set',
  slug: 'label-set',
  description: 'A curated set of GitHub issue/PR labels.',
  icon: '🏷️',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'labels', type: 'string', label: 'labels' },
    { name: 'isDefault', type: 'boolean', label: 'isDefault' },
  ],
};

export const branchruleType: MinionType = {
  id: 'repos-branch-rule',
  name: 'Branch rule',
  slug: 'branch-rule',
  description: 'Branch protection and merge rules for a repository.',
  icon: '🔒',
  schema: [
    { name: 'repoDefinitionId', type: 'string', label: 'repoDefinitionId' },
    { name: 'branch', type: 'string', label: 'branch' },
    { name: 'requireReviews', type: 'boolean', label: 'requireReviews' },
    { name: 'requiredReviewers', type: 'number', label: 'requiredReviewers' },
    { name: 'requireStatusChecks', type: 'boolean', label: 'requireStatusChecks' },
    { name: 'statusChecks', type: 'string', label: 'statusChecks' },
    { name: 'allowForcePush', type: 'boolean', label: 'allowForcePush' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
  ],
};

export const customTypes: MinionType[] = [
  repodefinitionType,
  workflowtemplateType,
  labelsetType,
  branchruleType,
];

