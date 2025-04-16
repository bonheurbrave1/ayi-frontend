import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUser,
  FaMoneyBillWave,
  FaCrown,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import momo from "../assets/momo.jpeg";
import airtel from "../assets/airtel.png";
import { CiBank } from "react-icons/ci";
import { MdOutlineContactSupport } from "react-icons/md";
import Tilt from "react-parallax-tilt";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function WalletPage() {
  const [activeTab, setActiveTab] = useState("account");
  const [theme, setTheme] = useState("light");
  const [modalContent, setModalContent] = useState(null);

  const tabs = [
    { id: "account", label: "Account Information", icon: <FaUser /> },
    { id: "deposit", label: "Deposit Money", icon: <FaMoneyBillWave /> },
    { id: "vip", label: "Claim VIP", icon: <FaCrown /> },
    { id: "profile", label: "User Profile", icon: <FaUser /> },
    { id: "settings", label: "Settings", icon: <FaCog /> },
    { id: "support", label: "Support", icon: <MdOutlineContactSupport /> },
  ];

  const handleLogout = () =>
    setModalContent({
      title: "Logout",
      description: "You have successfully logged out.",
    });
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div
      className={`flex h-screen ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Sidebar */}

      <aside className="w-64 p-4 border-r border-gray-300 flex flex-col gap-4">
        <div className=" py-7">
          <h1 className=" font-extrabold  text-center text-4xl border-b-2 border-b-amber-400">
            A Wallet
          </h1>
        </div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center gap-2 p-3 rounded-lg transition-colors duration-200 ${
              activeTab === tab.id
                ? "bg-blue-500 text-white"
                : "hover:bg-blue-100 dark:hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {activeTab === "account" && (
          <AccountInformation openModal={setModalContent} />
        )}
        {activeTab === "deposit" && (
          <DepositMoney openModal={setModalContent} />
        )}
        {activeTab === "vip" && <ClaimVIP openModal={setModalContent} />}
        {activeTab === "profile" && <UserProfile openModal={setModalContent} />}
        {activeTab === "support" && <Support openModal={setModalContent} />}
        {activeTab === "settings" && (
          <div className=" min-h-screen flex justify-center items-center space-x-4">
            <button
              onClick={handleLogout}
              className="flex items-center  px-5 p-3 bg-red-500 text-white rounded-lg"
            >
              <FaSignOutAlt /> Logout
            </button>
            <button
              onClick={toggleTheme}
              className="p-3 bg-gray-700 text-white rounded-lg"
            >
              Toggle {theme === "light" ? "Dark" : "Light"} Theme
            </button>
          </div>
        )}
      </main>

      {/* Modal */}
      <AnimatePresence>
        {modalContent && (
          <motion.div
            className="py-10 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalContent(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 max-w-lg w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-300">
                {modalContent.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                {modalContent.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// InfoCard Component
function InfoCard({ title, children, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="p-8 min-h-[180px] flex flex-col justify-between m-2 rounded-3xl shadow-xl bg-white dark:bg-gray-800 transition cursor-pointer hover:shadow-2xl border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
        {title}
      </h3>
      <div className="text-base text-gray-600 dark:text-gray-300">
        {children}
      </div>
    </motion.div>
  );
}

// Sections below using openModal to show popups
function AccountInformation({ openModal }) {
  const transaction_details =
    "Transaction not permitted.Your account does not currently meet the minimum requirement for this type of transaction.Users must have at least 1 year of active membership in the system to proceed.This policy helps us ensure secure and trusted usage for all members.We appreciate your understanding and encourage you to continue using the platform.For further assistance or clarification, please contact our support team.";

  return (
    <section className="space-y-4 font-sans">
      <h2 className="text-3xl font-bold mb-6">Account Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <InfoCard
          title="Balance Details"
          onClick={() =>
            openModal({
              title: "Balance Details",
              description:
                "1. Account Holder : {Ndikumwenayo Bonheur} \n2.Account balance : {5,000,000 frw} \n3.Type of VIP : {VIP+} \n4.Loan your allowed : up to {1,000,000} ",
            })
          }
        >
          Current balance and available funds.
        </InfoCard>
        <InfoCard
          title="Loan Details"
          onClick={() =>
            openModal({
              title: "Loan Details",
              description:
                "We're sorry, but you're currently not eligible to request a loan.Our policy requires users to have at least 6 months of active history in the system before applying for a loan.  Please continue using your account, and you'll be able to apply once you've met the minimum requirement. For any questions, feel free to contact our support team.",
            })
          }
        >
          Loan status and repayment progress.
        </InfoCard>
        <InfoCard
          title="Deposit Details"
          onClick={() =>
            openModal({
              title: "Deposit Details",
              description:
                "All historical deposits including amount, method and timestamp.",
            })
          }
        >
          Record of deposits to your wallet.
        </InfoCard>
        <InfoCard
          title="Upgrade Info"
          onClick={() => {
            activeTab == "deposit";
          }}
        >
          Account upgrade benefits.
        </InfoCard>
        <InfoCard
          title="Transaction History"
          onClick={() =>
            openModal({
              title: "Transaction History",
              description: transaction_details,
            })
          }
        >
          All past transactions.
        </InfoCard>
      </div>
    </section>
  );
}
function DepositMoney({ openModal }) {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-semibold">Deposit Money</h2>
      <p className="text-gray-700 dark:text-black-300">
        Use the following methods with memo codes, Airtel Money or MTN MoMo:
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Airtel Money with background image */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() =>
            openModal({
              title: "Airtel Money",
              description:
                "To deposit using Airtel Money:\n\n1. Dial *500#\n2. Select 'Send Money'\n3. Enter our business number : 0 782 029 528\n4. Use your MEMO code in reference\n5. Confirm and send",
            })
          }
          className="bg-slate-600 relative bg-cover bg-center p-8 min-h-[180px] flex flex-col justify-between m-2 rounded-3xl shadow-xl text-white cursor-pointer hover:shadow-2xl border border-gray-200 dark:border-gray-700"
        >
          <h1 className="font-bold text-center text-white text-xl">
            Airtel Money
          </h1>
          <img src={airtel} alt="no internet connection" />
        </motion.div>

        {/* MTN MoMo Pay */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() =>
            openModal({
              title: "MTN MoMo Pay",
              description:
                "To deposit with MTN MoMo:\n\n1. Dial *182*8*1#\n2. Select 'MoMoPay'\n3. Enter merchant code\n4. Use your PIN code\n5. Confirm transaction",
            })
          }
          className="bg-slate-600 relative bg-cover bg-center p-8 min-h-[180px] flex flex-col justify-between m-2 rounded-3xl shadow-xl text-white cursor-pointer hover:shadow-2xl border border-gray-200 dark:border-gray-700"
        >
          <h1 className="font-bold text-center text-white text-xl py-2">
            Mobile Money - MOMO
          </h1>
          <img src={momo} alt="no internet connection" />
        </motion.div>

        {/* Bank Transfer */}
        <InfoCard
          onClick={() =>
            openModal({
              description:
                "Send money to our bank using your memo code in the transfer reference field. Usually reflects within 1–3 business days.",
            })
          }
        >
          <h1 className="font-bold text-center text-xl">Bank Transfer</h1>
          <CiBank size={100} className="mx-auto" />
          Transfer from your bank app with reference code.
        </InfoCard>
      </div>

      {/* Instructions Section */}
      <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-xl text-gray-800">
        <h3 className="text-xl font-semibold mb-2">How to Deposit Money:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Click on the deposit method you want to use.</li>
          <li>Follow the instructions shown for that method.</li>
          <li>
            After completing the deposit, take a screenshot of the successful deposit message.
          </li>
          <li>
            Send the screenshot to this number: <strong>+250 782 029 528</strong>.
          </li>
        </ul>
        <p className="mt-2">Once we receive your screenshot, your stake will be added to your account.</p>
      </div>
    </section>
  );
}

function ClaimVIP({ openModal }) {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-semibold">Available VIP Packages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <InfoCard
          title="VIP Bronze"
          onClick={() =>
            openModal({
              title: "VIP Bronze",
              description:
                "Entry-level VIP access with priority chat support and access to VIP-only promotions.",
            })
          }
        >
          Basic perks and support.
        </InfoCard>
        <InfoCard
          title="VIP Silver"
          onClick={() =>
            openModal({
              title: "VIP Silver",
              description:
                "Mid-tier access: increased limits, 24/7 support, and monthly cashback incentives.",
            })
          }
        >
          Enhanced benefits and support.
        </InfoCard>
        <InfoCard
          title="VIP Gold"
          onClick={() =>
            openModal({
              title: "VIP Gold",
              description:
                "Top-tier VIP: Dedicated account manager, instant transfers, and exclusive investment opportunities.",
            })
          }
        >
          Premium treatment and features.
        </InfoCard>
      </div>
    </section>
  );
}

function UserProfile({ openModal }) {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-semibold">User Profile</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <InfoCard
          title="Account ID"
          onClick={() =>
            openModal({
              title: "Account ID",
              description: "Your unique ID for transactions: #123456789",
            })
          }
        >
          #123456789
        </InfoCard>
        <InfoCard
          title="User Information"
          onClick={() =>
            openModal({
              title: "User Information",
              description:
                "Name: John Doe\nEmail: john@example.com\nPhone: +1234567890",
            })
          }
        >
          View your personal information.
        </InfoCard>
        <InfoCard
          title="Edit Profile"
          onClick={() =>
            openModal({
              title: "Edit Profile",
              description:
                "You can change your profile info from here. (Edit form coming soon!)",
            })
          }
        >
          Update your profile details.
        </InfoCard>
      </div>
    </section>
  );
}

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-10 text-blue-600"
      >
        Help Center & Support
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <Tilt className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Contact Us
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="example@mail.com"
              />
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="4"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold shadow-md hover:bg-blue-700 transition"
            >
              Submit
            </motion.button>
          </form>
        </Tilt>

        {/* Company Info */}
        <Tilt className="bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Company Information
          </h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <span>Kigali Gasabo Rwanda , Kibagabaga</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-600" />
              <span>+250 788 967 462 </span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-600" />
              <span>ayi@company.com</span>
            </div>
            <div>
              <iframe
                title="Company Location"
                className="w-full h-64 rounded-md mt-4"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.831584505968!2d-122.08424968469216!3d37.42199997982511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0a5ae07e6f7%3A0x4a81c3a07cfa9eeb!2sGoogleplex!5e0!3m2!1sen!2sus!4v1615531613539!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};
