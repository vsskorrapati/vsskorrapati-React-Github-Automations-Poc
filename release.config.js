module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/vsskorrapati/React-Github-Automations-Poc.git",
    plugins: [
      "@semantic-release/commit-analyzer",
      "@semantic-release/release-notes-generator",
      [
        "@semantic-release/github",
        {
          assets: [
            {
              path: "coverage.zip",
              label: "Coverage",
            },
          ],
        },
      ],
    ],
  };
  