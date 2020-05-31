import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Materi Lengkap</>,
    imageUrl: 'img/undraw_static_assets_rpm6.svg',
    description: (
      <>
        Materi disusun secara berjenjang agar mudah diikuti oleh para pemula maupun mereka yang sudah di tingkat menengah dan lanjutan.
      </>
    ),
  },
  {
    title: <>Tersedia Gratis</>,
    imageUrl: 'img/undraw_make_it_rain_iwk4.svg',
    description: (
      <>
        Buku ini tersedia Gratis bagi mereka yang memiliki niat besar untuk belajar.
      </>
    ),
  },
  {
    title: <>Kontribusi Komunitas</>,
    imageUrl: 'img/undraw_ideas_s70l.svg',
    description: (
      <>
        Kalian bersama dengan komunitas memiliki peluang untuk ikut berkontribusi dengan memperbaiki maupun menambah materi di dalam buku ini.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} loading="lazy"/>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
	const {siteConfig = {}} = context;

  return (
    <Layout
      title={`${siteConfig.title} | @mazipan`}
      description={`${siteConfig.tagline} | @mazipan`}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>

          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('/docs/01-11-pengantar')}>
              Mulai Baca Buku
            </Link>
          </div>

					<img src="img/cover-small.png"
						alt="Sampul Buku"
						loading="lazy"
						style={{
							marginTop: '1em',
							width: '300px',
							boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
							borderRadius: '5px'
						}}/>

        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
