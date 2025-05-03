import React, { useState, useEffect } from 'react';

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://findmydocmain-production.up.railway.app/api/doctors?populate=*&pagination[pageSize]=100')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        setDoctors(data.data || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const strapiBaseUrl = "https://findmydocmain-production.up.railway.app";

  return (
    <div>
      {doctors.map(doctor => {
        const imageUrl = doctor.image?.url
          ? strapiBaseUrl + doctor.image.url
          : null;

        return (
          <div key={doctor.id} style={styles.card}>
            {imageUrl && <img src={imageUrl} alt={doctor.title} style={styles.image} />}
            <h2>{doctor.title}</h2>
            <p>Rating: {doctor.rating}</p>
          </div>
        );
      })}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    padding: '16px',
    marginBottom: '16px',
    borderRadius: '4px',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    marginBottom: '8px',
  },
};

export default DoctorsList;
