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
    handleFilesSelected,
    handleRemoveFile,
    handleClearAll,
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
      />
    </>
  );

  const sidebar = (
    <>
      {selectedFiles.length > 0 && (
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
