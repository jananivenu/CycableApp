import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import avatarImage from '../../../assets/photos/fakeAvatar.jpg'

export const generatePDF = (report) => {
  // Create a new jsPDF instance with A4 paper size
  const doc = new jsPDF('p', 'pt', 'a4') 
  console.log(report)

  // Set the color for the header background
  doc.setFillColor(32, 182, 158) 

  // Draw the rectangle for the header background
  let rectHeight = 60 
  doc.rect(0, 0, doc.internal.pageSize.getWidth(), rectHeight, 'F') // 'F' means filled rectangle

  // Set the color and size for the header text
  doc.setFont('helvetica')
  doc.setFontSize(18)
  doc.setTextColor(255, 255, 255) 

  // Add the header text
  let headerText = 'Cycable'
  doc.text(headerText, 120, 40) 

  // Reset text color for the rest of the document
  doc.setTextColor(0, 0, 0) // RGB color for black

  // Add the avatar image to your PDF header
  const avatarX = 50 
  const avatarY = 10 
  const avatarWidth = 50 
  const avatarHeight = 50 

  doc.addImage(avatarImage, 'JPEG', avatarX, avatarY, avatarWidth, avatarHeight) // Specify image type as 'JPEG'

 
  console.log(report)

  if (report.incident_type === 'bicycle_accident') {
    let currentHeight = 100
    const title = `Bicyle accident at ${report.address} `
    const date = new Date(report.custom_date)
    const formattedTime = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`
    const formattedDate = `${formattedTime} - ${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`

    const police =
      'Police was called? ' +
      (report.incident_details.police_was_called ? 'Yes' : 'No')
    const involved_parties =
      'Involved parties: ' + report.incident_details.involved_parties
    const description = report.description

    doc.setFontSize(22)

    const splitTitle = doc.splitTextToSize(title, 540) // Adjusting the width as per requirement
    doc.text(splitTitle, 50, currentHeight) // Add the split title to the PDF
    // Calculate the width of the title to set the underline
    const titleWidth =
      doc.getStringUnitWidth(title) * doc.internal.getFontSize()
    // Draw the underline
    doc.setDrawColor(32, 182, 158) // Set the line color to black
    doc.line(50, currentHeight + 2, 50 + titleWidth, currentHeight + 2) // Draw the line with a slight offset below the text

    currentHeight += splitTitle.length * 20 + 30

    doc.setFontSize(14) // Reset font size

    doc.text(formattedDate, 50, currentHeight)
    currentHeight += 40 // Adjust the height for the next text

    doc.setFontSize(16)

    const splitDescription = doc.splitTextToSize(description, 460) // Adjusting the width as per requirement
    doc.text(splitDescription, 50, currentHeight) // Add the split description to the PDF
    currentHeight += splitDescription.length * 20 + 30 // Adjust the height for the next text

    doc.setFontSize(14)

    doc.text(involved_parties, 50, currentHeight)
    currentHeight += 40

    doc.text(police, 50, currentHeight)
    currentHeight += 30

    html2canvas(document.querySelector('.report-picture'), { scale: 3 }).then(
      (canvas) => {
        const imgData = canvas.toDataURL('image/png');
    
        // Maximum dimensions
        const maxImgWidth = 300;
        const maxImgHeight = 300;
    
        // Calculate the aspect ratio of the uploaded image
        let imgWidth = canvas.width;
        let imgHeight = canvas.height;
        const aspectRatio = imgWidth / imgHeight;
    
        // Adjust dimensions to maintain aspect ratio
        if (imgWidth > maxImgWidth) {
          imgWidth = maxImgWidth;
          imgHeight = imgWidth / aspectRatio;
        }
        if (imgHeight > maxImgHeight) {
          imgHeight = maxImgHeight;
          imgWidth = imgHeight * aspectRatio;
        }
    
        // Calculate the center position for the image
        const pageWidth = doc.internal.pageSize.getWidth();
        const xCenter = (pageWidth - imgWidth) / 2; // This will center the image
    
        doc.addImage(
          imgData,
          'PNG',
          xCenter,
          currentHeight,
          imgWidth,
          imgHeight
        );

        // Set the color for the footer text
        const textColor = '#20B69E'

        // Add a footer at the bottom of the page
        const footerHeight = doc.internal.pageSize.getHeight() - 30
        const footerFontSize = 10
        doc.setFontSize(footerFontSize)

        // 'Cycable' in bold on the right
        doc.setFont('helvetica', 'bold')
        doc.setTextColor(textColor)
        const cycableWidth =
          doc.getStringUnitWidth('Cycable') *
          footerFontSize *
          doc.internal.scaleFactor
        const cycableX = doc.internal.pageSize.getWidth() - cycableWidth - 50 // Align to the right
        doc.text('Cycable', cycableX, footerHeight)

        // Slogan in normal font just below 'Cycable'
        doc.setFont('helvetica', 'normal')
        const footerText = 'Join the Movement for Safer Cycling'
        const footerTextWidth =
          doc.getStringUnitWidth(footerText) *
          footerFontSize *
          doc.internal.scaleFactor
        const footerTextX =
          doc.internal.pageSize.getWidth() - footerTextWidth - 50 
        doc.text(footerText, footerTextX, footerHeight + 15)

        const pageUrl = 'cycable.propulsion-learn.ch'
        doc.text(pageUrl, 50, footerHeight + 15)

        doc.save(`Report: ${title}.pdf`)
      },
    )
  } else if (report.incident_type === 'bicycle_theft') {
    let currentHeight = 100; // Adjusted height
    const title = `Bicycle theft at ${report.address} `;
    const date = new Date(report.custom_date);
    const formattedTime = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    const formattedDate = `${formattedTime} - ${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
  
    const police = 'Police was called?' + (report.incident_details.police_was_called ? ' Yes' : ' No');
    const wasBicycleLocked = 'Was bicycle locked?' + (report.incident_details.was_bicycle_locked ? ' Yes' : ' No');
    const description = report.description;
  
    // Header Title
    doc.setFontSize(22);
    const splitTitle = doc.splitTextToSize(title, 540);
    doc.text(splitTitle, 50, currentHeight);
    // Underline
    const titleWidth = doc.getStringUnitWidth(title) * doc.internal.getFontSize();
    doc.setDrawColor(32, 182, 158);
    doc.line(50, currentHeight + 2, 50 + titleWidth, currentHeight + 2);
    currentHeight += splitTitle.length * 20 + 30;
  
    // Date
    doc.setFontSize(14);
    doc.text(formattedDate, 50, currentHeight);
    currentHeight += 30;
  
    // Description
    doc.setFontSize(16);
    const splitDescription = doc.splitTextToSize(description, 460);
    doc.text(splitDescription, 50, currentHeight);
    currentHeight += splitDescription.length * 20 + 30;
  
    // Police Called and Lock Status
    doc.setFontSize(14);
    doc.text(police, 50, currentHeight);
    currentHeight += 30;
    doc.text(wasBicycleLocked, 50, currentHeight);
    currentHeight += 30;
  
    // Image
    html2canvas(document.querySelector('.report-picture'), { scale: 3 }).then(
      (canvas) => {
        const imgData = canvas.toDataURL('image/png');
  
        // Maximum dimensions
        const maxImgWidth = 300;
        const maxImgHeight = 300;
  
        // Calculate the aspect ratio of the uploaded image
        let imgWidth = canvas.width;
        let imgHeight = canvas.height;
        const aspectRatio = imgWidth / imgHeight;
  
        // Adjust dimensions to maintain aspect ratio
        if (imgWidth > maxImgWidth) {
          imgWidth = maxImgWidth;
          imgHeight = imgWidth / aspectRatio;
        }
        if (imgHeight > maxImgHeight) {
          imgHeight = maxImgHeight;
          imgWidth = imgHeight * aspectRatio;
        }
  
        // Calculate the center position for the image
        const pageWidth = doc.internal.pageSize.getWidth();
        const xCenter = (pageWidth - imgWidth) / 2; // This will center the image
  
        doc.addImage(
          imgData,
          'PNG',
          xCenter,
          currentHeight,
          imgWidth,
          imgHeight
        );
  
        // Footer
        const textColor = '#20B69E';
        const footerHeight = doc.internal.pageSize.getHeight() - 30;
        const footerFontSize = 10;
        doc.setFontSize(footerFontSize);
  
        // 'Cycable' in bold on the right
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(textColor);
        const cycableWidth = doc.getStringUnitWidth('Cycable') * footerFontSize * doc.internal.scaleFactor;
        const cycableX = doc.internal.pageSize.getWidth() - cycableWidth - 50; // Align to the right
        doc.text('Cycable', cycableX, footerHeight);
  
        // Slogan in normal font just below 'Cycable'
        doc.setFont('helvetica', 'normal');
        const footerText = 'Join the Movement for Safer Cycling';
        const footerTextWidth = doc.getStringUnitWidth(footerText) * footerFontSize * doc.internal.scaleFactor;
        const footerTextX = doc.internal.pageSize.getWidth() - footerTextWidth - 50;
        doc.text(footerText, footerTextX, footerHeight + 15);
  
        const pageUrl = 'cycable.propulsion-learn.ch';
        doc.text(pageUrl, 50, footerHeight + 15);
  
        doc.save(`Report: ${title}.pdf`);
      }
    );
  }
   else if (report.incident_type === 'near_miss') {
    let currentHeight = 100; // Adjusted height
    const title = `Near miss at ${report.address} `;
    const date = new Date(report.custom_date);
    const formattedTime = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    const formattedDate = `${formattedTime} - ${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
  
    const involved_parties = 'Involved parties: ' + report.incident_details.involved_parties;
    const description = report.description;
  
    // Header Title
    doc.setFontSize(22);
    const splitTitle = doc.splitTextToSize(title, 540);
    doc.text(splitTitle, 50, currentHeight);
    // Underline
    const titleWidth = doc.getStringUnitWidth(title) * doc.internal.getFontSize();
    doc.setDrawColor(32, 182, 158);
    doc.line(50, currentHeight + 2, 50 + titleWidth, currentHeight + 2);
    currentHeight += splitTitle.length * 20 + 30;
  
    // Date
    doc.setFontSize(14);
    doc.text(formattedDate, 50, currentHeight);
    currentHeight += 30;
  
    // Description
    doc.setFontSize(16);
    const splitDescription = doc.splitTextToSize(description, 460);
    doc.text(splitDescription, 50, currentHeight);
    currentHeight += splitDescription.length * 20 + 30;
  
    // Involved parties
    doc.setFontSize(14);
    doc.text(involved_parties, 50, currentHeight);
    currentHeight += 40;
  
    // Image
    html2canvas(document.querySelector('.report-picture'), { scale: 3 }).then(
      (canvas) => {
        const imgData = canvas.toDataURL('image/png');
  
        // Maximum dimensions
        const maxImgWidth = 300;
        const maxImgHeight = 300;
  
        // Calculate the aspect ratio of the uploaded image
        let imgWidth = canvas.width;
        let imgHeight = canvas.height;
        const aspectRatio = imgWidth / imgHeight;
  
        // Adjust dimensions to maintain aspect ratio
        if (imgWidth > maxImgWidth) {
          imgWidth = maxImgWidth;
          imgHeight = imgWidth / aspectRatio;
        }
        if (imgHeight > maxImgHeight) {
          imgHeight = maxImgHeight;
          imgWidth = imgHeight * aspectRatio;
        }
  
        // Calculate the center position for the image
        const pageWidth = doc.internal.pageSize.getWidth();
        const xCenter = (pageWidth - imgWidth) / 2; // This will center the image
  
        doc.addImage(
          imgData,
          'PNG',
          xCenter,
          currentHeight,
          imgWidth,
          imgHeight
        );
  
        // Footer
        const textColor = '#20B69E';
        const footerHeight = doc.internal.pageSize.getHeight() - 30;
        const footerFontSize = 10;
        doc.setFontSize(footerFontSize);
  
        // 'Cycable' in bold on the right
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(textColor);
        const cycableWidth = doc.getStringUnitWidth('Cycable') * footerFontSize * doc.internal.scaleFactor;
        const cycableX = doc.internal.pageSize.getWidth() - cycableWidth - 50; // Align to the right
        doc.text('Cycable', cycableX, footerHeight);
  
        // Slogan in normal font just below 'Cycable'
        doc.setFont('helvetica', 'normal');
        const footerText = 'Join the Movement for Safer Cycling';
        const footerTextWidth = doc.getStringUnitWidth(footerText) * footerFontSize * doc.internal.scaleFactor;
        const footerTextX = doc.internal.pageSize.getWidth() - footerTextWidth - 50;
        doc.text(footerText, footerTextX, footerHeight + 15);
  
        const pageUrl = 'cycable.propulsion-learn.ch';
        doc.text(pageUrl, 50, footerHeight + 15);
  
        doc.save(`Report: ${title}.pdf`);
      }
    );
  }
  
  else if (report.incident_type === 'violations') {
    let currentHeight = 100; // Adjusted height
    const title = `Violation at ${report.address} `;
    const date = new Date(report.custom_date);
    const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    const description = report.description;
  
    // Header Title
    doc.setFontSize(22);
    const splitTitle = doc.splitTextToSize(title, 540);
    doc.text(splitTitle, 50, currentHeight);
    // Underline
    const titleWidth = doc.getStringUnitWidth(title) * doc.internal.getFontSize();
    doc.setDrawColor(32, 182, 158);
    doc.line(50, currentHeight + 2, 50 + titleWidth, currentHeight + 2);
    currentHeight += splitTitle.length * 20 + 30;
  
    // Date
    doc.setFontSize(14);
    doc.text(formattedDate, 50, currentHeight);
    currentHeight += 30;
  
    // Description
    doc.setFontSize(16);
    const splitDescription = doc.splitTextToSize(description, 540);
    doc.text(splitDescription, 50, currentHeight);
    currentHeight += splitDescription.length * 20 + 30;
  
    // Image
    html2canvas(document.querySelector('.report-picture'), { scale: 3 }).then(
      (canvas) => {
        const imgData = canvas.toDataURL('image/png');
    
        // Maximum dimensions
        const maxImgWidth = 300;
        const maxImgHeight = 300;
    
        // Calculate the aspect ratio of the uploaded image
        let imgWidth = canvas.width;
        let imgHeight = canvas.height;
        const aspectRatio = imgWidth / imgHeight;
    
        // Adjust dimensions to maintain aspect ratio
        if (imgWidth > maxImgWidth) {
          imgWidth = maxImgWidth;
          imgHeight = imgWidth / aspectRatio;
        }
        if (imgHeight > maxImgHeight) {
          imgHeight = maxImgHeight;
          imgWidth = imgHeight * aspectRatio;
        }
    
        // Calculate the center position for the image
        const pageWidth = doc.internal.pageSize.getWidth();
        const xCenter = (pageWidth - imgWidth) / 2; // This will center the image
    
        doc.addImage(
          imgData,
          'PNG',
          xCenter,
          currentHeight,
          imgWidth,
          imgHeight
        );
  
        // Footer
        const textColor = '#20B69E';
        const footerHeight = doc.internal.pageSize.getHeight() - 30;
        const footerFontSize = 10;
        doc.setFontSize(footerFontSize);
  
        // 'Cycable' in bold on the right
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(textColor);
        const cycableWidth = doc.getStringUnitWidth('Cycable') * footerFontSize * doc.internal.scaleFactor;
        const cycableX = doc.internal.pageSize.getWidth() - cycableWidth - 50; // Align to the right
        doc.text('Cycable', cycableX, footerHeight);
  
        // Slogan in normal font just below 'Cycable'
        doc.setFont('helvetica', 'normal');
        const footerText = 'Join the Movement for Safer Cycling';
        const footerTextWidth = doc.getStringUnitWidth(footerText) * footerFontSize * doc.internal.scaleFactor;
        const footerTextX = doc.internal.pageSize.getWidth() - footerTextWidth - 50;
        doc.text(footerText, footerTextX, footerHeight + 15);
  
        const pageUrl = 'cycable.propulsion-learn.ch';
        doc.text(pageUrl, 50, footerHeight + 15);
  
        doc.save(`Report: ${title}.pdf`);
      }
    );
  }
  
  
}
