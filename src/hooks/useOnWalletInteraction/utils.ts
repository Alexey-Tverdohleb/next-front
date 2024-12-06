/* eslint-disable no-console */
// import breakInTheMiddle from 'utils/breakLineInTheMiddle'

import { SuccessMessage, WalletError, WalletInteractions } from "./types"


export function getSuccessMessage(interactionType: WalletInteractions, result: SuccessMessage) {
  const { txHash, msg } = result

  let title
  let additionalMessages
  switch (interactionType) {
    case WalletInteractions.ORDER_PLACING:
      title = 'Order placed'
      additionalMessages = undefined
      break
    case WalletInteractions.ORDER_CANCELATION:
      title = 'Order canceled'
      additionalMessages = undefined
      break
    case WalletInteractions.ORDER_WITHDRAW:
      title = 'Order withdrawn'
      additionalMessages = undefined
      break
    case WalletInteractions.ORDER_CHANGE:
      title = 'Order changed'
      additionalMessages = undefined
      break
    case WalletInteractions.STAKE:
      title = 'Stake order placed'
      additionalMessages = undefined
      break
    case WalletInteractions.HARVEST:
      title = 'Harvest order placed'
      additionalMessages = undefined
      break
    case WalletInteractions.UNSTAKE:
      title = 'Unstake order placed'
      additionalMessages = undefined
      break
    case WalletInteractions.LIQUIDITY_ADD:
      title = 'Liquidity added'
      additionalMessages = undefined
      break
    case WalletInteractions.LIQUIDITY_REMOVE:
      title = 'Liquidity removed'
      additionalMessages = undefined
      break
    case WalletInteractions.REDEEM_REQUEST:
    case WalletInteractions.TRANSFORM_REQUEST:
      title = 'Transform request placed'
      additionalMessages = undefined
      break
    case WalletInteractions.DELEGATE:
      title = 'Delegated your votes!'
      additionalMessages = undefined
      break
    case WalletInteractions.UNDELEGATE:
      title = 'Revoked delegation!'
      additionalMessages = undefined
      break
    default:
      title = 'Success!'
      additionalMessages = undefined
  }

  console.log(title, additionalMessages, txHash, msg)

  return undefined
  // TODO pjordan: Readd toasts
  /*   return (
      <>
        <Text variant="subheading">{title}</Text>
        {additionalMessages}
        {msg && <Text variant="regular">{msg}</Text>}
        {txHash && (
          <Link
            variant="regular"
            href={`https://cardanoscan.io/transaction/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {breakInTheMiddle(txHash, 20)}
          </Link>
        )}
      </>
    ) */
}

export function getErrorMessage(interactionType: WalletInteractions, error: { info?: string; message?: string } & (Error | WalletError)) {
  let title
  let additionalMessages
  switch (interactionType) {
    case WalletInteractions.ORDER_PLACING:
      title = 'Order placement failed'
      additionalMessages = undefined
      break
    case WalletInteractions.ORDER_CANCELATION:
      title = 'Order cancelation failed'
      additionalMessages = undefined
      break
    case WalletInteractions.ORDER_WITHDRAW:
      title = 'Order withdraw failed'
      additionalMessages = undefined
      break
    case WalletInteractions.ORDER_CHANGE:
      title = 'Order change failed'
      additionalMessages = undefined
      break
    case WalletInteractions.STAKE:
      title = 'Staking failed'
      additionalMessages = undefined
      break
    case WalletInteractions.UNSTAKE:
      title = 'Unstaking failed'
      additionalMessages = undefined
      break
    case WalletInteractions.LIQUIDITY_ADD:
      title = 'Liquidity addition failed'
      additionalMessages = undefined
      break
    case WalletInteractions.LIQUIDITY_REMOVE:
      title = 'Liquidity removing failed'
      additionalMessages = undefined
      break
    case WalletInteractions.TRANSFORM_REQUEST:
      title = 'Transform request failed'
      additionalMessages = undefined
      break
    case WalletInteractions.REDEEM_REQUEST:
      title = 'Redeem request failed'
      additionalMessages = undefined
      break
    default:
      title = 'Error!'
      additionalMessages = undefined
  }
  console.log(title, additionalMessages)

  // let details
  if (error instanceof WalletError) {
    const message = error.getMessage()
    const docsRef = error.getDocsLink()
    console.log('Error during wallet interaction: ', message, docsRef)
    // TODO pjordan: Readd as soon as toasts are avialable
    /*     details = (
          <>
            <Text variant="regular">Something went wrong{message ? ':' : '!'}</Text>
            {message && (
              <Text variant="subtle" fontStyle="italic">
                {message}
              </Text>
            )}
            {additionalMessages}
            {docsRef && (
              <Link href={docsRef} target="_blank" rel="noopener noreferrer">
                Learn more.
              </Link>
            )}
          </>
        ) */
  } else {
    const message = error?.message ?? error?.info ?? error
    console.log('Error during wallet interaction: ', message)
    /*     details = (
          <>
            <Text variant="regular">Something went wrong:</Text>
            <Text variant="subtle" fontStyle="italic">
              {JSON.stringify(message, Object.getOwnPropertyNames(message))}
            </Text>
          </>
        ) */
  }

  return undefined
  /*   return (
      <>
        <Text variant="subheading">{title}</Text>
        {details}
      </>
    ) */
}