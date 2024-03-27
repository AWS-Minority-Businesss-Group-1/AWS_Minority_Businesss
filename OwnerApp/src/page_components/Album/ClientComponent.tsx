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
import { Album } from "@/API";
import { useMutation } from "react-query";
import { getUrl, remove, uploadData } from "aws-amplify/storage";
import { GraphQLResult, generateClient } from "aws-amplify/api";
import { createAlbum, deleteAlbum } from "@/graphql/mutations";
import { albumImage } from "@/app/album/page";
import { toast } from "react-toastify";

const ALLOWED_FILE_EXTENSIONS = ["png", "jpg", "jpeg"];

const client = generateClient();

export default function AlbumPageClientComponent({
  album,
  businessProfileId,
}: {
  album: [albumImage] | [];
  businessProfileId: string;
}) {
  const [showModal, setShowModal] = useState(false);
  const [pictureAlbum, setPictureAlbum] = useState<albumImage[]>(
    sortPictureAlbumByDate(album)
  );
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  function sortPictureAlbumByDate(input: albumImage[]) {
    return input.sort((a, b) => b.createdAt - a.createdAt);
  }

  const addImageToAlbumMutation = useMutation(
    async ({
      file,
      businessProfileId,
    }: {
      businessProfileId: string;
      file: File;
    }) => {
      if (!file) {
        throw new Error("No file selected");
      }

      if (!businessProfileId) {
        throw new Error("No business profile ID found");
      }

      const key = `${businessProfileId}/album/${file.name}`;

      await uploadData({
        key,
        data: file,
      }).result;
      const imageUrl = await getUrl({ key });

      const createdAt = new Date().getTime();

      const image = {
        imageUrl: imageUrl.url.href,
        createdAt,
        fileName: file.name,
        businessProfileId,
      };

      if (imageUrl) {
        const uploadedImage = await client.graphql({
          query: createAlbum,
          variables: {
            input: image,
          },
        });

        return uploadedImage.data.createAlbum;
      } else {
        throw new Error("Error uploading image to album");
      }
    },
    {
      onError: (err: Error) => {
        setSelectedFile(null);

        toast(err.message, {
          autoClose: 3000,
          type: "error",
          position: "bottom-right",
        });
      },
      onSuccess: (uploadedImage) => {
        setSelectedFile(null);

        toast(`Successfully added ${uploadedImage.fileName} to album!`, {
          autoClose: 3000,
          type: "success",
          position: "bottom-right",
        });

        setPictureAlbum((prev) =>
          sortPictureAlbumByDate([uploadedImage, ...prev])
        );
      },
    }
  );

  const deleteImageFromAlbumMutation = useMutation(
    async ({
      fileName,
      businessProfileId,
      imageId,
    }: {
      businessProfileId: string;
      fileName: string;
      imageId: string;
    }) => {
      if (!fileName) {
        throw new Error("No file selected");
      }

      if (!businessProfileId) {
        throw new Error("No business profile ID found");
      }

      if (!imageId) {
        throw new Error("No image ID found");
      }

      const key = `${businessProfileId}/album/${fileName}`;

      await remove({
        key,
      });

      await client.graphql({
        query: deleteAlbum,
        variables: {
          input: {
            id: imageId,
          },
        },
      });

      return { fileName, imageId };
    },
    {
      onError: (err: Error) => {
        toast(err.message, {
          autoClose: 3000,
          type: "error",
          position: "bottom-right",
        });
      },
      onSuccess: ({ fileName, imageId }) => {
        toast(`Successfully deleted ${fileName} from album!`, {
          autoClose: 3000,
          type: "success",
          position: "bottom-right",
        });

        setPictureAlbum((prev) =>
          sortPictureAlbumByDate(prev.filter((image) => image.id !== imageId))
        );
      },
    }
  );

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
                      accept="image/*"
                      onChange={async (event) => {
                        if (
                          event.target.files &&
                          event.target.files.length > 0
                        ) {
                          try {
                            const file = event.target.files[0];

                            const ext = file.name.slice(
                              (Math.max(0, file.name.lastIndexOf(".")) ||
                                Infinity) + 1
                            );
                            if (!ALLOWED_FILE_EXTENSIONS.includes(ext)) {
                              throw new Error(
                                "Invalid file type. Please upload a PNG, JPG, or JPEG file."
                              );
                            }

                            setSelectedFile(file);
                            return;
                          } catch (error) {
                            toast((error as any).message, {
                              autoClose: 3000,
                              type: "error",
                              position: "bottom-right",
                            });

                            setSelectedFile(null);
                            return;
                          }
                        }
                      }}
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

        <div className="w-full border-b-2 border-neutral-100 dark:border-neutral-700"></div>

        {/* ---- */}
        <div className="pt-2 flex flex-col sm:flex-row space-y-3 sm:space-y-0 space-x-0 sm:space-x-3 ">
          <ButtonPrimary
            className="flex-1"
            onClick={() => {
              if (selectedFile) {
                addImageToAlbumMutation.mutate({
                  file: selectedFile,
                  businessProfileId,
                });
                setShowModal(false);
              }
            }}
            disabled={!selectedFile}
          >
            Upload item
          </ButtonPrimary>
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

          {pictureAlbum.length === 0 ? (
            <p>No images to show. Try adding some!</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
              {pictureAlbum.map(({ imageUrl, fileName, id }, index) => (
                <CardNFT
                  key={index}
                  imageUrl={imageUrl}
                  onDelete={() =>
                    deleteImageFromAlbumMutation.mutate({
                      businessProfileId,
                      fileName,
                      imageId: id,
                    })
                  }
                />
              ))}
            </div>
          )}
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
}
