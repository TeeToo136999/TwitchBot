const tmi = require('tmi.js');

// Configuration options
const opts = {
  identity: {
    username: 'Your BOT acc name',
    password: 'Your BOT acc pass'
  },
  channels: [
    'Your channel name'
  ]
};

// Create a client with the options
const client = new tmi.client(opts);

// Register event handlers
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch
client.connect();

// Message event handler
function onMessageHandler(target, context, msg, self) {
  // Ignore messages from the bot itself or non-chat messages
  if (self || !msg.startsWith('!')) return;

  // Parse the message
  const commandName = msg.trim();

  // Handle different commands
  if (commandName === '!Your command') {
    client.say(target, 'What should it do');
  } else if (commandName === '!Next command') {
    client.say(target, 'What should it do');
    // Add more commands here if needed
  }
}

// Connected event handler
function onConnectedHandler(addr, port) {
  console.log(`Connected to ${addr}:${port}`);
  // You can add additional code or send a message here when the bot connects to Twitch
}
