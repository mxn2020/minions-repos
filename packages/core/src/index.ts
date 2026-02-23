/**
 * Minions Repos SDK
 *
 * GitHub repo definitions, workflow templates, label sets, and branch protection rules
 *
 * @module @minions-repos/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Repos.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
