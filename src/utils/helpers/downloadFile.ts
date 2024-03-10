function downloadFile(filePath: string, fileName: string) {
  const pdfUrl = filePath;
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default downloadFile;
