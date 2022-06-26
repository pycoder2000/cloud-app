/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// eslint-disable-next-line jsx-a11y/anchor-is-valid
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2 pl-4">Solutions</h6>
          <ul>
            <li className="py-1">
              <a
                href="#"
                class="border-b border-solid border-transparent hover:border-fuchsia-600 hover:text-fuchsia-600 pb-1"
              >
                Marketing
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                class="border-b border-solid border-transparent hover:border-fuchsia-600 hover:text-fuchsia-600 pb-1"
              >
                Analytics
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                class="border-b border-solid border-transparent hover:border-fuchsia-600 hover:text-fuchsia-600 pb-1"
              >
                Data
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                class="border-b border-solid border-transparent hover:border-fuchsia-600 hover:text-fuchsia-600 pb-1"
              >
                Cloud
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 pl-4">Support</h6>
          <ul>
            <li className="py-1">
              <a
                href="#"
                class="border-b border-solid border-transparent hover:border-fuchsia-600 hover:text-fuchsia-600 pb-1"
              >
                Pricing
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                class="border-b border-solid border-transparent hover:border-fuchsia-600 hover:text-fuchsia-600 pb-1"
              >
                Documentation
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                class="border-b border-solid border-transparent hover:border-fuchsia-600 hover:text-fuchsia-600 pb-1"
              >
                Guides
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                class="border-b border-solid border-transparent hover:border-fuchsia-600 hover:text-fuchsia-600 pb-1"
              >
                API Status
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 pl-4">Company</h6>
          <ul>
            <li className="py-1">
              <a
                href="#"
                class="border-b border-solid border-transparent hover:border-fuchsia-600 hover:text-fuchsia-600 pb-1"
              >
                About
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                class="border-b border-solid border-transparent hover:border-fuchsia-600 hover:text-fuchsia-600 pb-1"
              >
                Blog
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                class="border-b border-solid border-transparent hover:border-fuchsia-600 hover:text-fuchsia-600 pb-1"
              >
                Jobs
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                class="border-b border-solid border-transparent hover:border-fuchsia-600 hover:text-fuchsia-600 pb-1"
              >
                Press
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                class="border-b border-solid border-transparent hover:border-fuchsia-600 hover:text-fuchsia-600 pb-1"
              >
                Partners
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2 pl-4">Legal</h6>
          <ul>
            <li className="py-1">
              <a
                href="#"
                class="border-b border-solid border-transparent hover:border-fuchsia-600 hover:text-fuchsia-600 pb-1"
              >
                Claims
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                class="border-b border-solid border-transparent hover:border-fuchsia-600 hover:text-fuchsia-600 pb-1"
              >
                Privacy
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                class="border-b border-solid border-transparent hover:border-fuchsia-600 hover:text-fuchsia-600 pb-1"
              >
                Terms
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                class="border-b border-solid border-transparent hover:border-fuchsia-600 hover:text-fuchsia-600 pb-1"
              >
                Policies
              </a>
            </li>
            <li className="py-1">
              <a
                href="#"
                class="border-b border-solid border-transparent hover:border-fuchsia-600 hover:text-fuchsia-600 pb-1"
              >
                Conditions
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Subscribe to our newsletter</p>
          <p className="py-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder="Enter email.."
            />
            <button className="p-2 mb-4 hover:text-white">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2022 Workflow, LLC. All rights reserved</p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
          <FaFacebook className="text-white hover:text-indigo-600" />
          <FaInstagram className="text-white hover:text-indigo-600" />
          <FaTwitter className="text-white hover:text-indigo-600" />
          <FaTwitch className="text-white hover:text-indigo-600" />
          <FaGithub className="text-white hover:text-indigo-600" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
