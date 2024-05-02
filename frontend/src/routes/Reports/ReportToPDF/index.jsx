import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

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
  console.log(report)

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

  const images = report.images
  console.log(images)
  // Counter to keep track of added images
  let imagesAdded = 0

  addFooter(doc)
  doc.save(`Report - ${title}.pdf`)
}
