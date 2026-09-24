import { describe, expect, it } from 'vitest';
import { statSync } from 'node:fs';
import { join } from 'node:path';
import { events } from '../../src/data/site';

describe('curated activity archive', () => {
  it('contains 12–18 dated activities in newest-first order', () => {
    expect(events.length).toBeGreaterThanOrEqual(12);
    expect(events.length).toBeLessThanOrEqual(18);
    const dates = events.map((event) => event.date);
    expect(dates).toEqual([...dates].sort().reverse());
    expect(dates.every((date) => /^\d{4}-\d{2}-\d{2}$/.test(date))).toBe(true);
    expect(new Set(dates.map((date) => date.slice(0, 4)))).toEqual(new Set(['2024', '2025', '2026']));
  });

  it('features three different cities and covers all five city chapters', () => {
    const featured = events.filter((event) => event.featured);
    expect(featured).toHaveLength(3);
    expect(new Set(featured.map((event) => event.city)).size).toBe(3);
    for (const city of ['Sydney', 'Melbourne', 'Adelaide', 'Perth', 'Brisbane']) {
      expect(events.some((event) => event.city === city)).toBe(true);
    }
  });

  it('keeps bilingual copy and a source trail for every activity', () => {
    for (const event of events) {
      expect(event.title.trim()).not.toBe('');
      expect(event.titleZh.trim()).not.toBe('');
      expect(event.summary.trim()).not.toBe('');
      expect(event.summaryZh.trim()).not.toBe('');
      expect(event.sourceUrl).toMatch(/^https:\/\//);
      expect(event.detail, event.slug).toMatch(/\S/);
      expect(event.detailZh, event.slug).toMatch(/\S/);
    }
  });

  it('uses a real local image with bilingual alt text for every selected activity', () => {
    for (const event of events) {
      expect(event.image, event.slug).toMatch(/^\/images\/.+\.(webp|png|jpe?g)$/);
      expect(event.imageAlt?.trim(), event.slug).not.toBe('');
      expect(event.imageAltZh?.trim(), event.slug).not.toBe('');
      const imageFile = join(process.cwd(), 'public', event.image!.slice(1));
      expect(statSync(imageFile).size, event.slug).toBeGreaterThan(1_000);
    }
  });

  it('foregrounds AI, skills and working life without misdating the 2025 Sydney archive', () => {
    const professionalTypes = new Set(['AI & skills', 'Career', 'Learning', 'Networking', 'Finance']);
    expect(events.filter((event) => professionalTypes.has(event.type)).length).toBeGreaterThanOrEqual(10);
    expect(events.find((event) => event.slug === 'sydney-girls-ai')?.featured).toBe(true);
    expect(events.find((event) => event.slug === 'sydney-tax-tips-dinner')?.date).toBe('2025-09-19');
    expect(events.find((event) => event.slug === 'sydney-learning-tools')?.date).toBe('2025-09-13');
  });
});
