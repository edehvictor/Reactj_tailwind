import React from "react";
import { FaFacebook, FaGithub, FaTwitter, FaTwitch, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full nt-24 bg-slate-900 text-gray-300 py-9 px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Solutions</h6>
          <ul>
            <li className="py-1">Analytics</li>
            <li className="py-1">Marketing</li>
            <li className="py-1">Commerce</li>
            <li className="py-1">Data</li>
            <li className="py-1">Cloud</li>
          </ul>
        </div>
        
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Documentation</li>
            <li className="py-1">API status</li>
            <li className="py-1">Guides</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1">About</li>
            <li className="py-1">Blog</li>
            <li className="py-1">Jobs</li>
            <li className="py-1">Press</li>
            <li className="py-1">Partners</li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1">Claims</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policy</li>
            <li className="py-1">Conditions</li>
          </ul>
        </div>

        <div className="col-span-2 pt-8 md:pt-2">
            <p className="font-bold uppercase">Subscribe to newsletter.</p>
            <p className="py-4 ">The lastest news, articles, and resources, sent to your inbox weekly.</p>

            <form className="flex flex-col sm:flex-grow">
                <input type="email"  className="w-full p-2 mt-4 rounded-md mb-4" placeholder="Email..."/>
                <button className="p-2 mb-4">Subscribe</button>
            </form>
        </div>

      </div>

      <div className="flex flex-col max-w-[1240px] py-4 px-2 mx-auto  justify-between sm:flex-row text-center text-gray-500 ">
        <p className="py-4">2022 Workflow, LLC. All right reserved.</p>
        <div className="flex justify-between sm:-w-[300px] pt-4 text-2xl">
            <FaFacebook/>
            <FaTwitter/>
            <FaGithub/>
            <FaTwitch/>
            <FaInstagram/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
