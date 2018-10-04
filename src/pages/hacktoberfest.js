import React, { Component } from 'react'
import Layout from '../components/layout'
import Button from '../components/button'
import { getUser } from '../services/api'

import styles from './hacktoberfest.module.css'

class HacktoberfestPage extends Component {
  state = {
    user: null,
  }

  async componentDidMount() {
    const user = await getUser()
    this.setState({ user })
  }

  render() {
    const { user } = this.state
    return (
      <Layout
        mainTransparent={true}
        renderTop={() => (
          <>
            <div className={styles.bgCornerTop} />
            <div className={styles.saturn} />
          </>
        )}
      >
        <div className={styles.pageContent}>
          <section className={styles.section}>
            <h1 className={styles.sectionTitle}>
              Hacktoberfest{' '}
              <span className={styles.sectionTitleLight}>Globo.com</span>
            </h1>
            <h2 className={styles.sectionSubTitle}>
              Contribua e ganhe uma camiseta exclusiva
            </h2>

            {user ? (
              <div>
                <p>
                  Olá <strong>{user.Name}</strong>! Você está participando do
                  evento. Let's hack...
                </p>
                {/* <Button
                  label="verificar progresso"
                  url="/login"
                  transparent={true}
                /> */}
              </div>
            ) : (
              <div className={styles.sectionSubscribe}>
                <Button label="participe" url="/login" transparent={true} />
              </div>
            )}
          </section>

          <section className={styles.eventInfo}>
            <div className={styles.eventInfoLabel}>Regras</div>
            <div className={styles.eventInfoBody}>
              Contribua com 2 pull requests em qualquer projeto Open Source da
              Globo.com durante o mês de outubro. Os 100 primeiros inscritos que
              conseguirem os 2 pull requests e ao menos um ACEITO, ganharão uma
              camiseta exclusiva.
            </div>
            <p className={styles.eventInfoCall}>De 1 até 31 de outubro</p>
          </section>

          <section className={styles.eventInfo}>
            <div className={styles.eventInfoLabel}>Projetos</div>
            <div className={styles.eventInfoBody}>
              Pull requests podem ser feitos em qualquer projeto da globo.com.
            </div>
            <p className={styles.eventInfoCall}>
              <Button
                label="ver no github"
                url="https://github.com/search?q=label:hacktoberfest user:globocom user:tsuru user:thumbor user:clappr state:open type:issue"
                transparent={true}
              />
            </p>
          </section>

          <div className={styles.astronautRocket} />
        </div>
        <div className={styles.bgCornerBottom} />
      </Layout>
    )
  }
}

export default HacktoberfestPage
