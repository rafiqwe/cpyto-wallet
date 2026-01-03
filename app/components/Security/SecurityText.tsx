import { Camera, Fingerprint, Footprints, Signature } from "lucide-react";

const SecurityText = () => {
  const animatedCardDetails = [
    {
      icon: <Signature />,
      text: "Multi-sig Support",
    },
    {
      icon: <Camera />,
      text: "Threat Monitoring",
    },
    {
      icon: <Fingerprint />,
      text: "Biometric Authentication",
    },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-5">
      <div>
        <h2 className="font-semibold text-gray-600 md:text-5xl text-3xl ">Security that lets you sleep easy</h2>
        <p className="text-gray-500 text-xl md:text-2xl  w-full md:w-[82%]  my-10">
          Enable multi-signature functionality for high-value transactions to
          enhance protection against unauthorized access.
        </p>
      </div>
      <div className="flex  flex-col gap-4 w-full mb-9 md:w-1/2">
        {animatedCardDetails.map((item, index) => {
          return (
            <div
              key={index}
              className="flex  items-center  gap-4 px-6 py-3 text-black font-semibold rounded-2xl bg-gray-200"
            >
              <p>{item.icon}</p>
              <h2>{item.text}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecurityText;
