import React from 'react'
import roundIllustration from '../../ressource/round-illustration.svg'
import {ReactSVG } from 'react-svg';
import { Helmet } from 'react-helmet';


function Compta() {
  const hash = window.location.hash.substring(1);

  if (hash) {
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash).scrollIntoView();
      }, "500");
    }
  } else {
    window.scrollTo(0, 0);
  }

  return (
    <>
    <div>
      <Helmet>
        <title>Comptabilité générale | TMF Compta</title>
      </Helmet>
    </div>
      <div className='generic-banner generic-banner-compta'>
        <div className='text-box center-xy'>
          <h1 className='title-xl text-bold text-white-b300'>Comptabilité générale</h1>
        </div>
      </div>
      <div className='section'>
        <div className='container container-wheel'>
          <div className='text-box'>
            <p className='p-m'>Découvrez notre roue de services, votre passerelle vers une gestion comptable et financière optimale. Explorez les différentes sections en cliquant sur la roue et accédez à une expertise spécialisée dans les domaines clés.</p>
          </div>
          <div className='rounded-svg'>
            <ReactSVG  src={roundIllustration} alt="" />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='compta-grid-elem compta-grid-elem-left' id='section1'>
          <div className='compta-grid-elem-img' style={{backgroundImage : "url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80)"}}></div>
          <div className='compta-grid-elem-text'>
            <h2 className='title'>Conseil en <span className='text-prusian-blue-b300'>création</span> d'entreprise</h2>
            <p className='p-m'>Créez votre entreprise en toute confiance avec notre service de conseil spécialisé en création d'entreprise. Avec une grande expérience, nous vous accompagnons dans toutes les étapes de votre projet entrepreneurial, de la planification initiale à l'établissement des structures juridiques. Notre équipe expérimentée met à votre disposition son expertise approfondie pour vous aider à réaliser vos ambitions entrepreneuriales et à bâtir une entreprise solide et prospère.</p>
          </div>
        </div>
        <div className='compta-grid-elem compta-grid-elem-right' id='section2'>
          <div className='compta-grid-elem-text'>
            <h2 className='title'>Missions <span className='text-prusian-blue-b300'>spéciales</span></h2>
            <p className='p-m'>Nous excellons dans la réalisation de missions spéciales qui exigent une expertise comptable pointue. Que ce soit pour des audits approfondis, des évaluations financières précises ou des conseils en gestion fiscale, notre équipe expérimentée est prête à relever tous les défis. Avec une approche personnalisée et une attention méticuleuse aux détails, nous nous engageons à fournir des solutions sur mesure qui répondent aux besoins spécifiques de nos clients. Faites appel à notre savoir-faire pour des missions spéciales réussies.</p>
          </div>
          <div className='compta-grid-elem-img' style={{backgroundImage: "url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"}}></div>
        </div>
        <div className='compta-grid-elem compta-grid-elem-left' id='section3'>
          <div className='compta-grid-elem-img' style={{backgroundImage : "url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80)"}}></div>
          <div className='compta-grid-elem-text'>
            <h2 className='title'>Aide à la <span className='text-prusian-blue-b300'>gestion</span></h2>
            <p className='p-m'>Optimisez la gestion de votre entreprise grâce à notre service d'aide à la gestion. Nous travaillons en étroite collaboration avec vous pour comprendre vos objectifs, identifier les opportunités d'amélioration et mettre en place des stratégies efficaces. Que ce soit pour la gestion financière, la planification budgétaire, l'optimisation des processus ou la prise de décision éclairée, notre équipe compétente et expérimentée est là pour vous fournir les conseils et les outils dont vous avez besoin. Libérez votre potentiel de croissance avec notre expertise en gestion d'entreprise.</p>
          </div>
        </div>
        <div className='compta-grid-elem compta-grid-elem-right' id='section4'>
          <div className='compta-grid-elem-text'>
            <h2 className='title'><span className='text-prusian-blue-b300'>Accompagnement</span> de la personne</h2>
            <p className='p-m'>Nous offrons un accompagnement personnalisé pour vous aider à atteindre vos objectifs financiers et professionnels. Notre approche centrée sur la personne met l'accent sur le développement de vos compétences, la gestion de carrière et la réalisation de votre plein potentiel. Que vous ayez besoin de conseils en matière de gestion financière personnelle, de planification de la retraite ou de conseils pour les investissements, notre équipe dédiée est là pour vous guider à chaque étape du chemin. Profitez d'un accompagnement bienveillant et expert pour bâtir un avenir financier solide et épanouissant.</p>
          </div>
          <div className='compta-grid-elem-img' style={{backgroundImage: "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"}}></div>
        </div>
        <div className='compta-grid-elem compta-grid-elem-left' id='section5'>
          <div className='compta-grid-elem-img' style={{backgroundImage : "url(https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1147&q=80)"}}></div>
          <div className='compta-grid-elem-text'>
            <h2 className='title'><span className='text-prusian-blue-b300'>Social</span></h2>
            <p className='p-m'>Nos experts comptables sont là pour vous accompagner dans la compréhension des règles et réglementations relatives aux régimes de sécurité sociale, tels que les régimes de retraite et les régimes d'assurance-maladie. De plus, ils sont en mesure de vous éclairer sur les obligations légales liées à l'embauche et à la gestion des employés. Faites appel à nos services pour bénéficier de leur expertise et vous assurer d'une gestion efficace et conforme à toutes les exigences.</p>
          </div>
        </div>
        <div className='compta-grid-elem compta-grid-elem-right' id='section6'>
          <div className='compta-grid-elem-text'>
            <h2 className='title'>Conseil <span className='text-prusian-blue-b300'>fiscal</span></h2>
            <p className='p-m'>Obtenez une expertise fiscale solide grâce à notre service de conseil fiscal. Notre équipe hautement qualifiée vous accompagne dans la gestion optimale de vos obligations fiscales. Nous vous aidons à naviguer dans la complexité des lois fiscales, à identifier les opportunités d'optimisation et à minimiser les risques. Que vous ayez besoin de conseils en matière de déclarations fiscales, de planification successorale ou de structuration fiscale, nous sommes là pour vous fournir des solutions adaptées à votre situation spécifique. Faites confiance à notre savoir-faire en matière de conseil fiscal pour maximiser vos avantages fiscaux et assurer une conformité optimale.</p>
          </div>
          <div className='compta-grid-elem-img' style={{backgroundImage: "url(https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1126&q=80)"}}></div>
        </div>
        <div className='compta-grid-elem compta-grid-elem-left' id='section7'>
          <div className='compta-grid-elem-img' style={{backgroundImage : "url(https://plus.unsplash.com/premium_photo-1679922747473-f7210acb783e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)"}}></div>
          <div className='compta-grid-elem-text'>
            <h2 className='title'>Tenue de <span className='text-prusian-blue-b300'>comptabilité</span></h2>
            <p className='p-m'>Simplifiez la gestion de votre comptabilité grâce à notre service de tenue de comptabilité. Nous prenons en charge tous les aspects liés à votre comptabilité, des opérations quotidiennes à la préparation des états financiers. Avec notre expertise approfondie et notre souci du détail, nous veillons à ce que vos registres financiers soient précis, à jour et conformes aux normes comptables en vigueur. Vous pouvez ainsi vous concentrer sur le développement de votre entreprise en toute tranquillité d'esprit, sachant que vos données financières sont gérées de manière rigoureuse et professionnelle. Faites confiance à notre équipe compétente pour une tenue de comptabilité efficace et fiable.</p>
          </div>
        </div>
      </div>
    </>
  )
  
}

export default Compta