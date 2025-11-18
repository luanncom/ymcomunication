/* eslint-disable @typescript-eslint/no-explicit-any */

// import { isSuspiciousIP } from '@/utils/IPChecker';
import { isFacebookOrInstagramBrowser } from '@/utils/browser-detector';

// SET FILTER DATA
const blockedCountryList = ['BR', 'RU', 'KP', 'IR'];
const blockedLanguageList = ['pt-br'];

// BOT DETECT
function isBot(userAgent: string): boolean {
  return /bot|spider|crawler|google|bing|yandex|read-aloud|facebookexternalhit/i.test(userAgent);
};

type GetUserLayerProps = {
  cks: any;
  hdrs: Headers;
};

export async function getUserLayer({
  cks,
  hdrs,
}: GetUserLayerProps) {

  // GET HEADERS DATA
  // const ip = hdrs.get('x-real-ip') || hdrs.get('x-forwarded-for') || '';
  const url = hdrs.get('x-url') || ''; 
  const country = hdrs.get('x-vercel-ip-country') || 'BR';
  const userAgent = hdrs.get('User-Agent') || '';
  const userLanguage = hdrs.get('Accept-Language')?.toLowerCase() || "";

  // GET PARAMS DATA
  const catParam = cks.get('xcat_valid');
  const localParam = hdrs.get('x-local-param') === 'true';

  console.log('HEADERS:', Object.fromEntries(hdrs.entries()));
  console.log('CONTENT:', catParam?.value);

  // LOCAL TEST VERIFY
  if (localParam) {
    console.log('BLACK CONTENT: LOCAL TEST');
    return 3;
  };

  // BOT FILTER
  if (isBot(userAgent)) {
    console.log('WHITE CONTENT: BOT');
    return 1;
  };

  // PARAMS FILTER
  if (!catParam) {
    console.log('WHITE CONTENT: PARAMS');
    return 1;
  };

  // COUNTRY FILTER
  if (blockedCountryList.includes(country)) {
    console.log('WHITE CONTENT: COUNTRY');
    return 1;
  };

  const isMobile = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);

  // DEVICE FILTER
  if (!isMobile) {
    console.log('GRAY CONTENT: DEVICE');
    return 2;
  };

  // LANGUAGE FILTER
  if (blockedLanguageList.includes(userLanguage)) {
    console.log('GRAY CONTENT: LANGUAGE');
    return 2;
  };

  const isFBIG = isFacebookOrInstagramBrowser(hdrs, url);

  // BROWSER AND REFFERER FILTER
  if (!isFBIG) {
    console.log('GRAY CONTENT: BROWSER/REFERRER');
    return 2;
  };

  /*

  const connectionFilter = await isSuspiciousIP(ip);

  // CONNECTION VERIFY
  if (connectionFilter) {
    console.log('GRAY CONTENT: CONNECTION');
    return 2;
  };

  */

  console.log('BLACK CONTENT: CLEAN');
  return 3;

};