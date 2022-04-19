import Link from "next/link";
import SettingsBtn from "./SettingsBtn";

const UserSettings = () => {
  return (
    <div className="bg-gray-100 fullscreen md:border-r md:border-gray-300 p-4">
      <div className="bg-white p-6 rounded-2xl h-full relative">
        <button className="bg-gray-100 absolute top-6 right-6 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h1 className="text-2xl font-semibold mb-10 text-gray-900">Settings</h1>
        <ul className="text-lg text-gray-800 space-y-6">
          <SettingsBtn btnName="Themes Settings" btnAction={() => {}} />
          <SettingsBtn btnName="Chat Settings" btnAction={() => {}} />
          <SettingsBtn btnName="Privacy Settings" btnAction={() => {}} />
          <SettingsBtn btnName="Terms & Conditions" btnAction={() => {}} />
        </ul>
        <div className="text-xs absolute bottom-8 left-1/2 text-center -translate-x-1/2 text-gray-400">
          Connect V.1.2, made with ❤ by{" "}
          <Link href="https://github.com/urtheaman" passHref>
            <i className="cursor-pointer">urtheaman</i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
