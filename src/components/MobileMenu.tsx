const MobileMenu = () => {
  return (
    <div className="fixed top-16 left-0 w-full h-screen bg-white">
      <nav className="flex flex-col items-center justify-center h-full">
        {["Home", "About", "Skills", "Works"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-2xl py-8 hover:text-gray-600 transition-colors block w-full text-center"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
