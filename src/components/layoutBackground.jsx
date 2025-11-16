export default function Layout({ children }) {
  return (
    <div
      className="
        relative 
        min-h-screen 
        bg-[url('/BreadHome.jpg')] 
        bg-cover 
        bg-center 
        bg-no-repeat 
        md:bg-fixed
      "
    >

      {/* OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-black/20 backdrop-brightness-90"></div>

      {/* PAGE CONTENT */}
      <div className="relative z-10">
        {children}
      </div>

    </div>
  );
}
