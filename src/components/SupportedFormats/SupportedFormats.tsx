import './SupportedFormats.css';

export const SupportedFormats = () => {
  return (
    <div className="supported">
      <h3>
        <span>📋</span>
        Supported File Formats
      </h3>
      
      <div className="supported-grid">
        <div className="format-category">
          <h4>📄 Documents</h4>
          <ul className="format-list">
            <li className="format-item">PDF files (.pdf)</li>
            <li className="format-item">Word documents (.docx)</li>
            <li className="format-item">Text files (.txt)</li>
            <li className="format-item">Rich Text (.rtf)</li>
          </ul>
        </div>

        <div className="format-category">
          <h4>📊 Presentations & Spreadsheets</h4>
          <ul className="format-list">
            <li className="format-item">PowerPoint (.pptx)</li>
            <li className="format-item">Excel files (.xlsx)</li>
            <li className="format-item">CSV files (.csv)</li>
          </ul>
        </div>

        <div className="format-category">
          <h4>🌐 Web & Data</h4>
          <ul className="format-list">
            <li className="format-item">HTML files (.html)</li>
            <li className="format-item">JSON files (.json)</li>
            <li className="format-item">XML files (.xml)</li>
          </ul>
        </div>

        <div className="format-category">
          <h4>🖼️ Images & Media</h4>
          <ul className="format-list">
            <li className="format-item">PNG, JPG images</li>
            <li className="format-item">Audio files (.wav, .mp3)</li>
            <li className="format-item">OCR text extraction</li>
          </ul>
        </div>
      </div>

      <div className="supported-tip">
        <p>
          Powered by Microsoft MarkItDown with AI-enhanced conversion for better formatting preservation
        </p>
      </div>
    </div>
  );
};
