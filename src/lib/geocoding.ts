import fetch from 'node-fetch';

export async function getCoordinates(location: string): Promise<{ lat: number; lng: number } | null> {
  const apiKey = process.env.GOOGLE_MAPS_KEY;
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${apiKey}`
  );

  const data = await response.json() as any;

  if (data.status === 'OK') {
    const coordinates = data.results[0].geometry.location;
    return { lat: coordinates.lat, lng: coordinates.lng };
  } else {
    console.error('Geocoding failed:', data.status);
    return null;
  }
}
