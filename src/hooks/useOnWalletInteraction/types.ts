
export enum WalletErrorTypes {
  // APIError
  INVALID, // InvalidRequest - Inputs do not conform spec or are otherwise invalid
  INTERNAL, // InternalError - Error occurred during execution of this API call
  REFUSED, // Refused - The request was refused due to a lack of access
  ACCOUNT_CHANGED, // AccountChanged - The account has changed.

  // TxSignError & DataSignError
  PROOF_GENERATION, // ProofGeneration - User has accepted but signing failed
  ADDRESS_NOT_PK, // AddressNotPk - Address was not a P2PK address and thus not SK associated with it
  USER_DECLINED, // UserDeclined - User declined to sign the data

  // TxSendError
  SEND_REFUSED, // Wallet refused to send the tx (could be rate limiting)
  SEND_FAILED, // Wallet could not send the tx

  // Custom
  NO_COLLATERAL,
  INVALID_COLLATERAL,
  UNSUPPORTED_PROVIDER,
  INVALID_ORDER,
  SIGN_FAILED,
}

export class WalletError extends Error {
  readonly errorType: WalletErrorTypes

  readonly docsLink?: string

  readonly userMessage: string

  constructor(errorType: WalletErrorTypes, msg?: string) {
    super(msg)
    this.errorType = errorType

    switch (this.errorType) {
      case WalletErrorTypes.SEND_FAILED:
        this.userMessage = 'Your wallet could not submit the transaction! Please try again later.'
        break
      case WalletErrorTypes.SEND_REFUSED:
        this.userMessage = 'Your wallet declined to submit this transaction. Please try again later.'
        break
      case WalletErrorTypes.ACCOUNT_CHANGED:
        this.userMessage = 'Your account has changed, please reload the page & try again.'
        break
      case WalletErrorTypes.USER_DECLINED:
        this.userMessage = 'You canceled the transaction.'
        break
      case WalletErrorTypes.NO_COLLATERAL:
        this.userMessage = 'No collateral is set. For smart contract interactions you need a collateral!'
        this.docsLink = 'https://docs.muesliswap.com/cardano/cardano-wallets#3.-adding-collateral'
        break
      case WalletErrorTypes.INVALID_COLLATERAL:
        this.userMessage = 'There is an issue with your collateral. Please remove it and add it back again.'
        this.docsLink = 'https://docs.muesliswap.com/cardano/cardano-wallets#3.-adding-collateral'
        break
      case WalletErrorTypes.UNSUPPORTED_PROVIDER:
        this.userMessage =
          'We can not cancel this provider, as it is not know to us. Please contact the team with your order details.'
        break
      case WalletErrorTypes.INVALID_ORDER:
        this.userMessage = 'There is an issue with your order. Please contact the team with more details.'
        break
      default:
        this.docsLink = 'https://docs.muesliswap.com'
        this.userMessage = 'Something went wrong!\nPlease contact the team.'
        break
    }

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, WalletError.prototype)
  }

  getMessage() {
    return this.userMessage
  }

  getDocsLink() {
    return this.docsLink
  }
}

export enum WalletInteractions {
  ORDER_PLACING,
  ORDER_CANCELATION,
  ORDER_WITHDRAW,
  ORDER_CHANGE,

  STAKE,
  UNSTAKE,
  HARVEST,

  LIQUIDITY_ADD,
  LIQUIDITY_REMOVE,

  TRANSFORM_REQUEST,
  REDEEM_REQUEST,

  DELEGATE,
  UNDELEGATE,
}

export const SUBMITTED_INTERACTIONS = [
  WalletInteractions.ORDER_PLACING,
  WalletInteractions.ORDER_CANCELATION,
  WalletInteractions.ORDER_WITHDRAW,
  WalletInteractions.ORDER_CHANGE,

  WalletInteractions.LIQUIDITY_ADD,
  WalletInteractions.LIQUIDITY_REMOVE,
]

export interface SuccessMessage {
  txCbor?: string
  txHash?: string
  msg?: string
}