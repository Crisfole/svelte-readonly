import { Writable, Readable } from 'svelte/store';

export function readonly<T>(store: Writable<T>): Readable<T> {
  return { subscribe: store.subscribe };
}

export default readonly;
