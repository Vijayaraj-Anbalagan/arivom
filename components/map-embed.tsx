export function MapEmbed() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
      <h3 className="font-poppins text-xl font-semibold text-gray-900">
        Our Location
      </h3>
      <p className="mt-2 text-gray-600">
        Visit us at our office in Chennai, Tamil Nadu.
      </p>
      <div className="mt-6 aspect-[4/3] w-full overflow-hidden rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3195.085008650479!2d80.23729427403197!3d12.921337015980397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525c8cd40b76e7%3A0x681487984b55f7bb!2sKCG%20College%20of%20Technology!5e1!3m2!1sen!2sin!4v1732692068889!5m2!1sen!2sin" 
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