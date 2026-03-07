import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export async function generatePDF(previewElementId = 'quotation-preview') {
  const element = document.getElementById(previewElementId);
  if (!element) {
    alert('Unable to generate PDF: Preview not ready. Please switch to Preview mode and try again.');
    return;
  }

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const scaledWidth = imgWidth * ratio;
    const scaledHeight = imgHeight * ratio;

    if (scaledHeight <= pdfHeight) {
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, scaledHeight);
    } else {
      let yOffset = 0;
      const pageHeightPx = Math.floor(pdfHeight / ratio);
      while (yOffset < imgHeight) {
        const sliceHeight = Math.min(pageHeightPx, imgHeight - yOffset);
        const pageCanvas = document.createElement('canvas');
        pageCanvas.width = imgWidth;
        pageCanvas.height = sliceHeight;
        const ctx = pageCanvas.getContext('2d');
        ctx.drawImage(canvas, 0, yOffset, imgWidth, sliceHeight, 0, 0, imgWidth, sliceHeight);
        const pageImgData = pageCanvas.toDataURL('image/png');
        if (yOffset > 0) pdf.addPage();
        const pageRenderedHeight = sliceHeight * ratio;
        pdf.addImage(pageImgData, 'PNG', 0, 0, pdfWidth, pageRenderedHeight);
        yOffset += sliceHeight;
      }
    }

    pdf.save('quotation.pdf');
  } catch (error) {
    console.error('PDF generation error:', error);
    alert(`Failed to generate PDF: ${error.message || 'Unknown error'}. Please try again.`);
  }
}
