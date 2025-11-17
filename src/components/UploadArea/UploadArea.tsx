import { useState, useRef } from 'react';
import './UploadArea.css';

interface UploadAreaProps {
  onFilesSelected: (files: FileList) => void;
  onSubmit: (files: FileList) => void;
  isUploading: boolean;
  progress: number;
  selectedFiles: File[];
  showSuccess: boolean;
  downloadedFileName: string;
  onNewConversion: () => void;
}

export const UploadArea = ({
  onFilesSelected,
  onSubmit,
  isUploading,
  progress,
  selectedFiles,
  showSuccess,
  downloadedFileName,
  onNewConversion
}: UploadAreaProps) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files) {
      onFilesSelected(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      onFilesSelected(e.target.files);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFiles.length > 0) {
      const fileList = new DataTransfer();
      selectedFiles.forEach(file => fileList.items.add(file));
      onSubmit(fileList.files);
    }
  };

  const getButtonText = () => {
    if (isUploading) return 'Converting...';
    if (selectedFiles.length === 0) return 'Drop your PDF or browse';
    if (selectedFiles.length === 1) return 'Convert file';
    return `Convert ${selectedFiles.length} files`;
  };

  if (showSuccess) {
    return (
      <div className="upload-card success-state">
        <div className="upload-card-inner">
          <span className="success-icon">✅</span>
          <div className="success-text">Conversion Successful!</div>
          <div className="success-subtext">
            Your file "{downloadedFileName}" has been downloaded
          </div>
          <button
            type="button"
            className="primary-btn"
            onClick={onNewConversion}
          >
            Convert New Files
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`upload-card ${isDragOver ? 'is-dragover' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="upload-card-inner">
          <div className="upload-icon-wrapper">
            <span className="upload-icon">⬆️</span>
          </div>

          <div className="upload-main-text">
            Drop your PDF here or click to browse
          </div>
          <div className="upload-subtext">
            {selectedFiles.length > 0
              ? `${selectedFiles.length} file(s) selected`
              : 'Supports PDF, DOCX, PPTX, Images & more'}
          </div>

          <input
            type="file"
            multiple
            required
            ref={fileInputRef}
            onChange={handleFileChange}
            className="upload-input-hidden"
          />

          {isUploading && (
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          )}

          <button
            type="submit"
            className="primary-btn"
            disabled={isUploading || selectedFiles.length === 0}
          >
            {getButtonText()}
          </button>
        </div>
      </div>
    </form>
  );
};
