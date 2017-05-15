/*
 * типы действий
 */

export const NEW_KEY = 'NEW_KEY'

/*
 * генераторы действий
 */

export function newKey(privateKey, publicKey, fingerprint) {
  return { 
    type: NEW_KEY,
    privateKey: privateKey,
    publicKey: publicKey,
    fingerprint: fingerprint
  }
}