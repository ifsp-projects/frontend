export function composeEventHandlers<E, Args>(
  originalEventHandler?: (event: E, ...args: Args[]) => void,
  ourEventHandler?: (event: E, ...args: Args[]) => void,
  { checkForDefaultPrevented = true } = {}
) {
  return function handleEvent(event: E, ...args: Args[]) {
    originalEventHandler?.(event, ...args)

    if (
      checkForDefaultPrevented === false ||
      !(event as unknown as Event)?.defaultPrevented
    ) {
      return ourEventHandler?.(event, ...args)
    }
  }
}
