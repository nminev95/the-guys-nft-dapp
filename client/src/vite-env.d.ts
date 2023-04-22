/// <reference types="vite/client" />
import { MetaMaskInpageProvider } from '@metamask/providers'
declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider
  }
}
declare module '@metamask/jazzicon' {
  export default function (diameter: number, seed: number): HTMLElement
}
