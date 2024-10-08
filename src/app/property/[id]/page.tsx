import { ImagesSlider } from "@/app/components/ImageSlider";
import PageTitle from "@/app/components/pageTitle";
import prisma from "@/lib/prisma";
import { Card } from "@nextui-org/react";
import { notFound } from "next/navigation";
const images = [1, 2, 3, 4, 5, 6].map((image) => `/images/${image}.jpg`);
interface Props {
  params: {
    id: string;
  };
}

const PropertyPage = async ({ params }: Props) => {
  const property = await prisma.property.findUnique({
    where: {
      id: +params.id,
    },
    include: {
      status: true,
      feature: true,
      location: true,
      contact: true,
      images: true,
    },
  });
  if (!property) return notFound();
  return (
    <div className="mt-1">
      {/* <PageTitle title="Property Page" href="/" linkCaption="Back to Properties" /> */}
      <div className="p-7">
       <div className="w-1/4 h-26 mx-auto border-5 border-[#2e2f80] rounded-lg shadow-lg"><h2 className="text-black text-3xl font-bold text-center py-7">{property.name}</h2></div>
        <div className="flex flex-row">
        <h2 className="text-2xl font-bold text-gray-700 my-7 w-1/2 pl-3">
            INR {property.price} / {property.status.value}
            </h2>
        <h2 className="text-lg font-bold text-slate-600 my-7 w-1/2 text-right pr-3">{property.description}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="col-span-2">
            <ImagesSlider images={images} />
            {/* <p className="text-lg font-bold text-slate-600 mt-7 m">{property.description}</p> */}
          </div>
          <Card className="p-5 flex flex-col gap-1 border-black border-y-large">
            <Title title="Features" />
            <Attribute label="Bedrooms" value={property.feature?.bedrooms} />
            <Attribute label="Bathrooms" value={property.feature?.bathrooms} />
            <Attribute label="Parking Spots" value={property.feature?.parkingSpots} />
            <Attribute label="Area" value={property.feature?.area} />

            <Title title="Address" className="mt-7" />
            <Attribute label="City" value={property.location?.city} />
            <Attribute label="Landmarks" value={property.location?.landmark} />
            <Attribute label="Pin Code" value={property.location?.zip} />
            <Attribute label="Address" value={property.location?.streetAddress} />

            <Title title="Owner Details" className="mt-7" />
            <Attribute label="Owner Name" value={property.contact?.name} />
            <Attribute label="Email" value={property.contact?.email} />
            <Attribute label="Phone" value={property.contact?.phone} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;

const Title = ({ title, className }: { title: string; className?: string }) => (
  <div className={className}>
    <h2 className="text-xl font-bold text-slate-700">{title} </h2>
    <hr className="boreder border-solid border-slate-300" />
  </div>
);

const Attribute = ({ label, value }: { label: string; value?: string | number }) => (
  <div className="flex justify-between">
    <span className="text-sm text-slate-600">{label}</span>
    <span className="text-sm text-slate-600">{value}</span>
  </div>
);
