import React from "react";

export default function BackgroundImage(props) {
  const bg_images = {
    "wall-1": "./images/wallpapers/Focal-Fossa_WP_1920x1080.webp",
    "wall-2": "./images/wallpapers/Focal-Fossa_WP_1920x1080_GREY.webp",
    "wall-3": "./images/wallpapers/Focal-Fossa_Plain_WP_1920x1080.webp",
    "wall-4": "./images/wallpapers/Focal-Fossa_Plain_WP_1920x1080_GREY.webp",
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bg_images[props.img]})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
      }}
      className="bg-ubuntu-img absolute -z-10 top-0 right-0 overflow-hidden h-full w-full"
    ></div>
  );
}
