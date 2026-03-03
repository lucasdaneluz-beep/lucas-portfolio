import React from "react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6 text-center">
      
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Spotify Discovery Engine
      </h1>

      <p className="text-lg text-gray-400 max-w-xl mb-8">
        We're building a smarter way to discover music on Spotify.  
        Analyze playlists, uncover hidden gems, and explore music like never before.
      </p>

      <div className="text-2xl font-semibold text-green-500 mb-6">
        Coming Soon
      </div>

      <div className="flex gap-4 text-sm text-gray-500">
        <span>🚀 Playlist Insights</span>
        <span>🎧 Hidden Gems</span>
        <span>📊 Music Analytics</span>
      </div>

    </div>
  );
};

export default ComingSoon;