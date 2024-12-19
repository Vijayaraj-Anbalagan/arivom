export function MapEmbed() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
      <h3 className="font-poppins text-xl font-semibold text-gray-900">
        Our Location
      </h3>
      <p className="mt-2 text-gray-600">
        Visit us at our office in Sattur, Virudhunagar District, Tamil Nadu.
      </p>
      <div className="mt-6 aspect-[4/3] w-full overflow-hidden rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.3899705823783!2d77.91162732398188!3d9.366256283620785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06cac5ca62f31f%3A0xabaa0cda44e4a476!2sHousing%20Board%20Colony%2C%20Sattur%2C%20Tamil%20Nadu%20626203!5e1!3m2!1sen!2sin!4v1734640402879!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
