import { QueryStatus } from '@reduxjs/toolkit/dist/query'
import { useCallback, useMemo } from 'react'
import { SUBMITTED_INTERACTIONS, SuccessMessage, WalletInteractions } from './types'
import { getErrorMessage, getSuccessMessage } from './utils'
// import { useLazySubmitTransactionQuery } from 'state/api/submit'
// import useToasts from './useToasts'



export default function useOnWalletInteraction(interactionType: WalletInteractions) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const success = useCallback((_arg: unknown) => { }, [])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const error = useCallback((_arg: unknown) => { }, [])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const submitTransaction = useCallback(async (_arg: unknown) => ({ status: QueryStatus.fulfilled, data: "" }), [])
  /*   const { success, error } = useToasts()
    const [submitTransaction] = useLazySubmitTransactionQuery() */

  const onSuccess = useCallback(
    (result: SuccessMessage) => {
      success(getSuccessMessage(interactionType, result))
      if (SUBMITTED_INTERACTIONS.includes(interactionType) && result.txCbor) {
        submitTransaction(result.txCbor).then(({ status, data }) => {
          if (status !== QueryStatus.fulfilled) {
            // eslint-disable-next-line no-console
            console.error(`Could not submit transaction early! (${status})\nPlease notify the team:\n${data}`)
          }
        })
      }
    },
    [success, interactionType, submitTransaction],
  )

  const onError = useCallback(
    (err: Error) => {
      // eslint-disable-next-line no-console
      console.error(err)
      error(getErrorMessage(interactionType, err))
    },
    [error, interactionType],
  )

  return useMemo(() => ({ onSuccess, onError }), [onSuccess, onError])
}
