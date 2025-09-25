export default function Faq() {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Perguntas Frequentes (FAQ)</h2>

      <div className="accordion bg-body" id="faqAccordion">
        {/* Item 1 */}
        <div className="accordion-item bg-body">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
              O que é uma ONG?
            </button>
            {/* Aqui vem a label de pesquisa */}
          </h2>
          <div id="faq1" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
            <div className="accordion-body text-body">
              Uma ONG é uma entidade privada, sem fins lucrativos, composta por pessoas que atuam
              em prol de causas sociais, ambientais, culturais, de saúde, educacionais e outras
              de interesse público, complementando ou fiscalizando ações governamentais.
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="accordion-item bg-body">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
              Como posso ajudar uma ONG?
            </button>
          </h2>
          <div id="faq2" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
            <div className="accordion-body text-body">
              Você pode doar, ser voluntário ou divulgar os projetos para ampliar o alcance das ações.
              Algumas ONGs também precisam de apoio com serviços profissionais (ex.: jurídico, design, TI).
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="accordion-item bg-body">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
              Como eu entro em contato com uma ONG?
            </button>
          </h2>
          <div id="faq3" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
            <div className="accordion-body text-body">
              Acesse a página da ONG no nosso site e utilize o botão de contato (formulário, e-mail ou WhatsApp).
              Você também pode falar pelas redes sociais oficiais listadas no perfil de cada ONG.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
