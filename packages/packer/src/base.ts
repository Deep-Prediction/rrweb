import type { eventWithTime } from '@deepprediction/rrweb-types';

export type eventWithTimeAndPacker = eventWithTime & {
  v: string;
};

export const MARK = 'v1';
