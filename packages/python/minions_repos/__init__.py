"""
Minions Repos Python SDK

GitHub repo definitions, workflow templates, label sets, and branch protection rules
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Repos.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
