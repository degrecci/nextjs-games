type GamePlatformMetacritic = {};

type Ratings = {};

type Reactions = {};

type AddedByStatus = {};

type Platforms = {
  id: number;
  name: string; // Required string with 1 to 100 characters
  slug: string; // Non-empty slug string (^[-a-zA-Z0-9_]+$)
  games_count: number;
  image_background: string; // URI formatted string
  description: string;
  image: string | null; // Nullable URI formatted string
  year_start: number | null; // Nullable number in the range [0, 32767]
  year_end: number | null; // Nullable number in the range [0, 32767]
};

export interface GameRead {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms: GamePlatformMetacritic[];
  released: string; // Date formatted string
  tba: boolean;
  updated: string; // Date-time formatted string
  background_image: string; // URI formatted string
  background_image_additional: string;
  website: string; // URI formatted string
  rating: number; // Required number
  rating_top: number;
  ratings: Ratings;
  reactions: Reactions;
  added: number;
  added_by_status: AddedByStatus;
  playtime: number; // In hours
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: string;
  reddit_url: string; // Non-empty Reddit URL
  reddit_name: string; // Non-empty Reddit name
  reddit_description: string; // Non-empty Reddit description
  reddit_logo: string; // Non-empty URI formatted string
  reddit_count: number;
  twitch_count: string;
  youtube_count: string;
  reviews_text_count: string;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string; // Non-empty Metacritic URL
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  esrb_rating: object | null; // Nullable object
  platforms: Platforms[]; // Array of objects (You may need to define the platform type)
}
