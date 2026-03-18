import { Fragment, cloneElement } from 'react'

import { XMark } from '@/assets/icons/x-mark'
import { Dialog, Transition } from '@headlessui/react'

import type { ModalProps } from './types'

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  setIsOpen,
  dismissible = true,
  children,
  className,
  fullScreen,
  onClose
}) => {
  const handleCloseModal = () => {
    if (onClose) onClose()
    if (dismissible) setIsOpen(false)
  }

  return (
    <Transition as={Fragment} show={isOpen} appear>
      <Dialog as="div" className="relative z-50" onClose={handleCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-default"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-default"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-slate-900/70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div
            className={`flex min-h-full items-center justify-center text-center ${!fullScreen ? 'p-4 lg:py-12' : ''} ${className}`}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-default"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-default"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full shadow-xl transition-all">
                {dismissible && (
                  <div className="absolute top-3 right-3">
                    <button
                      aria-label="close-modal"
                      className="w-7 cursor-pointer rounded-sm p-1 text-slate-600 duration-300 lg:hover:bg-slate-200 lg:hover:text-slate-500"
                      onClick={handleCloseModal}
                    >
                      <XMark />
                    </button>
                  </div>
                )}
                {cloneElement(children, {
                  className: `${children.props.className} ${
                    fullScreen ? `min-h-screen w-screen` : ''
                  }`
                })}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
