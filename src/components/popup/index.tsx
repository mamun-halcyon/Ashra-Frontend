"use client";
import { useState, useEffect } from "react";
import "./index.scss";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { API_ROOT } from "@/constant";

interface PopupProps {
  popup_url: string;
}

const Popup: React.FC<PopupProps> = ({ popup_url }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    setCookieWithExpiration("popupSeen", "true", 30);
  };

  useEffect(() => {
    const popupSeenCookie = document.cookie
      .split(";")
      .find((cookie) => cookie.trim().startsWith("popupSeen="));
    if (!popupSeenCookie) {
      setIsVisible(true); // Show popup if cookie is not set
    }
  }, []);

  const setCookieWithExpiration = (
    cname: string,
    cvalue: string,
    exminutes: number
  ) => {
    const d = new Date();
    d.setTime(d.getTime() + exminutes * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };

  return (
    isVisible && (
      <div className="popup">
        <div className="popup-content">
          <button onClick={handleClose} className="close-button">
            <RxCross1 />
          </button>
          <Image
            src={`${API_ROOT}/images/setting/${popup_url}`}
            alt="popup"
            width={600}
            height={600}
          />
        </div>
      </div>
    )
  );
};

export default Popup;
