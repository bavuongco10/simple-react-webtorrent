import React, { useEffect } from 'react';
import WebTorrent from 'webtorrent';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    const client = new WebTorrent();
    const torrentId = 'magnet:?xt=urn:btih:873a807e4cad2325686225e7e542ffaf789d6168&dn=Us.2019.1080p.WEBRip.x264-RARBG&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com'
    // const torrentId = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent';
    client.add(torrentId, (torrent) => {
      // Torrents can contain many files. Let's use the .mp4 file
      const file = torrent.files.find(file => file.name.endsWith('.mp4'));
      // Display the file by adding it to the DOM.
      // Supports video, audio, image files, and more!
      file.appendTo('body');
    });
  }, []);
  return (
    <div className="App">
    </div>
  );
}

export default App;
