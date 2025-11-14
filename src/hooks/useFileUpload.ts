import { useState, useRef } from 'react';
import { uploadFiles } from '../services/api';

export const useFileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [downloadedFileName, setDownloadedFileName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFilesSelected = (files: FileList) => {
    setSelectedFiles(Array.from(files));
    setShowSuccess(false);
  };

  const handleRemoveFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearAll = () => {
    setSelectedFiles([]);
    setShowSuccess(false);
    clearFileInput();
  };

  const handleNewConversion = () => {
    setSelectedFiles([]);
    setShowSuccess(false);
    setProgress(0);
    clearFileInput();
  };

  const clearFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleUpload = async (files: FileList) => {
    if (files.length === 0) {
      alert('Please select at least one file');
      return;
    }

    setIsUploading(true);
    setProgress(0);
    setShowSuccess(false);

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        return newProgress >= 90 ? 90 : newProgress;
      });
    }, 200);

    try {
      const blob = await uploadFiles(files);
      
      // Complete progress
      clearInterval(progressInterval);
      setProgress(100);

      // Download the result
      const fileName = files.length === 1 ? 
        `${files[0].name.split('.')[0]}.md` : 
        'converted_files.zip';
      
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      // Show success message
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

  return {
    selectedFiles,
    isUploading,
    progress,
    showSuccess,
    downloadedFileName,
    fileInputRef,
    handleFilesSelected,
    handleRemoveFile,
    handleClearAll,
    handleNewConversion,
    handleUpload,
    clearFileInput
  };
};
