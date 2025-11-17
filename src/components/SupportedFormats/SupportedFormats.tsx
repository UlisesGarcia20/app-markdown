// components/SupportedFormats/SupportedFormats.jsx
import './SupportedFormats.css';

export const SupportedFormats = () => {
  return (
    <div className="supported-card">
      <div className="supported-header">
        <span className="supported-icon">📋</span>
        <div>
          <h3 className="supported-title">Supported File Formats</h3>
          <p className="supported-subtitle">
            Works out-of-the-box with the formats you use every day.
          </p>
        </div>
      </div>

      <div className="supported-grid">
        <div className="format-category">
          <h4>Documents</h4>
          <ul className="format-list">
            <li>PDF files (.pdf)</li>
            <li>Word documents (.docx)</li>
            <li>Text files (.txt)</li>
            <li>Rich Text (.rtf)</li>
          </ul>
        </div>

        <div className="format-category">
          <h4>Presentations &amp; Spreadsheets</h4>
          <ul className="format-list">
            <li>PowerPoint (.pptx)</li>
            <li>Excel files (.xlsx)</li>
            <li>CSV files (.csv)</li>
          </ul>
        </div>

        <div className="format-category">
          <h4>Web &amp; Data</h4>
          <ul className="format-list">
            <li>HTML files (.html)</li>
            <li>JSON files (.json)</li>
            <li>XML files (.xml)</li>
          </ul>
        </div>

        <div className="format-category">
          <h4>Images &amp; Media</h4>
          <ul className="format-list">
            <li>PNG, JPG images</li>
            <li>Audio files (.wav, .mp3)</li>
            <li>OCR text extraction</li>
          </ul>
        </div>
      </div>

      <div className="supported-tip">
        Powered by Microsoft MarkItDown with AI-enhanced conversion
        for better formatting preservation.
      </div>
    </div>
  );
};
