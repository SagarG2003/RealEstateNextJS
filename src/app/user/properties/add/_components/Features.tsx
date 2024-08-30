import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { Button, Card, Checkbox, Input, cn } from "@nextui-org/react";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { AddPropertyInputType } from "./AddPropertyForm";

interface Props {
  next: () => void;
  prev: () => void;
  className?: string;
}

const Features = (props: Props) => {
  const {
    register,
    formState: { errors },
    control,
    trigger,
    getValues,
  } = useFormContext<AddPropertyInputType>();

  const handleNext = async () => {
    if (
      await trigger([
        "propertyFeature.area",
        "propertyFeature.bathrooms",
        "propertyFeature.bedrooms",
        "propertyFeature.parkingSpots",
      ])
    ) {
      props.next();
    }
  };

  // Ensure propertyFeature is defined before accessing properties
  const propertyFeature = getValues().propertyFeature || {};

  return (
    <Card className={cn("p-2 grid grid-cols-1 md:grid-cols-2 gap-3", props.className)}>
      <Input
        {...register("propertyFeature.bedrooms")}
        errorMessage={errors.propertyFeature?.bedrooms?.message}
        isInvalid={!!errors.propertyFeature?.bedrooms}
        label="Bedrooms"
        defaultValue={propertyFeature.bedrooms?.toString() || ""}
      />

      <Input
        {...register("propertyFeature.bathrooms")}
        errorMessage={errors.propertyFeature?.bathrooms?.message}
        isInvalid={!!errors.propertyFeature?.bathrooms}
        label="Bathrooms"
        defaultValue={propertyFeature.bathrooms?.toString() || ""}
      />

      <Input
        {...register("propertyFeature.parkingSpots")}
        errorMessage={errors.propertyFeature?.parkingSpots?.message}
        isInvalid={!!errors.propertyFeature?.parkingSpots}
        label="Parking Spots"
        defaultValue={propertyFeature.parkingSpots?.toString() || ""}
      />

      <Input
        {...register("propertyFeature.area")}
        errorMessage={errors.propertyFeature?.area?.message}
        isInvalid={!!errors.propertyFeature?.area}
        label="Area"
        defaultValue={propertyFeature.area?.toString() || ""}
      />

      <div className="flex items-center justify-between">
        <Controller
          control={control}
          name="propertyFeature.hasSwimmingPool"
          render={({ field }) => (
            <Checkbox
              onChange={field.onChange}
              onBlur={field.onBlur}
              checked={!!propertyFeature.hasSwimmingPool}
            >
              Has Swimming Pool
            </Checkbox>
          )}
        />

        <Controller
          control={control}
          name="propertyFeature.hasGardenYard"
          render={({ field }) => (
            <Checkbox
              onChange={field.onChange}
              onBlur={field.onBlur}
              checked={!!propertyFeature.hasGardenYard}
            >
              Has Garden/Yard
            </Checkbox>
          )}
        />

        <Controller
          control={control}
          name="propertyFeature.hasBalcony"
          render={({ field }) => (
            <Checkbox
              onChange={field.onChange}
              onBlur={field.onBlur}
              checked={!!propertyFeature.hasBalcony}
            >
              Has Balcony/Patio
            </Checkbox>
          )}
        />
      </div>
      
      <div className="flex justify-center col-span-2 gap-3">
        <Button
          onClick={props.prev}
          startContent={<ChevronLeftIcon className="w-6" />}
          color="primary"
          className="w-36"
        >
          Previous
        </Button>
        <Button
          onClick={handleNext}
          endContent={<ChevronRightIcon className="w-6" />}
          color="primary"
          className="w-36"
        >
          Next
        </Button>
      </div>
    </Card>
  );
};

export default Features;
