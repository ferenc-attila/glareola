import axios from "axios";
import { load } from "cheerio";

export const getUrls = async (url: string) => {
    let pageContainsData = true;
    const urls = [url];
    while (pageContainsData) {
        let counter = 25;
        let nextPage = url + `&lap=${counter}`;
        const { data } = await axios.get(nextPage);
        const cheerioAPI = load(data);
        const observationsTable = cheerioAPI('#obstable');
        if (observationsTable) {
            urls.push(nextPage);
        } else {
            pageContainsData = false;
        }
    }
    console.log('getUrls');
    console.log(urls);
    return urls;
}
