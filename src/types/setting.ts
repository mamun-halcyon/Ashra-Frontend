export interface ISetting {
  id?: number;
  logo: string;
  favicon: string;
  footer_info: string;
  footer_copywrite: string;
  contact_number: string;
  contact_email: string;
  address: string;
  google_analytics?: string;
  facebook_pixel?: string;
  header_script?: string;
  footer_script?: string;
  facebook_url?: string;
  linkedIn_url?: string;
  youtube_url?: string;
  twitter_url?: string;
  instagram_url?: string;
  play_store_url?: string | null;
  app_store_url?: string | null;
  cash_on_message?: string;
  online_payment_message?: string;
  popup_image?: string;
  is_popup_visible?: boolean;
  created_at?: string;
  updated_at?: string;
}
