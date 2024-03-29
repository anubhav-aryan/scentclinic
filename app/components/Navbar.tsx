import React, { useState } from "react";
import Image from "next/image";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { IoSaveOutline } from "react-icons/io5";
import { FaSave } from "react-icons/fa";
import Link from "next/link";
interface Props {
  setSave: React.Dispatch<React.SetStateAction<boolean>>;
  reportName: string;
  setReportName: React.Dispatch<React.SetStateAction<string>>;
  setReportType: React.Dispatch<React.SetStateAction<string>>;
  reportType: string;
}
const Navbar = ({
  setSave,
  reportName,
  setReportName,
  reportType,
  setReportType,
}: Props) => {
  // const handleSubmit

  return (
    <div className="sticky top-0 left-0 w-full h-20 shadow-lg bg-white z-[100]">
      <div className="w-[80%] h-full mx-auto flex justify-between items-center">
        <Image
          src="/logo-scent.svg"
          width={400}
          height={400}
          alt="Scent Clinic"
          className="h-[80%] w-auto"
        />

        <input
          type="text"
          name="Report Name"
          className="outline-none border-0 w-[30%] text-center"
          placeholder="Report Name"
          value={reportName}
          onChange={(e) => setReportName(e.target.value)}
          autoComplete="off"
        />
        <select
          name="reportType"
          className="px-8 py-2 rounded-lg border-2 border-[#e0e0e0]"
          onChange={(e) => setReportType(e.target.value)}
        >
          <option value="Nose">Nose</option>
          <option value="Throat and Ear">Throat and Ear</option>
        </select>
        <button
          type="button"
          className="flex gap-2 bg-primary text-white px-6 py-2 rounded-lg font-medium text-lg items-center active:scale-95 transition-all duration-200 ease-linear"
          onClick={() => setSave(true)}
        >
          <FaSave size={20} />
          <p>Save</p>
        </button>
        <Link href="/find">
          <button
            type="button"
            className="flex gap-2 bg-primary text-white px-6 py-2 rounded-lg font-medium text-lg items-center active:scale-95 transition-all duration-200 ease-linear"
          >
            <p>See All Reports</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
