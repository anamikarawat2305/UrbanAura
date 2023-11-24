import React, { useEffect, useState } from 'react';

function MaskGallery({ imageUrls }) {
  const [imageDataArray, setImageDataArray] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const promises = imageUrls.map(async (imageUrl) => {
        try {
          const response = await fetch(imageUrl);
          if (response.ok) {
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            return blobUrl;
          } else {
            console.error('Failed to fetch image:', imageUrl);
            return null;
          }
        } catch (error) {
          console.error('Error fetching image:', imageUrl, error);
          return null;
        }
      });

      const blobUrls = await Promise.all(promises);
      setImageDataArray(blobUrls.filter((url) => url !== null));
    };

    fetchImages();

    // Cleanup Blob URLs when the component unmounts
    return () => {
      imageDataArray.forEach((blobUrl) => URL.revokeObjectURL(blobUrl));
    };
  }, [imageUrls]);

  return (
    <div>
         <h1>Generated Images</h1> 
    <div className='my-4 flex justify-center items-center space-x-2'>
      {imageDataArray.map((blobUrl, index) => (
        <img width={"30%"} key={index} src={blobUrl} alt={`Image ${index}`} />
      ))}
    </div>
    </div>
  );
}

export default MaskGallery;

