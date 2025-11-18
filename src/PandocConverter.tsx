import { useState, useRef } from 'react';
import './App.css';

const PandocConverter = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [downloadedFileName, setDownloadedFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0] && files[0].name.endsWith('.md')) {
      setSelectedFile(files[0]);
      setShowSuccess(false);
    } else {
      alert('Please select a .md file');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files[0] && files[0].name.endsWith('.md')) {
      setSelectedFile(files[0]);
      setShowSuccess(false);
    } else {
      alert('Please select a .md file');
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a markdown file');
      return;
    }

    setIsUploading(true);
    setProgress(0);
    setShowSuccess(false);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        return newProgress >= 90 ? 90 : newProgress;
      });
    }, 200);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/md-to-word`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      clearInterval(progressInterval);
      setProgress(100);

      const blob = await response.blob();
      const fileName = `${selectedFile.name.split('.')[0]}.docx`;
      
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      setDownloadedFileName(fileName);
      setIsUploading(false);
      setShowSuccess(true);

    } catch (error) {
      clearInterval(progressInterval);
      setIsUploading(false);
      setProgress(0);
      alert(`Upload failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  const handleNewConversion = () => {
    setSelectedFile(null);
    setShowSuccess(false);
    setProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div style={{ minHeight: '100vh', padding: '20px', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <section className="hero">
                    <button className="hero-pill">
                        <span className="hero-pill-dot" />
                        Free &amp; Secure Conversion
                    </button>

                    <h1 className="hero-title">
                        Transform Documents into
                        <br />
                        <span className="hero-title-highlight">Word Document</span>
                    </h1>

                    <p className="hero-subtitle">
                                    Transform your markdown files into professional Word documents instantly.

                    </p>
                </section>
        <div style={{ marginBottom: '40px' }}>
          {showSuccess ? (
            <div style={{ 
              textAlign: 'center', 
              padding: '40px', 
              backgroundColor: '#f8f9fa', 
              borderRadius: '12px' 
            }}>
              <div style={{ 
                fontSize: '3rem', 
                color: '#28a745', 
                marginBottom: '20px' 
              }}>✓</div>
              <h3 style={{ marginBottom: '10px' }}>Conversion Complete!</h3>
              <p style={{ marginBottom: '30px' }}>
                Your file <strong>{downloadedFileName}</strong> has been downloaded.
              </p>
              <button 
                onClick={handleNewConversion}
                style={{ 
                  padding: '12px 24px', 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '8px', 
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                Convert Another File
              </button>
            </div>
          ) : (
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div 
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                style={{ 
                  border: '2px dashed #ccc', 
                  borderRadius: '12px', 
                  padding: '60px 20px', 
                  textAlign: 'center', 
                  cursor: 'pointer',
                  marginBottom: '20px',
                  position: 'relative'
                }}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".md"
                  onChange={handleFileSelect}
                  style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%', 
                    opacity: 0, 
                    cursor: 'pointer' 
                  }}
                />
                
                <div>
                  <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📄</div>
                  <h3 style={{ marginBottom: '10px' }}>Drop your markdown file here</h3>
                  <p style={{ marginBottom: '20px', color: '#666' }}>or click to browse</p>
                  <div style={{ fontSize: '0.9rem', color: '#888' }}>
                    Supports: .md files
                  </div>
                </div>
              </div>

              {selectedFile && (
                <div style={{ 
                  marginBottom: '20px', 
                  padding: '15px', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '8px' 
                }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center' 
                  }}>
                    <span style={{ fontWeight: '500' }}>{selectedFile.name}</span>
                    <span style={{ color: '#666', fontSize: '0.9rem' }}>
                      {(selectedFile.size / 1024).toFixed(1)} KB
                    </span>
                  </div>
                </div>
              )}

              {isUploading && (
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ 
                    width: '100%', 
                    height: '8px', 
                    backgroundColor: '#e9ecef', 
                    borderRadius: '4px', 
                    overflow: 'hidden',
                    marginBottom: '10px'
                  }}>
                    <div style={{ 
                      height: '100%', 
                      backgroundColor: '#007bff', 
                      width: `${progress}%`,
                      transition: 'width 0.3s ease'
                    }} />
                  </div>
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>
                    {Math.round(progress)}%
                  </span>
                </div>
              )}

              <button 
                onClick={handleUpload}
                disabled={!selectedFile || isUploading}
                style={{ 
                  width: '100%',
                  padding: '15px', 
                  backgroundColor: selectedFile && !isUploading ? '#f06210' : '#ccc', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '8px', 
                  cursor: selectedFile && !isUploading ? 'pointer' : 'not-allowed',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                {isUploading ? 'Converting...' : 'Convert to Word'}
              </button>
            </div>
          )}

          {!showSuccess && (
            <div style={{ 
              textAlign: 'center', 
              marginTop: '20px', 
              fontSize: '0.9rem', 
              color: '#666' 
            }}>
              Supports Markdown files up to 16MB
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PandocConverter;
