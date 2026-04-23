import { useEffect } from 'react';
import pagesContent from '../content/pages.json';
import siteContent from '../content/site.json';

type PageKey = keyof typeof pagesContent;

type SeoData = {
  seo_title: string;
  seo_description: string;
  canonical_url: string;
  og_title: string;
  og_description: string;
  twitter_title: string;
  twitter_description: string;
  schema: Record<string, unknown> | string;
};

const pages = pagesContent as Record<PageKey, SeoData>;
const site = siteContent as {
  site_title: string;
  site_description: string;
  schema: Record<string, unknown> | string;
};
const schemaElementId = 'page-schema';

function setMetaAttribute(selector: string, attribute: 'content' | 'href', value: string) {
  const element = document.head.querySelector(selector);

  if (element) {
    element.setAttribute(attribute, value);
  }
}

function ensureMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    Object.entries(attributes).forEach(([name, value]) => {
      if (name !== 'content') {
        element?.setAttribute(name, value);
      }
    });
    document.head.appendChild(element);
  }

  if (attributes.content) {
    element.setAttribute('content', attributes.content);
  }
}

function ensureCanonical(url: string) {
  let element = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', url);
}

function parseSchema(schema: Record<string, unknown> | string) {
  if (typeof schema !== 'string') {
    return schema;
  }

  try {
    return JSON.parse(schema);
  } catch {
    return schema;
  }
}

function getSchemaText(schema: Record<string, unknown> | string) {
  const parsedSchema = parseSchema(schema);
  return typeof parsedSchema === 'string' ? parsedSchema : JSON.stringify(parsedSchema);
}

function getCombinedSchema(pageSchema: Record<string, unknown> | string) {
  const globalSchema = parseSchema(site.schema);
  const localSchema = parseSchema(pageSchema);

  if (JSON.stringify(globalSchema) === JSON.stringify(localSchema)) {
    return localSchema;
  }

  return [globalSchema, localSchema];
}

function updateSchema(schema: Record<string, unknown> | string) {
  let element = document.getElementById(schemaElementId) as HTMLScriptElement | null;

  if (!element) {
    element = document.head.querySelector('script[type="application/ld+json"]') as HTMLScriptElement | null;
  }

  if (!element) {
    element = document.createElement('script');
    element.type = 'application/ld+json';
    document.head.appendChild(element);
  }

  if (!element.id) {
    element.id = schemaElementId;
  }

  element.text = getSchemaText(getCombinedSchema(schema));
}

export default function SeoMeta({ page }: { page: PageKey }) {
  useEffect(() => {
    const seo = pages[page];

    if (!seo) {
      return;
    }

    const title = seo.seo_title || site.site_title;
    const description = seo.seo_description || site.site_description;
    const ogTitle = seo.og_title || title;
    const ogDescription = seo.og_description || description;
    const twitterTitle = seo.twitter_title || title;
    const twitterDescription = seo.twitter_description || description;

    document.title = title;
    ensureMeta('meta[name="description"]', { name: 'description', content: description });
    ensureMeta('meta[property="og:title"]', { property: 'og:title', content: ogTitle });
    ensureMeta('meta[property="og:description"]', { property: 'og:description', content: ogDescription });
    ensureMeta('meta[property="og:url"]', { property: 'og:url', content: seo.canonical_url });
    ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: twitterTitle });
    ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: twitterDescription });
    ensureCanonical(seo.canonical_url);
    updateSchema(seo.schema);

    setMetaAttribute('meta[name="description"]', 'content', description);
    setMetaAttribute('link[rel="canonical"]', 'href', seo.canonical_url);
  }, [page]);

  return null;
}
