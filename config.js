// HireLane API Configuration
// Update this URL when deploying to a new endpoint
const CONFIG = {
  API_BASE: 'https://involving-clara-notifications-vpn.trycloudflare.com/api',
  // For local development: 'http://localhost:8000/api'
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
