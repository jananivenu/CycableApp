import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export const generatePDF = (report) => {
  // Create a new jsPDF instance with dimensions more suitable for a phone screen
  const doc = new jsPDF('p', 'pt', [375, 667]) // iPhone 6/7/8 dimensions in portrait mode
  console.log(report)

  if (report.incident_type === 'bicycle_accident') {
    let currentHeight = 50
    const title = `Bicyle accident at ${report.address} `
   // Parse and format the custom date
   const date = new Date(report.custom_date)
   const formattedDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
    const police =
      'Police was called?' +
      (report.incident_details.police_was_called ? 'Yes' : 'No')
    const involved_parties = "Involved parties: " + report.incident_details.involved_parties
    const description = report.description

    // Split the title into multiple lines
    const splitTitle = doc.splitTextToSize(title, 325) // Adjusting the width as per requirement
    doc.text(splitTitle, 50, currentHeight) // Add the split title to the PDF
    currentHeight += splitTitle.length * 20 + 30 // Adjust the height for the next text

    doc.text(formattedDate, 50, currentHeight)
    currentHeight += 30 // Adjust the height for the next text

    // Split the description into multiple lines
    const splitDescription = doc.splitTextToSize(description, 300) // Adjusting the width as per requirement
    doc.text(splitDescription, 50, currentHeight) // Add the split description to the PDF
    currentHeight += splitDescription.length * 20 + 30 // Adjust the height for the next text

    doc.text(involved_parties, 50, currentHeight)
    currentHeight += 30 


    doc.text(police, 50, currentHeight)
    currentHeight += 30 

    html2canvas(document.querySelector('.report-picture'), { scale: 3 }).then(
      (canvas) => {
        const imgData = canvas.toDataURL('image/png')
        // Adjust the image size here
        doc.addImage(imgData, 'PNG', 15, currentHeight, 200, 200)
        doc.save(`Report: ${title}.pdf`)
      },
    )
  } else if (report.incident_type === 'bicycle_theft') {
    let currentHeight = 50
    const title = `Bicycle theft at ${report.address} `
    const date = new Date(report.custom_date)
    const formattedDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
    const police =
      'Police was called?' +
      (report.incident_details.police_was_called ? 'Yes' : 'No')
    const wasBicycleLocked =
      'Was bicycle locked?' +
      (report.state.was_bicycle_locked ? 'Yes' : 'No')
    const description = report.description

   
    const splitTitle = doc.splitTextToSize(title, 325) 
    doc.text(splitTitle, 50, currentHeight) 
    currentHeight += splitTitle.length * 20 + 30 

    doc.text(formattedDate, 50, currentHeight)
    currentHeight += 30 

    
    const splitDescription = doc.splitTextToSize(description, 300) 
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
