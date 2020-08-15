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

  //const gcsUri = `https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbh3pPT5LZ--CNMCgz0vMJp4_d-yernWmHRA&usqp=CAU`;

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






// Creates a client
//const client = new vision.ImageAnnotatorClient();
// async function imageFromUrl() {

//   /**
//    * TODO(developer): Uncomment the following line before running the sample.
//    */
//   const gcsUri = `https://cloud.google.com/vision/docs/images/bicycle_example.png`;

//   const [result] = await client.objectLocalization(gcsUri);
//   const objects = result.localizedObjectAnnotations;
//   objects.forEach(object => {
//     console.log(`Name: ${object.name}`);
//     console.log(`Confidence: ${object.score}`);
//     const veritices = object.boundingPoly.normalizedVertices;
//     veritices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
//   });
// }

// imageFromUrl();




async function localizeObjectsGCS() {
  // [START vision_localize_objects_gcs]
  // Imports the Google Cloud client libraries

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
   const gcsUri = `https://cloud.google.com/vision/docs/images/bicycle_example.png`;

  const [result] = await client.objectLocalization(gcsUri);
  const objects = result.localizedObjectAnnotations;
  objects.forEach(object => {
    console.log(`Name: ${object.name}`);
    console.log(`Confidence: ${object.score}`);
    const veritices = object.boundingPoly.normalizedVertices;
    veritices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
  });
  // [END vision_localize_objects_gcs]
}
localizeObjectsGCS();