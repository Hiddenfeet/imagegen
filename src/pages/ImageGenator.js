// import React, { useState, useEffect } from "react";
// import firebase from "firebase/compat/app";
// import "firebase/compat/database";
// import "firebase/compat/storage";
// import "./ImageGenator.css";

// import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

// import BannerImg from "../assets/banner1.png";
// const firebaseConfig = {
//   apiKey: "AIzaSyC2o7VqIAyI52uje0ep-BAavFom1qBDRyA",
//   authDomain: "sheraai.firebaseapp.com",
//   projectId: "sheraai",
//   storageBucket: "sheraai.appspot.com",
//   messagingSenderId: "72831637303",
//   appId: "1:72831637303:web:3382285096d6c42fda2cb2",
//   measurementId: "G-82L1BZ4J7K",
// };

// firebase.initializeApp(firebaseConfig);

// const database = firebase.database();

// function ImageGenator() {
//   const [inputValue, setInputValue] = useState("");
//   const [imageSrc, setImageSrc] = useState("");
//   const [images, setImages] = useState([]);

//   const address = useAddress();

//   const walletAddress = address;

//   console.log("wallet address is " + walletAddress);
//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleDownload = (url) => {
//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "generated-image.png";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const generateImage = async () => {
//     const temp = inputValue.trim();

//     console.log("input value inside generateImage is " + inputValue);

//     const data = {
//       inputs: "cat is drinking milk",
//     };
//     const value = temp.replace(/\s/g, "");
//     console.log("value without space is " + value);

//     const response = await fetch(
//       "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
//       {
//         headers: {
//           Authorization: "Bearer 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",
//           "Content-Type": "application/json",
//         },
//         method: "POST",
//         body: JSON.stringify(data),
//       }
//     );
//     const blob = await response.blob();
//     const storageRef = firebase.storage().ref();
//     const imageRef = storageRef.child(`${Date.now()}.png`);
//     await imageRef.put(blob);
//     const imageUrl = await imageRef.getDownloadURL();
//     const prompt = inputValue.trim();
//     console.log("prompt input value is " + prompt);
//     database
//       .ref("users/" + walletAddress + "/" + "images")
//       .push({ prompt, imageUrl });
//   };

//   // async function generateImage() {
//   //   const data = {
//   //     inputs: "Astronaut riding a horse",
//   //   };

//   //   const response = await fetch(
//   //     "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
//   //     {
//   //       headers: {
//   //         Authorization: "Bearer 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",
//   //         "Content-Type": "application/json",
//   //       },
//   //       method: "POST",
//   //       body: JSON.stringify(data),
//   //     }
//   //   );

//   //   const result = await response.blob();
//   //   const prompt = inputValue.trim();
//   //   console.log("prompt input value is " + prompt);
//   //   database
//   //     .ref("users/" + walletAddress + "/" + "images")
//   //     .push({ prompt, result });
//   //   console.log("url is ");
//   //   console.log(URL.createObjectURL(result));
//   // }

//   useEffect(() => {
//     console.log("in use effect");
//     const imagesRef = database.ref("users/" + walletAddress + "/" + "images");
//     imagesRef.on("value", (snapshot) => {
//       const imageList = [];
//       snapshot.forEach((childSnapshot) => {
//         const image = childSnapshot.val();
//         imageList.push({ id: childSnapshot.key, ...image });
//       });
//       setImages(imageList);
//     });
//   }, []);

//   const deleteImage = (id) => {
//     database.ref("users/" + walletAddress + "/" + `images/${id}`).remove();
//   };

//   return (
//     <>
//       {!address ? (
//         <ConnectWallet />
//       ) : (
//         <div>
//           <img src={BannerImg} alt="" className="b-img" />
//           <div className="custom-search">
//             <input
//               type="text"
//               value={inputValue}
//               onChange={handleInputChange}
//               className="custom-search-input"
//               placeholder="Enter Animal Name "
//             />
//             <button
//               onClick={generateImage}
//               className="custom-search-botton"
//               type="submit"
//             >
//               Generate Image
//             </button>
//           </div>

//           <div className="card-container">
//             {images.map((image) => (
//               <div key={image.id} className="card">
//                 <img src={image.imageUrl} alt={image.prompt} />
//                 <div className="card-body">
//                   <p>{image.prompt}</p>
//                   <button onClick={() => handleDownload(image.id)}>
//                     Download
//                   </button>
//                   <button onClick={() => deleteImage(image.id)}>Delete</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
// export default ImageGenator;
import React, { useState } from "react";

function ImageGenator() {
  const [image, setImage] = useState(null);

  async function generateImage() {
    const data = {
      inputs: "A beach sunset",
    };

    const response = await fetch(
      "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
      {
        headers: {
          Authorization: "Bearer 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",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );

    const result = await response.blob();
    setImage(URL.createObjectURL(result));
  }

  return (
    <div>
      <button onClick={generateImage}>Generate Image</button>
      {image && <img src={image} alt="Generated Image" />}
    </div>
  );
}

export default ImageGenator;
