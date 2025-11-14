export interface ChildrenProps {
  currentStep: number
  nextStep: () => void
  prevStep: () => void
  setActiveStep: (index: number | string) => void
}

export type StepProps = ChildrenProps

export interface StepperProps {
  children: (props: ChildrenProps) => JSX.Element
  customSteps?: string[]
  initialStep?: number | string
}
