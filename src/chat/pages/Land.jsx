import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaComments,
  FaCrown,
  FaGlobe,
  FaRocket,
} from "react-icons/fa";
import { MdEventAvailable, MdPostAdd } from "react-icons/md";
import logo from "../../assets/logo.png"; // Make sure the path is correct
import playstoreBadge from "../../assets/playstoreBadge.png"; // Add badge image to your assets


export default function Land() {
  const navigate = useNavigate();

  const features = [
    { title: "Join Groups", icon: <FaUsers /> },
    { title: "Create Posts", icon: <MdPostAdd /> },
    { title: "Live Chat", icon: <FaComments /> },
    { title: "Become VIP+", icon: <FaCrown /> },
    { title: "Attend Events", icon: <MdEventAvailable /> },
    { title: "Explore Community", icon: <FaGlobe /> },
    { title: "Customize Profile", icon: <FaRocket /> },
  ];

  const testimonials = [
    {
      name: "Jane Doe",
      role: "Content Creator",
      message:
        "Ayi Sphere helped me find my tribe. The features are intuitive, and the people are amazing!",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Mark Johnson",
      role: "Tech Enthusiast",
      message:
        "It's more than a social platform — it's where ideas meet action. Love the VIP+ perks!",
      image: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      name: "Linda Nguyen",
      role: "Event Organizer",
      message:
        "The event features are spot on. I’ve hosted 3 virtual meetups and connected with great minds.",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-black text-white font-sans flex flex-col items-center px-6 py-10">
      {/* Header */}
      <div className="flex items-center space-x-4 mb-10">
        <img src={logo} alt="Community Logo" className="w-16 h-16 object-contain drop-shadow-lg" />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">A Sphere</h1>
      </div>

      {/* Subtitle */}
      <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-10 text-center max-w-xl">
        Connect, Share, and Grow Together — your digital neighborhood is here.
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full mb-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl flex flex-col items-center text-center border border-white/10 shadow-xl hover:scale-105 transition duration-300"
          >
            <div className="text-3xl text-blue-300 mb-3">{feature.icon}</div>
            <p className="text-base font-semibold">{feature.title}</p>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <section className="w-full max-w-6xl mb-20">
        <h3 className="text-2xl font-bold text-center mb-10 border-b border-blue-400 pb-4">
          What Our Members Say
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 border-2 border-white"
              />
              <h4 className="text-lg font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-blue-200 mb-3 italic">{testimonial.role}</p>
              <p className="text-sm text-gray-100">{testimonial.message}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Play Store Section */}
      <section className="w-full max-w-4xl text-center mb-16">
        <h3 className="text-2xl font-bold mb-4">Get the Mobile App</h3>
        <p className="text-gray-300 mb-6">
          Stay connected with your community anytime, anywhere.
        </p>
        <a
          href="/ayi-sphere"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={playstoreBadge}
            alt="Get it on Google Play"
            className="h-12 mx-auto hover:scale-105 transition-transform"
          />
        </a>
      </section>

      {/* Final CTA */}
      <button
        onClick={() => navigate("/ayi-sphere/login")}
        className="bg-white text-blue-900 font-bold text-lg px-8 py-3 rounded-full shadow-md hover:bg-blue-100 transition"
      >
        Enter Community
      </button>
    </div>
  );
}
