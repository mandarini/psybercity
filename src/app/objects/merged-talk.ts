export interface Talk {
  postType: string;
  link?: string;
  title?: string;
  description?: string;
  date?: string;
  impact?: {
    value?: string;
    label?: string;
  };
  timestamp?: string;
  media?: {
    slides?: string | null;
    code?: string[] | null;
    demo?: string[] | null;
    photos?: string[] | null;
    video?: string | null;
  };
  conf_info?: {
    website?: string;
    location?: string;
    coords?: number[];
    venue?: string;
    date?: string;
  };
  conf_name?: string;
  conf_code?: string;
  extras?: string[];
}
