import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  const features = [
    {
      icon: "/icons/templates.svg",
      title: "25+ Templates",
      desc: "Responsive, and mobile-first project on the web",
    },
    {
      icon: "/icons/customizable.svg",
      title: "Customizable",
      desc: "Components are easily customized and extendable",
    },
    {
      icon: "/icons/free.svg",
      title: "Free to Use",
      desc: "Every component and plugin is well documented",
    },
    {
      icon: "/icons/support.svg",
      title: "24/7 Support",
      desc: "Contact us 24 hours a day, 7 days a week",
    },
  ];

  return (
    <div
      className="min-h-screen px-6 py-10 text-black bg-white"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg width='60' height='104' viewBox='0 0 90 104' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 0L90 52L60 104H30L0 52L30 0Z' fill='%23f3f4f6' fill-opacity='0.4'/%3E%3C/svg%3E\")",
        backgroundRepeat: "repeat",
        backgroundSize: "80px 80px",
      }}
    >
      {/* Logo top left */}
      <div className="flex items-center">
        <Image src="/logo.svg" alt="Logo" width={105} height={105} />
        <span className="ml-3 text-xl font-bold text-black"></span>
      </div>

      {/* Centered Title Section */}
      <div className="text-center max-w-3xl mx-auto mt-16">
        <h1 className="text-5xl font-bold mb-4">
          AI Content <span className="text-purple-600">Generator</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
        </p>
        <Link className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition" href={"/dashboard"}>
          Get Started →
        </Link>
      </div>

      {/* Feature Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-20">
        {features.map((feature, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
            <div className="flex justify-center mb-4">
              <Image src={feature.icon} alt={feature.title} width={36} height={36} />
            </div>
            <h3 className="font-bold text-md mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.desc}</p>
            <p className="mt-3 text-sm font-medium text-purple-700 hover:underline cursor-pointer">
              Learn more →
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
