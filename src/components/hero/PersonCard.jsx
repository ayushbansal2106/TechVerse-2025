import React from "react";
import "./convener.css";

// Reusable person card component
const PersonCard = ({ person, index = 0, animationDelay = 200 }) => {
  return (
    <div 
      className="convener-card"
      style={{
        animationDelay: `${index * animationDelay}ms`
      }}
    >
      {person.image && (
        <img
          className="convener-card-image"
          src={person.image}
          alt={person.alt || person.name}
          onError={(e) => {
            e.target.src = "/images/default-avatar.png";
          }}
        />
      )}
      {person.name && (
        <h1 className="convener-name">{person.name}</h1>
      )}
      {person.position && (
        <h1 className="convener-position">
          {person.position}
          {person.institution && `, ${person.institution}`}
        </h1>
      )}
      {person.department && (
        <h2 className="convener-dep">{person.department}</h2>
      )}
    </div>
  );
};

// Reusable section component
const PersonSection = ({ 
  title, 
  people, 
  logo = "/images/rrr.webp", 
  logoAlt = "Logo",
  animationDelay = 200,
  showDepartment = false 
}) => {
  // Error handling for missing data
  if (!people || people.length === 0) {
    return (
      <div className="parent-convener">
        <div className="convener-title">
          <img src={logo} alt={logoAlt} className="convener-logo" />
          <h1 className="convener-title-name">{title}</h1>
        </div>
        <div className="convener-container">
          <p style={{ textAlign: 'center', color: '#666', fontSize: '18px' }}>
            {title} information is currently unavailable.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="parent-convener">
      <div className="convener-title">
        <img src={logo} alt={logoAlt} className="convener-logo" />
        <h1 className="convener-title-name">{title}</h1>
      </div>

      <div className="convener-container">
        {people.map((person, index) => (
          <PersonCard 
            key={person.id || index} 
            person={person} 
            index={index}
            animationDelay={animationDelay}
          />
        ))}
      </div>
    </div>
  );
};

export { PersonCard, PersonSection };
export default PersonSection; 