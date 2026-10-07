// =============================================================================
// EVM CINEMAS — Core Type Definitions
// =============================================================================

/** Language/format codes for multi-language support */
export type Language = 'Tamil' | 'English' | 'Hindi' | 'Telugu' | 'Malayalam' | 'Kannada';

/** Available screen formats */
export type ScreenFormat = '2K' | '4K' | 'IMAX' | 'Dolby Atmos' | 'Dolby Cinema';

/** Certificate ratings */
export type CertificateRating = 'U' | 'UA' | 'A' | 'S';

/** Status for movie availability */
export type MovieStatus = 'now_showing' | 'coming_soon' | 'ended';

// -----------------------------------------------------------------------------
// Movie
// -----------------------------------------------------------------------------

export interface Movie {
  id: string;
  title: string;
  slug: string;
  language: Language;
  genres: string[];
  duration: number; // in minutes
  certificate: CertificateRating;
  posterUrl: string;
  bannerUrl: string;
  trailerUrl?: string;
  synopsis: string;
  cast: string[];
  director: string;
  releaseDate: string; // ISO date string
  status: MovieStatus;
  rating?: number; // out of 10
  formats: ScreenFormat[];
}

// -----------------------------------------------------------------------------
// Showtime & Scheduling
// -----------------------------------------------------------------------------

export interface Showtime {
  id: string;
  movieId: string;
  screenId: string;
  time: string; // e.g. "10:30 AM"
  format: ScreenFormat;
  language: Language;
  bookingUrl?: string; // external BookMyShow URL (future)
  isAlmostFull?: boolean;
  isSoldOut?: boolean;
}

export interface ShowDate {
  date: string; // ISO date string e.g. "2026-10-07"
  dayLabel: string; // e.g. "Today", "Tomorrow", "Wed"
  showtimes: Showtime[];
}

export interface MovieSchedule {
  movie: Movie;
  dates: ShowDate[];
}

// -----------------------------------------------------------------------------
// Coming Soon
// -----------------------------------------------------------------------------

export interface ComingSoonMovie {
  id: string;
  title: string;
  slug: string;
  language: Language;
  genres: string[];
  certificate?: CertificateRating;
  posterUrl: string;
  bannerUrl?: string;
  trailerUrl?: string;
  synopsis?: string;
  releaseDate: string; // ISO date or release string
  formats?: ScreenFormat[];
  isNotifyEnabled?: boolean;
}

// -----------------------------------------------------------------------------
// Experience Features ("More Than A Movie")
// -----------------------------------------------------------------------------

export interface ExperienceFeature {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badge?: string;
  iconName: string;
  imageUrl?: string;
  learnMoreUrl?: string;
}

// -----------------------------------------------------------------------------
// Screen / Auditorium Details
// -----------------------------------------------------------------------------

export interface ScreenDetail {
  id: string;
  screenNumber: string;
  title: string;
  badge: string;
  capacity: number;
  projection: string;
  audio: string;
  seating: string;
  description: string;
  imageUrl?: string;
  specs: { label: string; value: string }[];
}

// -----------------------------------------------------------------------------
// Legacy & History Milestone
// -----------------------------------------------------------------------------

export interface LegacyMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
}

// -----------------------------------------------------------------------------
// Cinema / Location
// -----------------------------------------------------------------------------

export interface Screen {
  id: string;
  name: string;
  capacity: number;
  formats: ScreenFormat[];
  description?: string;
}

export interface CinemaInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  mapUrl: string;
  mapEmbedUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  screens: Screen[];
  socialLinks: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
  };
  operatingHours: string;
}

// -----------------------------------------------------------------------------
// Gallery Item
// -----------------------------------------------------------------------------

export interface GalleryItem {
  id: string;
  imageUrl: string;
  thumbnailUrl?: string;
  alt: string;
  caption?: string;
  category: 'interior' | 'screen' | 'lobby' | 'exterior' | 'event';
  order: number;
}

// -----------------------------------------------------------------------------
// Navigation
// -----------------------------------------------------------------------------

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

// -----------------------------------------------------------------------------
// Homepage Section Configuration
// -----------------------------------------------------------------------------

export interface HomepageSection {
  id: string;
  label: string;
  order: number;
}
