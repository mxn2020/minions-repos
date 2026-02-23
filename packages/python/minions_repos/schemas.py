"""
Minions Repos SDK — Type Schemas
Custom MinionType schemas for Minions Repos.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

repo_definition_type = MinionType(
    id="repos-repo-definition",
    name="Repo definition",
    slug="repo-definition",
    description="A GitHub repository to be created and configured.",
    icon="📦",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="visibility", type="select", label="visibility"),
        FieldDefinition(name="defaultBranch", type="string", label="defaultBranch"),
        FieldDefinition(name="template", type="string", label="template"),
        FieldDefinition(name="org", type="string", label="org"),
        FieldDefinition(name="status", type="select", label="status"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
        FieldDefinition(name="repoUrl", type="string", label="repoUrl"),
    ],
)

workflow_template_type = MinionType(
    id="repos-workflow-template",
    name="Workflow template",
    slug="workflow-template",
    description="A reusable GitHub Actions workflow template.",
    icon="⚙️",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="filename", type="string", label="filename"),
        FieldDefinition(name="content", type="string", label="content"),
        FieldDefinition(name="triggerEvents", type="string", label="triggerEvents"),
        FieldDefinition(name="isDefault", type="boolean", label="isDefault"),
        FieldDefinition(name="version", type="string", label="version"),
    ],
)

label_set_type = MinionType(
    id="repos-label-set",
    name="Label set",
    slug="label-set",
    description="A curated set of GitHub issue/PR labels.",
    icon="🏷️",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="labels", type="string", label="labels"),
        FieldDefinition(name="isDefault", type="boolean", label="isDefault"),
    ],
)

branch_rule_type = MinionType(
    id="repos-branch-rule",
    name="Branch rule",
    slug="branch-rule",
    description="Branch protection and merge rules for a repository.",
    icon="🔒",
    schema=[
        FieldDefinition(name="repoDefinitionId", type="string", label="repoDefinitionId"),
        FieldDefinition(name="branch", type="string", label="branch"),
        FieldDefinition(name="requireReviews", type="boolean", label="requireReviews"),
        FieldDefinition(name="requiredReviewers", type="number", label="requiredReviewers"),
        FieldDefinition(name="requireStatusChecks", type="boolean", label="requireStatusChecks"),
        FieldDefinition(name="statusChecks", type="string", label="statusChecks"),
        FieldDefinition(name="allowForcePush", type="boolean", label="allowForcePush"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
    ],
)

custom_types: list[MinionType] = [
    repo_definition_type,
    workflow_template_type,
    label_set_type,
    branch_rule_type,
]

