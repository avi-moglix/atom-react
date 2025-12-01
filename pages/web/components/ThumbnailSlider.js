import React, { useState, useRef } from 'react';


export const thumbnailSlicerJsx = `  
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const zoomFactor = 3;
  const zoomWindowWidth = 150;
  const zoomWindowHeight = 100;

  const images = [
    'assets/img/sameer_sample_images/41xcxO20KCL.jpg',
     'assets/img/sameer_sample_images/61qJvrZUzHL._SL1500_.jpg',
    'assets/img/sameer_sample_images/51n+y+JpejL._SX679_.jpg',
    'assets/img/sameer_sample_images/61ndIWguuEL._SX679_.jpg',
    'assets/img/sameer_sample_images/61P5H-Fs1EL._SX679_.jpg',
   
  ];

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate percentages for background position
    const xPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const yPercent = Math.max(0, Math.min(100, (y / rect.height) * 100));
    
    setMousePosition({
      x: x,
      y: y,
      xPercent,
      yPercent
    });
  };`;
  export const thumbnailSlicerHtml = `
  <div className=" mx-auto p-5 flex flex-wrap gap-5">
      <div>
        <div 
          ref={containerRef}
          className=" h-[400px] w-[400px] mb-5 relative overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={handleMouseMove}
        >
          <img 
            src={images[currentImage]} 
            alt={\u0060Image \u0024{currentImage + 1}\u0060} 
            className="w-full h-full object-cover"
          />
          {isHovering && (
            <div 
              className="absolute bg-black/30 border-2 border-white pointer-events-none"
              style={{
                width: \u0060 \u0024{zoomWindowWidth}px\u0060,
                height: \u0060 \u0024{zoomWindowHeight}px\u0060,
                left: Math.max(0, Math.min(containerRef.current.clientWidth - zoomWindowWidth, mousePosition.x - zoomWindowWidth/2)),
                top: Math.max(0, Math.min(containerRef.current.clientHeight - zoomWindowHeight, mousePosition.y - zoomWindowHeight/2)),
              }}
            />
          )}
        </div>
        <div className="flex gap-2.5 overflow-x-auto pb-2.5 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={\u0060Thumbnail \u0024{index + 1}\u0060}
              className={\u0060w-20 h-20 object-cover cursor-pointer border-2 transition-colors \u0024{
                currentImage === index 
                  ? 'border-blue-500' 
                  : 'border-transparent hover:border-blue-700'
              }\u0060}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
      <div 
        className={\u0060flex-none w-[400px] h-[400px] relative border border-gray-200 overflow-hidden transition-opacity duration-300 \u0024{
          isHovering ? 'opacity-100' : 'opacity-0'
        }\u0060}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: \u0060url(\u0024{images[currentImage]})\u0060,
            backgroundSize: \u0060 \u0024{zoomFactor * 100}%\u0060,
            backgroundPosition: \u0060 \u0024{mousePosition.xPercent}% \u0024{mousePosition.yPercent}%\u0060
          }}
        />
      </div>
    </div>
  `;
const ThumbnailSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const zoomFactor = 3;
  const zoomWindowWidth = 150;
  const zoomWindowHeight = 100;

  const images = [
    '/assets/img/sameer_sample_images/41xcxO20KCL.jpg',
    '/assets/img/sameer_sample_images/61qJvrZUzHL._SL1500_.jpg',
    '/assets/img/sameer_sample_images/51n+y+JpejL._SX679_.jpg',
    '/assets/img/sameer_sample_images/61ndIWguuEL._SX679_.jpg',
    '/assets/img/sameer_sample_images/61P5H-Fs1EL._SX679_.jpg',
  ];

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate percentages for background position
    const xPercent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const yPercent = Math.max(0, Math.min(100, (y / rect.height) * 100));
    
    setMousePosition({
      x: x,
      y: y,
      xPercent,
      yPercent
    });
  };

  return (
    <div className=" mx-auto p-5 flex flex-wrap gap-5">
      <div>
        <div 
          ref={containerRef}
          className=" h-[400px] w-[370px] mb-5 relative overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={handleMouseMove}
        >
          <img 
            src={images[currentImage]} 
            alt={`Image ${currentImage + 1}`} 
            className="w-full h-full object-cover"
          />
          {isHovering && (
            <div 
              className="absolute bg-black/30 border-2 border-white pointer-events-none"
              style={{
                width: `${zoomWindowWidth}px`,
                height: `${zoomWindowHeight}px`,
                left: Math.max(0, Math.min(containerRef.current.clientWidth - zoomWindowWidth, mousePosition.x - zoomWindowWidth/2)),
                top: Math.max(0, Math.min(containerRef.current.clientHeight - zoomWindowHeight, mousePosition.y - zoomWindowHeight/2)),
              }}
            />
          )}
        </div>
        <div className="flex gap-2.5 overflow-x-auto pb-2.5 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`w-20 h-20 object-cover cursor-pointer border-2 transition-colors ${
                currentImage === index 
                  ? 'border-blue-500' 
                  : 'border-transparent hover:border-blue-700'
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
      <div 
        className={`flex-none w-[370px] h-[400px] relative border border-gray-200 dark:border-gray-700 overflow-hidden transition-opacity duration-300 ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${images[currentImage]})`,
            backgroundSize: `${zoomFactor * 100}%`,
            backgroundPosition: `${mousePosition.xPercent}% ${mousePosition.yPercent}%`
          }}
        />
      </div>
    </div>
  );
};

export default ThumbnailSlider;
