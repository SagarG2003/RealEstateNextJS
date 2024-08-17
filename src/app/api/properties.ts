import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { getCoordinates } from '@/lib/geocoding';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const properties = await prisma.propertyLocation.findMany({
    select: {
      id: true,
      streetAddress: true,
      city: true,
      state: true,
      zip: true,
    },
  });

  const locations = await Promise.all(
    properties.map(async (property) => {
      const location = `${property.streetAddress}, ${property.city}, ${property.state}, ${property.zip}`;
      const coordinates = await getCoordinates(location);
      return coordinates ? { id: property.id, ...coordinates } : null;
    })
  );

  res.status(200).json(locations.filter((location) => location !== null));
}
