"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex justify-center px-4 mt-19">
        <form
          action="mailto:duncan.miard@outlook.fr"
          method="POST"
          encType="text/plain"
          className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg space-y-6"
        >
          <h2 className="text-3xl font-bold text-center">Me Contacter</h2>

          <div className="flex space-x-4">
            <input
              type="text"
              name="Nom"
              placeholder="Nom"
              required
              className="w-1/2 p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="Prénom"
              placeholder="Prénom"
              required
              className="w-1/2 p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <input
            type="email"
            name="Email"
            placeholder="Email"
            required
            className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="Message"
            placeholder="Votre message..."
            required
            rows={5}
            className="w-full p-3 rounded bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-bold py-3 px-6 rounded"
          >
            Envoyer
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
