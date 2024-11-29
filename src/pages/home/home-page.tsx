import styles from './home-page.module.scss'

export const HomePage = () => {
  return (
    <div className={styles.main}>
      <h1>Это домашняя страница!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur at atque,
        distinctio doloribus ducimus eos exercitationem incidunt labore maiores non obcaecati odio
        provident quae quas sed tempora veniam vero?
      </p>
    </div>
  )
}
