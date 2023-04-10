import slugify from "slugify";

import Championship from "../models/Championship.js";

const championships = [
    new Championship('AEW World'),
    new Championship('AEW Women\'s World'),
    new Championship('AEW World Tag Team'),
    new Championship('AEW World Trios'),
    new Championship('AEW International'),
    new Championship('AEW TBS'),
    new Championship('AEW TNT'),
];

export default championships;