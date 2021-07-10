export interface ApiParams extends ApiRequest {
  country?: string;
  language?: string;
}

export interface ApiRequest {
  count?: number;
  offset?: number;
}

export interface ApiResponse {
  contents: Content[];
  length: number;
  offset: number;
  total: number;
}

export interface Content {
  content_type: string;
  dominant_colors: string[];
  formal_name: string;
  hero_banner_url: string | URL;
  id: number;
  is_new: boolean;
  membership_required: boolean;
  public_status: string;

  rating_info: RatingInfo;
  release_date_on_eshop: string; // 'YYYY-MM-DD'
  screenshots: Screenshot[];
  tags: string[];
  target_titles: string[];
}

export interface RatingInfo {
  content_descriptors: ContentDescriptor[];
  rating: Rating;
}

export interface Rating {
  age: number;
  id: number;
  name: string;
  provisional: boolean;
  svg_image_url: string | URL;
}

export interface ContentDescriptor {
  id: number;
  image_url: string | URL;
  name: string;
  svg_image_url: string | URL;
  type: string;
}

export interface Screenshot {
  images: Image[];
}

export interface Image {
  url: string | URL;
}
