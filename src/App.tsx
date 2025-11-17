import "./App.css";
import { Header } from "./components/Header/Header";
import { UploadArea } from "./components/UploadArea/UploadArea";
import { useFileUpload } from "./hooks/useFileUpload";

function App() {
    const {
        selectedFiles,
        isUploading,
        progress,
        showSuccess,
        downloadedFileName,
        handleFilesSelected,
        handleNewConversion,
        handleUpload,
    } = useFileUpload();

    return (
        <div className="app-root">
            <Header />

            <main className="landing-main">
                {/* HERO */}
                <section className="hero">
                    <button className="hero-pill">
                        <span className="hero-pill-dot" />
                        Free &amp; Secure Conversion
                    </button>

                    <h1 className="hero-title">
                        Transform Documents into
                        <br />
                        <span className="hero-title-highlight">Markdown</span>
                    </h1>

                    <p className="hero-subtitle">
                        Convert your documents instantly with our powerful converter. Fast and accurate.
                    </p>
                </section>

                <section className="hero-upload">
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

                    {!showSuccess && (
                        <div className="hero-upload-footer">
                            Supports PDF files up to 24MB
                        </div>
                    )}
                </section>
            </main>

            <footer className="landing-footer">
                <span className="footer-logo">MarkConvert</span>
                <span className="footer-copy">
                    © 2025 MarkConvert. All rights reserved.
                </span>
            </footer>
        </div>
    );
}

export default App;
