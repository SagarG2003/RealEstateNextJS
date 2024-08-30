import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { Button, Card, Input, Select, SelectItem, Textarea, cn } from "@nextui-org/react";
import { PropertyStatus, PropertyType } from "@prisma/client";
import React from "react";
import { useFormContext } from "react-hook-form";
import { AddPropertyInputType } from "./AddPropertyForm";

interface Props {
  className?: string;
  types: PropertyType[];
  statuses: PropertyStatus[];
  next: () => void;
}

const Basic = (props: Props) => {
  const {
    register,
    formState: { errors },
    trigger,
    getValues,
  } = useFormContext<AddPropertyInputType>();

  const handleNext = async () => {
    if (await trigger(["name", "description", "typeId", "statusId", "price"])) props.next();
  };

  // Get values with default fallback
  const typeId = getValues().typeId?.toString() || "";
  const statusId = getValues().statusId?.toString() || "";
  const price = getValues().price?.toString() || "";

  return (
    <Card className={cn("p-2 gap-3 grid grid-cols-1 md:grid-cols-3", props.className)}>
      <Input
        {...register("name")}
        errorMessage={errors.name?.message}
        isInvalid={!!errors.name}
        label="Name"
        className="md:col-span-3"
        name="name"
        defaultValue={getValues().name}
      />
      <Textarea
        {...register("description")}
        errorMessage={errors.description?.message}
        isInvalid={!!errors.description}
        label="Description"
        className="md:col-span-3"
        name="description"
        defaultValue={getValues().description}
      />
      <Select
        {...register("typeId", { setValueAs: (v: any) => v.toString() })}
        errorMessage={errors.typeId?.message}
        isInvalid={!!errors.typeId}
        label="Type"
        selectionMode="single"
        name="typeId"
        defaultSelectedKeys={[typeId]}
      >
        {props.types.map((item) => (
          <SelectItem key={item.id} value={item.id}>
            {item.value}
          </SelectItem>
        ))}
      </Select>
      <Select
        {...register("statusId", { setValueAs: (v: any) => v.toString() })}
        errorMessage={errors.statusId?.message}
        isInvalid={!!errors.statusId}
        label="Status"
        selectionMode="single"
        name="statusId"
        defaultSelectedKeys={[statusId]}
      >
        {props.statuses.map((item) => (
          <SelectItem key={item.id} value={item.id}>
            {item.value}
          </SelectItem>
        ))}
      </Select>
      <Input
        {...register("price", { setValueAs: (v: any) => v.toString() })}
        errorMessage={errors.price?.message}
        isInvalid={!!errors.price}
        label="Price"
        name="price"
        defaultValue={price}
      />
      <div className="flex justify-center col-span-3 gap-3">
        <Button
          isDisabled
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

export default Basic;
