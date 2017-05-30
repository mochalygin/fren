/*
 * типы действий
 */

export const NEW_KEY = 'NEW_KEY'

/*
 * генераторы действий
 */

export function newKey(key) {
  return { 
    type: NEW_KEY,
    key: key,
  }
}