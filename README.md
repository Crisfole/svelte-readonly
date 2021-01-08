# Svelte Readonly

Not all stores should be writable outside their module. This enables that. It has no dependencies. It also has no tests, but that's ok. It's not that interesting.

## API

This exports `readonly` as a named and default export. That's it. Readonly takes a writable store and returns a readable store. That's it.

## Example

This example lets you subscribe to user changes, but doesn't let you set it outside the logIn/logOut functions. This gets more handy the less you want to accidentally set something incorrectly outside a module. (Adding session timeouts, warnings, etc).

```
// session.js
import { writable } from 'svelte/store';
import readonly from 'svelte-readonly';

const writableUser = writable(null);

export const user = readonly(writableUser);

export async function logIn(username, password) {
	try {
		writableUser.set(await api.logIn(username, password));
	} catch (err) {
		// handle login error
	}
}

export async function logOut() {
	writableUser.set(null);
}
```
