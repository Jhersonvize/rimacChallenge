import './CardTypePerson.scss';
import { useMemo, useState } from 'react';
import { useApiPlan } from '../../hooks/useApiPlan';
import { IPlanList } from '../../models/planModel';
import { CardPlanComponent } from '../card-plan/CardPlanComponent';
import { initialPersonTypeCard } from '../../utils/initialValues';

export const CardTypePerson = () => {
    useMemo(() => {
        initialPersonTypeCard.forEach(card => card.isActive = false)
    }, [])
    const [personTypeCard, setPersonTypeCard] = useState(initialPersonTypeCard);
    const { data, getData } = useApiPlan();
    const [dataCards, setDataCards] = useState<IPlanList[]>([]);
    const selectTypePerson = async (key: number) => {
        const nextPersonTypeCard = personTypeCard.map((card, i) => {
            if (key === i && !card.isActive) {
                card.isActive = true;
            } else {
                card.isActive = false;
            }
            return card;
        });
        setPersonTypeCard(nextPersonTypeCard);
        await getData();
        if (data?.current?.list) {
            setDataCards(data.current?.list);
        }
    };
    return (
        <>
            <section className="card-person-container">
                {personTypeCard.map((data, key) => {
                    return (
                        <article
                            className={
                                data.isActive
                                    ? 'card-person-container__card--active'
                                    : 'card-person-container__card'
                            }
                            onClick={() => selectTypePerson(key)}
                            key={key}
                        >
                            <input
                                type="checkbox"
                                className="card-person-container__checkbox"
                                checked={data.isActive}
                                readOnly
                                name="check"
                            />
                            <img src={data.img} alt="nada" />
                            <span>{data.person}</span>

                            <p>{data.description}</p>
                        </article>
                    );
                })}
            </section>
            {dataCards.length > 0 &&
                personTypeCard.some((data) => data.isActive === true) && (
                    <CardPlanComponent list={dataCards} />
                )}

        </>)
}
