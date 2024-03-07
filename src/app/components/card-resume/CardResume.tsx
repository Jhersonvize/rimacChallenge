import './CardResume.scss'
import { useSelector } from 'react-redux';
import userIcon from '../../../assets/gl_family-24x24.svg';
import { IStateSelector } from '../../models/selectorModel';
import { IUser } from '../../models/userModel';
import { IPlanList } from '../../models/planModel';

export const CardResume = () => {
    const userState = useSelector<IStateSelector>((state) => state.user) as IUser;
    const planState = useSelector<IStateSelector>(
        (state) => state.plan
    ) as IPlanList;
    return (
        <article className="card-resume">
            <span>PRECIOS CALCULADOS PARA:</span>
            <div className="card-resume__user-info">
                <img src={userIcon} alt="" />
                <span>{userState.name + ' ' + userState.lastName}</span>
            </div>

            <hr />
            <span className="card-resume__title">Responsable de pago</span>
            <span className="card-resume__text">
                {userState.typeDocument + ': ' + userState.documentNumber}
            </span>
            <span className="card-resume__text">
                {'Celular: ' + userState.phoneNumber}
            </span>
            <br />
            <span className="card-resume__title">Plan elegido</span>
            <span className="card-resume__text">{planState.name}</span>
            <span className="card-resume__text">
                Costo del Plan ${planState.price} al mes
            </span>
        </article>
    )
}
