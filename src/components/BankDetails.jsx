"use client";
import React from "react";
import { motion } from "framer-motion";

const BankDetails = () => {
  const details = {
    accountHolder: "INFINIAERO SPACE RESEARCH AND DEVELOPPVT",
    accountNumber: "50200087642690",
    ifsc: "HDFC0003671",
    branch: "WALUJ",
    mmid: "9240517",
    accountType: "Current Account",
  };

  return (
    <div className=" flex items-center justify-center  p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.02 }}
        className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8 border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6 tracking-wide">
          Bank Account Details
        </h2>

        <div className="space-y-4 text-gray-700 text-base sm:text-lg">
          <motion.p whileHover={{ x: 5 }}>
            <span className="font-semibold text-gray-900">Account Holder:</span>{" "}
            {details.accountHolder}
          </motion.p>
          <motion.p whileHover={{ x: 5 }}>
            <span className="font-semibold text-gray-900">Account Number:</span>{" "}
            {details.accountNumber}
          </motion.p>
          <motion.p whileHover={{ x: 5 }}>
            <span className="font-semibold text-gray-900">IFSC:</span>{" "}
            {details.ifsc}
          </motion.p>
          <motion.p whileHover={{ x: 5 }}>
            <span className="font-semibold text-gray-900">Branch:</span>{" "}
            {details.branch}
          </motion.p>
          <motion.p whileHover={{ x: 5 }}>
            <span className="font-semibold text-gray-900">MMID:</span>{" "}
            {details.mmid}
          </motion.p>
          <motion.p whileHover={{ x: 5 }}>
            <span className="font-semibold text-gray-900">Account Type:</span>{" "}
            {details.accountType}
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default BankDetails;
