import { MapPin, Phone, MessageCircle, Clock, Navigation, CheckCircle2, Car } from "lucide-react";

export function LocalCatchmentSection() {
  return (
    <section className="bg-white px-4 py-16 sm:py-20 lg:py-24 border-t border-[#dce4e5]" aria-label="Clinic Location & Access">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#E95A35] bg-[#E95A35] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_22px_-8px_rgba(233,90,53,0.6)]">
            <MapPin className="h-3.5 w-3.5 text-white" /> Location &amp; Directions
          </p>
          <h2 className="mt-3 font-sans text-[30px] font-bold leading-tight tracking-[-0.035em] text-[#1F6878] sm:text-[40px]">
            Visit Our Dental Clinic in <span className="text-[#1F6878]">Surampatti, Erode</span>
          </h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[#707574] sm:text-[15px]">
            Conveniently situated at Surampatti Four Road junction, serving patients and families across Erode and neighboring communities.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Left Column: Address, Directions, and Travel Time from Feeder Areas */}
          <div className="space-y-6">
            <div className="rounded-[22px] border border-[#1F6878]/15 bg-[#F5F2EB] p-6 sm:p-7 shadow-sm">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#E4F0F2] text-[#1F6878] shadow-sm">
                  <MapPin className="h-5 w-5 text-[#1F6878]" />
                </span>
                <div>
                  <h3 className="font-sans text-[18px] font-bold text-[#1F6878]">
                    Sri Saraswathi Dental Clinic
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-[#555a59]">
                    866, Soli Complex, Surampatti Four Road,<br />
                    Erode, Tamil Nadu – 638009, India
                  </p>
                  <p className="mt-2 text-[11px] font-semibold text-[#1F6878]">
                    Landmark: Directly opposite / at Soli Complex, Surampatti Four Road Junction
                  </p>
                </div>
              </div>

              {/* Working Hours & Parking */}
              <div className="mt-5 grid gap-3 border-t border-[#dce4e5] pt-5 sm:grid-cols-2">
                <div className="flex items-center gap-2.5 text-[12px] text-[#555a59]">
                  <Clock className="h-4 w-4 shrink-0 text-[#1F6878]" />
                  <span>Mon–Sat: 9:00 AM – 8:45 PM<br />(Sun: Emergency only)</span>
                </div>
                <div className="flex items-center gap-2.5 text-[12px] text-[#555a59]">
                  <Car className="h-4 w-4 shrink-0 text-[#1F6878]" />
                  <span>Two-wheeler &amp; car parking available at Soli Complex</span>
                </div>
              </div>
            </div>

            {/* Contextual Micro-Locations / Feeder Areas */}
            <div className="rounded-[22px] border border-[#1F6878]/15 bg-[#E4F0F2]/50 p-6">
              <h4 className="font-sans text-[13px] font-bold uppercase tracking-wider text-[#1F6878]">
                Easily Accessible From Across Erode:
              </h4>
              <div className="mt-3.5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 text-[12px]">
                <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-[#1F6878] shadow-sm">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#19B987] shrink-0" />
                  <span>Surampatti (0 km)</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-[#1F6878] shadow-sm">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#19B987] shrink-0" />
                  <span>EVN Road (3 mins)</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-[#1F6878] shadow-sm">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#19B987] shrink-0" />
                  <span>Perundurai Rd (5 mins)</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-[#1F6878] shadow-sm">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#19B987] shrink-0" />
                  <span>Sampath Nagar (6 mins)</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-[#1F6878] shadow-sm">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#19B987] shrink-0" />
                  <span>Thindal (10 mins)</span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-[#1F6878] shadow-sm">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#19B987] shrink-0" />
                  <span>Kollampalayam (7 mins)</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://maps.google.com/?q=866+Soli+Complex+Surampatti+Four+Road+Erode+Tamil+Nadu+638009"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#1F6878] px-5 text-[11px] font-bold text-white shadow-sm transition hover:bg-[#154a55]"
              >
                <Navigation className="h-3.5 w-3.5" /> Get Directions on Google Maps
              </a>
              <a
                href="tel:04244272494"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-[#1F6878]/30 bg-white px-5 text-[11px] font-bold text-[#1F6878] transition hover:border-[#1F6878] hover:bg-[#F5F2EB]"
              >
                <Phone className="h-3.5 w-3.5" /> Call Clinic: 0424 427 2494
              </a>
              <a
                href="https://wa.me/919865753494?text=Hello%20Sri%20Saraswathi%20Dental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#19B987] px-4 text-[11px] font-bold text-white shadow-sm transition hover:bg-[#139A70]"
              >
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="overflow-hidden rounded-[26px] border border-[#1F6878]/15 bg-[#F5F2EB] shadow-[0_16px_40px_-25px_rgba(31,104,120,0.3)]">
            <iframe
              title="Sri Saraswathi Dental Clinic Surampatti Erode Google Map"
              src="https://maps.google.com/maps?q=866%20Soli%20Complex%20Surampatti%20Four%20Road%20Erode%20Tamil%20Nadu%20638009&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full h-[360px] sm:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
