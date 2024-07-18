import React from 'react';
import '../components/Testimony.css'; 

const Testimony = () => {
  const testimonies = [
    {
      id: 1,
      name: 'Hannah Linus',
      text: 'is lorem ipsum dolor sit amet consectetur. Augue neque non vitae ullamcorper dis fermentum urna. Turpis blandit id at elit. Consectetur ultrices purus cras commodo volutpat eget sagittis amet. Mattis rutrum et et aenean. Condimentum lectus aenean ut velit sit convallis. Egestas eget elit porta dolor scelerisque arcu eget. Egestas eget elit porta dolor scelerisque arcu eget.Egestas eget elit porta dolor scelerisque arcu. Egestas eget elit porta dolor scelerisque arcu eget.Egestas eget elit porta dolor scelerisque arcu. Massa in eget odio faucibus nibh. Integer in tellus in pellentesque at viverra. Interdum gravida amet.',
      image: '../images/cou3.png', // Fixed image import
    },
    {
      id: 2,
      name: 'Hannah Linus',
      text: 'is lorem ipsum dolor sit amet consectetur. Augue neque non vitae ullamcorper dis fermentum urna. Turpis blandit id at elit. Consectetur ultrices purus cras commodo volutpat eget sagittis amet. Mattis rutrum et et aenean. Condimentum lectus aenean ut velit sit convallis. Egestas eget elit porta dolor scelerisque arcu eget. Egestas eget elit porta dolor scelerisque arcu eget.Egestas eget elit porta dolor scelerisque arcu. Egestas eget elit porta dolor scelerisque arcu eget. Egestas eget elit porta dolor scelerisque arcu eget.Egestas eget elit porta dolor scelerisque arcu. Massa in eget odio faucibus nibh. Integer in tellus in pellentesque at viverra. Interdum gravida amet.',
      image: '../images/cou4.png', // Fixed image import
    },
  ];

  return (
    <div className="testimonies">
      <h2>Testimonies</h2>
      {testimonies.map((testimony, index) => (
        <div key={testimony.id} className={`testimony ${index % 2 === 0 ? 'even' : 'odd'}`}>
          <img src={testimony.image} alt={testimony.name} className="testimony-image" />
          <div className="testimony-content">
            <h3>{testimony.name}</h3>
            <p>{testimony.text}</p>
            <button className="read-more-button">Read More</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimony;
