import prisma from "@/lib/prisma";
import Image from "next/image";
import PropertyCard from "./components/PropertyCard";
import PropertyContainer from "./components/PropertyContainer";
import { MapProvider } from "./components/map-provider";
import { MapComponent } from "./components/Map";

const PAGE_SIZE = 8;

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}
export default async function Home({ searchParams }: Props) {
  const pagenum = searchParams.pagenum ?? 0;
  const query = searchParams.query ?? "";
  const propertiesPromise = prisma.property.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      images: {
        select: {
          url: true,
        },
      },
      location: {
        select: {
          city: true,
          state: true,
        },
      },
    },
    ...(!!query && {
      where: {
        name: {
          contains: String(query),
        },
      },
    }),
    skip: +pagenum * PAGE_SIZE,
    take: PAGE_SIZE,
  });
  const totalPropertiesPromise = prisma.property.count({
    ...(!!query && {
      where: {
        name: {
          contains: String(query),
        },
      },
    }),
  });

  const [properties, totalProperties] = await Promise.all([
    propertiesPromise,
    totalPropertiesPromise,
  ]);

  const totalPages = Math.floor(totalProperties / PAGE_SIZE);

  return (
    <div>
      <div className="hover:scale-105 pt-0">
     <Image src="/NextJSBG.jpg" alt="error" height={4000} width={3000}/></div>
      <PropertyContainer totalPages={totalPages} currentPage={+pagenum}>
        {properties.map((propertyItem) => (
          <PropertyCard property={propertyItem} key={propertyItem.id} />
        ))}
      </PropertyContainer>
      <div className="p-5 flex flex-col gap-10 items-center"><h1 className=" text-center m-8 text-4xl italic hover:not-italic font-bold">Sell or Rent your property<br></br> Faster with Us</h1>
      </div>
      <div className="flex items-center">
        <div className="w-1/2 pl-14 object-cover"><Image src="/NEXTIMG.JPG" alt="error" height={800} width={800} className="rounded-md"/></div>
        <div className="w-1/2 p-4 items-center"><h1>Register to post your property</h1></div>
      </div>
      <MapProvider>
        <MapComponent />
      </MapProvider>
    </div>
  );
}
