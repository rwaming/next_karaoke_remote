import Script from 'next/script'

export default function GapiScript(): JSX.Element {
  return (
    <Script
      src='https://apis.google.com/js/api.js'
      defer
      strategy='lazyOnload'
    />
  )
}
