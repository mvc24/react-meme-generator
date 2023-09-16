import react, { useState } from 'react';
import { memeTemplates } from './MemeTemplates';

export function DropdownDatalist(props) {
  return (
    <datalist id="list">
      {memeTemplates.map((template) => (
        <option key={`meme-${template.name}`} value={template.name} />
      ))}
    </datalist>
  );
}

/*   <input
              type="search"
              list="list"
              autoComplete="on"
              value={memeTemplates.name}
              onChange={setMemeTemplate}
            />
            <Dropdown /> */

export default function SimpleDropdown(props) {
  const [memeTemplate, setMemeTemplate] = useState('template');

  return (
    <label name="Meme template">
      <p>Choose your template</p>
      <select
        value={memeTemplate}
        onChange={(e) => setMemeTemplate(e.target.value)}
      >
        <option value="">-- Select your meme --</option>
        {memeTemplates.map((template) => (
          <option key={`meme-${template.id}`} value={`meme-${template.id}`}>
            {template.name}
          </option>
        ))}
      </select>
    </label>
  );
}
