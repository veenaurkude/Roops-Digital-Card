"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Save,
  Share2,
  ChevronRight,
  Heart,
  Sparkles,
  Palette,
  Camera,
  Gift,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaWhatsapp } from "react-icons/fa6";

const DigitalCard = () => {
  const [activeTab, setActiveTab] = useState("info");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(0);

  // Images from public/images folder (replace with actual image names you have)
  const images = [
    "/images/kid1.jpg",
    "/images/casting2.jpeg",
    "/images/family.jpg",
    "/images/wedding.jpg",
    "/images/casting5.jpeg",
    "/images/casting6.jpeg",
    "/images/makeover.jpg",
  ];

  const galleryImages = [
    { src: "/images/kid1.jpg", title: "Kids Casting" },
    { src: "/images/casting2.jpeg", title: "Baby Hand & Foot Impressions" },
    { src: "/images/family.jpg", title: "Family Hand Casting" },
    { src: "/images/wedding.jpg", title: "Wedding Memories" },
    { src: "/images/casting5.jpeg", title: "Couple Hand Impressions" },
    { src: "/images/casting6.jpeg", title: "Casting Color Options" },
    { src: "/images/makeover.jpg", title: "Bridal Makeup Packages" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    setTimeout(() => setIsLoaded(true), 300);

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      name: "3D Casting",
      description:
        "Premium 3D impressions of hands, feet, and more in gold, silver, copper, and pearl white finishes.",
      icon: <Sparkles className="h-5 w-5" />,
      image: "/images/kid1.jpg",
    },
    {
      name: "Makeup Services",
      description:
        "Professional bridal and special occasion makeup packages starting from ₹5000.",
      icon: <Palette className="h-5 w-5" />,
      image: "/images/makeover.jpg",
    },
    {
      name: "Acrylic Frames",
      description:
        "Custom acrylic frames and displays for your precious memories and castings.",
      icon: <Camera className="h-5 w-5" />,
      image: "/images/casting2.jpeg",
    },
  ];

  const openGallery = (index) => {
    setSelectedGalleryImage(index);
    setShowGallery(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-white to-amber-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md shadow-2xl rounded-xl overflow-hidden border border-amber-300 bg-white"
      >
        {/* Header */}
        <motion.div
          className="bg-gradient-to-r from-amber-400 to-amber-600 p-6 flex items-center justify-between"
          initial={{ height: 120 }}
          animate={{ height: isLoaded ? 180 : 120 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <img
              src="/images/logo1.jpg"
              alt="Roops Logo"
              className="h-16 rounded-full shadow-lg"
            />
            <div>
              <h1 className="text-3xl font-bold text-white drop-shadow-lg">
                ROOPs 3D Impressions
              </h1>
              <p className="text-yellow-200 mt-1 font-semibold italic">
                We bring your moments to life
              </p>
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-white/50 bg-white/20 hover:border-white hover:bg-white/30"
            onClick={() =>
              navigator.share &&
              navigator
                .share({
                  title: "Roops 3D Impressions",
                  text: "Check out Roops 3D Impressions for 3D casting services!",
                  url: window.location.href,
                })
                .catch(() => alert("Sharing is not supported on this browser"))
            }
          >
            <Share2 className="h-5 w-5 text-white" />
          </Button>
        </motion.div>

        {/* Showcase Images */}
        <motion.div
          className="relative h-56 overflow-hidden cursor-pointer"
          onClick={() => openGallery(currentImageIndex)}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={images[currentImageIndex]}
              alt={galleryImages[currentImageIndex]?.title || "Showcase"}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>

          {/* Dots */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {images.map((_, i) => (
              <motion.button
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === currentImageIndex ? "bg-amber-500" : "bg-white/50"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(i);
                }}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <div className="bg-black bg-opacity-90 p-4 flex justify-around text-amber-400">
          {[
            { icon: <FaWhatsapp />, url: "https://wa.me/918600044482" },
            {
              icon: <Instagram />,
              url: "https://instagram.com/Roops3dimpressions_nagpur",
            },
            {
              icon: <Facebook />,
              url: "https://www.facebook.com/profile.php?id=100085348045460",
            },
            {
              icon: <MapPin />,
              url: "https://maps.google.com/?q=Roops+3D+Impressions+Nagpur",
            },
          ].map(({ icon, url }, i) => (
            <Button
              key={i}
              variant="ghost"
              size="icon"
              className="hover:text-amber-300"
              onClick={() => window.open(url, "_blank")}
              aria-label="Social Link"
            >
              {icon}
            </Button>
          ))}
        </div>

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="bg-white"
        >
          <TabsList className="grid grid-cols-4 border-b border-amber-300">
            {["info", "services", "gallery", "contact"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className={`capitalize py-2 font-semibold ${
                  activeTab === tab
                    ? "text-amber-600 border-b-2 border-amber-500"
                    : "text-gray-600"
                }`}
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            <TabsContent
              value="info"
              key="info"
              className="p-6 text-gray-800 text-sm space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p>Hello,</p>
                <p>Thank you for contacting us.</p>
                <p>We bring your moments to life.</p>

                <h4 className="mt-4 font-semibold text-amber-600">
                  Our prices for casting are as followed:
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    Kids (0 to 12 months) - single pair hands or legs: ₹5000/-
                  </li>
                  <li>Both pair: ₹8000/-</li>
                  <li>Couples: ₹9000/-</li>
                  <li>Elderly casting: ₹10000/-</li>
                  <li>
                    Family casting: starting ₹12000/- (depends on number of
                    members)
                  </li>
                </ul>

                <p className="italic text-xs text-gray-600">
                  Above prices are for basic frame. Prices may differ according
                  to pose and framing.
                </p>
                <p className="italic text-xs text-gray-600">
                  Traveling charges: No charges for (0-3 months, patients,
                  grandparents)
                </p>

                <p>Frames need to be picked up.</p>
                <p>Delivery time: 2-3 weeks. If urgent, please specify.</p>

                <p>Drop your number for future details.</p>
                <p>Thank you</p>
              </motion.div>
            </TabsContent>

            <TabsContent
              value="services"
              key="services"
              className="p-6 text-gray-800 space-y-6"
            >
              {services.map(({ name, description, icon, image }, idx) => (
                <motion.div
                  key={name}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.15 }}
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-20 h-20 rounded-lg object-cover shadow-md"
                  />
                  <div>
                    <h4 className="font-semibold text-amber-600 flex items-center gap-1">
                      {icon} {name}
                    </h4>
                    <p className="text-sm">{description}</p>
                    <Button
                      variant="link"
                      size="sm"
                      className="text-amber-500 mt-2 inline-flex items-center gap-1"
                      onClick={() => setActiveTab("gallery")}
                    >
                      View samples <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="mt-6 p-4 bg-gradient-to-r from-amber-100 to-amber-300 rounded-md text-amber-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p>
                  The materials we use for our 3D impressions are hygienic and
                  safe for human skin and health.
                </p>
              </motion.div>
            </TabsContent>

            <TabsContent value="gallery" key="gallery" className="p-6">
              <h3 className="font-semibold text-gray-800 mb-4">Our Gallery</h3>
              <div className="grid grid-cols-2 gap-4">
                {galleryImages.map(({ src, title }, idx) => (
                  <motion.div
                    key={idx}
                    className="rounded-lg overflow-hidden shadow-lg cursor-pointer relative"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 + idx * 0.07 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    onClick={() => openGallery(idx)}
                  >
                    <img
                      src={src}
                      alt={title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-white font-medium text-sm">
                      {title}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Casting Color Options */}
              <div className="mt-6">
                <h4 className="font-semibold text-amber-600 mb-3">
                  Casting Color Options
                </h4>
                <div className="flex gap-4 justify-center">
                  {["Gold", "Silver", "Copper", "Pearl White"].map(
                    (color, idx) => (
                      <motion.div
                        key={color}
                        className="flex flex-col items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <div
                          className={`w-12 h-12 rounded-full border mb-1 ${
                            color === "Gold"
                              ? "bg-amber-400 border-amber-500"
                              : color === "Silver"
                              ? "bg-gray-300 border-gray-400"
                              : color === "Copper"
                              ? "bg-amber-700 border-amber-900"
                              : "bg-gray-100 border-gray-200"
                          }`}
                        />
                        <span className="text-xs font-semibold">{color}</span>
                      </motion.div>
                    )
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent
              value="contact"
              key="contact"
              className="p-6 space-y-6"
            >
              {[
                {
                  icon: <Phone className="h-5 w-5 text-amber-600" />,
                  title: "Phone",
                  content: (
                    <p className="text-sm text-gray-700">
                      <a href="tel:8600044482" className="hover:text-amber-600">
                        8600044482
                      </a>
                      ,{" "}
                      <a href="tel:8600044483" className="hover:text-amber-600">
                        8600044483
                      </a>
                    </p>
                  ),
                },
                {
                  icon: <Instagram className="h-5 w-5 text-amber-600" />,
                  title: "Instagram",
                  content: (
                    <p className="text-sm text-gray-700">
                      <a
                        href="https://instagram.com/Roops3dimpressions_nagpur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-600"
                      >
                        @Roops3dimpressions_nagpur
                      </a>
                    </p>
                  ),
                },
                {
                  icon: <MapPin className="h-5 w-5 text-amber-600" />,
                  title: "Location",
                  content: (
                    <p className="text-sm text-gray-700">
                      <a
                        href="https://maps.google.com/?q=Roops+3D+Impressions+Nagpur"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-600"
                      >
                        Nagpur, Maharashtra
                      </a>
                    </p>
                  ),
                },
              ].map(({ icon, title, content }) => (
                <div key={title} className="flex items-center gap-3">
                  <div className="bg-amber-100 p-2 rounded-full">{icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{title}</h4>
                    {content}
                  </div>
                </div>
              ))}

              {/* Save Contact Button */}
              <Button
                className="w-full bg-amber-500 hover:bg-amber-600 text-white mt-4"
                onClick={() => {
                  const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Roops 3D Impressions
TEL;TYPE=CELL:8600044482
TEL;TYPE=CELL:8600044483
URL:https://instagram.com/Roops3dimpressions_nagpur
END:VCARD`;

                  const blob = new Blob([vcard], { type: "text/vcard" });
                  const url = URL.createObjectURL(blob);
                  const link = document.createElement("a");
                  link.href = url;
                  link.download = "roops_3d_impressions.vcf";
                  link.click();
                }}
              >
                <Save className="h-5 w-5 mr-2" /> Save Contact
              </Button>

              <div className="mt-6 p-4 bg-amber-50 rounded-md border border-amber-300 text-amber-700 flex items-center gap-2">
                <Gift className="w-5 h-5" />
                <p className="text-sm">
                  Mention this digital card when you visit us and get a 5%
                  discount on your first casting order!
                </p>
              </div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>

        {/* Google Pay QR */}
        <div className="p-6 border-t border-amber-300 bg-white text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Pay with Google Pay
          </h3>
          <div className="inline-block border border-amber-300 rounded-lg p-2 w-40 h-40 mx-auto cursor-pointer hover:shadow-lg transition-shadow duration-300">
            {/* <img
              src="/images/googlepay_qr.png"
              alt="Google Pay QR Code"
              className="w-full h-full object-contain"
            /> */}
            <img
              src="/images/qr.png"
              onError={(e) => (e.currentTarget.src = "/images/logo1.jpg")}
              alt="Google Pay QR Code"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="bg-black p-3 text-center text-white text-xs">
          © 2025 Roops 3D Impressions. All rights reserved.
        </div>
      </motion.div>

      {/* Full-screen Gallery */}
      {showGallery && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-6"
        >
          <div className="relative max-w-lg w-full">
            <motion.img
              src={galleryImages[selectedGalleryImage].src}
              alt={galleryImages[selectedGalleryImage].title}
              className="w-full max-h-[75vh] object-contain rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            />

            <button
              onClick={() => setShowGallery(false)}
              className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white rounded-full p-2"
              aria-label="Close Gallery"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <h3 className="text-white font-semibold mt-5">
            {galleryImages[selectedGalleryImage].title}
          </h3>

          <div className="flex gap-3 mt-4">
            {galleryImages.map((_, idx) => (
              <motion.button
                key={idx}
                className={`w-4 h-4 rounded-full ${
                  idx === selectedGalleryImage ? "bg-amber-400" : "bg-white/50"
                }`}
                onClick={() => setSelectedGalleryImage(idx)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.05 }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DigitalCard;
