import React, { useState } from "react";

export default function InvitePage() {
  const [copied, setCopied] = useState(false);
  
  const inviteUrl =
    "https://discord.com/oauth2/authorize?client_id=1403062224196599809&scope=bot%20applications.commands&permissions=0";

  const commands = [
    {
      name: "/player homevillage",
      description: "Get home village stats of a player",
      icon: "🏠"
    },
    {
      name: "/player info",
      description: "Get basic player info",
      icon: "ℹ️"
    },
    {
      name: "/player builderbase",
      description: "Get builder base stats of a player",
      icon: "🏗️"
    },
    {
      name: "/player achievements",
      description: "Get achievements of a player",
      icon: "🏆"
    },
    {
      name: "/player equipment",
      description: "Get hero equipment of a player",
      icon: "⚔️"
    },
    {
      name: "/player troops",
      description: "Get player troops",
      icon: "👥"
    },
    {
      name: "/player spells",
      description: "Get player spells",
      icon: "✨"
    },
    {
      name: "/player heroes",
      description: "Get player heroes",
      icon: "🦸"
    }
  ];

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(inviteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 p-4 sm:p-6 overflow-y-auto">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 sm:p-10 shadow-2xl mb-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-xl transform hover:scale-105 transition-transform">
              <img
                src="https://m.media-amazon.com/images/I/81Z+V7GJIEL.png"
                alt="The Clash Bot"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl sm:text-5xl font-black text-white mb-3 drop-shadow-lg">
                The Clash Bot
              </h1>
              <p className="text-lg sm:text-xl text-white/95 mb-6 leading-relaxed">
                Your ultimate Clash of Clans companion! Get detailed player stats, 
                achievements, troops, heroes, and much more directly in Discord.
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a
                  href={inviteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold shadow-xl transform transition hover:scale-105 active:scale-95 bg-white text-purple-600 hover:bg-gray-100"
                >
                  <span className="text-xl">🚀</span>
                  Add to Discord
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-6 py-3 rounded-xl bg-white/20 backdrop-blur border border-white/30 text-white font-semibold hover:bg-white/30 transition"
                >
                  {copied ? "✓ Copied!" : "📋 Copy Invite Link"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-8">
          <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-6 drop-shadow-lg">
            ✨ Available Commands
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commands.map((cmd, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 hover:bg-white/20 transition-all hover:scale-105 transform shadow-lg"
              >
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{cmd.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-lg mb-1 font-mono">
                      {cmd.name}
                    </h3>
                    <p className="text-white/80 text-sm">
                      {cmd.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What is Clash of Clans Section */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 sm:p-8 shadow-xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-4">
            🏰 What is Clash of Clans?
          </h2>
          <p className="text-white/90 text-center max-w-3xl mx-auto leading-relaxed mb-4">
            Clash of Clans is a popular mobile strategy game where you build your village, 
            train troops, and battle with players worldwide. Track your progress, optimize 
            your army, and dominate the leaderboards!
          </p>
          <p className="text-white/80 text-center text-sm">
            With over 500 million downloads, it's one of the most successful mobile games ever created.
          </p>
        </div>

        {/* How Discord Bots Work Section */}
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-lg border border-white/20 rounded-3xl p-6 sm:p-8 shadow-xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-6">
            🤖 How Discord Bots Work
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-4xl mb-3">1️⃣</div>
              <h3 className="text-lg font-bold text-white mb-2">Invite the Bot</h3>
              <p className="text-white/80 text-sm">Click "Add to Discord" and select your server</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">2️⃣</div>
              <h3 className="text-lg font-bold text-white mb-2">Use Commands</h3>
              <p className="text-white/80 text-sm">Type slash commands like /player info in any channel</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">3️⃣</div>
              <h3 className="text-lg font-bold text-white mb-2">Get Results</h3>
              <p className="text-white/80 text-sm">The bot fetches live data and displays it instantly</p>
            </div>
          </div>
          
          <p className="text-white/80 text-center text-sm max-w-2xl mx-auto">
            Discord bots are automated programs that run on Discord servers. They respond to commands, 
            fetch data from external APIs, and enhance your server experience without any manual effort!
          </p>
        </div>

        {/* Why Section */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-lg border border-white/20 rounded-3xl p-6 sm:p-8 shadow-xl mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-6">
            🎯 Why Choose The Clash Bot?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-white/80">Instant access to player statistics and data</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-xl font-bold text-white mb-2">Clean Interface</h3>
              <p className="text-white/80">Beautiful, easy-to-read formatted responses</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-3">🔄</div>
              <h3 className="text-xl font-bold text-white mb-2">Always Updated</h3>
              <p className="text-white/80">Real-time data from Clash of Clans API</p>
            </div>
          </div>
        </div>

        {/* Contribute Section */}
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-lg border border-white/20 rounded-3xl p-6 sm:p-8 shadow-xl mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            💻 Open Source Project
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            This bot is open source! Help improve it by contributing code, reporting bugs, 
            or suggesting new features. Every contribution makes a difference!
          </p>
          <a
            href="https://github.com/MayurK-cmd/clash_of_clan_bot"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold shadow-xl transform transition hover:scale-105 active:scale-95 bg-white text-green-600 hover:bg-gray-100"
          >
            <span className="text-xl">⭐</span>
            Contribute on GitHub
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center">
          <p className="text-white/70 text-sm">
            Made with ❤️ for the Clash of Clans community
          </p>
          <p className="text-white/50 text-xs mt-2">
            Not affiliated with Supercell. Clash of Clans is a trademark of Supercell.
          </p>
        </footer>
      </div>
    </div>
  );
}