import { Container } from './components/Container/Container';
import { Header } from './components/Header/Header';
import { UploadArea } from './components/UploadArea/UploadArea';
import { FileList } from './components/FileList/FileList';
import { SupportedFormats } from './components/SupportedFormats/SupportedFormats';
import { useFileUpload } from './hooks/useFileUpload';

function App() {
  const {
    selectedFiles,
    isUploading,
    progress,
    showSuccess,
    downloadedFileName,
    handleFilesSelected,
    handleRemoveFile,
    handleClearAll,
    handleNewConversion,
    handleUpload
  } = useFileUpload();

  const mainContent = (
    <>
      <Header />
      <UploadArea
        onFilesSelected={handleFilesSelected}
        onSubmit={handleUpload}
        isUploading={isUploading}
        progress={progress}
        selectedFiles={selectedFiles}
        showSuccess={showSuccess}
        downloadedFileName={downloadedFileName}
        onNewConversion={handleNewConversion}
      />
    </>
  );

  const sidebar = (
    <>
      {selectedFiles.length > 0 && !showSuccess && (
        <FileList 
          files={selectedFiles} 
          onRemoveFile={handleRemoveFile}
          onClearAll={handleClearAll}
        />
      )}
      <SupportedFormats />
    </>
  );

  return (
    <Container sidebar={sidebar}>
      {mainContent}
    </Container>
  );
}

export default App;
