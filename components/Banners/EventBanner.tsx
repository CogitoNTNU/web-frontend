import React from "react";

export type EventBannerType =
  | "open-walk-in"
  | "open-registration"
  | "members-only";

interface EventBannerProps {
  type: EventBannerType;
  customText?: string;
  className?: string;
}

const EventBanner: React.FC<EventBannerProps> = ({
  type,
  customText,
  className = "",
}) => {
  const bannerConfigs = {
    "open-walk-in": {
      text: "ÅPENT FOR ALLE! Bare å dukke opp 👋",
      bgColor: "bg-pink-default",
    },
    "open-registration": {
      text: "ÅPENT FOR ALLE! 🌟",
      bgColor: "bg-pink-default",
    },
    "members-only": {
      text: "MEDLEMMER 🔒",
      bgColor: "bg-blue-default",
    },
  };

  const config = bannerConfigs[type];

  return (
    <div
      className={`w-full ${config.bgColor} text-white font-bold text-center py-1 rounded-[10px] mb-4 ${className}`}
    >
      {customText || config.text}
    </div>
  );
};

export default EventBanner;
