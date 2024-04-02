import React, { useState, useEffect } from 'react';
// import { Cloudinary } from '@cloudinary/url-gen';
// import { AdvancedImage, CloudinaryContext } from '@cloudinary/react';
// import MaskGallery from '../maskGallery';
import upload from '../../assets/img/th.jpeg';
import './style.css';
import GenerateOutput from '../../pages/generateOutput'; 

const RecommendationCard = () => {
    const [selectedImage, setSelectedImage] = useState("");
    const [imageUploadCard, setImageUploadCard] = useState(true);
    const [imgUrl, setimgUrl] = useState("");
    const [furnitureSuggestions, setfurnitureSuggestions] = useState([])
    const [recommendations, setrecommendations] = useState( "")


    const submitImage = async () => {
        setImageUploadCard(false);
        // setIsLoading(true);
       
        //step 1: Upload to cloudinary
        try {
          const data = new FormData();
          data.append("file", selectedImage);
          data.append("upload_preset", "simrandemo");
          data.append("cloud_name", "dtjf77wpj");
      
          const hostedImg = await fetch("https://api.cloudinary.com/v1_1/dtjf77wpj/image/upload", {
            method: "post",
            body: data,
          });
      
          if (hostedImg.ok) {
            const url = await hostedImg.json();
            setimgUrl(url.secure_url);

            // Step 2: Fetching Recommendations from the model
        const response = await fetch('http://127.0.0.1:5000/generate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({image_path: url.secure_url}),
          });
          if (response.ok) {
            const data = await response.json();
            setrecommendations(data.result)
           
           
           //step 3 Text to Img. 
           //api key exhausted for text 2 img no more request will be entertained.
           //testt
           const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '4afad4a32bmsh0f6f417fc78f2d0p1e6f7fjsnb288da84ee85',
              'X-RapidAPI-Host': 'text-to-image7.p.rapidapi.com',
            }
          };
    
          try {
            for (let i = 0; i < 2; i++) {
              const { furniture_color, furniture_style, furniture_type } = recommendations[i];
              const { reason_for_suggestion } = recommendations[i];
              const prompt = `${furniture_color} ${furniture_style} ${furniture_type}`;
              const reason = `${reason_for_suggestion}`;
              console.log(prompt)
              const response = await fetch(`https://text-to-image7.p.rapidapi.com/?prompt=${encodeURIComponent(prompt)}&batch_size=1`, options);
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              const furniture={
                imgLink:data.data[0],
                title: prompt,
                desc : reason
              }
              setfurnitureSuggestions([...furnitureSuggestions, furniture])
          }
          } catch (error) {
           console.log(error);
          }

          } else {
            console.error('Failed to get recommendations from the model:', response.statusText);
          }
          } else {
            console.error('Failed to upload image to Cloudinary');
          }
        } catch (error) {
          console.error('Image upload to Cloudinary or API calls failed', error);
        }
      
        // setIsLoading(false);
      };

    return (
        <>
        {
          imageUploadCard?  <div className='main'>
          <div className='imageCard'>
              <h1>Try A Sample</h1>
              <div className="image-upload-card">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGSSYkpQfb3kTsL5MV_pW4VAiruZhLPqpLxbaTQL6JUA&s" className='h-[100px] w-[108px]' alt="" />
                  <div className="ImgCardContent">
                      <h3>Upload a Photo of Your Space</h3>
                      <h6>Simply upload a picture, and watch as our AI analyzes it to generate a curated selection of relevant furniture pieces tailored to your style and space. </h6>
                      <p>You can upload images in the form of jpeg, png, and any other format.</p>
                      <br></br>
                      <div className="custom-file-upload">
                          <input onChange={(e) => setSelectedImage(e.target.files[0])} type="file" accept=".jpeg, .jpg, .png" />
                          <button onClick={submitImage}>Upload</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>:
       <GenerateOutput furnitureSuggestions={furnitureSuggestions}/>
        }
        </>
    );
};

export default RecommendationCard;