// import React, { useState, useRef } from 'react'
// import EXIF from 'exif-js'
// import { SimpleButton } from '../../styles/elements/buttons'

// const CameraComponent = () => {
//   const [images, setImages] = useState([])
//   const videoRef = useRef()

//   const accessCamera = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true })
//       videoRef.current.srcObject = stream
//     } catch (error) {
//       console.error('Error accessing camera: ', error)
//     }
//   }

//   const captureImage = async () => {
//     const video = videoRef.current

//     if (video) {
//       const canvas = document.createElement('canvas')
//       canvas.width = video.videoWidth
//       canvas.height = video.videoHeight
//       const ctx = canvas.getContext('2d')
//       ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
//       const dataUrl = canvas.toDataURL('image/jpeg')

//       const response = await fetch(dataUrl)
//       const blob = await response.blob()

//       EXIF.getData(blob, async function () {
//         const allMetaData = EXIF.getAllTags(this)
//         let DateTimeOriginal = EXIF.getTag(this, 'DateTimeOriginal')
//         let geoLocation =
//           allMetaData.GPSLatitude && allMetaData.GPSLongitude
//             ? `Latitude: ${allMetaData.GPSLatitude}, Longitude: ${allMetaData.GPSLongitude}`
//             : null

//         if (!geoLocation) {
//           try {
//             const position = await new Promise((resolve, reject) =>
//               navigator.geolocation.getCurrentPosition(resolve, reject),
//             )
//             const latitude = position.coords.latitude
//             const longitude = position.coords.longitude
//             geoLocation = `Latitude: ${latitude}, Longitude: ${longitude}`
//           } catch (error) {
//             console.error('Error obtaining geolocation: ', error)
//             geoLocation = 'Permission denied'
//           }
//         }

//         if (!DateTimeOriginal) {
//           DateTimeOriginal = new Date().toLocaleString()
//         }

//         const reader = new FileReader()
//         reader.onloadend = function () {
//           setImages((prevImages) => [
//             ...prevImages,
//             { src: reader.result, geoLocation, dateTime: DateTimeOriginal },
//           ])
//         }
//         reader.readAsDataURL(blob)
//       })
//     }
//   }

//   return (
//     <div>
//       <SimpleButton onClick={accessCamera}>Access Camera</SimpleButton>
//       <video ref={videoRef} autoPlay />
//       <SimpleButton onClick={captureImage}>Capture Image</SimpleButton>
//       {images.map((image, index) => (
//         <div key={index}>
//           <img src={image.src} alt={`Captured ${index + 1}`} />
//           <p>Geolocation: {image.geoLocation}</p>
//           <p>Date and Time: {image.dateTime}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default CameraComponent
