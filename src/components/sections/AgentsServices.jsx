import { agentServices } from '../../data/services'

/**
 * AgentsServices — 3-column value proposition row matching Figma
 */
function AgentsServices() {
    return (
        <section className="agents-services" id="agents-services">
            <div className="agents-services__inner">

                <div className="agents-services__grid">
                    {agentServices.map((service) => (
                        <div className="agents-service-card" key={service.id}>
                            <span className="agents-service-card__number">{service.id}</span>
                            <h3 className="agents-service-card__title">{service.title}</h3>
                            <p className="agents-service-card__description">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default AgentsServices
