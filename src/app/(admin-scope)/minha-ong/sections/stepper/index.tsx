'use client'

import { useState } from 'react'

import type { ChildrenProps, StepperProps } from './types'

export const Stepper: React.FC<StepperProps> = ({
  initialStep = 0,
  children,
  customSteps
}) => {
  const defaultActive =
    typeof initialStep === 'number'
      ? initialStep
      : customSteps.indexOf(initialStep)
  const [active, setActive] = useState(defaultActive)

  const setActiveStep = (step: number | string) => {
    if (typeof step === 'number') {
      setActive(step)
      return
    }

    setActive(customSteps.indexOf(step))
  }

  const prevStep = () => {
    if (active > 0) setActive(active - 1)
  }

  const nextStep = () => {
    if (
      active <
      children({
        nextStep,
        prevStep,
        setActiveStep,
        currentStep: active
      }).props.children.length -
        1
    )
      setActive(active + 1)
  }

  return (
    <div data-cid="stepper">
      {
        children({
          nextStep,
          prevStep,
          setActiveStep,
          currentStep: active
        } as ChildrenProps).props.children[active]
      }
    </div>
  )
}
