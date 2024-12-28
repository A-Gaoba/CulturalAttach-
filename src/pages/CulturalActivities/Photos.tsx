import { useState } from 'react';

const ImageGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null);

  const images = [
    "https://plus.unsplash.com/premium_photo-1674156433236-2338418ec4d9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1674156886972-14c9a172bc50?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1642425149556-b6f90e946859?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1656416584402-b720e0d786dc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1697729504520-e747e4ce1b6e?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1642425149819-af1b803b2b25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(null);
  };

  const nextImage = () => {
    if (currentImageIndex !== null && currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex !== null && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchStart = e.touches[0].clientX;

    const handleSwipe = (e: TouchEvent) => { // Use native TouchEvent here
      const touchEnd = e.touches[0].clientX;
      if (touchStart - touchEnd > 50) nextImage(); // Swipe left
      if (touchEnd - touchStart > 50) prevImage(); // Swipe right
      e.stopPropagation();
      e.preventDefault();
    };

    // Use native addEventListener and cast to TouchEvent type
    document.addEventListener('touchmove', handleSwipe as EventListener, { passive: false });
    document.addEventListener('touchend', () => {
      document.removeEventListener('touchmove', handleSwipe as EventListener);
    });
  };

  return (
    <div className="mb-4">
      <div>
        <h3 className="text-lg font-semibold">الصور</h3>
        <p>معرض أنشطة الملحق الثقافي.</p>
      </div>
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
        <div className="-m-1 flex flex-wrap md:-m-2">
          {images.map((src, index) => (
            <div key={index} className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                  src={src}
                  onClick={() => openModal(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && currentImageIndex !== null && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
          <div
            className="relative max-w-4xl max-h-[80%] overflow-hidden bg-slate-600 rounded-lg p-4"
            onTouchStart={handleTouchStart}
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={closeModal}
            >
              X
            </button>
            <div className="flex justify-between items-center">
              <button
                className="text-white text-3xl"
                onClick={prevImage}
                disabled={currentImageIndex === 0}
              >
                &#10094;
              </button>
              <img
                src={images[currentImageIndex]}
                alt="Selected"
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <button
                className="text-white text-3xl"
                onClick={nextImage}
                disabled={currentImageIndex === images.length - 1}
              >
                &#10095;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
