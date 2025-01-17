import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function Footer() {
  return (
    <div className="bg-black text-white p-8 font-suisse-medium">
      {/* Flex container to place Subscribe Section and Footer Links Sections in the same row */}
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
        {/* Subscribe Section */}
        <div className="w-full md:w-1/3">
          <h2 className="text-xl font-semibold">
            Subscribe to Aesop communications
          </h2>
          <hr className="border-white my-4" />
          <div className="relative flex items-center border border-white bg-transparent">
            <input
              type="email"
              className=" bg-black text-white px-4 py-2 rounded-md pr-10" // Added padding-right for space for the icon
              placeholder="Email address"
            />
            <ArrowForwardIcon className="absolute right-2 text-white cursor-pointer" />{" "}
            {/* Positioned inside the input */}
          </div>
          <div className="mt-4">
            <label>
              <input type="checkbox" className="mr-2" />
              Subscribe to receive communications from Aesop. By subscribing,
              you confirm you have read and understood our{" "}
              <a href="#">privacy policy</a>.
            </label>
          </div>
        </div>

        {/* Footer Links Sections */}
        <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold">Orders and support</h3>
            <hr className="border-white my-2" />
            <ul>
              <li>
                <a href="#" className="text-white">
                  Contact us <ArrowOutwardIcon/>
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  FAQs <ArrowOutwardIcon/>
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Shipping <ArrowOutwardIcon/>
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Returns <ArrowOutwardIcon/>
                </a>
              </li>

              <li>
                <a href="#" className="text-white">
                  Order history
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Check gift card balance
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Terms and conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Services</h3>
            <hr className="border-white my-2" />
            <ul>
              <li>
                <a href="#" className="text-white">
                  Live assistance
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Corporate gifts
                </a>
              </li>

              <li>
                <a href="#" className="text-white">
                  Facial Appointments
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Click and Collect
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Video consultation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Location preferences</h3>
            <hr className="border-white my-2" />
            <div>
              <p className="text-white">
                Shipping: <br />
                <a href="#" className="underline text-white">
                  United States
                </a>
              </p>
              <p className="text-white">
                Language: <br />
                <a href="#" className="underline text-white">
                  English
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sustainability, About, and Social Media Sections */}
      <div className="mt-8 flex flex-col md:flex-row justify-between gap-8">
        {/* Sustainability Section */}
        <div className="w-full md:w-1/3">
          <h3 className="font-semibold">Sustainability</h3>
          <hr className="border-white my-2" />
          <p className="text-white">
            All Aesop products are vegan, and we do not test our formulations or
            ingredients on animals. We are Leaping Bunny approved and a
            Certified B Corporation. <a href="#">Learn more</a>
          </p>
        </div>

        {/* About Section */}
        <div className="w-full md:w-1/3">
          <h3 className="font-semibold">About</h3>
          <hr className="border-white my-2" />
          <ul>
            <li>
              <a href="#" className="text-white">
                Our story
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Foundation
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Regulatory policies
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="w-full md:w-1/3">
          <h3 className="font-semibold">Social media</h3>
          <hr className="border-white my-2" />
          <ul>
            <li>
              <a href="#" className="text-white">
                Instagram <ArrowOutwardIcon/>
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Twitter <ArrowOutwardIcon/>
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                LinkedIn <ArrowOutwardIcon/>
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                WeChat
              </a>
            </li>
            <li>
              <a href="#" className="text-white">
                Weibo <ArrowOutwardIcon/>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-white my-4" />

      {/* Copyright */}
      <div>
        <p>© Aesop</p>
      </div>
    </div>
  );
}

export default Footer;
