import './App.css';
import { downloadAUrl } from 'better-file-downloader';
import React, { useState } from 'react';
import Select from 'react-select';

export default function App() {
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [template, setTemplate] = 'image';
  const [preview, setPreview] = '';
  const [download, setDownload] = '';

  return (
    <div className="container">
      <div className="box">
        <h1>Make your own meme!</h1>
        <form>
          <label name="Meme template">
            Choose your template
            <input name="Templates" type="" />
          </label>
          <img
            src="url"
            data-test-id="meme-image"
            alt="an empty meme template"
          />
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
