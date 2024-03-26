"use client";

import React, { MouseEvent, useState } from "react";
import Label from "@/components/Label/Label";
import Avatar from "@/shared/Avatar/Avatar";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Input from "@/shared/Input/Input";
import Textarea from "@/shared/Textarea/Textarea";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { BusinessOperatingHours, BusinessProfile } from "@/API";
import { toast } from "react-toastify";
import Select from "@/shared/Select/Select";
import { useMutation } from "react-query";
import { GraphQLResult, generateClient } from "aws-amplify/api";
import { updateBusinessProfile as updateBusinessProfileMutation } from "@/graphql/mutations";

const client = generateClient();

interface HomePageClientComponentProps {
  businessDetails: BusinessProfile | undefined;
}

export default function HomePageClientComponent({
  businessDetails,
}: HomePageClientComponentProps) {
  const mutation = useMutation(
    async () => {
      if (!businessDetails?.id) {
        throw new Error("Error fetching business");
      }

      await client.graphql({
        query: updateBusinessProfileMutation,
        variables: {
          input: {
            id: businessDetails.id,
            address: businessAddress,
            businessState,
            contactInfo: {
              email: businessEmail,
              phoneNumber: businessPhoneNumber,
            },
            description,
            licenceNumber,
            name: businessName,
            operatingHours,
            tags: businessTags,
            website: businessWebsite,
          },
        },
      });
    },
    {
      onError: (err: Error) => {
        toast(err.message, {
          autoClose: 3000,
          type: "error",
          position: "bottom-right",
        });
      },
      onSuccess: (data) => {
        toast("Successfully updated business profile!", {
          autoClose: 5000,
          type: "success",
          position: "bottom-right",
        });
      },
    }
  );

  const [businessState, setBusinessState] = useState(
    businessDetails?.businessState ? businessDetails.businessState : ""
  );

  const [licenceNumber, setLicenceNumber] = useState(
    businessDetails?.licenceNumber ? businessDetails.licenceNumber : ""
  );

  const [businessName, setBusinessName] = useState(
    businessDetails?.name ? businessDetails.name : ""
  );

  const [businessAddress, setBusinessAddress] = useState(
    businessDetails?.address ? businessDetails.address : ""
  );

  const [description, setDescription] = useState(
    businessDetails?.description ? businessDetails.description : ""
  );

  const [businessWebsite, setBusinessWebsite] = useState(
    businessDetails?.website ? businessDetails.website : ""
  );

  const [businessEmail, setBusinessEmail] = useState(
    businessDetails?.contactInfo?.email ? businessDetails.contactInfo.email : ""
  );

  const [businessPhoneNumber, setBusinessPhoneNumber] = useState(
    businessDetails?.contactInfo?.phoneNumber
      ? businessDetails.contactInfo.phoneNumber
      : ""
  );

  const [operatingHours, setOperatingHours] = useState<
    BusinessOperatingHours[]
  >(businessDetails?.operatingHours ? businessDetails.operatingHours : []);

  const [businessTags, setBusinessTags] = useState<string[]>(
    businessDetails?.tags ? businessDetails.tags : []
  );

  const [currentTag, setCurrentTag] = useState<string>();

  const [currentOperatingHoursDayOfWeek, setCurrentOperatingHoursDayOfWeek] =
    useState<string>();
  const [
    currentOperatingHoursOpeningTime,
    setCurrentOperatingHoursOpeningTime,
  ] = useState<string>();
  const [
    currentOperatingHoursClosingTime,
    setCurrentOperatingHoursClosingTime,
  ] = useState<string>();

  const handleTagAdd = () => {
    if (!currentTag) {
      toast("Tag is required for adding a tag", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    for (const tag of businessTags) {
      if (tag.toLowerCase() === currentTag.toLowerCase()) {
        toast("Cannot have duplicate tags", {
          autoClose: 3000,
          type: "error",
          position: "bottom-right",
        });

        return;
      }
    }

    setBusinessTags((currentArray: any) => [...currentArray, currentTag]);
    setCurrentTag("");
  };

  const handleTagUpdate = (inputTag: string) => {
    for (const tag of businessTags) {
      if (tag === inputTag) {
        const newTags = businessTags.filter((tag) => tag !== inputTag);

        setBusinessTags(newTags);
        setCurrentTag(inputTag);

        return;
      }
    }

    return;
  };

  const handleTagDelete = (inputTag: string) => {
    for (const tag of businessTags) {
      if (tag === inputTag) {
        const newTags = businessTags.filter((tag) => tag !== inputTag);

        setBusinessTags(newTags);

        return;
      }
    }

    return;
  };

  function TagList() {
    // State to track which tag is currently being hovered
    const [hoveredTag, setHoveredTag] = useState<number | null>(null);

    return (
      <div className="flex flex-wrap">
        {businessTags.map((tag, index) => (
          <div
            key={index}
            className="relative p-2 m-1 bg-blue-200 rounded-lg"
            onMouseEnter={() => setHoveredTag(index)}
            onMouseLeave={() => setHoveredTag(null)}
          >
            {tag}
            {hoveredTag === index && (
              <div className="absolute top-0 right-0 p-1 space-x-1 bg-white rounded-lg">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => handleTagUpdate(tag)}
                >
                  Update
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleTagDelete(tag)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  const handleOperatingTimeAdd = () => {
    if (!currentOperatingHoursDayOfWeek) {
      toast("Day of week is required", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    if (!currentOperatingHoursOpeningTime) {
      toast("Opening time is required", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    if (!currentOperatingHoursClosingTime) {
      toast("Closing time is required", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    function isTimeBefore(time1: string, time2: string) {
      const date1 = new Date(`1970-01-01T${time1}`);
      const date2 = new Date(`1970-01-01T${time2}`);

      // Compare the date objects
      return date1 < date2;
    }

    if (
      isTimeBefore(
        currentOperatingHoursClosingTime,
        currentOperatingHoursOpeningTime
      )
    ) {
      toast("Opening time must be before closing time", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    for (const { dayOfWeek } of operatingHours) {
      if (
        dayOfWeek.toLowerCase() === currentOperatingHoursDayOfWeek.toLowerCase()
      ) {
        toast("Cannot have duplicate days of week", {
          autoClose: 3000,
          type: "error",
          position: "bottom-right",
        });

        return;
      }
    }

    const newOperatingTime = {
      closes: currentOperatingHoursClosingTime,
      dayOfWeek: currentOperatingHoursDayOfWeek,
      opens: currentOperatingHoursOpeningTime,
    };

    setOperatingHours((currentArray: any) => [
      ...currentArray,
      newOperatingTime,
    ]);
    setCurrentOperatingHoursClosingTime("");
    setCurrentOperatingHoursOpeningTime("");
    setCurrentOperatingHoursDayOfWeek("");
  };

  const handleOperatingTimeUpdate = (dayOfWeekInput: string) => {
    for (const { closes, dayOfWeek, opens } of operatingHours) {
      if (dayOfWeek === dayOfWeekInput) {
        const newOperatingHours = operatingHours.filter(
          (data) => data.dayOfWeek !== dayOfWeekInput
        );

        setOperatingHours(newOperatingHours);

        setCurrentOperatingHoursClosingTime(closes);
        setCurrentOperatingHoursDayOfWeek(dayOfWeek);
        setCurrentOperatingHoursOpeningTime(opens);

        return;
      }
    }

    return;
  };

  const handleOperatingTimeDelete = (dayOfWeekInput: string) => {
    for (const { closes, dayOfWeek, opens } of operatingHours) {
      if (dayOfWeek === dayOfWeekInput) {
        const newOperatingHours = operatingHours.filter(
          (data) => data.dayOfWeek !== dayOfWeekInput
        );

        setOperatingHours(newOperatingHours);

        setCurrentOperatingHoursClosingTime("");
        setCurrentOperatingHoursDayOfWeek("");
        setCurrentOperatingHoursOpeningTime("");

        return;
      }
    }

    return;
  };

  function OperatingHoursList() {
    // State to track which operating hour is currently being hovered
    const [hoveredHour, setHoveredHour] = useState<number | null>(null);

    return (
      <div>
        {operatingHours.map((hour, index) => (
          <div
            key={index}
            className="relative p-2 m-1 bg-blue-200 rounded-lg"
            onMouseEnter={() => setHoveredHour(index)}
            onMouseLeave={() => setHoveredHour(null)}
          >
            <div>
              <strong>{hour.dayOfWeek}:</strong> {hour.opens} - {hour.closes}
            </div>
            {hoveredHour === index && (
              <div className="absolute top-0 right-0 p-1 space-x-1 bg-white rounded-lg">
                <button
                  className="text-blue-500 hover:text-blue-700"
                  onClick={() => handleOperatingTimeUpdate(hour.dayOfWeek)}
                >
                  Update
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleOperatingTimeDelete(hour.dayOfWeek)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  function handleSubmit() {
    if (!businessName) {
      toast("Business name is required", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    if (!businessState) {
      toast("Business state is required", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    if (!licenceNumber) {
      toast("Licence number is required", {
        autoClose: 3000,
        type: "error",
        position: "bottom-right",
      });

      return;
    }

    mutation.mutate();
  }

  return (
    <div className={`nc-AccountPage`}>
      <div className="container">
        <div className="my-12 sm:lg:my-16 lg:my-24 max-w-4xl mx-auto space-y-8 sm:space-y-10">
          {/* HEADING */}
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Business settings
            </h2>
            <span className="block mt-3 text-neutral-500 dark:text-neutral-400">
              You can manage all your business details here!
            </span>
          </div>
          <div className="w-full border-b-2 border-neutral-100 dark:border-neutral-700"></div>
          <div className="flex flex-col md:flex-row">
            <div className="flex-shrink-0 flex items-start">
              <div className="relative rounded-full overflow-hidden flex">
                <Avatar sizeClass="w-32 h-32" />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-neutral-50 cursor-pointer">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V20M5 20V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H22.5C23.163 25 23.7989 24.7366 24.2678 24.2678C24.7366 23.7989 25 23.163 25 22.5V17.5M5 20L10.7325 14.2675C11.2013 13.7988 11.8371 13.5355 12.5 13.5355C13.1629 13.5355 13.7987 13.7988 14.2675 14.2675L17.5 17.5M25 12.5V17.5M25 17.5L23.0175 15.5175C22.5487 15.0488 21.9129 14.7855 21.25 14.7855C20.5871 14.7855 19.9513 15.0488 19.4825 15.5175L17.5 17.5M17.5 17.5L20 20M22.5 5H27.5M25 2.5V7.5M17.5 10H17.5125"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="mt-1 text-xs">Change Image</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex-grow mt-10 md:mt-0 md:pl-16 max-w-3xl space-y-5 sm:space-y-6 md:sm:space-y-7">
              {/* ---- */}
              <div>
                <Label>Business Name</Label>
                <Input
                  className="mt-1.5"
                  defaultValue="Software Development Business"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                />
              </div>

              <div>
                <Label>Licence Number</Label>
                <Input
                  className="mt-1.5"
                  defaultValue="Software Development Business"
                  value={licenceNumber}
                  onChange={(e) => setLicenceNumber(e.target.value)}
                />
              </div>

              <div>
                <Label>Business State</Label>
                <Input
                  className="mt-1.5"
                  defaultValue="123 apple street"
                  value={businessState}
                  onChange={(e) => setBusinessState(e.target.value)}
                />
              </div>

              <div>
                <Label>Business Location</Label>
                <Input
                  className="mt-1.5"
                  defaultValue="123 apple street"
                  value={businessAddress}
                  onChange={(e) => setBusinessAddress(e.target.value)}
                />
              </div>

              {/* ---- */}

              <div>
                <Label>Business Email</Label>
                <div className="mt-1.5 flex">
                  <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                    <EnvelopeIcon className="w-5 h-5" />
                  </span>
                  <Input
                    className="!rounded-l-none"
                    placeholder="example@email.com"
                    value={businessEmail}
                    onChange={(e) => setBusinessEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label>Business Phone Number</Label>
                <Input
                  className="mt-1.5"
                  defaultValue="123 apple street"
                  value={businessPhoneNumber}
                  onChange={(e) => setBusinessPhoneNumber(e.target.value)}
                />
              </div>

              <div>
                <Label>Description</Label>
                <Textarea
                  rows={5}
                  className="mt-1.5"
                  placeholder="Something about you business in a few words"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              {/* ---- */}
              <div className="">
                <Label>Business Website</Label>
                <div className="mt-1.5 flex">
                  <span className="inline-flex items-center px-3 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
                    https://
                  </span>
                  <Input
                    className="!rounded-l-none"
                    placeholder="yourwebsite.com"
                    value={businessWebsite}
                    onChange={(e) => setBusinessWebsite(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <Label>Business Tags</Label>

                <TagList />

                <div className="mt-4 flex flex-row space-x-4">
                  <Input
                    className="mt-1.5"
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                  />
                  <ButtonPrimary className="w-fit" onClick={handleTagAdd}>
                    Add
                  </ButtonPrimary>
                </div>
              </div>

              <div>
                <Label>Operating Hours</Label>

                <OperatingHoursList />

                <div className="mt-4 flex flex-row space-x-4 items-center">
                  <div className="flex flex-col w-1/4">
                    <Label>Day of Week</Label>
                    <Select
                      value={currentOperatingHoursDayOfWeek}
                      onChange={(e) =>
                        setCurrentOperatingHoursDayOfWeek(e.target.value)
                      }
                    >
                      <option value="">None</option>
                      <option value="Sunday">Sunday</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                    </Select>
                  </div>

                  <div className="flex flex-col w-1/4">
                    <Label>Opening Time</Label>
                    <Input
                      className="mt-1.5"
                      type="time"
                      value={currentOperatingHoursOpeningTime}
                      onChange={(e) =>
                        setCurrentOperatingHoursOpeningTime(e.target.value)
                      }
                    />
                  </div>

                  <div className="flex flex-col w-1/4">
                    <Label>Closing Time</Label>
                    <Input
                      className="mt-1.5"
                      type="time"
                      value={currentOperatingHoursClosingTime}
                      onChange={(e) =>
                        setCurrentOperatingHoursClosingTime(e.target.value)
                      }
                    />
                  </div>

                  <ButtonPrimary
                    className="h-fit w-1/4"
                    onClick={handleOperatingTimeAdd}
                  >
                    Add
                  </ButtonPrimary>
                </div>
              </div>

              <div className="pt-2">
                <ButtonPrimary
                  disabled={mutation.isLoading}
                  className="w-full"
                  onClick={handleSubmit}
                >
                  {mutation.isLoading ? "Loading..." : "Update profile"}
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
