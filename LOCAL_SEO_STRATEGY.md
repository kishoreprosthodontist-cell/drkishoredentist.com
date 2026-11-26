# Local SEO Strategy & Micro-Location Blueprint
**Client**: Sri Saraswathi Dental Clinic  
**Lead Doctor**: Dr. Kishore Kumar  
**Address**: 866, Soli Complex, Surampatti Four Road, Erode, Tamil Nadu – 638009, India  
**Target Geo**: Erode urban center, Surampatti, and surrounding catchment neighborhoods  
**Website**: `https://drkishoredentist.com`  

---

## 1. Local Search Objectives

Google's Local Map Pack (the "Local 3-Pack") and local organic search results depend on three core algorithmic pillars:
1. **Relevance**: How well Sri Saraswathi Dental Clinic matches the search query (*Dentist in Erode*, *Root Canal Treatment in Surampatti*, etc.).
2. **Prominence**: The clinic's authority, verified reviews, structured business citations, website content depth, and brand mentions across Tamil Nadu healthcare directories.
3. **Proximity**: Physical distance between the searcher's device location and 866, Soli Complex, Surampatti Four Road, Erode.

> [!IMPORTANT]
> Proximity is determined by physical clinic coordinates. To capture patients in surrounding feeder areas without spamming Google or violating Search Essentials, we use **contextual geographic integration** (driving directions, landmarks, travel times) and **never create spammy doorway pages**.

---

## 2. Geo-Targeting & Micro-Location Catchment Matrix

Surampatti Four Road is a central transit node connecting south-central Erode to major educational and commercial corridors. Below is our natural integration matrix:

| Micro-Location | Distance from Clinic | Primary Route / Landmark Reference | Contextual Usage on Website |
|---|---|---|---|
| **Surampatti / Surampatti Four Road** | Primary Location (0 km) | Soli Complex junction, Surampatti Four Road | Primary NAP address, H1 on Contact page, local schema `streetAddress`, directions anchor |
| **Perundurai Road** | ~2.5 - 3.5 km | Via EVN Road or Surampatti main connection | "Conveniently accessible for residents along Perundurai Road via Surampatti Four Road junction" |
| **EVN Road** | ~1.5 - 2.0 km | Direct arterial link to Surampatti Four Road | "Just 5 minutes from EVN Road with hassle-free two-wheeler and car parking" |
| **Sampath Nagar** | ~2.0 - 3.0 km | Via Gandhiji Road / Surampatti link | "Serving families from Sampath Nagar looking for gentle, multi-specialty dental care" |
| **Thindal** | ~5.0 - 6.5 km | Via Perundurai Road / Ring link | "Easy driving access for patients traveling from Thindal seeking experienced dental implants and braces" |
| **Kollampalayam** | ~3.0 - 4.0 km | Via Railway Colony / South Erode link | "Close proximity for patients from Kollampalayam and Railway Colony areas" |
| **Erode Bus Stand / Railway Station** | ~3.5 km | Central Erode transit hubs | Direct public bus route references to Surampatti Four Road bus stop |

---

## 3. On-Site Local SEO Implementation Blueprint

### 3.1. Standardized NAP (Name, Address, Phone)
The clinic details must be character-for-character identical across all footer elements, contact pages, structured data, and external business citations:

- **Legal Business Name**: Sri Saraswathi Dental Clinic
- **Clinic Address**: 866, Soli Complex, Surampatti Four Road, Erode, Tamil Nadu 638009, India
- **Landmark**: Soli Complex, Surampatti Four Road Junction
- **Primary Phone**: `+91 94432 56789` (Verified click-to-call format: `<a href="tel:+919443256789">`)
- **WhatsApp Appointment**: `<a href="https://wa.me/919443256789?text=Hello%20Dr.%20Kishore%20Dental%20Clinic,%20I%20would%20like%20to%20book%20an%20appointment">`
- **Official Website**: `https://drkishoredentist.com`
- **Email**: `kishoreprosthodontist@gmail.com`

### 3.2. Homepage Local Optimization
- Add a dedicated **"Visit Our Clinic in Erode"** section above the footer on `Home.tsx`.
- Include:
  - Street address and prominent Surampatti Four Road landmark directions.
  - Interactive Google Maps embed matching the verified Google Business Profile location.
  - Catchment badge: *"Easily accessible from Perundurai Road, EVN Road, Sampath Nagar, Thindal, and Kollampalayam"*.
  - Weekly opening hours table.

### 3.3. Contact Page Enhancements (`/contact`)
- Elevate `/contact` into the ultimate local resource page:
  - Bus routes and nearest bus stop (Surampatti Four Road Bus Stop - 50m).
  - Landmark guide (Opposite/Near Soli Complex).
  - Clear emergency dental protocol for toothache, broken crowns, or sports injuries in Erode.

### 3.4. Schema.org Micro-Data Enhancements
In `src/components/seo/schemas.ts`, enhance the `Dentist` schema:
```json
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Sri Saraswathi Dental Clinic",
  "alternateName": "Dr Kishore Dental Clinic Erode",
  "image": "https://drkishoredentist.com/images/clinic-exterior.jpg",
  "url": "https://drkishoredentist.com",
  "telephone": "+919443256789",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "866, Soli Complex, Surampatti Four Road",
    "addressLocality": "Erode",
    "addressRegion": "Tamil Nadu",
    "postalCode": "638009",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.328",
    "longitude": "77.712"
  },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Erode" },
    { "@type": "AdministrativeArea", "name": "Surampatti" },
    { "@type": "AdministrativeArea", "name": "Perundurai Road" },
    { "@type": "AdministrativeArea", "name": "Thindal" },
    { "@type": "AdministrativeArea", "name": "Sampath Nagar" },
    { "@type": "AdministrativeArea", "name": "EVN Road" },
    { "@type": "AdministrativeArea", "name": "Kollampalayam" }
  ]
}
```

---

## 4. Off-Page Local Citation & Directory Strategy

To reinforce Google's confidence in the clinic's NAP prominence in Erode, citations must be claimed or updated on high-authority Indian healthcare and business directories:

### Tier 1 — Medical & Healthcare Portals
1. **Practo**: Complete profile for Dr. Kishore Kumar under Dental Surgeon / Prosthodontist in Erode.
2. **Lybrate**: Clinic profile with exact address at Soli Complex, Surampatti Four Road.
3. **ThreeBestRated.in (Erode)**: Submit verification for consideration in top dental clinics in Erode.
4. **ClinicSpots / Sehat**: Dental clinic listing in Erode district.

### Tier 2 — Indian Local Business Directories
1. **Justdial (Erode)**: Verify listing under "Dentists in Erode" and "Dental Clinics in Surampatti". Ensure website link points to `https://drkishoredentist.com`.
2. **Sulekha (Erode)**: Verified dental healthcare category.
3. **IndiaMART**: Healthcare services profile (if applicable for specialized prosthetic supplies/services).
4. **Apple Maps / Apple Business Connect**: Essential for iPhone users searching Siri / Apple Maps for "Dentist near me" in Erode.
5. **Bing Places for Business**: Synchronize directly with verified Google Business Profile.

---

## 5. Review Generation & Reputation Protocol

Reviews mentioning specific treatments and location words naturally improve local search visibility:
- **Optimal Patient Review Pattern**: Satisfied patients naturally commenting: *"Got my root canal done by Dr. Kishore at Sri Saraswathi Dental Clinic in Surampatti, Erode. Completely painless experience."*
- **Clinic In-Person Protocol**:
  - Provide a table-top QR card at the clinic reception desk leading directly to the Google Business Profile review link.
  - Send a friendly WhatsApp thank-you message after completed procedures with a 1-click review link.
  - Owner must respond to 100% of reviews within 48 hours with thoughtful, professional, patient-confidentiality-compliant replies.
