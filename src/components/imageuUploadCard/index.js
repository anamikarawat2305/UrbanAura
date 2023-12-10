import React, { useState,useEffect } from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage, CloudinaryContext } from '@cloudinary/react';
import MaskGallery from '../maskGallery';
import upload from '../../assets/img/th.jpeg';
import './style.css';

const ImageUploadCard = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [imgUrl, setimgUrl] = useState("");
  const [maskId, setmaskId] = useState("");
  const [maskImage, setmaskImage] = useState("");
  const [showImageUpload, setshowImageUpload] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [Images, setImages] = useState([]);


  function extractMaskUrls(masks) {
    if (Array.isArray(masks)) {
      return masks.map(mask => mask.url);
    } else {
      console.error('Invalid input format. Expected an array of masks.');
      return [];
    }
  }
  const submitImage = async () => {
    setshowImageUpload(false);
    setIsLoading(true);
  
    try {
      // Step 1: Upload the image to Cloudinary
      const data = new FormData();
      data.append("file", selectedImage);
      data.append("upload_preset", "simrandemo");
      data.append("cloud_name", "dtjf77wpj");
  
      const hostedImg = await fetch("https://api.cloudinary.com/v1_1/dtjf77wpj/image/upload", {
        method: "post",
        body: data,
      });
  /// new key - 6560530d9ff051aa5eaa7d0d
      if (hostedImg.ok) {
        const url = await hostedImg.json();
        setimgUrl(url.secure_url);
  
        // Step 2: Create a mask
        const response = await fetch('https://api.reimaginehome.ai/v1/create_mask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': '6510758a22bf247c4a5d0ad0'
          },
          body: JSON.stringify({ image_url: url.secure_url }),
        });
  
        if (response.ok) {
          const data = await response.json();
          setmaskId(data.data.job_id);
  
          let retries = 0;
          const maxRetries = 10;
          let jobDone = false;
          let maskedImageData;
  
          // Step 3: Check if the mask is done
          while (!jobDone && retries < maxRetries) {
            const maskedImageResponse = await fetch(`https://api.reimaginehome.ai/v1/create_mask/${data.data.job_id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'api-key': '6510758a22bf247c4a5d0ad0'
              }
            });
            maskedImageData = await maskedImageResponse.json();
  
            if (maskedImageData.data.job_status === 'done') {
              setmaskImage(maskedImageData.data);
              jobDone = true;
              
              // Step 4: Extract mask URLs
              const maskUrls = extractMaskUrls(maskedImageData.data.masks);
  
              // Step 5: Generate image with masks
              const responsegenerate = await fetch('https://api.reimaginehome.ai/v1/generate_image', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'api-key': '6510758a22bf247c4a5d0ad0'
                },
                body: JSON.stringify({ 
                  image_url: url.secure_url,
                  mask_urls: maskUrls,
                  mask_category: "furnishing",
                  space_type: "ST-INT-003",
                  design_theme: "DT-INT-008",
                  masking_element: "",
                  color_preference: "green,yellow,black",
                  material_preference: "",
                  landscaping_preference: "",
                  generation_count: 3,
                  additional_prompt: "blue color on wall"
                }),
              });
  
              if (responsegenerate.ok) {
                const newdata = await responsegenerate.json();
  
                let newretries = 0;
                const newmaxRetries = 20;
                let newjobDone = false;
  
                // Step 6: Check if image generation is successful
                while (!newjobDone && newretries < newmaxRetries) {
                  const imgGenerate = await fetch(`https://api.reimaginehome.ai/v1/generate_image/${newdata.data.job_id}`, {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                      'api-key': '6510758a22bf247c4a5d0ad0'
                    }
                  });
                  const newimgGenerate = await imgGenerate.json();
  
                  if (newimgGenerate.data.job_status === 'done') {
                    console.log('hh')
                    setImages(newimgGenerate.data.generated_images);
                    newjobDone = true;
                  } else {
                    console.log(newretries)
                    newretries++;
                    await new Promise(resolve => setTimeout(resolve, 7000));
                  }
                }
              }
            } else {
              retries++;
              await new Promise(resolve => setTimeout(resolve, 5000));
            }
          }
  
          if (!jobDone) {
            console.error('Failed to get mask after maximum retries');
          }
        } else {
          console.error('Failed to create mask:', response.statusText);
        }
      } else {
        console.error('Failed to upload image to Cloudinary');
      }
    } catch (error) {
      console.error('Image upload to Cloudinary or API calls failed', error);
    }
  
    setIsLoading(false);
  };
  
console.log(Images)


  return (
    <div className='imageCard'>
      { 
        isLoading 
        ? <h1>Loading...</h1>
        : showImageUpload
          ? (
            <>
              <h1>Try A Sample</h1> 
              <div className="image-upload-card">
                <img src={upload} alt="" />
                <div className="ImgCardContent">
                  <h3>Upload a Photo of Your Space</h3>
                  <p>You can upload images in the form of jpeg, png, and any other format.</p>
                  <div className="custom-file-upload">
                    <input type="file" accept=".jpeg, .jpg, .png" onChange={(e) => setSelectedImage(e.target.files[0])} />
                    <button onClick={submitImage}>Upload</button>
                  </div>
                </div>
              </div>
            </>
          ) 
          : <MaskGallery imageUrls={Images}/>
      }
    </div>
  );
};

export default ImageUploadCard;