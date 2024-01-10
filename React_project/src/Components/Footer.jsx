import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";


function Footer() {
  return (
    <>
      <div className="flex fimge mt-4 pl-10 ">
        <div className=" ">
          <img className="w-100 pt-14 pl-5"
            src="https://template.hasthemes.com/daxone/daxone/assets/images/logo/logo-1.png"
            alt=""
          />
          <p className="pl-7 pt-4">Follow Us :</p>
          <ul className="flex gap-4 p-4 text-2xl">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <TiSocialTwitter />
            </span>
            <span>
              <TiSocialPinterest />
            </span>
            <span>
              <FaYoutube />
            </span>
          </ul>
        </div>

        <div className="   mt-20 h-96 w-full flex mb-2">
          <ul className="ml-20 mr-5">
            <li className="mb-5 font-bold">USEFUL LINK</li>
            <li>Shopping Cat</li>
            <li>WIshlist</li>
            <li>Chekout</li>
            <li>Support</li>
          </ul>
          <ul className="ml-20 mr-5">
            <li className="mb-5 font-bold">ABOUT US</li>
            <li>About</li>
            <li>Products</li>
            <li>Terms and conditions</li>
            <li>Help Center</li>
          </ul>
          <ul className="ml-20 mr-5"> 
            <li className="mb-5 font-bold">NEWSLETTER</li>
            <li >Subscribe to get all new updates</li>
            <ul className="flex">
              <input className="mt-2" type="text" name="" id="" placeholder="Enter Your Email" /><span><CiSearch className="mt-2" /></span>
            </ul>


          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
