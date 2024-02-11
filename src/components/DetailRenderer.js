
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faAndroid } from '@fortawesome/free-brands-svg-icons';

const DetailRenderer = ({ array, type }) => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const fetchTitle = async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        return data.name || data.title;
      } catch (error) {
        console.error("Failed to fetch item details:", error);
        return "Failed to load";
      }
    };


    const fetchTitles = async () => {
        if (Array.isArray(array)) {
          const fetchedTitles = await Promise.all(array.map(async (item) => await fetchTitle(item)));
          setTitles(fetchedTitles);
        } else {
          console.error('Array is not initialized properly');
        }
      };
      

    fetchTitles();
  }, [array]);

  const renderIcon = (title) => {
    if (type === "species") {
      return title === "Droid" ? <FontAwesomeIcon icon={faAndroid} /> : <FontAwesomeIcon icon={faUser} />;
    }
    return null;
  };

  return (
    // <ul style={{ listStyleType: "none", padding: 0 }}>
    //   {titles.length > 0 ? (
    //     titles.map((title, index) => (
    //       <li key={index}>
    //         {renderIcon(title)} {title}
    //       </li>
    //     ))
    //   ) : (
    //     <FontAwesomeIcon icon={faQuestionCircle} />
    //   )}
    // </ul>
   
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {titles.length > 0 ? (
          titles.map((title, index) => (
            <li key={index}>
              {renderIcon(title)} {title}
            </li>
          ))
        ) : (
          type === "species" ? (
            <FontAwesomeIcon icon={faQuestionCircle} />
          ) : (
            "N/A"
          ))
        }
      </ul>
    
  );
};

export default DetailRenderer;
