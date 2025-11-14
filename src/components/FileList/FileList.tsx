import './FileList.css';

interface FileListProps {
  files: File[];
  onRemoveFile: (index: number) => void;
  onClearAll: () => void;
}

const getFileIcon = (fileName: string) => {
  const ext = fileName.split('.').pop()?.toLowerCase();
  switch (ext) {
    case 'pdf': return '📄';
    case 'docx': case 'doc': return '📝';
    case 'pptx': case 'ppt': return '📊';
    case 'xlsx': case 'xls': return '📈';
    case 'png': case 'jpg': case 'jpeg': case 'gif': return '🖼️';
    case 'txt': return '📃';
    case 'html': return '🌐';
    case 'json': return '📋';
    default: return '📁';
  }
};

const formatFileSize = (bytes: number) => {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
};

export const FileList = ({ files, onRemoveFile, onClearAll }: FileListProps) => {
  if (files.length === 0) return null;

  return (
    <div className="file-list">
      <div className="file-list-header">
        <h4>Selected files</h4>
        <button className="clear-all-btn" onClick={onClearAll}>
          Clear all
        </button>
      </div>
      <div className="selected-files">
        {files.map((file, index) => (
          <div key={index} className="file-item">
            <div className="file-info">
              <span className="file-icon">{getFileIcon(file.name)}</span>
              <div className="file-details">
                <span className="file-name">{file.name}</span>
                <span className="file-size">{formatFileSize(file.size)}</span>
              </div>
            </div>
            <div className="file-actions">
              <div className="file-status">Ready</div>
              <button 
                className="remove-file-btn" 
                onClick={() => onRemoveFile(index)}
                title="Remove file"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
