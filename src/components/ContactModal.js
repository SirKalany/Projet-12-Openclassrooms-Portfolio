"use client";

import { useDispatch, useSelector } from "react-redux";
import { closeContact } from "../app/store/slices/modalSlice";

export default function ContactModal() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.modal.isOpen);

  if (!isOpen) return null; // si fermé → rien ne s'affiche

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg relative">
        <button
          onClick={() => dispatch(closeContact())}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✖
        </button>

        <h2 className="text-3xl font-bold text-center mb-6">Me Contacter</h2>

        <form
          action="mailto:duncan.miard@outlook.fr"
          method="POST"
          encType="text/plain"
          className="space-y-4"
        >
          <div className="flex space-x-4">
            <input
              type="text"
              name="Nom"
              placeholder="Nom"
              required
              className="w-1/2 p-3 rounded bg-gray-700 focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="Prenom"
              placeholder="Prenom"
              required
              className="w-1/2 p-3 rounded bg-gray-700 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <input
            type="email"
            name="Email"
            placeholder="Email"
            required
            className="w-full p-3 rounded bg-gray-700 focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="Message"
            placeholder="Votre message..."
            required
            rows={5}
            className="w-full p-3 rounded bg-gray-700 focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-bold py-3 px-6 rounded"
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
