export interface UseClickOutsideProps<T extends HTMLElement> {
  enabled?: boolean
  handler: VoidFunction
  ref: React.RefObject<T | null>
}
