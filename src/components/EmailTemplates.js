import React, { useState } from 'react';

const EmailTemplates = ({ templates }) => {
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const handleTemplateChange = (e) => {
    setSelectedTemplate(e.target.value);
  };

  return (
    <div>
      <h2>Email Templates</h2>
      <div className="flex items-center space-x-4">
        {templates.map((template) => (
          <label key={template.id} className="flex items-center">
            <input
              type="radio"
              value={template.id}
              checked={selectedTemplate === template.id}
              onChange={handleTemplateChange}
              className="hidden"
            />
            <img
              src={`https://picsum.photos/100/100?random=${template.id}`} // Replace with your placeholder image URL
              alt={`${template.name} Columns`}
              className="h-12 cursor-pointer"
            />
          </label>
        ))}
      </div>
    </div>
  );
};

export default EmailTemplates;
