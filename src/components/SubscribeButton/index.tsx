import styles from './styles.module.scss';

import { signIn, useSession } from "next-auth/react";

interface SubscribeButtonProps {
  priceId: string;
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const { data: session }= useSession()

  function handleSubscribe () {
    if (session) {
      signIn('github')
      return;
    }
  }

  return (
    <button type="button" className={styles.subscribeButton} onClick={handleSubscribe}>
      Subscribe now
    </button>
  )
}
