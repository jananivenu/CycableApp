import jsPDF from 'jspdf'

const addHeader = (doc, title) => {
  doc.setFillColor(32, 182, 158)
  doc.rect(0, 0, doc.internal.pageSize.getWidth(), 60, 'F')
  doc.setFont('helvetica')
  doc.setFontSize(18)
  doc.setTextColor(255, 255, 255)
  doc.text(title, 120, 40)
  doc.setTextColor(0, 0, 0)
}

const addFooter = (doc) => {
  const textColor = '#20B69E'
  const footerHeight = doc.internal.pageSize.getHeight() - 30
  const footerFontSize = 10
  doc.setFontSize(footerFontSize)

  doc.setFont('helvetica', 'bold')
  doc.setTextColor(textColor)
  const cycableWidth =
    doc.getStringUnitWidth('Cycable') *
    footerFontSize *
    doc.internal.scaleFactor
  const cycableX = doc.internal.pageSize.getWidth() - cycableWidth - 50
  doc.text('Cycable', cycableX, footerHeight)

  doc.setFont('helvetica', 'normal')
  const footerText = 'Join the Movement for Safer Cycling'
  const footerTextWidth =
    doc.getStringUnitWidth(footerText) *
    footerFontSize *
    doc.internal.scaleFactor
  const footerTextX = doc.internal.pageSize.getWidth() - footerTextWidth - 50
  doc.text(footerText, footerTextX, footerHeight + 15)

  const pageUrl = 'cycable.propulsion-learn.ch'
  doc.text(pageUrl, 50, footerHeight + 15)
}

export const generatePDF = (report) => {
  const doc = new jsPDF('p', 'pt', 'a4')

  const title = `${
    report.incident_type === 'bicycle_accident'
      ? 'Bicycle accident'
      : report.incident_type === 'bicycle_theft'
        ? 'Bicycle theft'
        : report.incident_type === 'near_miss'
          ? 'Near miss'
          : 'Violation'
  } at ${report.address}`

  addHeader(doc, 'Cycable')

  let currentHeight = 100

  const formattedDate = new Date(report.custom_date).toLocaleString()
  const description = report.description

  doc.setFontSize(22)
  doc.text(title, 50, currentHeight)

  const titleWidth = doc.getStringUnitWidth(title) * doc.internal.getFontSize()
  doc.setDrawColor(32, 182, 158)
  doc.line(50, currentHeight + 2, 50 + titleWidth, currentHeight + 2)
  currentHeight += 40

  doc.setFontSize(14)
  doc.text(formattedDate, 50, currentHeight)
  currentHeight += 30

  doc.setFontSize(16)
  const splitDescription = doc.splitTextToSize(description, 460)
  doc.text(splitDescription, 50, currentHeight)
  currentHeight += splitDescription.length * 20 + 30

  if (report.images && report.images.length > 0 && report.images[0].imageData) {
    const maxImgWidth = 300
    const maxImgHeight = 300
    const imgData = report.images[0].imageData

    console.log('Image Data:', report.images[0].imageData)

    let imgWidth = imgData.width
    let imgHeight = imgData.height
    const aspectRatio = imgWidth / imgHeight

    if (imgWidth > maxImgWidth) {
      imgWidth = maxImgWidth
      imgHeight = imgWidth / aspectRatio
    }
    if (imgHeight > maxImgHeight) {
      imgHeight = maxImgHeight
      imgWidth = imgHeight * aspectRatio
    }

    const xCenter = (doc.internal.pageSize.getWidth() - imgWidth) / 2
    doc.addImage(imgData, 'PNG', xCenter, currentHeight, imgWidth, imgHeight)

    currentHeight += imgHeight + 30
  }

  addFooter(doc)
  doc.save(`Report - ${title}.pdf`)
}
