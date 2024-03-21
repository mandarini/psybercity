import * as talks from './talks-converted.json';
import { saveToFile } from './save';

const sortedTalks = talks
  .map((talk) => ({ ...talk }))
  .sort((a, b) => {
    const dateA = new Date(a.timestamp || 0).getTime();
    const dateB = new Date(b.timestamp || 0).getTime();
    return dateB - dateA;
  });

saveToFile('sorted_talks.json', sortedTalks);
