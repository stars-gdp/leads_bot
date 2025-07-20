module.exports = {
  apps: [
    {
      name: "leads_bot",
      script: "build/bot.js",
      instances: "1",
      exec_mode: "cluster",
      watch: false,
      max_memory_restart: "500M",
    },
  ],
};
