import { htmlString } from './talks-raw';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

export interface Activity {
  title?: string | null;
  url?: string | null;
  type?: string | null;
  date?: string | null;
  description?: string | null;
  imageUrl?: string | null;
  views?: string | null;
  author?: string | null;
  submissionDate?: string | null;
}

function parseHTML(htmlString: string) {
  // Parse the HTML string using jsdom
  const dom = new JSDOM(htmlString);
  const doc = dom.window.document;

  // The rest of the function remains the same
  const tiles = doc.querySelectorAll('advocu-ui-activity-tile');
  const activities: Activity[] = Array.from(tiles).map((tile) => {
    return {
      title: (tile as any)?.querySelector('h2 a')?.textContent.trim(),
      url: (tile as any)?.querySelector('h2 a')?.getAttribute('href'),
      type: (tile as any)?.querySelector('.slug')?.textContent.trim(),
      date: (tile as any)
        ?.querySelector('advocu-schema-preview-item')
        ?.textContent.trim(),
      description: (tile as any)
        ?.querySelector('advocu-sneak-peak p')
        ?.textContent.trim(),
      imageUrl: (tile as any)
        ?.querySelector('.image img')
        ?.getAttribute('src'),
      views: (tile as any)?.querySelector('.impact .value')?.textContent.trim(),
      author: "Katerina Skroumpelou",
      // author: (tile as any)?.querySelector('.author__name')?.textContent.trim(),
      // submissionDate: (tile as any)
      //   ?.querySelector('.date__submitted span')
      //   ?.textContent.trim(),
    };
  });

  return activities;
}

// Usage
// Assuming you have the HTML string in a variable called 'htmlString'
const activitiesArray = parseHTML(htmlString);
console.log(activitiesArray);
