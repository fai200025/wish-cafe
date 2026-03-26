import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Phone,
  Mail,
  Instagram,
  Facebook,
  Clock,
  MapPin,
  Menu as MenuIcon,
  X,
  ChevronRight,
  Utensils,
  Coffee,
  Star,
} from "lucide-react";
import { MENU_DATA } from "./constants";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].category);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FFF8E1] font-sans text-[#3E2723]">
      {/* Navigation */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white/90 py-2 shadow-md backdrop-blur-md" : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
            {/* Logo Placeholder - Mimicking the uploaded logo colors */}
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#FFC107] bg-[#1A1A1A]">
              <span className="text-xl font-bold text-white">W</span>
              <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#FFC107]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#3E2723]">WISH</span>
              <span className="text-[10px] uppercase tracking-widest text-[#D4AF37]">Cafe & Restaurant</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 md:flex">
            {["Home", "Menu", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium transition-colors hover:text-[#D4AF37]"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="rounded-full bg-[#3E2723] px-6 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95"
            >
              Book a Table
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-white px-8 pt-20"
          >
            {["Home", "Menu", "About", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="w-full py-4 text-center text-2xl font-bold border-b border-gray-100"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-8 w-full rounded-full bg-[#3E2723] py-4 text-xl font-bold text-white"
            >
              Book a Table
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1920"
            alt="Cafe Interior"
            className="h-full w-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl"
          >
            Welcome to <span className="text-[#FFC107]">Wish Cafe</span> & Restaurant
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg font-medium text-gray-200 md:text-2xl"
          >
            Make a Wish, Taste the Magic! Your favorite destination in Chittagong for great food, cozy vibes, and unforgettable moments.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <button
              onClick={() => scrollToSection("menu")}
              className="group flex items-center gap-2 rounded-full bg-[#FFC107] px-8 py-4 text-lg font-bold text-[#1A1A1A] transition-all hover:bg-[#D4AF37]"
            >
              Explore Our Menu
              <ChevronRight className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="rounded-full border-2 border-white px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#1A1A1A]"
            >
              Learn More
            </button>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-10 w-6 rounded-full border-2 border-white/50 p-1">
            <div className="h-2 w-full rounded-full bg-white" />
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-4xl font-black uppercase tracking-tighter md:text-6xl">Our Menu</h2>
            <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-[#FFC107]" />
            <p className="mt-6 text-lg text-gray-600">Deliciously crafted dishes for every craving.</p>
          </div>

          {/* Category Tabs */}
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {MENU_DATA.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`rounded-full px-6 py-2 text-sm font-bold transition-all ${
                  activeCategory === cat.category
                    ? "bg-[#3E2723] text-white shadow-lg"
                    : "bg-white text-[#3E2723] hover:bg-gray-100"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="wait">
              {MENU_DATA.find((c) => c.category === activeCategory)?.items.map((item, idx) => (
                <motion.div
                  key={`${activeCategory}-${item.name}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm transition-all hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#3E2723] group-hover:text-[#D4AF37] transition-colors">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.description}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-black text-[#3E2723]">{item.price}</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#FFC107] transition-all group-hover:w-full" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-[#1A1A1A] py-24 px-4 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1000"
                alt="Chef Cooking"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 hidden h-48 w-48 rounded-3xl bg-[#FFC107] p-8 md:block">
                <div className="flex h-full flex-col items-center justify-center text-center text-[#1A1A1A]">
                  <span className="text-4xl font-black">10+</span>
                  <span className="text-xs font-bold uppercase tracking-widest">Years of Magic</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black uppercase tracking-tighter md:text-6xl">About Us</h2>
              <div className="mt-4 h-1.5 w-24 rounded-full bg-[#FFC107]" />
              <p className="mt-8 text-xl leading-relaxed text-gray-400">
                At Wish Cafe & Restaurant, our commitment is to serve high-quality, delicious food in a friendly atmosphere. 
                Whether you're a student looking for a study spot, a professional on a lunch break, or a family celebrating a special moment, 
                we provide the perfect setting for unforgettable experiences.
              </p>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFC107]/10 text-[#FFC107]">
                    <Utensils size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Quality Food</h4>
                    <p className="text-sm text-gray-500">Fresh ingredients daily</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFC107]/10 text-[#FFC107]">
                    <Coffee size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">Cozy Vibe</h4>
                    <p className="text-sm text-gray-500">Perfect for relaxing</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter md:text-6xl">Get In Touch</h2>
              <div className="mt-4 h-1.5 w-24 rounded-full bg-[#FFC107]" />
              <p className="mt-8 text-lg text-gray-600">
                Have a question or want to book a table? Reach out to us and we'll get back to you as soon as possible.
              </p>

              <div className="mt-12 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md text-[#3E2723]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Phone</p>
                    <p className="text-xl font-bold">01854071334</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md text-[#3E2723]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Email</p>
                    <p className="text-xl font-bold">fai540m@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md text-[#3E2723]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Location</p>
                    <p className="text-xl font-bold">3rd floor, RB Mid Town, CPDL, Muradpur Mor, Beside Mokka Hotel, Chittagong.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl md:p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Name</label>
                    <input
                      type="text"
                      className="w-full rounded-2xl border-2 border-gray-100 bg-gray-50 px-6 py-4 outline-none transition-all focus:border-[#FFC107]"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Email</label>
                    <input
                      type="email"
                      className="w-full rounded-2xl border-2 border-gray-100 bg-gray-50 px-6 py-4 outline-none transition-all focus:border-[#FFC107]"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Message</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-2xl border-2 border-gray-100 bg-gray-50 px-6 py-4 outline-none transition-all focus:border-[#FFC107]"
                    placeholder="How can we help?"
                  />
                </div>
                <button className="w-full rounded-full bg-[#3E2723] py-5 text-lg font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] py-16 px-4 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FFC107] bg-[#1A1A1A]">
                  <span className="text-lg font-bold text-white">W</span>
                </div>
                <span className="text-xl font-bold tracking-tight">WISH</span>
              </div>
              <p className="text-gray-500">
                Make a Wish, Taste the Magic! The best dining experience in Chittagong.
              </p>
              <div className="flex gap-4">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-[#FFC107] hover:text-[#1A1A1A]">
                  <Facebook size={20} />
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-[#FFC107] hover:text-[#1A1A1A]">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold">Quick Links</h4>
              <ul className="mt-6 space-y-4 text-gray-500">
                {["Home", "Menu", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <button onClick={() => scrollToSection(item.toLowerCase())} className="hover:text-[#FFC107] transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold">Operating Hours</h4>
              <ul className="mt-6 space-y-4 text-gray-500">
                <li className="flex items-center gap-3">
                  <Clock size={16} className="text-[#FFC107]" />
                  <span>Mon - Sun: 10:00 AM - 10:00 PM</span>
                </li>
                <li className="flex items-center gap-3">
                  <Star size={16} className="text-[#FFC107]" />
                  <span>Open on Holidays</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold">Newsletter</h4>
              <p className="mt-6 text-gray-500">Subscribe for special offers and updates.</p>
              <div className="mt-6 flex overflow-hidden rounded-full bg-white/5 p-1">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent px-4 text-sm outline-none"
                />
                <button className="rounded-full bg-[#FFC107] px-6 py-2 text-sm font-bold text-[#1A1A1A]">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-white/5 pt-8 text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Wish Cafe & Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
