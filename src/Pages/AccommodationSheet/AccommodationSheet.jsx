import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AccommodationSheet.css";
import Collapse from "../../components/Collapse/Collapse";
import Slideshow from "../../components/Slideshow/Slideshow";
import { useParams } from "react-router-dom";
import Rating from "../../components/Rating/Rating";

export default function AccommodationSheet() {
  const param = useParams();
  console.log(param);
  const [location, setLocation] = useState(null);

  // const history = useHistory();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/properties/" + param.id
        );
        if (response.status === 200) {
          const data = await response.json();
          console.log(data);
          setLocation(data);
        } else {
          navigate("/NotFound");
        }
        // if (data == null) {
        //   history.push("/NotFound");
        // }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [param, navigate]);
  console.log(location);

  if (!location) {
    return <p>chargement en cours</p>;
  }
  return (
    <>
      <div className="accommodationSheetContainer">
        <Slideshow pictures={location.pictures} />
        <div className="infos">
          <div>
            <div className="locationTitle">
              {location.title}
              <p className="locationLocation">{location.location}</p>
            </div>
            <div className="locationTags">
              {location.tags.map((tag, locationTag) => (
                <p className="locationTag" key={locationTag}>
                  {tag}
                </p>
              ))}
            </div>
          </div>
          <div className="pictureAndRating">
            <div className="HostAndPicture">
              <div className="locationHostName">{location.host.name}</div>
              <div className="hostPictureBox">
                <img
                  className="hostPicture"
                  src={location.host.picture}
                  alt={`Portrait du propriétaire`}
                />
              </div>
            </div>
            <Rating rating={location.rating} />
          </div>
        </div>
        <div>
          <div className="locationCollapses">
            <Collapse title="Description" subtitle={location.description} />
            <Collapse
              title="Equipements"
              subtitle={location.equipments.map(
                (equipment, locationEquipment) => (
                  <p className="locationEquipments" key={locationEquipment}>
                    {equipment}
                  </p>
                )
              )}
            />
          </div>
        </div>
      </div>
    </>
  );
}
