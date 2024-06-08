import Image from "next/image";
import Navbar from "./navbar";
import Button from "./button";
import { Suspense } from "react";
import VideoComponent from "./VideoComponent";

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      {/* hero section */}
      <section className="bg-background h-[100vh] w-full">
        <div className="flex flex-col gap-12 w-[1000px] m-auto my-5">
          <Navbar />
          <div className="flex flex-col gap-10 justify-center items-center">
            <h1 className="text-[40px] text-white font-bold text-center">
              Add Multiple CSV Files To Google Sheets in Seconds
            </h1>

            <div className="flex flex-col justify-center items-center gap-1">
              <Button empty={false} />
              <div className="flex gap-1">
                <p className="text-white text-[12px]">
                  Try it out for FREE for 7 days
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Suspense fallback={<p>Loading video...</p>}>
              <VideoComponent id="IHKohKCN3nc" />
            </Suspense>
          </div>
        </div>
      </section>

      {/* features and use cases */}
      <section className="bg-white" id="features">
        <h2 className="font-bold text-center text-[35px]">
          Features & Uses cases
        </h2>
        <div className="flex flex-row gap-12 justify-between w-[900px] m-auto my-5">
          <div className="flex flex-col gap-5 border-gray border-2 rounded-2xl py-5 px-10">
            <h3 className="text-[20px] text-accent text-center font-bold">
              Features
            </h3>
            <div>
              <div className="flex flex-col gap-3 ">
                <div className="flex gap-3">
                  <Image
                    src="icons/check.svg"
                    width={20}
                    height={20}
                    alt="check"
                  />
                  <span>Bulk import CSV files to Google Sheets</span>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="icons/check.svg"
                    width={20}
                    height={20}
                    alt="check"
                  />
                  <span>Import 100s of files in seconds</span>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="icons/check.svg"
                    width={20}
                    height={20}
                    alt="check"
                  />
                  <span>Automatically upload files to Google Drive</span>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="icons/check.svg"
                    width={20}
                    height={20}
                    alt="check"
                  />
                  <span>Import 100s of files in seconds</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 border-gray border-2 rounded-2xl py-5 px-10">
            <h3 className="text-[20px] text-accent text-center font-bold">
              Use Cases
            </h3>
            <div>
              <div className="flex flex-col gap-3 ">
                <div className="flex gap-3">
                  <Image
                    src="icons/check.svg"
                    width={20}
                    height={20}
                    alt="check"
                  />
                  <span>For lead generation professionals</span>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="icons/check.svg"
                    width={20}
                    height={20}
                    alt="check"
                  />
                  <span>For sales profesionals</span>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="icons/check.svg"
                    width={20}
                    height={20}
                    alt="check"
                  />
                  <span>For virtual asistant professionals</span>
                </div>
                <div className="flex gap-3">
                  <Image
                    src="icons/check.svg"
                    width={20}
                    height={20}
                    alt="check"
                  />
                  <span>For accountant professionals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* pricing */}
      <section className="bg-white" id="pricing">
        <div className="w-[900px] m-auto flex flex-col justify-center items-center  ">
          <h2 className="font-bold text-center text-[35px]">Pricing</h2>
          <span>Both yearly and monthly plans include a 7-day FREE trial.</span>
          <div className="flex flex-col gap-5 justify-center items-center my-5 py-5 px-10 shadow-md border-gray border-2 rounded-2xl">
            <div className="flex flex-col justify-center items-center text-[20px]">
              <span>$3,99/month</span>
              <span>or</span>
              <span>$27,99/year</span>
            </div>

            <div className="flex gap-3">
              <Image src="icons/check.svg" width={20} height={20} alt="check" />
              <span>All the features included</span>
            </div>
            <Button empty={false} />
          </div>
        </div>
      </section>

      {/* footer */}
      <section className="bg-background w-full" id="about">
        <div className="flex gap-12 w-[1000px] m-auto my-5 text-white">
          <div className="flex flex-col gap-5">
            <Image
              src="logo.svg"
              width={200}
              height={200}
              alt="logo"
              className="ml-[-8px]"
            />
            <p className="text-white">
              Files2Sheet is a Google Sheets add-on that allows you to import
              multiple CSV files in seconds.
            </p>
            <Button empty={false} />
          </div>
          <div className="w-44 flex flex-col">
            <p className="mb-5">COMPANY</p>
            <p>
              <a href="privacy-policy">Privacy policy</a>
            </p>
            <p>
              <a href="terms-of-service">Terms of service</a>
            </p>
          </div>

          <div className="w-44 flex flex-col">
            <p className="mb-5">QUESTIONS?</p>
            <p className="underline">
              <a href="mailto:jure@files2sheet.com">jure@files2sheet.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
