"use client";
import { useState, useEffect } from "react";
import useCookie from "./useCookie"; // Assuming your custom hook location

interface PopupProps {
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = () => {
  const { value, setValue, removeCookie } = useCookie("popupSeen", "false");
  const [isVisible, setIsVisible] = useState(value === "false");

  useEffect(() => {
    if (isVisible) {
      const timeoutId = setTimeout(() => {
        setIsVisible(false);
        setValue("true");
      }, 30 * 60 * 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [isVisible, setValue]);

  /* const handleClose = () => {
    setIsVisible(false);
    removeCookie("popupSeen"); // Remove cookie for immediate hide (optional)
  }; */

  return (
    isVisible && (
      <div className="popup">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio molestias
        architecto consectetur dicta corrupti eos nisi consequuntur suscipit
        nobis facilis facere nemo, recusandae illo sint magni exercitationem
        molestiae officiis esse!
        <button>Close</button>
      </div>
    )
  );
};

export default Popup;
