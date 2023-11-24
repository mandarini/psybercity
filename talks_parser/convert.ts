import { Activity } from './parse';
import { saveToFile } from './save';
import { allTalks } from './talks';

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

function convertToTalks(activities: Activity[]): Talk[] {
  return activities.map((activity) => {
    let parsedDate = activity.date ? new Date(activity.date) : new Date();
    let timestamp = parsedDate.toISOString();

    return {
      postType: activity.type || 'Unknown',
      link: activity.url || undefined,
      title: activity.title || undefined,
      description: activity.description || undefined,
      date: activity?.date?.replace('today', '') || undefined,
      impact: {
        value: activity.views || undefined,
        label: getImpactLabel(activity.type),
      },
      timestamp: timestamp,
    };
  });
}

function getImpactLabel(type?: string | null): string | undefined {
  switch (type) {
    case 'Written Content':
      return 'Reads';
    case 'Workshops':
      return 'People Trained';
    case 'Public Speaking':
      return 'People Attended';
    case 'Video / Podcast':
      return 'Views';
    default:
      return undefined;
  }
}

saveToFile('merged-talks.json', convertToTalks(allTalks));
