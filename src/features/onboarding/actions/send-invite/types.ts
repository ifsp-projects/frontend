export type ActionResult =
  | { success: true }
  | { success: false; errors: Record<string, string[]> | { _root: string } }
