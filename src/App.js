import './App.css';
import { downloadAUrl } from 'better-file-downloader';
import React, { useState } from 'react';
import Select from 'react-select';
import { memeArray } from './database/memeTemplates.js';

export default function App() {
  const [memeTemplate, setMemeTemplate] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  const [preview, setPreview] = '';
  const [download, setDownload] = '';

  return (
    <div className="container">
      <div className="box">
        <h1>Make your own meme!</h1>

        <label>
          <p>Choose your template</p>
          <select
            name="Meme template"
            value={memeTemplate}
            onChange={(e) => setMemeTemplate(e.target.value)}
          >
            <option value="">-- Select your meme --</option>
            {memeArray.map((template) => (
              <option key={`meme-${template.id}`} value={`meme-${template.id}`}>
                {template.name}
              </option>
            ))}
          </select>
        </label>

        <img src="url" data-test-id="meme-image" alt="an empty meme template" />
        <form>
          <label name="Top text">
            Top text
            <input />
          </label>
          <label name="Bottom text">
            Bottom text
            <input />
          </label>
        </form>
        <div>Preview</div>
        <div>Download</div>
      </div>
    </div>
  );
}
