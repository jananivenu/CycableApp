import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export const generatePDF = (report) => {
  // Create a new jsPDF instance with A4 paper size
  const doc = new jsPDF('p', 'pt', 'a4') // A4 dimensions
  console.log(report)

  if (report.incident_type === 'bicycle_accident') {
    let currentHeight = 50
    const title = `Bicyle accident at ${report.address} `
    const date = new Date(report.custom_date)
    const formattedDate = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`

    const police =
      'Police was called?' +
      (report.incident_details.police_was_called ? 'Yes' : 'No')
    const involved_parties =
      'Involved parties: ' + report.incident_details.involved_parties
    const description = report.description

    const splitTitle = doc.splitTextToSize(title, 540) // Adjusting the width as per requirement
    doc.text(splitTitle, 50, currentHeight) // Add the split title to the PDF
    currentHeight += splitTitle.length * 20 + 30 // Adjust the height for the next text

    doc.text(formattedDate, 50, currentHeight)
    currentHeight += 30 // Adjust the height for the next text

    const splitDescription = doc.splitTextToSize(description, 540) // Adjusting the width as per requirement
    doc.text(splitDescription, 50, currentHeight) // Add the split description to the PDF
    currentHeight += splitDescription.length * 20 + 30 // Adjust the height for the next text

    doc.text(involved_parties, 50, currentHeight)
    currentHeight += 30

    doc.text(police, 50, currentHeight)
    currentHeight += 30

    html2canvas(document.querySelector('.report-picture'), { scale: 3 }).then(
      (canvas) => {
        const imgData = canvas.toDataURL('image/png')
        doc.addImage(imgData, 'PNG', 15, currentHeight, 200, 200)
        doc.save(`Report: ${title}.pdf`)
      },
    )
  } else if (report.incident_type === 'bicycle_theft') {
    let currentHeight = 50
    const title = `Bicycle theft at ${report.address} `
    const date = new Date(report.custom_date)
    const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
    const police =
      'Police was called?' +
      (report.incident_details.police_was_called ? 'Yes' : 'No')
    const wasBicycleLocked =
      'Was bicycle locked?' + (report.state.was_bicycle_locked ? 'Yes' : 'No')
    const description = report.description

    const splitTitle = doc.splitTextToSize(title, 540)
    doc.text(splitTitle, 50, currentHeight)
    currentHeight += splitTitle.length * 20 + 30

    doc.text(formattedDate, 50, currentHeight)
    currentHeight += 30

    const splitDescription = doc.splitTextToSize(description, 540)
    doc.text(splitDescription, 50, currentHeight)
    currentHeight += splitDescription.length * 20 + 30

    doc.text(police, 50, currentHeight)
    currentHeight += 30
    doc.text(wasBicycleLocked, 50, currentHeight)
    currentHeight += 30

    html2canvas(document.querySelector('.report-picture'), { scale: 3 }).then(
      (canvas) => {
        const imgData = canvas.toDataURL('image/png')
        doc.addImage(imgData, 'PNG', 15, currentHeight, 200, 200)
        doc.save(`Report: ${title}.pdf`)
      },
    )
  } else if (report.incident_type === 'near_miss') {
    // do the logic here
  } else if (report.incident_type === 'violations') {
    // or "violation", not sure
    // do the logic here
  }
}
