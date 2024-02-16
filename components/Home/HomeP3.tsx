"use client";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import GoogleMapReact from "google-map-react";
import Footer from "../Footer/Footer";

// Images
import SverreBack from "../../public/HomePage/SverreBack.jpg";

const HomeP3 = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;

  const defaultProps = {
    center: {
      lat: 63.41729,
      lng: 10.40666,
    },
    zoom: 17,
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, react/prop-types
  const Marker = ({ lat, lng }) => {
    return (
      <div className="SuperAwesomePin">
        <FaMapMarkerAlt
          style={{
            color: "red",
            fontSize: "40px",
            bottom: "3vh",
          }}
        />
      </div>
    );
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute w-full h-full bg-gradient-to-b to-transparent from-blue-dark from-0% to-30% z-50"></div>

      <div className="absolute w-full h-full">
        <Image
          priority
          draggable={false}
          loading="eager"
          src={SverreBack}
          alt="Theatre"
          className="absolute w-full h-[85%] object-cover"
        />
        <main className="flex absolute justify-center items-center w-full h-full z-[50]">
          <div className="phone:w-[80%] w-[90%] h-[500px] bg-gray-light opacity-95 rounded-3xl">
            <div className="flex tablet:flex-row flex-col w-full h-full">
              <div className="w-full phone:px-10 px-6 phone:py-8 py-6 text-gray-default">
                <p className="laptop:text-[44px] text-[26px] font-black text-blue-light drop-shadow-md tracking-wide">
                  Kontakt Oss
                </p>
                <p className="laptop:text-[20px] text-[16px] font-semibold phone:py-4 py-2">
                  Har du et spørsmål eller er du en bedrift som ønsker å komme i
                  kontakt med NTNU’s mest engasjerte AI studenter?
                </p>
                <div className="h-[2px] bg-gray-default"></div>

                <div className="tablet:block tablet:pt-0 py-2 flex justify-center gap-2">
                  <div>
                    <p className="laptop:text-[28px] phone:text-[24px] text-[20px] font-bold tablet:pt-2">
                      Epost
                    </p>
                    <a
                      className="laptop:text-[18px] text-[14px]"
                      href="mailto:styret@cogito-ntnu.no"
                    >
                      styret@cogito-ntnu.no
                    </a>
                  </div>
                  <div>
                    <p className="laptop:text-[28px] phone:text-[24px] text-[20px] font-bold tablet:pt-4">
                      Addresse
                    </p>
                    <p className="laptop:text-[18px] phone:text-[14px] text-[12px]">
                      NTNU Gløshaugen, <br /> Gruva Sæm Selands vei 1 <br />
                      7034 Trondheim
                    </p>
                  </div>
                </div>
              </div>
              <div className="laptop:w-[100%] w-full h-full rounded-3xl z-[90]">
                <GoogleMapReact
                  className="z-[90]"
                  bootstrapURLKeys={{
                    key: apiKey,
                  }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                  yesIWantToUseGoogleMapApiInternals
                >
                  <Marker
                    lat={defaultProps.center.lat}
                    lng={defaultProps.center.lng}
                  />
                </GoogleMapReact>
              </div>
            </div>
          </div>
        </main>

        <div className="absolute z-[60] flex items-end justify-center h-full w-full tablet:top-[60px] top-[10px]">
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeP3;
