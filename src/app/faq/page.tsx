export default function Faq() {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Perguntas Frequentes (FAQ)</h2>

      <div className="accordion bg-body" id="faqAccordion">
        <div className="accordion-item bg-body">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
              O que é uma ONG?
            </button>
          </h2>
          <div id="faq1" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
            <div className="accordion-body ">
              Uma ONG é uma entidade privada, sem fins lucrativos, composta por pessoas que atuam
              em prol de causas sociais, ambientais, culturais, de saúde, educacionais e outras
              de interesse público, complementando ou fiscalizando ações governamentais.
            </div>
          </div>
        </div>

        <div className="accordion-item bg-body">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
              Como posso ajudar uma ONG?
            </button>
          </h2>
          <div id="faq2" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
            <div className="accordion-body ">
              Você pode doar, ser voluntário ou divulgar os projetos para ampliar o alcance das ações.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
