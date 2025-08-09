// import React from "react";

// // InvitePage.jsx
// // Single-file React component (default export).
// // Tailwind CSS required in your project for styles to work.
// // Usage: import InvitePage from './InvitePage' and render <InvitePage /> in your App.

// export default function InvitePage() {
//   const inviteUrl =
//     "https://discord.com/oauth2/authorize?client_id=1403062224196599809&scope=bot%20applications.commands&permissions=0";

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-500 p-6">
//       <div className="max-w-xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
//         <div className="flex items-center gap-4">
//           <div className="p-3 rounded-lg bg-white/20">
//             {/* Simple Discord glyph */}
//             <svg
//               xmlns="https://m.media-amazon.com/images/I/81Z+V7GJIEL.png"
//               viewBox="0 0 245 240"
//               className="w-12 h-12"
//               aria-hidden
//             >
//               <path
//                 fill="#ffffff"
//                 d="M104.4 104.3c-5.7 0-10.3 5-10.3 11.1 0 6.1 4.6 11.1 10.3 11.1 5.7 0 10.3-5 10.3-11.1 0-6.1-4.6-11.1-10.3-11.1zm36.2 0c-5.7 0-10.3 5-10.3 11.1 0 6.1 4.6 11.1 10.3 11.1 5.7 0 10.3-5 10.3-11.1 0-6.1-4.6-11.1-10.3-11.1z"
//               />
//               <path
//                 fill="#ffffff"
//                 d="M189.5 20H55.5C39.6 20 26.8 32.8 26.8 48.6l3.9 97.5c0 15.8 12.8 28.6 28.6 28.6h106.4c15.8 0 28.6-12.8 28.6-28.6l3.9-97.5C216.3 32.8 203.5 20 187.6 20zM169.4 167.9c-6.7 4.6-13.2 8.4-19.4 11.2-13.6 5.6-23.9 7.5-31 7.9-2.8.1-5 .2-6.4.2s-3.6-.1-6.4-.2c-7.1-.4-17.4-2.3-31-7.9-6.2-2.8-12.7-6.6-19.4-11.2-8.2-5.6-14.6-12.3-18.9-20.1-1.5-2.8-.1-6.2 3-7.4 20.6-7.3 36.4-11.5 47.5-13.6 2.1-.4 3.7 1 4.2 1.9 3.6 7.6 13.6 24.2 18.7 24.2 5.2 0 15-16.5 18.6-24.2.5-.9 2.2-2.3 4.3-1.9 11.2 2.1 26.9 6.3 47.5 13.6 3.1 1.1 4.6 4.6 3 7.4-4.3 7.8-10.8 14.5-18.9 20.1z"
//               />
//             </svg>
//           </div>

//           <div className="flex-1">
//             <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
//               Invite The Clash bot to your server!
//             </h1>
//             <p className="mt-2 text-white/90">Bring helpful commands, moderation, and fun to your community.</p>

//             <div className="mt-6 flex flex-wrap gap-3">
//               <a
//                 href={inviteUrl}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center gap-3 px-5 py-3 rounded-full font-medium shadow-lg transform transition hover:-translate-y-1 active:scale-95 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white"
//                 aria-label="Invite thebot to your server"
//               >
//                 <svg
//                   xmlns="https://m.media-amazon.com/images/I/81Z+V7GJIEL.png"
//                   viewBox="0 0 24 24"
//                   className="w-5 h-5"
//                   aria-hidden
//                 >
//                   <path fill="currentColor" d="M12 2L3 7v7c0 5 4 9 9 9s9-4 9-9V7l-9-5z" />
//                 </svg>
//                 Invite thebot
//               </a>

//               <button
//                 type="button"
//                 onClick={() => navigator.clipboard && navigator.clipboard.writeText(inviteUrl)}
//                 className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/95 hover:bg-white/20 transition"
//                 aria-label="Copy invite link"
//               >
//                 Copy link
//               </button>
//             </div>

//             <div className="mt-4 text-xs text-white/80">
              
//             </div>
//           </div>
//         </div>

//         <footer className="mt-6 text-center text-white/60 text-xs"></footer>
//       </div>
//     </div>
//   );
// }


import React from "react";

export default function InvitePage() {
  const inviteUrl =
    "https://discord.com/oauth2/authorize?client_id=1403062224196599809&scope=bot%20applications.commands&permissions=0";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-500 p-6">
      <div className="max-w-xl w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
        <div className="flex items-center gap-4">
          {/* Replaced SVG with image */}
          <div className="p-3 rounded-lg bg-white/20">
            <img
              src="https://m.media-amazon.com/images/I/81Z+V7GJIEL.png"
              alt="Bot Logo"
              className="w-12 h-12 object-contain"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Invite The Clash bot to your server!
            </h1>
            <p className="mt-2 text-white/90">
              Use helpful commands to understand about players, clans, and more in Clash of Clans.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={inviteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full font-medium shadow-lg transform transition hover:-translate-y-1 active:scale-95 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white"
                aria-label="Invite thebot to your server"
              >
                Invite to your server
              </a>

              <button
                type="button"
                onClick={() =>
                  navigator.clipboard &&
                  navigator.clipboard.writeText(inviteUrl)
                }
                className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/95 hover:bg-white/20 transition"
                aria-label="Copy invite link"
              >
                Copy link
              </button>
            </div>
          </div>
        </div>

        <footer className="mt-6 text-center text-white/60 text-xs">
          
        </footer>
      </div>
    </div>
  );
}
