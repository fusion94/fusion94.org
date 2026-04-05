module.exports = {
  apps: [
    {
      name: 'fusion94',
      script: 'npm',
      args: 'run dev',
      cwd: __dirname,
      env: {
        NODE_ENV: 'development',
      },
      autorestart: true,
      max_restarts: 5,
    },
  ],
};
