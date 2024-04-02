"use client";

import React, { useState } from "react";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import CardNFT from "@/components/CardNFT";
import SectionBecomeAnAuthor from "@/components/SectionBecomeAnAuthor/SectionBecomeAnAuthor";
import SectionSliderCollections from "@/components/SectionSliderCollections";
import ButtonCircle from "@/shared/Button/ButtonCircle";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Input from "@/shared/Input/Input";
import Pagination from "@/shared/Pagination/Pagination";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import HeaderFilterAlbumPage from "@/components/HeaderFilterAlbumPage";
import FormItem from "@/components/FormItem";
import Textarea from "@/shared/Textarea/Textarea";
import Label from "@/components/Label/Label";
import { RadioGroup } from "@headlessui/react";
import MySwitch from "@/components/MySwitch";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import NcImage from "@/shared/NcImage/NcImage";
import { nftsImgs } from "@/contains/fakeData";
import NcModal from "@/shared/NcModal/NcModal";

const PageSearch = ({}) => {
  const [showModal, setShowModal] = useState(false);

  function renderModalContent() {
    return (
      <div className="mt-10 md:mt-0 space-y-5 sm:space-y-6 md:sm:space-y-8">
        <div>
          <h3 className="text-lg sm:text-2xl font-semibold">
            Image, Video, Audio, or 3D Model
          </h3>
          <span className="text-neutral-500 dark:text-neutral-400 text-sm">
            File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. Max size: 100 MB
          </span>
          <div className="mt-5 ">
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-xl">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-neutral-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <div className="flex text-sm text-neutral-6000 dark:text-neutral-300">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---- */}
        <FormItem label="File Name">
          <Input defaultValue="Some Fun Code" />
        </FormItem>

        {/* ---- */}
        <FormItem
          label="External link"
          desc="Ciscrypt will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details."
        >
          <div className="flex">
            <span className="inline-flex items-center px-3 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
              https://
            </span>
            <Input className="!rounded-l-none" placeholder="abc.com" />
          </div>
        </FormItem>

        {/* ---- */}
        <FormItem
          label="Description"
          desc={
            <div>
              {`The description will be included on the item's detail page
              underneath its image.`}{" "}
              <span className="text-green-500">Markdown</span> syntax is
              supported.
            </div>
          }
        >
          <Textarea rows={6} className="mt-1.5" placeholder="..." />
        </FormItem>

        <div className="w-full border-b-2 border-neutral-100 dark:border-neutral-700"></div>

        {/* ---- */}
        <div className="pt-2 flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-0 sm:space-x-3 ">
          <ButtonPrimary href="/nft-detail" className="flex-1">
            Upload item
          </ButtonPrimary>
          <ButtonSecondary href="/nft-detail" className="flex-1">
            Preview item
          </ButtonSecondary>
        </div>
      </div>
    );
  }

  return (
    <div className={`nc-PageSearch `}>
      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 lg:space-y-28">
        <main>
          {/* FILTER */}
          <HeaderFilterAlbumPage setShowModal={setShowModal} />

          {/* LOOP ITEMS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
            {Array.from("11111111").map((_, index) => (
              <CardNFT key={index} />
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
            <Pagination />
            <ButtonPrimary loading>Show me more</ButtonPrimary>
          </div>
        </main>
      </div>

      <NcModal
        renderTrigger={() => null}
        isOpenProp={showModal}
        renderContent={renderModalContent}
        contentExtraClass="max-w-md"
        onCloseModal={() => setShowModal(false)}
        modalTitle="Add file"
      />
    </div>
  );
};

export default PageSearch;
