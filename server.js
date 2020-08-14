const vision = require('@google-cloud/vision');
const fs = require('fs');

// quickstart();

// async function quickstart() {
//     // Imports the Google Cloud client library
//     const vision = require('@google-cloud/vision');

//     // Creates a client
//     const client = new vision.ImageAnnotatorClient();

//     // Performs label detection on the image file
//     const [result] = await client.labelDetection('./Image/test3.jpg');
//     const labels = result.labelAnnotations;
//     console.log('Labels:');
//     labels.forEach(label => console.log(label.description));
//   }

const client = new vision.ImageAnnotatorClient();
async function quickstart() {
  // pass image path here
  const gcsUri = `./Image/test3.jpg`;

  const [result] = await client.objectLocalization(gcsUri);
  const objects = result.localizedObjectAnnotations;
  objects.forEach(object => {
    console.log(`Name: ${object.name}`);
    console.log(`Confidence: ${object.score}`);
    const veritices = object.boundingPoly.normalizedVertices;
    veritices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
  });
}

quickstart();