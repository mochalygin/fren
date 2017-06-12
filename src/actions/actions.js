/*
 * типы действий
 */

export const GOT_PRIVATE_KEY = 'GOT_PRIVATE_KEY'

/*
 * генераторы действий
 */

export function gotPrivateKey(key) {
  return { 
    type: GOT_PRIVATE_KEY,
    key: key,
  }
}
